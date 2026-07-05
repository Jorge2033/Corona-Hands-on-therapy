"use client";

import { useState, FormEvent } from "react";
import { CASE_TYPES } from "@/lib/siteData";
import { CloseIcon } from "@/components/icons/Icons";
import styles from "./Modal.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function AppointmentModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      formType: "appointment",
      fullName: String(data.get("fullName") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      preferredDate: String(data.get("preferredDate") || ""),
      preferredTime: String(data.get("preferredTime") || ""),
      caseType: String(data.get("caseType") || ""),
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

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.headerTitle}>Request Appointment</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className={styles.body}>
          {status === "success" ? (
            <div className={styles.successWrap}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.successIcon}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <h3>Request received</h3>
              <p>We&apos;ll call you shortly to confirm your appointment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="am-name">Name</label>
                <input id="am-name" name="fullName" type="text" placeholder="Jane Doe" required />
              </div>

              <div className={styles.grid2}>
                <div className={styles.field}>
                  <label htmlFor="am-email">Email</label>
                  <input id="am-email" name="email" type="email" placeholder="jane@example.com" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="am-phone">Phone</label>
                  <input id="am-phone" name="phone" type="tel" placeholder="(347) 000-0000" required />
                </div>
              </div>

              <div className={styles.grid2}>
                <div className={styles.field}>
                  <label htmlFor="am-date">Preferred Date</label>
                  <input id="am-date" name="preferredDate" type="date" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="am-time">Preferred Time</label>
                  <input id="am-time" name="preferredTime" type="time" required />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="am-case">Case Type</label>
                <select id="am-case" name="caseType" required defaultValue="">
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

              <div className={styles.field}>
                <label htmlFor="am-notes">Additional Comments</label>
                <textarea id="am-notes" name="notes" placeholder="Anything else we should know?" />
              </div>

              {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Request Appointment"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}