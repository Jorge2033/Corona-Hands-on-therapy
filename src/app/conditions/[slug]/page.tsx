import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CONDITIONS, getConditionBySlug } from "@/lib/conditionsData";
import { PATIENT_QUICK_LINKS } from "@/lib/siteData";
import { CheckIcon } from "@/components/icons/Icons";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
import styles from "./condition.module.css";

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};
  return {
    title: `${condition.name} | Corona Hands-On Therapy`,
    description: condition.heroSubtitle,
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return notFound();

  // Otras condiciones para la barra lateral "Related Conditions" (misma categoría primero).
  const related = CONDITIONS.filter((c) => c.slug !== condition.slug)
    .sort((a, b) => (a.category === condition.category ? -1 : 1) - (b.category === condition.category ? -1 : 1))
    .slice(0, 4);

  const heroStyle = condition.heroImage
    ? { backgroundImage: `url(${condition.heroImage})` }
    : undefined;

  return (
    <>
      <Header />
      <main>
        {/* Hero de fondo completo con breadcrumb, igual que el resto del sitio de referencia */}
        <div
          className={`${styles.hero} ${!condition.heroImage ? styles.heroFallback : ""}`}
          style={heroStyle}
        >
          <div className={styles.heroOverlay} />
          <div className={`container ${styles.heroInner}`}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">»</span>
              <Link href="/conditions">Conditions We Treat</Link>
              <span aria-hidden="true">»</span>
              <span aria-current="page">{condition.name}</span>
            </nav>
            <h1 className={styles.heroTitle}>{condition.name}</h1>
            <p className={styles.heroSubtitle}>{condition.heroSubtitle}</p>
            <div className={styles.heroCtas}>
              <a href="/#contact" className="btn btn-gold">
                Request an Appointment
              </a>
              <Link href="/conditions" className={styles.heroGhostBtn}>
                ← All Conditions
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
                  {condition.shortName} Relief with Physical Therapy
                </h2>
                {condition.overview.map((p, i) => (
                  <p key={i} className={styles.paragraph}>
                    {p}
                  </p>
                ))}
                <a href="/#contact" className={styles.inlineCta}>
                  Schedule an Appointment →
                </a>
              </div>

              {/* Symptoms + Causes */}
              <div className={styles.twoCol}>
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
              </div>

              {/* Treated vs untreated */}
              <div className={styles.twoCol}>
                <div className={styles.calloutGood}>
                  <h3>If Treated Early</h3>
                  <p>{condition.ifTreatedEarly}</p>
                </div>
                <div className={styles.calloutWarn}>
                  <h3>If Left Untreated</h3>
                  <p>{condition.ifLeftUntreated}</p>
                </div>
              </div>

              {/* How we treat it */}
              <div>
                <h2 className={styles.h2}>
                  How Corona Hands-On Therapy Treats {condition.shortName}
                </h2>
                <ul className={styles.numberedList}>
                  {condition.howWeTreatIt.map((step, i) => (
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
                  Common Questions About {condition.shortName}
                </h2>
                <div className={styles.faqBlock}>
                  {condition.faqs.map((f) => (
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
                <h4 className={styles.asideTitle}>Related Conditions</h4>
                <ul className={styles.asideLinkList}>
                  {related.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/conditions/${c.slug}`}>{c.shortName}</Link>
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
