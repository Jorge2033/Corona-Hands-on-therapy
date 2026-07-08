"use client";

import { useState } from "react";
import { CloseIcon, ChatBubbleIcon, CalendarIcon, MailIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { AssistantAvatar } from "./WebChatBody";
import WebChatBody from "./WebChatBody";
import AppointmentBody from "./AppointmentBody";
import ContactBody from "./ContactBody";
import styles from "./Modal.module.css";
import chatStyles from "./WebChatModal.module.css";

type Tab = "webchat" | "appointment" | "contact";

export default function UnifiedModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>("webchat");

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        {tab === "webchat" ? (
          <div className={`${styles.header} ${chatStyles.chatHeader}`}>
            <div className={chatStyles.headerIdentity}>
              <AssistantAvatar size={34} className={chatStyles.headerAvatar} />
              <div className={chatStyles.headerText}>
                <span className={styles.headerTitle}>Vika</span>
                <span className={chatStyles.headerSubtitle}>
                  <span className={chatStyles.onlineDot} aria-hidden="true" />
                  {t.webchat.virtualAssistant}
                </span>
              </div>
            </div>
            <button className={styles.closeBtn} onClick={onClose} aria-label={t.modals.close}>
              <CloseIcon />
            </button>
          </div>
        ) : (
          <div className={styles.header}>
            <span className={styles.headerTitle}>
              {tab === "appointment" ? t.modals.requestAppointmentTitle : t.floatingActions.contactUs}
            </span>
            <button className={styles.closeBtn} onClick={onClose} aria-label={t.modals.close}>
              <CloseIcon />
            </button>
          </div>
        )}

        {tab === "webchat" && <WebChatBody />}
        {tab === "appointment" && <AppointmentBody />}
        {tab === "contact" && <ContactBody />}

        <div className={styles.tabBar}>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === "webchat" ? styles.tabBtnActive : ""}`}
            onClick={() => setTab("webchat")}
            aria-label={t.floatingActions.webChat}
          >
            <ChatBubbleIcon className={styles.tabIcon} />
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === "appointment" ? styles.tabBtnActive : ""}`}
            onClick={() => setTab("appointment")}
            aria-label={t.floatingActions.requestAppointment}
          >
            <CalendarIcon className={styles.tabIcon} />
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === "contact" ? styles.tabBtnActive : ""}`}
            onClick={() => setTab("contact")}
            aria-label={t.floatingActions.contactUs}
          >
            <MailIcon className={styles.tabIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
