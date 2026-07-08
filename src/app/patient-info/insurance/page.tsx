"use client"; // <--- Esto soluciona el error habilitando la interactividad del lado del cliente

import type { Metadata } from "next"; // Nota: Si exportas metadatos estáticos en Next.js App Router, deben ir en un archivo layout o remover el tipo si da conflicto en modo "use client"
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { INSURANCE_CATEGORIES, TOTAL_INSURANCE_COUNT } from "@/lib/insuranceData";
import { PATIENT_QUICK_LINKS } from "@/lib/siteData";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./insurance.module.css";

// Helper para limpiar el nombre y armar la búsqueda en Google
function getInsuranceUrl(name: string): string {
  const cleanName = encodeURIComponent(name.replace(/\s*\(.*?\)\s*/g, "").trim());
  return `https://www.google.com/search?q=${cleanName}+official+website&btnI=I%27m+Feeling+Lucky`;
}

// Helper para adivinar dominios limpios para los favicons
function getFallbackFavicon(name: string): string {
  let domain = "google.com";
  const normalized = name.toLowerCase();

  if (normalized.includes("aetna")) domain = "aetna.com";
  else if (normalized.includes("cigna")) domain = "cigna.com";
  else if (normalized.includes("unitedhealthcare") || normalized.includes("uhc")) domain = "uhc.com";
  else if (normalized.includes("bluecross")) domain = "bluecross.com";
  else if (normalized.includes("oxford")) domain = "oxfordhealth.com";
  else if (normalized.includes("emblem") || normalized.includes("ghi")) domain = "emblemhealth.com";
  else if (normalized.includes("fidelis")) domain = "fideliscare.org";
  else if (normalized.includes("geico")) domain = "geico.com";
  else if (normalized.includes("state farm")) domain = "statefarm.com";
  else if (normalized.includes("progressive")) domain = "progressive.com";
  else if (normalized.includes("allstate")) domain = "allstate.com";
  else if (normalized.includes("travelers")) domain = "travelers.com";
  else if (normalized.includes("hartford")) domain = "thehartford.com";
  else if (normalized.includes("medicare")) domain = "medicare.gov";
  else {
    const firstWord = normalized.split(" ")[0].replace(/[^a-z0-9]/g, "");
    domain = `${firstWord}.com`;
  }

  return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
}

export default function InsurancePlansPage() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <main>
        <div className={styles.breadcrumbContainer}>
          <div className={`container ${styles.breadcrumb}`}>
            <Link href="/">{t.breadcrumb.home}</Link> » {t.breadcrumb.patientInformation} » {t.insurance.breadcrumbLabel}
          </div>
        </div>

        <div className={`container ${styles.pageGrid}`}>
          <div className={styles.mainCol}>
            <div className={styles.hero}>

              <h1 className={styles.title}>{t.insurance.title}</h1>
              <p className={styles.intro}>{t.insurance.intro}</p>
              <div className={styles.disclaimer}>
                <strong>{t.insurance.disclaimerLabel}</strong> {t.insurance.disclaimer}
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>{t.insurance.card1Title}</h3>
                  <p>{t.insurance.card1Text}</p>
                </div>
                <div className={styles.infoCard}>
                  <h3>{t.insurance.card2Title}</h3>
                  <p>{t.insurance.card2Text}</p>
                </div>
                <div className={styles.infoCard}>
                  <h3>{t.insurance.card3Title}</h3>
                  <p>{t.insurance.card3Text}</p>
                </div>
                <div className={`${styles.infoCard} ${styles.noInsuranceCard}`}>
                  <h3>{t.insurance.card4Title}</h3>
                  <p>{t.insurance.card4Text}</p>
                </div>
              </div>
            </div>

            <div className={styles.plansSection}>
              <h2 className={styles.listTitle}>
                {t.insurance.plansTitle} ({TOTAL_INSURANCE_COUNT}+)
              </h2>

              {INSURANCE_CATEGORIES.map((cat) => (
                <div key={cat.category} className={styles.categoryBlock}>
                  <h3 className={styles.categoryTitle}>{t.insurance.categories[cat.category] ?? cat.category}</h3>
                  <div className={styles.planGrid}>
                    {cat.plans.map((plan) => {
                      const targetUrl = getInsuranceUrl(plan);
                      const faviconUrl = getFallbackFavicon(plan);

                      return (
                        <a
                          key={plan}
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.planChip}
                          title={`Visit official website for ${plan}`}
                        >
                          <img
                            src={faviconUrl}
                            alt=""
                            className={styles.planLogo}
                            onError={(e) => {
                              // Ahora se ejecutará de forma segura en el cliente si una imagen falla
                              (e.target as HTMLImageElement).src = "https://www.google.com/favicon.ico";
                            }}
                          />
                          <span>{plan}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}

              <p className={styles.footNote}>
                {t.insurance.footNotePrefix} <a href="tel:+13472299167">(347) 229-9167</a> {t.insurance.footNoteSuffix}
              </p>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <QuickLinksCard links={PATIENT_QUICK_LINKS} activeHref="/patient-info/insurance" />
            <PainFreeCta />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}