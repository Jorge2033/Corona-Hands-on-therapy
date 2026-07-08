"use client";

import { ShieldIcon, ClockIcon, BuildingIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  const { t } = useLanguage();
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.item}>
          <ShieldIcon className={styles.icon} />
          <span>{t.trustStrip.item1}</span>
        </div>
        <div className={styles.item}>
          <ClockIcon className={styles.icon} />
          <span>{t.trustStrip.item2}</span>
        </div>
        <div className={styles.item}>
          <BuildingIcon className={styles.icon} />
          <span>{t.trustStrip.item3}</span>
        </div>
      </div>
    </div>
  );
}