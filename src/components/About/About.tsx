"use client";

import Link from "next/link";
import { CheckIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./About.module.css";

export default function About() {
  const { t } = useLanguage();
  const [step1, step2, step3] = t.about.steps;

  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.about}`}>

        {/* LEFT SIDE */}
        <div className={styles.textContent}>
          <div className="eyebrow">
            {t.about.eyebrow}
          </div>

          <h2 className={styles.title}>
            {t.about.title}
          </h2>

          <p className={styles.lead}>
            {t.about.lead}
          </p>

          <ul className={styles.list}>
            {t.about.points.map((point) => (
              <li key={point}>
                <CheckIcon className={styles.checkIcon} />
                {point}
              </li>
            ))}
          </ul>

          <Link href="/team" className={styles.meetTeamLink}>
            {t.about.meetProviders}
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.timelineSection}>

          {/* SVG PATH */}
          <svg
            className={styles.timelinePath}
            viewBox="0 0 320 900"
            preserveAspectRatio="none"
          >
            <path
              d="
              M160 30
              C260 80 260 180 160 240
              C60 300 60 410 160 470
              C260 530 260 650 160 710
              L160 845
              "
              className={styles.path}
            />
          </svg>

          {/* STEP 1 */}
          <article className={`${styles.card} ${styles.left}`}>
            <div className={styles.circle}>01</div>
            <div className={styles.cardBody}>
              <h3>{step1.title}</h3>
              <p>{step1.text}</p>
            </div>
          </article>

          {/* STEP 2 */}
          <article className={`${styles.card} ${styles.right}`}>
            <div className={styles.circle}>02</div>
            <div className={styles.cardBody}>
              <h3>{step2.title}</h3>
              <p>{step2.text}</p>
            </div>
          </article>

          {/* STEP 3 */}
          <article className={`${styles.card} ${styles.leftBottom}`}>
            <div className={styles.circle}>03</div>
            <div className={styles.cardBody}>
              <h3>{step3.title}</h3>
              <p>{step3.text}</p>
            </div>
          </article>

          {/* CTA WRAPPER */}
          <div className={styles.ctaWrapper}>
            <span className={`${styles.ctaArrow} ${styles.ctaArrowLeft}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 12h16M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <a href="#contact" className={styles.ctaButton}>
              {t.about.ctaButton}
            </a>

            <span className={`${styles.ctaArrow} ${styles.ctaArrowRight}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 12H5M11 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
