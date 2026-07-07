"use client";

import { useState, FormEvent } from "react";
import styles from "./referral.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ReferralForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      formType: "referral",
      fullName: String(data.get("referrerName") || ""),
      phone: String(data.get("referrerPhone") || ""),
      email: String(data.get("referrerEmail") || ""),
      friendName: String(data.get("friendName") || ""),
      friendPhone: String(data.get("friendPhone") || ""),
      notes: String(data.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/quick-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

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

  if (status === "success") {
    return (
      <div className={styles.card}>
        <h3>Referral received</h3>
        <p style={{ color: "var(--ink-soft)" }}>Thank you — our team will reach out to your friend directly.</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3>Referral Form</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.sectionLabel}>Your Information</div>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="referrerName">Your Name</label>
            <input type="text" id="referrerName" name="referrerName" placeholder="Jane Doe" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="referrerPhone">Your Phone</label>
            <input type="tel" id="referrerPhone" name="referrerPhone" placeholder="(347) 000-0000" required />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="referrerEmail">Your Email (optional)</label>
            <input type="email" id="referrerEmail" name="referrerEmail" placeholder="jane@example.com" />
          </div>
        </div>

        <div className={styles.sectionLabel}>Who You&apos;re Referring</div>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="friendName">Their Name</label>
            <input type="text" id="friendName" name="friendName" placeholder="Full name" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="friendPhone">Their Phone (if known)</label>
            <input type="tel" id="friendPhone" name="friendPhone" placeholder="(347) 000-0000" />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="notes">Notes (optional)</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Anything that would help us reach out, like what they're dealing with or the best time to contact them..."
            />
          </div>
        </div>

        {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

        <div style={{ marginTop: "24px" }}>
          <button type="submit" className="btn btn-gold" disabled={status === "sending"} style={{ width: "100%", padding: "14px" }}>
            {status === "sending" ? "Sending..." : "Send Referral"}
          </button>
        </div>
      </form>
    </div>
  );
}