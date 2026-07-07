import Link from "next/link";
import { CheckIcon } from "@/components/icons/Icons";
import styles from "./About.module.css";

const ABOUT_POINTS = [
  "Auto accident, work injury, home accident & personal injury cases welcome",
  "Physical therapy, chiropractic, and acupuncture under one roof",
  "Spanish-speaking staff available",
  "Personalized treatment plans for every patient",
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.about}`}>

        {/* LEFT SIDE */}
        <div className={styles.textContent}>
          <div className="eyebrow">
            About Corona Hands-On Therapy
          </div>

          <h2 className={styles.title}>
            Recovery-focused care for accident and injury patients.
          </h2>

          <p className={styles.lead}>
            Based in Elmhurst, NY, Corona Hands-On Therapy combines
            physical therapy, chiropractic care and acupuncture under
            one roof. We provide coordinated treatment plans designed
            for patients recovering from auto accidents, work injuries,
            home accidents and other personal injuries.
          </p>

          <ul className={styles.list}>
            {ABOUT_POINTS.map((point) => (
              <li key={point}>
                <CheckIcon className={styles.checkIcon} />
                {point}
              </li>
            ))}
          </ul>

          <Link href="/team" className={styles.meetTeamLink}>
            Meet our providers →
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
              <h3>Personalized Evaluation</h3>
              <p>
                Every patient begins with a comprehensive assessment to
                identify the root cause of pain before treatment starts.
              </p>
            </div>
          </article>

          {/* STEP 2 */}
          <article className={`${styles.card} ${styles.right}`}>
            <div className={styles.circle}>02</div>
            <div className={styles.cardBody}>
              <h3>Coordinated Treatment</h3>
              <p>
                Physical therapy, chiropractic care and acupuncture
                work together to maximize your recovery.
              </p>
            </div>
          </article>

          {/* STEP 3 */}
          <article className={`${styles.card} ${styles.leftBottom}`}>
            <div className={styles.circle}>03</div>
            <div className={styles.cardBody}>
              <h3>Recovery Monitoring</h3>
              <p>
                We measure your progress every visit and adapt your
                treatment plan as your body heals.
              </p>
            </div>
          </article>

          {/* CTA WRAPPER */}
          <div className={styles.ctaWrapper}>
            <a href="#contact" className={styles.ctaButton}>
              Request Appointment
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}