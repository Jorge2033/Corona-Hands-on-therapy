"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Sidebar.module.css";

export default function PainFreeCta() {
  const { t } = useLanguage();
  return (
    <div className={styles.ctaCard}>
      <div className={styles.ctaOverlay}>
        <h4>{t.sidebar.painFreeTitle}</h4>
        <a href="/#contact" className={styles.ctaBtn}>
          {t.floatingActions.requestAppointment}
        </a>
      </div>
    </div>
  );
}
