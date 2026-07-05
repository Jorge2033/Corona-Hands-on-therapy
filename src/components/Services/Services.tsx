import { SERVICES } from "@/lib/siteData";
import { SERVICE_ICON_MAP } from "@/components/icons/Icons";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className="container">
      <div className={styles.head}>
        <div className="eyebrow">What we treat</div>
        <h2 className={styles.title}>Three disciplines, one recovery plan.</h2>
        <p className={styles.lead}>
          Whether your injury happened in a car accident, at work, at home, or another
          way, our providers work from a shared plan so your care stays coordinated from
          your first visit to your last.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICON_MAP[service.icon];
          return (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </div>
              <h3>{service.name}</h3>
              <p className={styles.desc}>{service.description}</p>
              <span className={styles.tag}>{service.provider}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
