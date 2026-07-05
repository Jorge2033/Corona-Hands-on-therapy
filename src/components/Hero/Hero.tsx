import { SITE } from "@/lib/siteData";
import { CheckIcon, HandIcon } from "@/components/icons/Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div id="top" />
      <section className={`container ${styles.hero}`}>
        <div>
          <div className="eyebrow">Auto · Work · Home · Personal Injury Recovery</div>
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
            <a href={`tel:${SITE.phoneHref}`} className="btn btn-ghost">
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

        <div className={styles.visual}>
          {/* PLACEHOLDER: reemplazar por foto real de la clínica o de un provider en sesión */}
          <img
            src="https://placehold.co/900x1100/0F2A4A/EFEAE0?font=raleway&text=img"
            alt="Placeholder: real photo of the clinic or a provider with a patient goes here"
          />
          <HandIcon className={styles.heroHand} />
          <div className={styles.signature}>
            <svg viewBox="0 0 24 24" fill="none" className={styles.signatureIcon} aria-hidden="true">
              <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <div>
              <div className={styles.signatureT1}>One team, one file</div>
              <div className={styles.signatureT2}>
                PT, chiropractic &amp; acupuncture coordinated together
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}