import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CONDITIONS } from "@/lib/conditionsData";
import { PAIN_AREAS } from "@/lib/siteData";
import { StretchIcon, SpineIcon, TargetIcon, ShieldIcon, PainDotIcon } from "@/components/icons/Icons";
import styles from "./conditions.module.css";

export const metadata: Metadata = {
  title: "Conditions We Treat | Corona Hands-On Therapy",
  description:
    "Learn about the causes, symptoms, and treatment options for common conditions treated at Corona Hands-On Therapy in Elmhurst, NY.",
};

// Ícono representativo por categoría (mostrado junto al título de cada grupo).
const CATEGORY_ICON: Record<string, (props: { className?: string }) => JSX.Element> = {
  "Joint & Muscle Pain": StretchIcon,
  "Nerve Pain": SpineIcon,
  "Chronic Conditions": TargetIcon,
  "Injury Recovery": ShieldIcon,
};

// Imagen de cuerpo ya usada en el home (PainAreas), reutilizada aquí como ícono de tarjeta
// cuando existe una para el slug de la condición.
const CONDITION_IMAGE: Record<string, string> = Object.fromEntries(
  PAIN_AREAS.map((area) => [area.slug, area.image])
);

function slugifyCategory(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ConditionsIndexPage() {
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
    <>
      <Header />
      <main>
        <div className={styles.breadcrumbContainer}>
          <div className={`container ${styles.breadcrumb}`}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">»</span>
            <span aria-current="page">Conditions We Treat</span>
          </div>
        </div>

        <section className={`container ${styles.hero}`}>
          <div className="eyebrow">Conditions We Treat</div>
          <h1 className={styles.title}>Find relief for your specific pain.</h1>
          <p className={styles.intro}>
            Every condition below can have a range of causes — from an auto accident to
            repetitive strain at work. Select a condition to learn more about causes,
            symptoms, and how our team approaches treatment.
          </p>

          {/* Navegación rápida entre categorías */}
          <nav className={styles.jumpNav} aria-label="Jump to category">
            {categories.map((category) => (
              <a key={category} href={`#${slugifyCategory(category)}`} className={styles.jumpPill}>
                {category}
                <span className={styles.jumpCount}>{bySlug[category].length}</span>
              </a>
            ))}
          </nav>
        </section>

        <section className="container" style={{ paddingTop: 0 }}>
          {categories.map((category) => {
            const CategoryIcon = CATEGORY_ICON[category] ?? TargetIcon;
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
                  <h2 className={styles.categoryTitle}>{category}</h2>
                  <span className={styles.categoryCount}>
                    {bySlug[category].length} condition{bySlug[category].length > 1 ? "s" : ""}
                  </span>
                </div>

                <div className={styles.grid}>
                  {bySlug[category].map((c) => {
                    const image = CONDITION_IMAGE[c.slug];
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
                          <h3>{c.shortName}</h3>
                          <p>{c.heroSubtitle}</p>
                          <span className={styles.cardLink}>
                            Learn more <span className={styles.cardArrow}>→</span>
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
      <Footer />
    </>
  );
}
