"use client";
import { useState } from "react";
import { MailIcon, ClockIcon, AssistantPersonIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ContactModal from "./ContactModal";
import AppointmentModal from "./AppointmentModal";
import WebChatModal from "./WebChatModal";
import styles from "./FloatingActions.module.css";

type ModalType = "contact" | "appointment" | "webchat" | null;

// Botones flotantes fijos en la esquina inferior derecha.
// Los 3 abren una ventana emergente (modal) en la misma página:
// - Contact Us -> formulario corto que manda un correo real
// - Request Appointment -> formulario más completo que manda un correo real
// - Web Chat -> bot de preguntas guiadas (no es WhatsApp ni IA real)
export default function FloatingActions() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <>
      <div className={styles.wrap} aria-label="Quick actions">
        <button type="button" className={styles.action} onClick={() => setActiveModal("contact")}>
          <span className={styles.iconCircle}>
            <MailIcon className={styles.icon} />
          </span>
          <span>{t.floatingActions.contactUs}</span>
        </button>

        <button type="button" className={styles.action} onClick={() => setActiveModal("appointment")}>
          <span className={styles.iconCircle}>
            <ClockIcon className={styles.icon} />
          </span>
          <span>{t.floatingActions.requestAppointment}</span>
        </button>

        <button type="button" className={`${styles.action} ${styles.actionHighlight}`} onClick={() => setActiveModal("webchat")}>
          <span className={styles.iconCircle}>
            <AssistantPersonIcon className={styles.icon} />
          </span>
          <span>{t.floatingActions.webChat}</span>
        </button>
      </div>

      {activeModal === "contact" && <ContactModal onClose={() => setActiveModal(null)} />}
      {activeModal === "appointment" && <AppointmentModal onClose={() => setActiveModal(null)} />}
      {activeModal === "webchat" && <WebChatModal onClose={() => setActiveModal(null)} />}
    </>
  );
}