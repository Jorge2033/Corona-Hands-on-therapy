"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook esencial para detectar la sección activa
import { SITE, NAV_LINKS } from "@/lib/siteData";
import { CONDITIONS } from "@/lib/conditionsData";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsappIcon } from "@/components/icons/Icons";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname(); // Guardamos la ruta actual (ej: '/team' o '/conditions/hand-pain')
  
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
                <a href={servicesLink.href} className={isActive(servicesLink.href)}>{servicesLink.label}</a>
              </li>
              <li>
                <a href={aboutLink.href} className={isActive(aboutLink.href)}>{aboutLink.label}</a>
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
                  Team
                  <svg viewBox="0 0 24 24" fill="none" className={styles.chevron} aria-hidden="true">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {teamMenuOpen && (
                  <div className={styles.navDropdown} role="menu">
                    <Link href="/team" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/team")}`} onClick={() => setTeamMenuOpen(false)}>
                      Our Team
                    </Link>
                    <Link href="/careers" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/careers")}`} onClick={() => setTeamMenuOpen(false)}>
                      Join Our Team
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
                  Conditions
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
                          {c.name}
                        </Link>
                      );
                    })}
                    <Link
                      href="/conditions"
                      role="menuitem"
                      className={`${styles.navDropdownItem} ${styles.navDropdownItemAccent} ${isActive("/conditions")}`}
                      onClick={() => setConditionsMenuOpen(false)}
                    >
                      View All Conditions
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
                  Patient Info
                  <svg viewBox="0 0 24 24" fill="none" className={styles.chevron} aria-hidden="true">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {patientInfoMenuOpen && (
                  <div className={styles.navDropdown} role="menu">
                    <Link href="/patient-info/forms" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/patient-info/forms")}`} onClick={() => setPatientInfoMenuOpen(false)}>
                      Patient Info / Forms
                    </Link>
                    <Link href="/patient-info/insurance" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/patient-info/insurance")}`} onClick={() => setPatientInfoMenuOpen(false)}>
                      Insurance Plans
                    </Link>
                    <Link href="/patient-info/refer-a-friend" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/patient-info/refer-a-friend")}`} onClick={() => setPatientInfoMenuOpen(false)}>
                      Refer a Friend
                    </Link>
                    <Link href="/patient-info/faqs" role="menuitem" className={`${styles.navDropdownItem} ${isActive("/patient-info/faqs")}`} onClick={() => setPatientInfoMenuOpen(false)}>
                      FAQs
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <a href={testimonialsLink.href} className={isActive(testimonialsLink.href)}>{testimonialsLink.label}</a>
              </li>
              <li>
                <a href={contactLink.href} className={isActive(contactLink.href)}>{contactLink.label}</a>
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
                      Call {SITE.phoneDisplay}
                    </a>
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" role="menuitem" className={styles.phoneDropdownItem}>
                      <WhatsappIcon className={styles.dropdownIcon} />
                      Message on WhatsApp
                    </a>
                  </div>
                )}
              </div>

              <a href="/#contact" className="btn btn-primary">
                Book Appointment
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
        
        <a href={servicesLink.href} className={isActive(servicesLink.href)} onClick={() => setDrawerOpen(false)}>{servicesLink.label}</a>
        <a href={aboutLink.href} className={isActive(aboutLink.href)} onClick={() => setDrawerOpen(false)}>{aboutLink.label}</a>
        <Link href="/team" className={isActive("/team")} onClick={() => setDrawerOpen(false)}>Our Team</Link>
        <Link href="/careers" className={isActive("/careers")} onClick={() => setDrawerOpen(false)}>Join Our Team</Link>
        <Link href="/conditions" className={isActive("/conditions") || pathname.startsWith("/conditions/") ? styles.active : ""} onClick={() => setDrawerOpen(false)}>Conditions</Link>
        <Link href="/patient-info/forms" className={pathname.startsWith("/patient-info") ? styles.active : ""} onClick={() => setDrawerOpen(false)}>Patient Info</Link>
        <a href={testimonialsLink.href} className={isActive(testimonialsLink.href)} onClick={() => setDrawerOpen(false)}>{testimonialsLink.label}</a>
        <a href={contactLink.href} className={isActive(contactLink.href)} onClick={() => setDrawerOpen(false)}>{contactLink.label}</a>
        
        <a href="/#contact" className={`btn btn-primary ${styles.drawerBookBtn}`} onClick={() => setDrawerOpen(false)}>
          Book Appointment
        </a>
        <a href={`tel:${SITE.phoneHref}`} className={styles.drawerPhone}>
          {SITE.phoneDisplay}
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.drawerWhatsapp}>
          WhatsApp Chat
        </a>
      </div>
    </>
  );
}