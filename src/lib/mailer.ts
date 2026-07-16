import nodemailer from "nodemailer";
import MailComposer from "nodemailer/lib/mail-composer";

// ============================================================
// Envío de correo con dos vías, elegidas por variables de entorno.
//
// Contexto: el VPS (DigitalOcean) bloquea los puertos SMTP
// clásicos (25/465/587), así que Gmail por SMTP muere con
// ETIMEDOUT. Las dos salidas posibles:
//
// VÍA 1 — Gmail API por HTTPS (puerto 443, siempre abierto).
//   Usa la propia cuenta de Gmail de la clínica vía OAuth2.
//   Variables: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
//              GMAIL_REFRESH_TOKEN, MAIL_FROM_EMAIL, CONTACT_TO_EMAIL
//
// VÍA 2 — Relay SMTP en un puerto no bloqueado (p. ej. 2525),
//   o Gmail directo (587) si DigitalOcean desbloquea SMTP.
//   Variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS,
//              MAIL_FROM_EMAIL, CONTACT_TO_EMAIL
//
// Si ambas están configuradas, gana la Gmail API.
// ============================================================

const FROM_NAME = "Corona Hands-On Therapy Website";

export interface MailAttachment {
  filename: string;
  /** Contenido en base64 (sin prefijo data:) */
  content: string;
}

export interface MailMessage {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: MailAttachment[];
}

function gmailApiConfigured(): boolean {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GMAIL_REFRESH_TOKEN } = process.env;
  return Boolean(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET && GMAIL_REFRESH_TOKEN);
}

function smtpConfigured(): boolean {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  return Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS);
}

/** true si alguna vía de correo está completamente configurada. */
export function mailerReady(): boolean {
  const { MAIL_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!MAIL_FROM_EMAIL || !CONTACT_TO_EMAIL) return false;
  return gmailApiConfigured() || smtpConfigured();
}

/**
 * Envía el correo al buzón de la clínica (CONTACT_TO_EMAIL).
 * Lanza si el envío falla, para que la ruta lo capture y
 * devuelva el mensaje amable al paciente.
 */
export async function sendContactMail(msg: MailMessage): Promise<void> {
  if (gmailApiConfigured()) {
    await sendViaGmailApi(msg);
  } else {
    await sendViaSmtp(msg);
  }
}

// ------------------------------------------------------------
// VÍA 1: Gmail API (HTTPS)
// ------------------------------------------------------------

// Cachea el access token hasta poco antes de su expiración (~1 h)
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) return cachedToken.value;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID as string,
      client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
      refresh_token: process.env.GMAIL_REFRESH_TOKEN as string,
      grant_type: "refresh_token",
    }),
    signal: AbortSignal.timeout(15_000),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Gmail OAuth token error ${res.status}: ${detail.slice(0, 300)}`);
  }

  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    value: data.access_token,
    // 60 s de margen antes de la expiración real
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return data.access_token;
}

async function sendViaGmailApi(msg: MailMessage): Promise<void> {
  const { MAIL_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;

  // Componemos el MIME crudo con el mismo motor de nodemailer
  const composer = new MailComposer({
    from: `"${FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: msg.replyTo || undefined,
    subject: msg.subject,
    html: msg.html,
    attachments: msg.attachments?.length
      ? msg.attachments.map((a) => ({
          filename: a.filename,
          content: a.content,
          encoding: "base64",
        }))
      : undefined,
  });
  const raw: Buffer = await composer.compile().build();

  const token = await getAccessToken();

  // Endpoint de subida (hasta 35 MB): cubre currículums adjuntos grandes
  const res = await fetch(
    "https://gmail.googleapis.com/upload/gmail/v1/users/me/messages/send?uploadType=media",
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "message/rfc822",
      },
      body: new Uint8Array(raw),
      signal: AbortSignal.timeout(30_000),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Gmail API send error ${res.status}: ${detail.slice(0, 500)}`);
  }
}

// ------------------------------------------------------------
// VÍA 2: SMTP (relay en puerto abierto, o Gmail si se desbloquea)
// ------------------------------------------------------------

async function sendViaSmtp(msg: MailMessage): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM_EMAIL, CONTACT_TO_EMAIL } =
    process.env;

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // 465 = TLS implícito; 587/2525 = STARTTLS (secure: false + requireTLS)
    secure: port === 465,
    requireTLS: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    // Que un cuelgue del relay no deje la request abierta indefinidamente
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  });

  await transporter.sendMail({
    from: `"${FROM_NAME}" <${MAIL_FROM_EMAIL}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: msg.replyTo || undefined,
    subject: msg.subject,
    html: msg.html,
    attachments: msg.attachments?.length
      ? msg.attachments.map((a) => ({
          filename: a.filename,
          content: a.content,
          encoding: "base64" as const,
        }))
      : undefined,
  });
}
