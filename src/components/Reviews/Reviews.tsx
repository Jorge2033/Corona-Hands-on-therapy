"use client";

import React from "react";
import Script from "next/script";
import styles from "./Reviews.module.css";

export default function ReviewsCarousel() {
  return (
    <section id="Reviews" className={styles.section}> {/* <- Importante esta clase */}
      <div className={styles.container}>
        <span className={styles.eyebrow}>PATIENT EXPERIENCES</span>
        <h2 className={styles.title}>What patients say about their recovery.</h2>

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