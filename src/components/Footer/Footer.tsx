import { SITE, NAV_LINKS } from "@/lib/siteData";
import { HandIcon } from "@/components/icons/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <img src="/images/Logo2.png" alt="Corona Logo" className={styles.brandIcon} />
             
            </div>
            <p className={styles.emergency}>
              In a medical emergency, call <strong>911</strong> or go to your nearest
              emergency room.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="/team">Our Team</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                {SITE.address.line1}, {SITE.address.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>
            <a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a> ·{" "}
            <a href="#">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
}