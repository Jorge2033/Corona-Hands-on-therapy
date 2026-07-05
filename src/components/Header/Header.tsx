"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/siteData";
import { HandIcon, MenuIcon, CloseIcon, PhoneIcon, WhatsappIcon } from "@/components/icons/Icons";
import styles from "./Header.module.css";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const [teamMenuOpen, setTeamMenuOpen] = useState(false);
  const phoneMenuRef = useRef<HTMLDivElement>(null);
  const teamMenuRef = useRef<HTMLLIElement>(null);

  // Cierra los dropdowns si se hace click afuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (phoneMenuRef.current && !phoneMenuRef.current.contains(e.target as Node)) {
        setPhoneMenuOpen(false);
      }
      if (teamMenuRef.current && !teamMenuRef.current.contains(e.target as Node)) {
        setTeamMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const whatsappHref = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi, I'd like to request an appointment at Corona Hands-On Therapy."
  )}`;

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <Link href="/" className={styles.brand} aria-label={`${SITE.name} home`}>
            <img src="/images/Logo.png" alt="Corona Logo" className={styles.brandIcon} />
            <span className={styles.brandName}>
              {SITE.name}
              <small>{SITE.city}</small>
            </span>
          </Link>

          <ul className={styles.links}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}

            {/* Dropdown de Team: lleva a la página /team con la info de los providers */}
            <li className={styles.navDropdownWrap} ref={teamMenuRef}>
              <button
                type="button"
                className={styles.navDropdownTrigger}
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
                  <Link href="/team" role="menuitem" className={styles.navDropdownItem} onClick={() => setTeamMenuOpen(false)}>
                    Our Team
                  </Link>
                  {/* Para agregar "Join Our Team" (careers) más adelante, se añade otro <Link> aquí */}
                </div>
              )}
            </li>
          </ul>

          <div className={styles.navCta}>
            {/* Botón de teléfono con menú: Llamar o WhatsApp */}
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
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    className={styles.phoneDropdownItem}
                  >
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
              className={styles.menuToggle}
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon className={styles.menuIconSvg} />
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileDrawer} ${drawerOpen ? styles.open : ""}`}>
        <button
          className={styles.closeDrawer}
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <CloseIcon className={styles.menuIconSvg} />
        </button>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setDrawerOpen(false)}>
            {link.label}
          </a>
        ))}
        <Link href="/team" onClick={() => setDrawerOpen(false)}>
          Our Team
        </Link>
        <a href={`tel:${SITE.phoneHref}`} className={styles.drawerPhone}>
          {SITE.phoneDisplay}
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.drawerWhatsapp}>
          WhatsApp
        </a>
      </div>
    </>
  );
}