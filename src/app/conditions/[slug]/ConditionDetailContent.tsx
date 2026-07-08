"use client";

import Link from "next/link";
import type { ConditionData } from "@/lib/conditionsData";
import { PATIENT_QUICK_LINKS } from "@/lib/siteData";
import { CheckIcon } from "@/components/icons/Icons";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { CONDITION_CONTENT_ES } from "@/lib/i18n/conditionContent";
import styles from "./condition.module.css";

export default function ConditionDetailContent({
  condition,
  related,
}: {
  condition: ConditionData;
  related: ConditionData[];
}) {
  const { t, language } = useLanguage();
  const localized = t.conditionsNav[condition.slug];
  const name = localized?.name ?? condition.name;
  const shortName = localized?.shortName ?? condition.shortName;
  const esContent = language === "es" ? CONDITION_CONTENT_ES[condition.slug] : undefined;
  const content = esContent ?? condition;

  const heroStyle = condition.heroImage
    ? { backgroundImage: `url(${condition.heroImage})` }
    : undefined;

  return (
    <main>
      {/* Hero de fondo completo con breadcrumb, igual que el resto del sitio de referencia */}
      <div
        className={`${styles.hero} ${!condition.heroImage ? styles.heroFallback : ""}`}
        style={heroStyle}
      >
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t.breadcrumb.home}</Link>
            <span aria-hidden="true">»</span>
            <Link href="/conditions">{t.breadcrumb.conditionsWeTreat}</Link>
            <span aria-hidden="true">»</span>
            <span aria-current="page">{name}</span>
          </nav>
          <h1 className={styles.heroTitle}>{name}</h1>
          <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
          <div className={styles.heroCtas}>
            <a href="/#contact" className="btn btn-gold">
              {t.conditionDetail.requestAnAppointment}
            </a>
            <Link href="/conditions" className={styles.heroGhostBtn}>
              {t.conditionDetail.allConditions}
            </Link>
          </div>
        </div>
      </div>

      {/* Cuerpo: contenido principal + barra lateral */}
      <section className={`container ${styles.body}`}>
        <div className={styles.layout}>
          <div className={styles.main}>
            {/* Overview */}
            <div>
              <h2 className={styles.h2}>
                {shortName} {t.conditionDetail.reliefWith}
              </h2>
              {content.overview.map((p, i) => (
                <p key={i} className={styles.paragraph}>
                  {p}
                </p>
              ))}
              <a href="/#contact" className={styles.inlineCta}>
                {t.conditionDetail.scheduleAppointment}
              </a>
            </div>

            {/* Symptoms + Causes */}
            <div className={styles.twoCol}>
              <div>
                <h2 className={styles.h2}>{t.conditionDetail.commonSymptoms}</h2>
                <ul className={styles.checkList}>
                  {content.symptoms.map((s) => (
                    <li key={s}>
                      <CheckIcon className={styles.checkIcon} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className={styles.h2}>{t.conditionDetail.whatCanCauseIt}</h2>
                <ul className={styles.checkList}>
                  {content.commonCauses.map((c) => (
                    <li key={c}>
                      <CheckIcon className={styles.checkIcon} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Treated vs untreated */}
            <div className={styles.twoCol}>
              <div className={styles.calloutGood}>
                <h3>{t.conditionDetail.ifTreatedEarly}</h3>
                <p>{content.ifTreatedEarly}</p>
              </div>
              <div className={styles.calloutWarn}>
                <h3>{t.conditionDetail.ifLeftUntreated}</h3>
                <p>{content.ifLeftUntreated}</p>
              </div>
            </div>

            {/* How we treat it */}
            <div>
              <h2 className={styles.h2}>
                {t.conditionDetail.howWeTreat} {shortName}
              </h2>
              <ul className={styles.numberedList}>
                {content.howWeTreatIt.map((step, i) => (
                  <li key={i}>
                    <span className={styles.numberBadge}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Condition-specific FAQs */}
            <div>
              <h2 className={styles.h2}>
                {t.conditionDetail.commonQuestionsAbout} {shortName}
              </h2>
              <div className={styles.faqBlock}>
                {content.faqs.map((f) => (
                  <div key={f.question} className={styles.faqItem}>
                    <div className={styles.faqQ}>{f.question}</div>
                    <div className={styles.faqA}>{f.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.aside}>
            <QuickLinksCard links={PATIENT_QUICK_LINKS} />

            <PainFreeCta />

            <div className={styles.asideCard}>
              <h4 className={styles.asideTitle}>{t.conditionDetail.relatedConditions}</h4>
              <ul className={styles.asideLinkList}>
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/conditions/${c.slug}`}>{t.conditionsNav[c.slug]?.shortName ?? c.shortName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA band */}
      <section className={styles.ctaBand}>
        <div className="container">
          <h2>
            {t.conditionDetail.ctaReady} {shortName.toLowerCase()}?
          </h2>
          <p>{t.conditionDetail.ctaLead}</p>
          <a href="/#contact" className="btn btn-gold">
            {t.conditionDetail.requestAnAppointment}
          </a>
        </div>
      </section>
    </main>
  );
}
