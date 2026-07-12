import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  isRateLimited,
  isSameOrigin,
  isBodyTooLarge,
  isEmailish,
  clamp,
  FIELD_LIMITS,
} from "@/lib/formSecurity";
import { saveSubmission } from "@/lib/db";

// Ruta genérica de correo para:
// - el modal "Contact Us" (formType: "contact")
// - el modal "Request Appointment" (formType: "appointment")
// - el formulario de /careers (formType: "careers")
// Reutiliza las mismas credenciales de Gmail que /api/contact.

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

type Body = Record<string, string>;

function isValidPayload(body: unknown): body is Body {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.formType === "string" &&
    typeof b.fullName === "string" &&
    b.fullName.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0
  );
}

const SUBJECT_BY_TYPE: Record<string, string> = {
  contact: "New quick contact message",
  appointment: "New appointment request (popup form)",
  careers: "New job application",
};

// Solo estos campos extra se aceptan y se copian al correo. Cualquier otra
// llave del JSON se ignora (evita correos gigantes con campos inventados).
const ALLOWED_EXTRA_FIELDS: Record<string, number> = {
  message: FIELD_LIMITS.long,
  notes: FIELD_LIMITS.long,
  preferredDate: FIELD_LIMITS.medium,
  preferredTime: FIELD_LIMITS.medium,
  caseType: FIELD_LIMITS.medium,
  role: FIELD_LIMITS.medium,
};

// Límite del currículum en base64 (~7.5 MB de archivo real).
const MAX_RESUME_BASE64_CHARS = 10 * 1024 * 1024;
const RESUME_EXTENSIONS = /\.(pdf|doc|docx)$/i;

// El body puede incluir un currículum en base64, por eso el límite alto.
// Formularios sin adjunto quedan igualmente cubiertos por los límites por campo.
const MAX_BODY_BYTES = 12 * 1024 * 1024;

export async function POST(req: NextRequest) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ ok: false, error: "Forbidden." }, { status: 403 });
  }
  if (isRateLimited(req)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later or call us." },
      { status: 429 }
    );
  }
  if (isBodyTooLarge(req, MAX_BODY_BYTES)) {
    return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name and phone number." },
      { status: 400 }
    );
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL } = process.env;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_TO_EMAIL) {
    console.error("Missing email environment variables.");
    return NextResponse.json(
      { ok: false, error: "This form isn't configured yet. Please call us instead." },
      { status: 500 }
    );
  }

  const formType = clamp(body.formType, FIELD_LIMITS.medium);
  const fullName = clamp(body.fullName.trim(), FIELD_LIMITS.short);
  const phone = clamp(body.phone.trim(), FIELD_LIMITS.short);
  const email = clamp((body.email || "").trim(), FIELD_LIMITS.short);

  if (email && !isEmailish(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const subject = SUBJECT_BY_TYPE[formType] || "New website message";

  // Solo los campos de la whitelist llegan al correo, ya recortados y escapados.
  const extraRows = Object.entries(ALLOWED_EXTRA_FIELDS)
    .filter(([key]) => typeof body[key] === "string" && body[key])
    .map(
      ([key, max]) =>
        `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(clamp(body[key], max)).replace(/\n/g, "<br>")}</p>`
    )
    .join("");

  // Currículum (solo formulario de careers): viaja como adjunto real,
  // nunca dentro del cuerpo del correo.
  const attachments: { filename: string; content: string; encoding: "base64" }[] = [];
  if (formType === "careers" && typeof body.resume === "string" && body.resume) {
    const resume = body.resume;
    if (resume.length > MAX_RESUME_BASE64_CHARS) {
      return NextResponse.json(
        { ok: false, error: "Resume file is too large (7 MB max)." },
        { status: 413 }
      );
    }
    if (!/^[A-Za-z0-9+/=\r\n]+$/.test(resume)) {
      return NextResponse.json({ ok: false, error: "Invalid resume file." }, { status: 400 });
    }
    // Nombre del archivo saneado: solo el nombre base, extensión permitida.
    const rawName = typeof body.resumeName === "string" ? body.resumeName : "";
    const baseName = rawName.split(/[/\\]/).pop() || "";
    const safeName = baseName.replace(/[^\w.\-() ]/g, "").slice(0, 120);
    const filename = RESUME_EXTENSIONS.test(safeName) ? safeName : "resume.pdf";
    attachments.push({ filename, content: resume, encoding: "base64" });
  }

  // Guarda el envío cifrado en la base de datos ANTES de intentar el correo,
  // así el dato nunca se pierde aunque Gmail falle. El currículum adjunto no
  // se almacena (solo su nombre); llega por correo.
  const toStore: Record<string, string> = { fullName, phone, email };
  for (const key of Object.keys(ALLOWED_EXTRA_FIELDS)) {
    if (typeof body[key] === "string" && body[key]) {
      toStore[key] = clamp(body[key], ALLOWED_EXTRA_FIELDS[key]);
    }
  }
  if (attachments.length > 0) toStore.resumeName = attachments[0].filename;
  saveSubmission(formType, toStore);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  const html = `
    <h2>${escapeHtml(subject)}</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
    ${extraRows}
  `;

  try {
    await transporter.sendMail({
      from: `"Corona Hands-On Therapy Website" <${GMAIL_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email || undefined,
      subject: `${subject} — ${fullName}`,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending quick-contact email:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please call us instead." },
      { status: 500 }
    );
  }
}
