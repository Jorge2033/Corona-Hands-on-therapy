"use client"; // <--- Esto soluciona el error habilitando la interactividad del lado del cliente

import type { Metadata } from "next"; // Nota: Si exportas metadatos estáticos en Next.js App Router, deben ir en un archivo layout o remover el tipo si da conflicto en modo "use client"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { INSURANCE_CATEGORIES, TOTAL_INSURANCE_COUNT } from "@/lib/insuranceData";
import { PATIENT_QUICK_LINKS } from "@/lib/siteData";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
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
  return (
    <>
      <Header />
      <main>
        <div className={styles.breadcrumbContainer}>
          <div className={`container ${styles.breadcrumb}`}>
            Home » Patient Information » Insurance Plans
          </div>
        </div>

        <div className={`container ${styles.pageGrid}`}>
          <div className={styles.mainCol}>
            <div className={styles.hero}>
              
              <h1 className={styles.title}>Insurance we commonly work with.</h1>
              <p className={styles.intro}>
                Understanding your insurance coverage shouldn&apos;t be complicated. Below is a
                list of insurance types and carriers we commonly work with for auto
                accident, work injury, home accident, and general health insurance cases in
                the Elmhurst area.
              </p>
              <div className={styles.disclaimer}>
                <strong>Please note:</strong> insurance networks and coverage change often.
                This list reflects plans we commonly work with in our area — it doesn&apos;t
                guarantee coverage for every policy under a given carrier. Please call our
                front desk at least once before your visit so we can verify your specific
                plan and benefits.
              </div>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Why verifying your insurance matters</h3>
                  <p>
                    Every plan is different — even two people with the same insurance
                    company can have different deductibles, copays, or authorization
                    requirements. Verifying your specific policy before treatment helps
                    avoid surprise bills and lets us build a treatment plan around what
                    your plan actually covers.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Auto accident &amp; work injury claims</h3>
                  <p>
                    Auto accident and work injury cases are usually billed directly to the
                    insurance carrier or claims adjuster handling your case rather than
                    through a standard health insurance copay. Bring your claim number and
                    adjuster information if you have it, and our billing team will handle
                    the rest.
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>What to bring</h3>
                  <p>
                    Your insurance card, a photo ID, and — for accident or injury cases —
                    any paperwork you&apos;ve received related to your claim, such as a claim
                    number or adjuster contact information.
                  </p>
                </div>
                <div className={`${styles.infoCard} ${styles.noInsuranceCard}`}>
                  <h3>What if I don&apos;t have insurance?</h3>
                  <p>
                    Don&apos;t worry! We offer affordable self-pay rates and flexible payment
                    options so you can focus on your recovery without barriers. Contact
                    our front desk to discuss custom packages or pricing tailored to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.plansSection}>
              <h2 className={styles.listTitle}>
                Plans &amp; Carriers We Commonly Work With ({TOTAL_INSURANCE_COUNT}+)
              </h2>

              {INSURANCE_CATEGORIES.map((cat) => (
                <div key={cat.category} className={styles.categoryBlock}>
                  <h3 className={styles.categoryTitle}>{cat.category}</h3>
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
                Don&apos;t see your plan listed? Call us at{" "}
                <a href="tel:+13472299167">(347) 229-9167</a> — we work with many plans not
                listed here and can quickly confirm whether we&apos;re in-network for you.
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