import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactFormPayload } from "@/lib/types";
import { CASE_TYPES, SERVICES } from "@/lib/siteData";

// Esta ruta corre en el servidor (Vercel serverless function), nunca en el navegador.
// Las credenciales de Gmail viven solo en variables de entorno, nunca en el código.

function labelForCaseType(value: string) {
  return CASE_TYPES.find((c) => c.value === value)?.label || value || "Not specified";
}

function labelForService(value: string) {
  if (!value) return "Not specified";
  if (value === "not-sure") return "Not sure yet";
  return SERVICES.find((s) => s.id === value)?.name || value;
}

function isValidPayload(body: unknown): body is ContactFormPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.fullName === "string" &&
    b.fullName.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.caseType === "string" &&
    b.caseType.trim().length > 0
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, phone number, and case type." },
      { status: 400 }
    );
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL } = process.env;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_TO_EMAIL) {
    console.error("Missing email environment variables.");
    return NextResponse.json(
      { ok: false, error: "The contact form isn't configured yet. Please call us instead." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const { fullName, phone, email, caseType, serviceNeeded, notes } = body;

  const html = `
    <h2>New appointment request — Corona Hands-On Therapy website</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
    <p><strong>Case type:</strong> ${escapeHtml(labelForCaseType(caseType))}</p>
    <p><strong>Service needed:</strong> ${escapeHtml(labelForService(serviceNeeded || ""))}</p>
    <p><strong>Notes:</strong><br>${escapeHtml(notes || "None").replace(/\n/g, "<br>")}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Corona Hands-On Therapy Website" <${GMAIL_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email && email.trim() ? email : undefined,
      subject: `New appointment request from ${fullName}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request. Please call us instead." },
      { status: 500 }
    );
  }
}

// Escapa HTML básico para evitar inyección en el correo generado.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
