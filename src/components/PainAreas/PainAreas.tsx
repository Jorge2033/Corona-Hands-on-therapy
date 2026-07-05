import { PAIN_AREAS } from "@/lib/siteData";
import styles from "./PainAreas.module.css";
import Image from 'next/image';

export default function PainAreas() {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          How Corona Hands-On Therapy can get you <span>back on track</span>
        </h2>
        <p className={styles.lead}>
          Pain that lingers usually gets worse the longer it&apos;s ignored. Our
          providers start by pinpointing exactly where an injury is coming from, then
          build a plan across physical therapy, chiropractic care, and acupuncture to
          treat it — not just manage the symptoms.
        </p>
      </div>

      <div className={styles.grid}>
        {PAIN_AREAS.map((area) => (
          /* Usamos area.label como key única */
          <div key={area.label} className={styles.item}>
            <div className={styles.iconCircle}>
              <Image 
                src={area.image} // RUTA DINÁMICA
                alt={area.label} 
                width={100} 
                height={100} 
                className={styles.icon} 
              />
            </div>
            <span className={styles.label}>{area.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}