"use client";

import { useState, FormEvent } from "react";
import { CASE_TYPES } from "@/lib/siteData";
import {
  AssistantPersonIcon,
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  ClockIcon,
  ClipboardIcon,
} from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Modal.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function AppointmentBody() {
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
    <div className={styles.body}>
      {status === "success" ? (
        <div className={styles.successWrap}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.successIcon}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <h3>{t.modals.appointmentReceivedTitle}</h3>
          <p>{t.modals.appointmentReceivedText}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="am-name">{t.modals.name}</label>
            <div className={styles.fieldIconWrap}>
              <AssistantPersonIcon className={styles.fieldIcon} />
              <input id="am-name" name="fullName" type="text" placeholder="Jane Doe" required />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="am-email">{t.modals.email}</label>
            <div className={styles.fieldIconWrap}>
              <MailIcon className={styles.fieldIcon} />
              <input id="am-email" name="email" type="email" placeholder="jane@example.com" />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="am-phone">{t.modals.phone}</label>
            <div className={styles.fieldIconWrap}>
              <PhoneIcon className={styles.fieldIcon} />
              <input id="am-phone" name="phone" type="tel" placeholder="(347) 000-0000" required />
            </div>
          </div>

          <div className={styles.grid2}>
            <div className={styles.field}>
              <label htmlFor="am-date">{t.modals.preferredDate}</label>
              <div className={styles.fieldIconWrap}>
                <CalendarIcon className={styles.fieldIcon} />
                <input id="am-date" name="preferredDate" type="date" required />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="am-time">{t.modals.preferredTime}</label>
              <div className={styles.fieldIconWrap}>
                <ClockIcon className={styles.fieldIcon} />
                <input id="am-time" name="preferredTime" type="time" required />
              </div>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="am-case">{t.modals.caseType}</label>
            <div className={styles.fieldIconWrap}>
              <ClipboardIcon className={styles.fieldIcon} />
              <select id="am-case" name="caseType" required defaultValue="">
                <option value="" disabled>
                  {t.modals.selectOne}
                </option>
                {CASE_TYPES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {t.contact.caseTypes[c.value] ?? c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="am-notes">{t.modals.additionalComments}</label>
            <textarea id="am-notes" name="notes" placeholder={t.modals.additionalCommentsPlaceholder} />
          </div>

          {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === "sending"}>
            {status === "sending" ? t.contact.sending : t.modals.requestAppointmentBtn}
          </button>
        </form>
      )}
    </div>
  );
}
