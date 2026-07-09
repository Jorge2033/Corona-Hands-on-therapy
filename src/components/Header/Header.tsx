"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook esencial para detectar la sección activa
import { SITE, NAV_LINKS, PATIENT_QUICK_LINKS } from "@/lib/siteData";
import { CONDITIONS } from "@/lib/conditionsData";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsappIcon, ChatBubbleIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Header.module.css";

// Etiquetas de Patient Info por href, para traducir la lista compartida PATIENT_QUICK_LINKS.
const PATIENT_INFO_KEY_BY_HREF: Record<string, "patientInfoForms" | "insurancePlans" | "faqs" | "referAFriend"> = {
  "/patient-info/forms": "patientInfoForms",
  "/patient-info/insurance": "insurancePlans",
  "/patient-info/faqs": "faqs",
  "/patient-info/refer-a-friend": "referAFriend",
};

export default function Header() {
  const pathname = usePathname(); // Guardamos la ruta actual (ej: '/team' o '/conditions/hand-pain')
  const { language, t, toggleLanguage } = useLanguage();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const [teamMenuOpen, setTeamMenuOpen] = useState(false);
  const [conditionsMenuOpen, setConditionsMenuOpen] = useState(false);
  const [patientInfoMenuOpen, setPatientInfoMenuOpen] = useState(false);
  
  const phoneMenuRef = useRef<HTMLDivElement>(null);
  const teamMenuRef = useRef<HTMLLIElement>(null);
  const conditionsMenuRef = useRef<HTMLLIElement>(null);
  const patientInfoMenuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (phoneMenuRef.current && !phoneMenuRef.current.contains(e.target as Node)) setPhoneMenuOpen(false);
      if (teamMenuRef.current && !teamMenuRef.current.contains(e.target as Node)) setTeamMenuOpen(false);
      if (conditionsMenuRef.current && !conditionsMenuRef.current.contains(e.target as Node)) setConditionsMenuOpen(false);
      if (patientInfoMenuRef.current && !patientInfoMenuRef.current.contains(e.target as Node)) setPatientInfoMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi, I'd like to request an appointment at Corona Hands-On Therapy."
  )}`;

  const [servicesLink, aboutLink, testimonialsLink, contactLink] = NAV_LINKS;

  // Función helper para simplificar la lectura del código y aplicar la clase activa
  const isActive = (href: string) => pathname === href ? styles.active : "";

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <Link href="/" className={styles.brand} aria-label={`${SITE.name} home`}>
            <img src="/images/Logo4.png" alt="Corona Hands-On Therapy" className={styles.brandIcon} />
          </Link>

          <div className={styles.navRight}>
            <ul className={styles.links}>
              <li>
                <a href={servicesLink.href} className={isActive(servicesLink.href)}>{t.nav.services}</a>
              </li>
              <li>
                <a href={aboutLink.href} className={isActive(aboutLink.href)}>{t.nav.about}</a>
              </li>

              {/* Dropdown de Team */}
              <li className={styles.navDropdownWrap} ref={teamMenuRef}>
                <button
                  type="button"
                  className={`${styles.navDropdownTrigger} ${pathname.startsWith("/team") || pathname.startsWith("/careers") ? styles.active : ""}`}
                  onClick={() => setTeamMenuOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={teamMenuOpen}
                >
                  {t.nav.team}
                  <svg viewBox="0 0 24 24" fill="none" className={styles.chevron} aria-hidden="true">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {teamMenuOpen && (
                  <div className={styles.navDropdown} role="menu">
                    <Link href="/team" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/team")}`} onClick={() => setTeamMenuOpen(false)}>
                      {t.nav.ourTeam}
                    </Link>
                    <Link href="/careers" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/careers")}`} onClick={() => setTeamMenuOpen(false)}>
                      {t.nav.joinOurTeam}
                    </Link>
                  </div>
                )}
              </li>

              {/* Dropdown de Conditions */}
              <li className={styles.navDropdownWrap} ref={conditionsMenuRef}>
                <button
                  type="button"
                  className={`${styles.navDropdownTrigger} ${pathname.startsWith("/conditions") ? styles.active : ""}`}
                  onClick={() => setConditionsMenuOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={conditionsMenuOpen}
                >
                  {t.nav.conditions}
                  <svg viewBox="0 0 24 24" fill="none" className={styles.chevron} aria-hidden="true">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {conditionsMenuOpen && (
                  <div className={`${styles.navDropdown} ${styles.navDropdownWide}`} role="menu">
                    {CONDITIONS.map((c) => {
                      const href = `/conditions/${c.slug}`;
                      return (
                        <Link
                          key={c.slug}
                          href={href}
                          role="menuitem"
                          className={`${styles.navDropdownItem} ${isActive(href)}`}
                          onClick={() => setConditionsMenuOpen(false)}
                        >
                          {t.conditionsNav[c.slug]?.name ?? c.name}
                        </Link>
                      );
                    })}
                    <Link
                      href="/conditions"
                      role="menuitem"
                      className={`${styles.navDropdownItem} ${styles.navDropdownItemAccent} ${isActive("/conditions")}`}
                      onClick={() => setConditionsMenuOpen(false)}
                    >
                      {t.nav.viewAllConditions}
                    </Link>
                  </div>
                )}
              </li>

              {/* Dropdown de Patient Info */}
              <li className={styles.navDropdownWrap} ref={patientInfoMenuRef}>
                <button
                  type="button"
                  className={`${styles.navDropdownTrigger} ${pathname.startsWith("/patient-info") ? styles.active : ""}`}
                  onClick={() => setPatientInfoMenuOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={patientInfoMenuOpen}
                >
                  {t.nav.patientInfo}
                  <svg viewBox="0 0 24 24" fill="none" className={styles.chevron} aria-hidden="true">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {patientInfoMenuOpen && (
                  <div className={styles.navDropdown} role="menu">
                    <Link href="/patient-info/forms" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/patient-info/forms")}`} onClick={() => setPatientInfoMenuOpen(false)}>
                      {t.nav.patientInfoForms}
                    </Link>
                    <Link href="/patient-info/insurance" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/patient-info/insurance")}`} onClick={() => setPatientInfoMenuOpen(false)}>
                      {t.nav.insurancePlans}
                    </Link>
                    <Link href="/patient-info/refer-a-friend" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/patient-info/refer-a-friend")}`} onClick={() => setPatientInfoMenuOpen(false)}>
                      {t.nav.referAFriend}
                    </Link>
                    <Link href="/patient-info/faqs" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/patient-info/faqs")}`} onClick={() => setPatientInfoMenuOpen(false)}>
                      {t.nav.faqs}
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <a href={testimonialsLink.href} className={isActive(testimonialsLink.href)}>{t.nav.reviews}</a>
              </li>
              <li>
                <a href={contactLink.href} className={isActive(contactLink.href)}>{t.nav.contact}</a>
              </li>
            </ul>

            <div className={styles.navCta}>
              <div className={styles.phoneMenuWrap} ref={phoneMenuRef}>
                <button
                  type="button"
                  className={styles.navPhone}
                  onClick={() => setPhoneMenuOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={phoneMenuOpen}
                >
                  <PhoneIcon className={styles.phoneIcon} />
                  <span>{SITE.phoneDisplay}</span>
                </button>

                {phoneMenuOpen && (
                  <div className={styles.phoneDropdown} role="menu">
                    <a href={`tel:${SITE.phoneHref}`} role="menuitem" className={styles.phoneDropdownItem}>
                      <PhoneIcon className={styles.dropdownIcon} />
                      {t.nav.call} {SITE.phoneDisplay}
                    </a>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" role="menuitem" className={styles.phoneDropdownItem}>
                      <WhatsappIcon className={styles.dropdownIcon} />
                      {t.nav.messageWhatsapp}
                    </a>
                    <a href={`sms:${SITE.phoneHref}`} role="menuitem" className={styles.phoneDropdownItem}>
                      <ChatBubbleIcon className={styles.dropdownIcon} />
                      {t.nav.sendSms}
                    </a>
                  </div>
                )}
              </div>

              <button
                type="button"
                className={styles.langToggle}
                onClick={toggleLanguage}
                aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
              >
                {t.nav.langToggleLabel}
              </button>

              <a href="/#contact" className="btn btn-primary">
                {t.nav.bookAppointment}
              </a>

              <button
                type="button"
                className={styles.menuToggle}
                aria-label="Open menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon className={styles.menuIconSvg} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Móvil */}
      <div className={`${styles.mobileDrawer} ${drawerOpen ? styles.open : ""}`}>
        <button
          type="button"
          className={styles.closeDrawer}
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon className={styles.menuIconSvg} />
        </button>
        
        <nav className={styles.drawerNav}>
          <a href={servicesLink.href} className={`${styles.drawerLink} ${isActive(servicesLink.href)}`} onClick={() => setDrawerOpen(false)}>{t.nav.services}</a>
          <a href={aboutLink.href} className={`${styles.drawerLink} ${isActive(aboutLink.href)}`} onClick={() => setDrawerOpen(false)}>{t.nav.about}</a>

          <div className={styles.drawerGroup}>
            <span className={styles.drawerGroupLabel}>{t.nav.team}</span>
            <Link href="/team" className={`${styles.drawerSubLink} ${isActive("/team")}`} onClick={() => setDrawerOpen(false)}>{t.nav.ourTeam}</Link>
            <Link href="/careers" className={`${styles.drawerSubLink} ${isActive("/careers")}`} onClick={() => setDrawerOpen(false)}>{t.nav.joinOurTeam}</Link>
          </div>

          <div className={styles.drawerGroup}>
            <span className={styles.drawerGroupLabel}>{t.breadcrumb.conditionsWeTreat}</span>
            {CONDITIONS.map((c) => {
              const href = `/conditions/${c.slug}`;
              return (
                <Link key={c.slug} href={href} className={`${styles.drawerSubLink} ${isActive(href)}`} onClick={() => setDrawerOpen(false)}>
                  {t.conditionsNav[c.slug]?.shortName ?? c.shortName}
                </Link>
              );
            })}
            <Link href="/conditions" className={`${styles.drawerSubLink} ${styles.drawerSubLinkAccent} ${isActive("/conditions")}`} onClick={() => setDrawerOpen(false)}>
              {t.nav.viewAllConditions}
            </Link>
          </div>

          <div className={styles.drawerGroup}>
            <span className={styles.drawerGroupLabel}>{t.nav.patientInfo}</span>
            {PATIENT_QUICK_LINKS.filter((l) => l.href.startsWith("/patient-info")).map((l) => {
              const key = PATIENT_INFO_KEY_BY_HREF[l.href];
              return (
                <Link key={l.href} href={l.href} className={`${styles.drawerSubLink} ${isActive(l.href)}`} onClick={() => setDrawerOpen(false)}>
                  {key ? t.nav[key] : l.label}
                </Link>
              );
            })}
          </div>

          <a href={testimonialsLink.href} className={`${styles.drawerLink} ${isActive(testimonialsLink.href)}`} onClick={() => setDrawerOpen(false)}>{t.nav.reviews}</a>
          <a href={contactLink.href} className={`${styles.drawerLink} ${isActive(contactLink.href)}`} onClick={() => setDrawerOpen(false)}>{t.nav.contact}</a>
        </nav>

        <div className={styles.drawerFooter}>
          <a href="/#contact" className={`btn btn-primary ${styles.drawerBookBtn}`} onClick={() => setDrawerOpen(false)}>
            {t.nav.bookAppointment}
          </a>
          <a href={`tel:${SITE.phoneHref}`} className={styles.drawerPhone}>
            {SITE.phoneDisplay}
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.drawerWhatsapp}>
            {t.nav.whatsappChat}
          </a>
        </div>
      </div>
    </>
  );
}