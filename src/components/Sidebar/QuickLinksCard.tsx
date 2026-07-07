import Link from "next/link";
import styles from "./Sidebar.module.css";

export interface QuickLink {
  label: string;
  href: string;
}

export default function QuickLinksCard({
  links,
  activeHref,
  title = "Quick Links",
}: {
  links: readonly QuickLink[];
  activeHref?: string;
  title?: string;
}) {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={link.href === activeHref ? styles.linkActive : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
