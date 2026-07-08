import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

export async function POST(req: NextRequest) {
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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  const { formType, fullName, phone, email } = body;
  const subject = SUBJECT_BY_TYPE[formType] || "New website message";

  // Arma el cuerpo del correo con cualquier campo adicional recibido
  // (message, date, time, caseType, role, etc.) sin necesitar un tipo fijo por formulario.
  const knownKeys = new Set(["formType", "fullName", "phone", "email"]);
  const extraRows = Object.entries(body)
    .filter(([key, value]) => !knownKeys.has(key) && value)
    .map(([key, value]) => `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value).replace(/\n/g, "<br>")}</p>`)
    .join("");

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
      replyTo: email && email.trim() ? email : undefined,
      subject: `${subject} — ${fullName}`,
      html,
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