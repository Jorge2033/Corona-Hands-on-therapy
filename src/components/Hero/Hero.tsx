"use client"; 

import { useState, useEffect } from "react";
import { SITE } from "@/lib/siteData";
import { CheckIcon } from "@/components/icons/Icons";
import styles from "./Hero.module.css";

const BACKGROUND_IMAGES = [
  "/images/clinic5.jpeg",
  "/images/clinic2.jpg",
  "/images/clinic5.jpg",
  "/images/clinic4.jpg",
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="top" />
      <section className={styles.heroWrapper}>
        
        {/* Carrusel con imágenes optimizadas */}
        <div className={styles.bgSlider}>
          {BACKGROUND_IMAGES.map((imgSrc, index) => (
            <div
              key={imgSrc}
              className={`${styles.bgImage} ${index === currentIdx ? styles.active : ""}`}
              style={{ backgroundImage: `url(${imgSrc})` }}
            />
          ))}
        </div>
        
        {/* Capa de contraste UX/UI: Mezcla perfecta de transparencia y profundidad */}
        <div className={styles.overlay}></div>

        <div className={`container ${styles.hero}`}>
          <div>
            <div className={`eyebrow ${styles.heroEyebrow}`}>
              Auto · Work · Home · Personal Injury Recovery
            </div>
            <h1 className={styles.headline}>
              Your recovery, in <em>expert hands.</em>
            </h1>
            <p className={styles.subhead}>
              Corona Hands-On Therapy provides physical therapy, chiropractic care, and
              acupuncture for patients recovering from auto accidents, work injuries, home
              accidents, and other personal injuries — all under one roof in Elmhurst, NY.
            </p>
            <div className={styles.ctas}>
              <a href="/#contact" className="btn btn-primary">
                Request an Appointment
              </a>
              {/* Añadimos clase específica para que el botón fantasma sea visible sobre azul */}
              <a href={`tel:${SITE.phoneHref}`} className={`btn btn-ghost ${styles.heroGhostBtn}`}>
                Call {SITE.phoneDisplay}
              </a>
            </div>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Auto accident recovery
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Work &amp; home injury care
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Se habla Español
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Chiropractic &amp; Acupuncture
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Chronic pain management
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Sports injury rehab
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Personalized care plans
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Most insurance plans accepted
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Evening &amp; weekend hours
              </span>
              <span className={styles.badge}>
                <CheckIcon className={styles.badgeIcon} /> Same-day appointments available
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}