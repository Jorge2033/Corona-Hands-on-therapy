"use client";

import { useState, FormEvent } from "react";
import { CloseIcon, AssistantPersonIcon, PhoneIcon, MailIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Modal.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({ onClose }: { onClose: () => void }) {
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
          <span className={styles.headerTitle}>{t.floatingActions.contactUs}</span>
          <button className={styles.closeBtn} onClick={onClose} aria-label={t.modals.close}>
            <CloseIcon />
          </button>
        </div>

        <div className={styles.body}>
          {status === "success" ? (
            <div className={styles.successWrap}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.successIcon}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <h3>{t.modals.messageSentTitle}</h3>
              <p>{t.modals.messageSentText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="cm-name">{t.modals.name}</label>
                <div className={styles.fieldIconWrap}>
                  <AssistantPersonIcon className={styles.fieldIcon} />
                  <input id="cm-name" name="fullName" type="text" placeholder="Jane Doe" required />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="cm-phone">{t.modals.phone}</label>
                <div className={styles.fieldIconWrap}>
                  <PhoneIcon className={styles.fieldIcon} />
                  <input id="cm-phone" name="phone" type="tel" placeholder="(347) 000-0000" required />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="cm-email">{t.modals.email}</label>
                <div className={styles.fieldIconWrap}>
                  <MailIcon className={styles.fieldIcon} />
                  <input id="cm-email" name="email" type="email" placeholder="jane@example.com" />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="cm-message">{t.modals.message}</label>
                <textarea id="cm-message" name="message" placeholder={t.modals.messagePlaceholder} required />
              </div>

              {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === "sending"}>
                {status === "sending" ? t.contact.sending : t.modals.sendMessage}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}