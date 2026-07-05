"use client";

import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "@/lib/siteData";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  // Triplicamos para un margen seguro y evitar espacios en clics rápidos
  const infiniteTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const totalItems = TESTIMONIALS.length;

  // SOLUCIÓN AL ERROR DE TYPESCRIPT: Forzamos explícitamente a que acepte cualquier número <number>
  const [currentIndex, setCurrentIndex] = useState<number>(totalItems);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  
  // Ref para bloquear clics simultáneos rápidos (elimina el lag y espacios en blanco)
  const isMoving = useRef<boolean>(false);

  useEffect(() => {
    // Si se pasa hacia adelante del segundo bloque, salta al primer bloque sin animación
    if (currentIndex >= totalItems * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - totalItems);
      }, 500); // Mismo tiempo que la transición CSS
      return () => clearTimeout(timer);
    }

    // Si retrocede antes del primer bloque real, salta adelante sin animación
    if (currentIndex < totalItems) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + totalItems);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalItems]);

  // Reactiva las transiciones de forma limpia
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handleNext = () => {
    if (isMoving.current) return;
    isMoving.current = true;
    
    setCurrentIndex((prev) => prev + 1);
    
    setTimeout(() => {
      isMoving.current = false;
    }, 500); // Bloqueo durante la animación
  };

  const handlePrev = () => {
    if (isMoving.current) return;
    isMoving.current = true;
    
    setCurrentIndex((prev) => prev - 1);
    
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  };

  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={`eyebrow ${styles.eyebrow}`}>Patient experiences</div>
        <h2 className={styles.title}>What patients say about their recovery.</h2>

        <div className={styles.carouselWindow}>
          <div 
            className={styles.carouselTrack}
            style={{ 
              "--current-index": currentIndex,
              transition: isTransitioning ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "none"
            } as React.CSSProperties}
          >
            {infiniteTestimonials.map((t, index) => (
              <div key={`${t.id}-${index}`} className={styles.card}>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.since}>{t.since}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button 
            onClick={handlePrev} 
            className={styles.controlBtn} 
            aria-label="Previous testimonials"
          >
            ←
          </button>
          <button 
            onClick={handleNext} 
            className={styles.controlBtn} 
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}