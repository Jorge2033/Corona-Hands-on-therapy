import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CONDITIONS, getConditionBySlug } from "@/lib/conditionsData";
import { CheckIcon } from "@/components/icons/Icons";
import styles from "./condition.module.css";

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const condition = getConditionBySlug(params.slug);
  if (!condition) return {};
  return {
    title: `${condition.name} | Corona Hands-On Therapy`,
    description: condition.heroSubtitle,
  };
}

export default function ConditionPage({ params }: { params: { slug: string } }) {
  const condition = getConditionBySlug(params.slug);
  if (!condition) return notFound();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={`container ${styles.hero}`}>
          <div className="eyebrow">Conditions We Treat</div>
          <h1 className={styles.title}>{condition.name}</h1>
          <p className={styles.subtitle}>{condition.heroSubtitle}</p>
          <div className={styles.heroCtas}>
            <a href="/#contact" className="btn btn-primary">
              Request an Appointment
            </a>
            <a href="/conditions" className="btn btn-ghost">
              ← All Conditions
            </a>
          </div>
        </section>

        {/* Overview */}
        <section className={`container ${styles.section}`}>
          <h2 className={styles.h2}>Overview</h2>
          {condition.overview.map((p, i) => (
            <p key={i} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </section>

        {/* Symptoms + Causes */}
        <section className={`container ${styles.twoCol}`}>
          <div>
            <h2 className={styles.h2}>Common Symptoms</h2>
            <ul className={styles.checkList}>
              {condition.symptoms.map((s) => (
                <li key={s}>
                  <CheckIcon className={styles.checkIcon} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.h2}>What Can Cause It</h2>
            <ul className={styles.checkList}>
              {condition.commonCauses.map((c) => (
                <li key={c}>
                  <CheckIcon className={styles.checkIcon} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Treated vs untreated */}
        <section className={`container ${styles.twoCol}`}>
          <div className={styles.calloutGood}>
            <h3>If Treated Early</h3>
            <p>{condition.ifTreatedEarly}</p>
          </div>
          <div className={styles.calloutWarn}>
            <h3>If Left Untreated</h3>
            <p>{condition.ifLeftUntreated}</p>
          </div>
        </section>

        {/* How we treat it */}
        <section className={`container ${styles.section}`}>
          <h2 className={styles.h2}>How Corona Hands-On Therapy Treats {condition.shortName}</h2>
          <ul className={styles.numberedList}>
            {condition.howWeTreatIt.map((step, i) => (
              <li key={i}>
                <span className={styles.numberBadge}>{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Condition-specific FAQs */}
        <section className={`container ${styles.section}`}>
          <h2 className={styles.h2}>Common Questions About {condition.shortName}</h2>
          <div className={styles.faqBlock}>
            {condition.faqs.map((f) => (
              <div key={f.question} className={styles.faqItem}>
                <div className={styles.faqQ}>{f.question}</div>
                <div className={styles.faqA}>{f.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className={styles.ctaBand}>
          <div className="container">
            <h2>Ready to start treating your {condition.shortName.toLowerCase()}?</h2>
            <p>Request an appointment and our team will call to confirm your visit.</p>
            <a href="/#contact" className="btn btn-gold">
              Request an Appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
