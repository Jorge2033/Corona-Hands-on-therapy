"use client";

import { useState, FormEvent } from "react";
import { CloseIcon } from "@/components/icons/Icons";
import styles from "./Modal.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      formType: "contact",
      fullName: String(data.get("fullName") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
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
          <span className={styles.headerTitle}>Contact Us</span>
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
              <h3>Message sent</h3>
              <p>Thanks for reaching out — we&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="cm-name">Name</label>
                <input id="cm-name" name="fullName" type="text" placeholder="Jane Doe" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="cm-phone">Phone</label>
                <input id="cm-phone" name="phone" type="tel" placeholder="(347) 000-0000" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="cm-email">Email</label>
                <input id="cm-email" name="email" type="email" placeholder="jane@example.com" />
              </div>
              <div className={styles.field}>
                <label htmlFor="cm-message">Message</label>
                <textarea id="cm-message" name="message" placeholder="Type your message here" required />
              </div>

              {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}