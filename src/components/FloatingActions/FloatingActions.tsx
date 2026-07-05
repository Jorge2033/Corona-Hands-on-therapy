
import { SITE } from "@/lib/siteData";
import { MailIcon, ClockIcon, WhatsappIcon } from "@/components/icons/Icons";
import styles from "./FloatingActions.module.css";

// Botones flotantes fijos en la esquina inferior derecha.
// - Contact Us -> abre el cliente de correo con la dirección de la clínica
// - Request Appointment -> lleva al formulario de la sección #contact
// - Web Chat -> por ahora abre WhatsApp (no hay un chatbot real conectado
//   todavía; si en el futuro agregan uno, este link se reemplaza por el
//   trigger de ese widget)
export default function FloatingActions() {
  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi, I have a question for Corona Hands-On Therapy."
  )}`;

  return (
    <div className={styles.wrap} aria-label="Quick actions">
      <a href={`mailto:${SITE.email}`} className={styles.action}>
        <MailIcon className={styles.icon} />
        <span>Contact Us</span>
      </a>

      <a href="/#contact" className={styles.action}>
        <ClockIcon className={styles.icon} />
        <span>Request Appointment</span>
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.action}
      >
        <WhatsappIcon className={styles.icon} />
        <span>Web Chat</span>
      </a>
    </div>
  );
}