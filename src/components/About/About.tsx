import Link from "next/link";
import { CheckIcon, ShieldIcon, ClockIcon, StretchIcon } from "@/components/icons/Icons";
import styles from "./About.module.css";

const ABOUT_POINTS = [
  "Auto accident, work injury, home accident & personal injury cases welcome",
  "Physical therapy, chiropractic, and acupuncture under one roof",
  "Spanish-speaking staff available",
  "Personalized treatment plans for every patient",
];

// Información general de cuidado (reemplaza las tarjetas de doctores,
// que ahora viven en su propia página /team)
const CARE_APPROACH = [
  {
    icon: ShieldIcon,
    title: "Personalized evaluation",
    text: "Every patient starts with a full evaluation to identify the root cause of pain, not just the symptoms.",
  },
  {
    icon: StretchIcon,
    title: "Coordinated treatment plan",
    text: "Physical therapy, chiropractic, and acupuncture work from one shared plan, so your care stays consistent.",
  },
  {
    icon: ClockIcon,
    title: "Ongoing progress check-ins",
    text: "We track your recovery visit to visit and adjust your plan as you improve.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.about}`}>
        <div>
          <div className="eyebrow">About Corona Hands-On Therapy</div>
          <h2 className={styles.title}>
            Recovery-focused care for accident and injury patients.
          </h2>
          <p className={styles.lead}>
            Based in Elmhurst, NY, Corona Hands-On Therapy brings physical therapy,
            chiropractic care, and acupuncture together for patients recovering from
            auto accidents, work injuries, home accidents, and other personal injuries.
            Our providers build individualized treatment plans and coordinate care
            across specialties, so patients aren&apos;t left repeating their story at
            every visit.
          </p>
          <ul className={styles.list}>
            {ABOUT_POINTS.map((point) => (
              <li key={point}>
                <CheckIcon className={styles.checkIcon} /> {point}
              </li>
            ))}
          </ul>

          <Link href="/team" className={styles.meetTeamLink}>
            Meet our providers →
          </Link>
        </div>

        <div className={styles.careGrid}>
          {CARE_APPROACH.map((item) => (
            <div key={item.title} className={styles.careCard}>
              <div className={styles.careIconWrap}>
                <item.icon className={styles.careIcon} />
              </div>
              <div>
                <div className={styles.careTitle}>{item.title}</div>
                <div className={styles.careText}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}