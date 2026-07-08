"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Sidebar.module.css";

export interface QuickLink {
  label: string;
  href: string;
}

// Traduce las etiquetas conocidas de PATIENT_QUICK_LINKS (siteData.ts) por href.
// Si el href no coincide con ninguna, se muestra el label tal como llegó.
const LABEL_KEY_BY_HREF: Record<string, "patientInfoForms" | "insurancePlans" | "faqs" | "referAFriend" | "viewAllConditions"> = {
  "/patient-info/forms": "patientInfoForms",
  "/patient-info/insurance": "insurancePlans",
  "/patient-info/faqs": "faqs",
  "/patient-info/refer-a-friend": "referAFriend",
  "/conditions": "viewAllConditions",
};

export default function QuickLinksCard({
  links,
  activeHref,
  title,
}: {
  links: readonly QuickLink[];
  activeHref?: string;
  title?: string;
}) {
  const { t } = useLanguage();

  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>{title ?? t.footer.quickLinks}</h4>
      <ul className={styles.linkList}>
        {links.map((link) => {
          const key = LABEL_KEY_BY_HREF[link.href];
          const label = key ? t.nav[key] : link.label;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={link.href === activeHref ? styles.linkActive : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
