"use client";

import Link from "next/link";
import Team from "@/components/Team/Team";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./team.module.css";

export default function TeamPageContent() {
  const { t } = useLanguage();
  return (
    <main className={styles.main}>
      <div className={styles.breadcrumbContainer}>
        <div className={`container ${styles.breadcrumb}`}>
          <Link href="/">{t.breadcrumb.home}</Link>
          <span aria-hidden="true">»</span>
          <span aria-current="page">{t.breadcrumb.ourTeam}</span>
        </div>
      </div>

      {/* Sección Hero Ampliada y Centrada */}
      <div className={styles.hero}>
        <h1 className={styles.title}>{t.team.title}</h1>
        <p className={styles.intro}>{t.team.intro}</p>
      </div>

      {/* Cuadrícula del equipo con un contenedor alineado */}
      <div className={styles.teamSection}>
        <Team />
      </div>
    </main>
  );
}
