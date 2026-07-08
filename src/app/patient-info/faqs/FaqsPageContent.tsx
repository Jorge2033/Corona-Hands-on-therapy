"use client";

import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import { PATIENT_QUICK_LINKS } from "@/lib/siteData";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./faqs.module.css";

export default function FaqsPageContent() {
  const { t } = useLanguage();
  return (
    <main className={styles.mainBackground}>
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Link href="/">{t.breadcrumb.home}</Link> » {t.breadcrumb.patientInformation} » {t.nav.faqs}
        </div>
      </div>

      <div className={styles.layoutContainer}>

        {/* COLUMNA IZQUIERDA */}
        <div className={styles.leftColumn}>
          <div className={styles.hero}>
            <h1 className={styles.title}>{t.patientFaqs.title}</h1>
            <p className={styles.intro}>
              {t.patientFaqs.introPrefix} <a href="tel:+13472299167">(347) 229-9167</a>.
            </p>
          </div>

          <div className={styles.contentSection}>
            <FaqAccordion items={t.generalFaqs} />
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <aside className={styles.sidebar}>
          <QuickLinksCard links={PATIENT_QUICK_LINKS} activeHref="/patient-info/faqs" />
          <PainFreeCta />
        </aside>

      </div>
    </main>
  );
}
