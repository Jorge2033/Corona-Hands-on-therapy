"use client";

import { useState, FormEvent } from "react";
import { CAREER_ROLES } from "@/lib/siteData";
import styles from "./CareersForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      formType: "careers",
      fullName: String(data.get("fullName") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      role: String(data.get("role") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/quick-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please email us instead.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.card}>
        <h3>Application received</h3>
        <p>Thank you for your interest — our team will reach out if there&apos;s a fit.</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div className={styles.grid}>
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
            <input type="email" id="email" name="email" placeholder="jane@example.com" required />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="role">Role You&apos;re Interested In</label>
            <select id="role" name="role" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {CAREER_ROLES.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="message">Tell us about yourself</label>
            <textarea
              id="message"
              name="message"
              placeholder="Experience, licenses/certifications, and a link to your resume if you have one..."
              required
            />
          </div>
        </div>

        {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

        <button type="submit" className="btn btn-gold" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}