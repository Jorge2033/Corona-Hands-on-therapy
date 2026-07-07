import { SERVICES } from "@/lib/siteData";
import styles from "./Services.module.css";

// Iconos profesionales vectoriales SVG nativos para uso médico
function PhysicalTherapyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="1"/>
      <path d="M5 12h14"/>
      <path d="M12 12v6l-3 4"/>
      <path d="M12 12v6l3 4"/>
      <path d="M9 7l3 5 3-5"/>
    </svg>
  );
}

function ChiropracticIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"/>
      <path d="M9 5h6"/>
      <path d="M8 9h8"/>
      <path d="M7 13h10"/>
      <path d="M8 17h8"/>
      <path d="M9 21h6"/>
      <circle cx="12" cy="2" r="1" fill="currentColor"/>
    </svg>
  );
}

function AcupunctureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="7"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="M16 8l1.5-1.5"/>
      <path d="M6.5 17.5L8 16"/>
      <path d="M16 16l1.5 1.5"/>
      <path d="M6.5 6.5L8 8"/>
    </svg>
  );
}

export default function Services() {
  // Mapeo preciso basado en el índice o ID de tus servicios médicos
  const getProfessionalIcon = (id: string, index: number) => {
    if (id?.toLowerCase().includes("chiro") || index === 1) return <ChiropracticIcon className={styles.icon} />;
    if (id?.toLowerCase().includes("acu") || index === 2) return <AcupunctureIcon className={styles.icon} />;
    return <PhysicalTherapyIcon className={styles.icon} />;
  };

  return (
    <section id="services" className={styles.sectionBanner}>
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.head}>
          <div className={`${styles.eyebrowWhite} eyebrow`}>What we treat</div>
          <h2 className={styles.title}>Three disciplines, one recovery plan.</h2>
          <p className={styles.lead}>
            Whether your injury happened in a car accident, at work, at home, or another
            way, our providers work from a shared plan so your care stays coordinated from
            your first visit to your last.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service, index) => {
            return (
              <div key={service.id || index} className={styles.card}>
                <div className={styles.iconWrap}>
                  {getProfessionalIcon(service.id, index)}
                </div>
                <h3>{service.name}</h3>
                <p className={styles.desc}>{service.description}</p>
                <span className={styles.tag}>{service.provider}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}