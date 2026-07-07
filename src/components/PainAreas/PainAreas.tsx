"use client";

import Link from "next/link";
import { PAIN_AREAS } from "@/lib/siteData";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./PainAreas.module.css";
import Image from 'next/image';

export default function PainAreas() {
  const { t } = useLanguage();
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          {t.painAreas.title} <span>{t.painAreas.titleEm}</span>
        </h2>
        <p className={styles.lead}>{t.painAreas.lead}</p>
      </div>

      <div className={styles.grid}>
        {PAIN_AREAS.map((area) => {
          const label = t.painAreas.labels[area.label] ?? area.label;
          return (
            /* Usamos area.label como key única */
            <Link
              key={area.label}
              href={`/conditions/${area.slug}`}
              className={styles.item}
              aria-label={`Learn more about ${label} treatment`}
            >
              <div className={styles.iconCircle}>
                <Image
                  src={area.image} // RUTA DINÁMICA
                  alt={label}
                  width={100}
                  height={100}
                  className={styles.icon}
                />
              </div>
              <span className={styles.label}>{label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}