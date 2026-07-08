"use client";

import { SITE, NAV_LINKS } from "@/lib/siteData";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const [servicesLink, aboutLink, reviewsLink, contactLink] = NAV_LINKS;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <img src="/images/Logo4.png" alt="Corona Hands-On Therapy" className={styles.brandLogo} />
            </div>
            <p className={styles.emergency}>
              {t.footer.emergency} <strong>911</strong> {t.footer.emergencyRest}
            </p>
          </div>

          <div className={styles.quickLinksCol}>
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li>
                <a href={servicesLink.href}>{t.nav.services}</a>
              </li>
              <li>
                <a href={aboutLink.href}>{t.nav.about}</a>
              </li>
              <li>
                <a href={reviewsLink.href}>{t.nav.reviews}</a>
              </li>
              <li>
                <a href={contactLink.href}>{t.nav.contact}</a>
              </li>
              <li>
                <a href="/team">{t.nav.ourTeam}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>{t.footer.contact}</h4>
            <ul className={styles.contactList}>
              <li>
                <PhoneIcon className={styles.contactIcon} />
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <MailIcon className={styles.contactIcon} />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <PinIcon className={styles.contactIcon} />
                <span>
                  {SITE.address.line1}, {SITE.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {SITE.name}. {t.footer.rightsReserved}</span>
          <span>
            <a href="#">{t.footer.privacyPolicy}</a> · <a href="#">{t.footer.termsOfUse}</a> ·{" "}
            <a href="#">{t.footer.accessibility}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
