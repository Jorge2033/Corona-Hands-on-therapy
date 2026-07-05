import { SITE, HOURS } from "@/lib/siteData";
import { PinIcon, PhoneIcon, MailIcon } from "@/components/icons/Icons";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="container">
      <div className={styles.contact}>
        <div>
          <div className="eyebrow">Find us</div>
          <h2 className={styles.title}>Visit or reach out — we&apos;re in Elmhurst.</h2>

          <div className={styles.infoBlock}>
            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <PinIcon className={styles.infoIconSvg} />
              </div>
              <div>
                <div className={styles.infoTitle}>Address</div>
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
                <div className={styles.infoTitle}>Phone / Fax</div>
                <div className={styles.infoValue}>
                  <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
                  <br />
                  Fax: {SITE.fax}
                </div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <MailIcon className={styles.infoIconSvg} />
              </div>
              <div>
                <div className={styles.infoTitle}>Email</div>
                <div className={styles.infoValue}>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>
            </div>

            <div className={styles.hoursBox}>
              {HOURS.map((h) => (
                <div key={h.day} className={styles.hoursRow}>
                  <span className={styles.hoursDay}>{h.day}</span>
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
