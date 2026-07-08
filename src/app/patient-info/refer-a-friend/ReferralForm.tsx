"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./referral.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ReferralForm() {
  const { t } = useLanguage();
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
        <h3>{t.referral.receivedTitle}</h3>
        <p style={{ color: "var(--ink-soft)" }}>{t.referral.receivedText}</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h3>{t.referral.formTitle}</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.sectionLabel}>{t.referral.yourInfo}</div>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="referrerName">{t.referral.yourName}</label>
            <input type="text" id="referrerName" name="referrerName" placeholder="Jane Doe" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="referrerPhone">{t.referral.yourPhone}</label>
            <input type="tel" id="referrerPhone" name="referrerPhone" placeholder="(347) 000-0000" required />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="referrerEmail">{t.referral.yourEmail}</label>
            <input type="email" id="referrerEmail" name="referrerEmail" placeholder="jane@example.com" />
          </div>
        </div>

        <div className={styles.sectionLabel}>{t.referral.whoReferring}</div>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="friendName">{t.referral.theirName}</label>
            <input type="text" id="friendName" name="friendName" placeholder="Full name" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="friendPhone">{t.referral.theirPhone}</label>
            <input type="tel" id="friendPhone" name="friendPhone" placeholder="(347) 000-0000" />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="notes">{t.referral.notes}</label>
            <textarea
              id="notes"
              name="notes"
              placeholder={t.referral.notesPlaceholder}
            />
          </div>
        </div>

        {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

        <div style={{ marginTop: "24px" }}>
          <button type="submit" className="btn btn-gold" disabled={status === "sending"} style={{ width: "100%", padding: "14px" }}>
            {status === "sending" ? t.referral.sending : t.referral.send}
          </button>
        </div>
      </form>
    </div>
  );
}