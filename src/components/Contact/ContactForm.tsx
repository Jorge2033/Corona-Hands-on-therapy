"use client";

import { useState, FormEvent } from "react";
import { CASE_TYPES, SERVICES } from "@/lib/siteData";
import type { ContactApiResponse } from "@/lib/types";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("fullName") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      caseType: String(data.get("caseType") || ""),
      serviceNeeded: String(data.get("serviceNeeded") || ""),
      notes: String(data.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: ContactApiResponse = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please call us instead.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  // ==========================================
  // VISTA DE ÉXITO: ya no usa .formCard (sin rectángulo
  // blanco completo). .successOuter solo reserva el
  // espacio en el layout; .successCard es la píldora
  // redondeada que se ajusta al check + título + texto.
  // ==========================================
  if (status === "success") {
    return (
      <div className={styles.successOuter}>
        <div className={styles.successCard}>
          <div className={styles.successIconCircle}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Request received</h3>
          <p className={styles.successText}>
            Thank you — we&apos;ve received your appointment request and will call you
            shortly to confirm.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <h3>Request an Appointment</h3>
      <p>Fill out the form and our team will call to confirm your visit.</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Jane Doe" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="(347) 000-0000" required />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="jane@example.com" />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="caseType">Case Type</label>
            <select id="caseType" name="caseType" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {CASE_TYPES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="serviceNeeded">Service Needed</label>
            <select id="serviceNeeded" name="serviceNeeded" defaultValue="">
              <option value="">Select one</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="notes">Notes (optional)</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Briefly describe your injury or preferred appointment time..."
            />
          </div>
        </div>

        {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

        <button type="submit" className={`btn btn-gold ${styles.submitBtn}`} disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit Appointment Request"}
        </button>
        <p className={styles.formNote}>
          By submitting, you agree to our <a href="#">Privacy Policy</a>. Your
          information is never shared or sold.
        </p>
      </form>
    </div>
  );
}