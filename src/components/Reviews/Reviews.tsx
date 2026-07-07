"use client";

import React from "react";
import Script from "next/script";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Reviews.module.css";

export default function ReviewsCarousel() {
  const { t } = useLanguage();
  return (
    <section id="Reviews" className={styles.section}> {/* <- Importante esta clase */}
      <div className={styles.container}>
        <span className={styles.eyebrow}>{t.reviews.eyebrow.toUpperCase()}</span>
        <h2 className={styles.title}>{t.reviews.title}</h2>

        <Script 
          src="https://elfsightcdn.com/platform.js" 
          strategy="afterInteractive" 
        />

        {/* El widget dentro del contenedor estilizado */}
        <div 
          className="elfsight-app-dd1b9720-8dc6-4258-919c-3c53142767b2" 
          data-elfsight-app-lazy 
        />
        
      </div>
    </section>
  );
}