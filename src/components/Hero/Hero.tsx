"use client"; 

import { useState, useEffect } from "react";
import { SITE } from "@/lib/siteData";
import { CheckIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Hero.module.css";

const BACKGROUND_IMAGES = [
  "/images/clinic5.jpeg",
  "/images/clinic2.jpg",
  "/images/clinic5.jpg",
  "/images/clinic4.jpg",
];

export default function Hero() {
  const { t } = useLanguage();
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
              {t.hero.eyebrow}
            </div>
            <h1 className={styles.headline}>
              {t.hero.titleStart} <em>{t.hero.titleEm}</em>
            </h1>
            <p className={styles.subhead}>{t.hero.subhead}</p>
            <div className={styles.ctas}>
              <a href="/#contact" className="btn btn-primary">
                {t.hero.requestAppointment}
              </a>
              {/* Añadimos clase específica para que el botón fantasma sea visible sobre azul */}
              <a href={`tel:${SITE.phoneHref}`} className={`btn btn-ghost ${styles.heroGhostBtn}`}>
                {t.nav.call} {SITE.phoneDisplay}
              </a>
            </div>
            <div className={styles.badgeRow}>
              {t.hero.badges.map((badge) => (
                <span key={badge} className={styles.badge}>
                  <CheckIcon className={styles.badgeIcon} /> {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}