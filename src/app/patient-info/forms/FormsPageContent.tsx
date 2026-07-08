"use client";

import Link from "next/link";
import { SITE, PATIENT_QUICK_LINKS } from "@/lib/siteData";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./forms.module.css";

export default function FormsPageContent() {
  const { t } = useLanguage();
  return (
    <main className={styles.mainBackground} id="patient-top">
      {/* MIGA DE PAN / BREADCRUMB */}
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Link href="/">{t.breadcrumb.home}</Link> » {t.breadcrumb.patientInformation} » {t.patientForms.breadcrumbLabel}
        </div>
      </div>

      <div className={styles.layoutContainer}>
        {/* COLUMNA IZQUIERDA: CONTENIDO PRINCIPAL */}
        <div className={styles.leftColumn}>

          <div className={styles.hero}>
            <h1 className={styles.title}>{t.patientForms.welcomeTitle}</h1>
            <p className={styles.intro}>
              {t.patientForms.welcomeIntroPrefix} <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>. {t.patientForms.welcomeIntroSuffix}
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.sectionHeading}>{t.patientForms.formsHeading}</h2>
            <p className={styles.sectionSubtitle}>{t.patientForms.formsSubtitle}</p>

            {/* CARD DE DESCARGA */}
            <div className={styles.card}>
              <div className={styles.iconWrap}>
                <svg viewBox="0 0 24 24" fill="none" className={styles.icon} aria-hidden="true">
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path
                    d="M12 12v6M9 15l3 3 3-3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.cardBody}>
                <h3>{t.patientForms.intakeFormsTitle}</h3>
                <p>{t.patientForms.intakeFormsText}</p>
                <a href="/Documents/patient-intake-form.pdf" download className={styles.downloadBtn}>
                  {t.patientForms.downloadBtn}
                </a>
              </div>
            </div>

            {/* REQUISITOS ANTES DE LA VISITA */}
            <div className={styles.notesBlock} style={{ marginBottom: "35px" }}>
              <h3>{t.patientForms.prepareTitle}</h3>
              <ul>
                <li>{t.patientForms.prepare1}</li>
                <li>{t.patientForms.prepare2}</li>
                <li>{t.patientForms.prepare3}</li>
              </ul>
            </div>

            {/* SUBSECCIÓN FAQS (Con ID para el link del Sidebar) */}
            <div className={styles.notesBlock} id="faqs-section" style={{ marginBottom: "35px", paddingTop: "20px" }}>
              <h3>{t.patientForms.faqsTitle}</h3>
              <ul className={styles.faqsList}>
                <li>
                  <strong>{t.patientForms.faq1Q}</strong>
                  <p>{t.patientForms.faq1A}</p>
                </li>
                <li>
                  <strong>{t.patientForms.faq2Q}</strong>
                  <p>{t.patientForms.faq2A}</p>
                </li>
              </ul>
            </div>

            {/* SUBSECCIÓN CONDITIONS (Con ID para el link del Sidebar) */}
            <div className={styles.notesBlock} id="conditions-section" style={{ paddingTop: "20px" }}>
              <h3>{t.patientForms.firstVisitTitle}</h3>
              <ul>
                <li>{t.patientForms.firstVisit1}</li>
                <li>{t.patientForms.firstVisit2}</li>
                <li>{t.patientForms.firstVisit3}</li>
                <li>{t.patientForms.firstVisit4}</li>
              </ul>
              <p className={styles.disclaimer}>
                <strong>{t.patientForms.disclaimerLabel}</strong> {t.patientForms.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: SIDEBAR */}
        <aside className={styles.sidebar}>
          <QuickLinksCard links={PATIENT_QUICK_LINKS} activeHref="/patient-info/forms" />
          <PainFreeCta />
        </aside>
      </div>
    </main>
  );
}
