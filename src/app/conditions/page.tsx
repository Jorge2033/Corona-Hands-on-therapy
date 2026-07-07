import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CONDITIONS } from "@/lib/conditionsData";
import styles from "./conditions.module.css";

export const metadata: Metadata = {
  title: "Conditions We Treat | Corona Hands-On Therapy",
  description:
    "Learn about the causes, symptoms, and treatment options for common conditions treated at Corona Hands-On Therapy in Elmhurst, NY.",
};

export default function ConditionsIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className={`container ${styles.hero}`}>
          <div className="eyebrow">Conditions We Treat</div>
          <h1 className={styles.title}>Find relief for your specific pain.</h1>
          <p className={styles.intro}>
            Every condition below can have a range of causes — from an auto accident to
            repetitive strain at work. Select a condition to learn more about causes,
            symptoms, and how our team approaches treatment.
          </p>
        </section>

        <section className="container" style={{ paddingTop: 0 }}>
          <div className={styles.grid}>
            {CONDITIONS.map((c) => (
              <Link key={c.slug} href={`/conditions/${c.slug}`} className={styles.card}>
                <h3>{c.shortName}</h3>
                <p>{c.heroSubtitle}</p>
                <span className={styles.cardLink}>Learn more →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
