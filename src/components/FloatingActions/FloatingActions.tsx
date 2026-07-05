"use client";
import { useState } from "react";
import { MailIcon, ClockIcon, WhatsappIcon } from "@/components/icons/Icons";
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
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <>
      <div className={styles.wrap} aria-label="Quick actions">
        <button type="button" className={styles.action} onClick={() => setActiveModal("contact")}>
          <MailIcon className={styles.icon} />
          <span>Contact Us</span>
        </button>

        <button type="button" className={styles.action} onClick={() => setActiveModal("appointment")}>
          <ClockIcon className={styles.icon} />
          <span>Request Appointment</span>
        </button>

        <button type="button" className={styles.action} onClick={() => setActiveModal("webchat")}>
          <WhatsappIcon className={styles.icon} />
          <span>Web Chat</span>
        </button>
      </div>

      {activeModal === "contact" && <ContactModal onClose={() => setActiveModal(null)} />}
      {activeModal === "appointment" && <AppointmentModal onClose={() => setActiveModal(null)} />}
      {activeModal === "webchat" && <WebChatModal onClose={() => setActiveModal(null)} />}
    </>
  );
}