"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import UnifiedModal from "./UnifiedModal";
import styles from "./FloatingActions.module.css";

// Botón flotante único fijo en la esquina inferior derecha.
// Al abrirse muestra un panel con 3 pestañas (Web Chat / Request Appointment /
// Contact Us) que se pueden alternar sin cerrar el panel.
export default function FloatingActions() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.wrap} aria-label="Quick actions">
        <button type="button" className={styles.launcher} onClick={() => setOpen(true)} aria-label={t.floatingActions.webChat}>
          <span className={styles.avatarCircle}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/assistant-avatar.png" alt="" className={styles.avatarImg} />
            <span className={styles.onlineDot} aria-hidden="true" />
          </span>
        </button>
      </div>

      {open && <UnifiedModal onClose={() => setOpen(false)} />}
    </>
  );
}
