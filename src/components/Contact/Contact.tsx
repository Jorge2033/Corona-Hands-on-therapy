"use client";

import { SITE, HOURS } from "@/lib/siteData";
import { PinIcon, PhoneIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="container">
      <div className={styles.contact}>
        <div>
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2 className={styles.title}>{t.contact.title}</h2>

          <div className={styles.infoBlock}>
            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <PinIcon className={styles.infoIconSvg} />
              </div>
              <div>
                <div className={styles.infoTitle}>{t.contact.address}</div>
                <div className={styles.infoValue}>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <PhoneIcon className={styles.infoIconSvg} />
              </div>
              <div>
                <div className={styles.infoTitle}>{t.contact.phone}</div>
                <div className={styles.infoValue}>
                  <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
                </div>
              </div>
            </div>

            <div className={styles.hoursBox}>
              {HOURS.map((h) => (
                <div key={h.day} className={styles.hoursRow}>
                  <span className={styles.hoursDay}>{t.contact.days[h.day] ?? h.day}</span>
                  <span className={styles.hoursTime}>{h.time}</span>
                </div>
              ))}
            </div>

            <div className={styles.mapWrap}>
              <iframe
                title="Corona Hands-On Therapy location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={SITE.mapEmbedSrc}
              />
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
