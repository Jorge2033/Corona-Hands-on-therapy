"use client";

import Link from "next/link";
import Image from "next/image";
import { CONDITIONS } from "@/lib/conditionsData";
import { PAIN_AREAS } from "@/lib/siteData";
import { StretchIcon, SpineIcon, TargetIcon, ShieldIcon, PainDotIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./conditions.module.css";

// Ícono representativo por categoría (mostrado junto al título de cada grupo).
const CATEGORY_ICON: Record<string, (props: { className?: string }) => JSX.Element> = {
  "Joint & Muscle Pain": StretchIcon,
  "Nerve Pain": SpineIcon,
  "Chronic Conditions": TargetIcon,
  "Injury Recovery": ShieldIcon,
};

// Imagen de cuerpo ya usada en el home (PainAreas), reutilizada aquí como ícono de tarjeta
// cuando existe una para el slug de la condición. Las condiciones que no tienen un
// pain-area equivalente en el home usan sus propias miniaturas recortadas.
const CONDITION_IMAGE: Record<string, string> = {
  ...Object.fromEntries(PAIN_AREAS.map((area) => [area.slug, area.image])),
  arthritis: "/images/ArthritisPain.png",
  sciatica: "/images/SciaticaPain.png",
  "whiplash-auto-injury": "/images/WhiplashPain.png",
  "sports-injuries": "/images/SportsInjuriesPain.png",
  "post-surgical-rehab": "/images/ArthritisPain.png",
};

function slugifyCategory(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ConditionsIndexContent() {
  const { t } = useLanguage();

  // Agrupamos por categoría manteniendo el orden de aparición en CONDITIONS.
  const categories: string[] = [];
  const bySlug: Record<string, typeof CONDITIONS> = {};
  for (const c of CONDITIONS) {
    if (!bySlug[c.category]) {
      bySlug[c.category] = [];
      categories.push(c.category);
    }
    bySlug[c.category].push(c);
  }

  return (
    <main>
      <div className={styles.breadcrumbContainer}>
        <div className={`container ${styles.breadcrumb}`}>
          <Link href="/">{t.breadcrumb.home}</Link>
          <span aria-hidden="true">»</span>
          <span aria-current="page">{t.breadcrumb.conditionsWeTreat}</span>
        </div>
      </div>

      <section className={`container ${styles.hero}`}>
        <div className="eyebrow">{t.conditionsIndex.eyebrow}</div>
        <h1 className={styles.title}>{t.conditionsIndex.title}</h1>
        <p className={styles.intro}>{t.conditionsIndex.intro}</p>

        {/* Navegación rápida entre categorías */}
        <nav className={styles.jumpNav} aria-label="Jump to category">
          {categories.map((category) => (
            <a key={category} href={`#${slugifyCategory(category)}`} className={styles.jumpPill}>
              {t.conditionsIndex.categories[category] ?? category}
              <span className={styles.jumpCount}>{bySlug[category].length}</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="container" style={{ paddingTop: 0 }}>
        {categories.map((category) => {
          const CategoryIcon = CATEGORY_ICON[category] ?? TargetIcon;
          const count = bySlug[category].length;
          return (
            <div
              key={category}
              id={slugifyCategory(category)}
              className={styles.categoryBlock}
            >
              <div className={styles.categoryHead}>
                <span className={styles.categoryIconWrap}>
                  <CategoryIcon className={styles.categoryIcon} />
                </span>
                <h2 className={styles.categoryTitle}>{t.conditionsIndex.categories[category] ?? category}</h2>
                <span className={styles.categoryCount}>
                  {count} {count > 1 ? t.conditionsIndex.conditionPlural : t.conditionsIndex.conditionSingular}
                </span>
              </div>

              <div className={styles.grid}>
                {bySlug[category].map((c) => {
                  const image = CONDITION_IMAGE[c.slug];
                  const localized = t.conditionsNav[c.slug];
                  return (
                    <Link key={c.slug} href={`/conditions/${c.slug}`} className={styles.card}>
                      <div className={styles.cardIconWrap}>
                        {image ? (
                          <Image src={image} alt="" width={44} height={44} className={styles.cardIconImg} />
                        ) : (
                          <PainDotIcon className={styles.cardFallbackIcon} />
                        )}
                      </div>
                      <div className={styles.cardBody}>
                        <h3>{localized?.shortName ?? c.shortName}</h3>
                        <p>{c.heroSubtitle}</p>
                        <span className={styles.cardLink}>
                          {t.conditionsIndex.learnMore} <span className={styles.cardArrow}>→</span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
