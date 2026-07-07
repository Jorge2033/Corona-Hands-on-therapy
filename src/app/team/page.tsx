import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Team from "@/components/Team/Team";
import { TEAM_INTRO } from "@/lib/siteData";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "Our Team | Corona Hands-On Therapy",
  description:
    "Meet the physical therapy, chiropractic, and acupuncture providers at Corona Hands-On Therapy in Elmhurst, NY.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.breadcrumbContainer}>
          <div className={`container ${styles.breadcrumb}`}>
            <Link href="/">Home</Link>
            <span aria-hidden="true">»</span>
            <span aria-current="page">Our Team</span>
          </div>
        </div>

        {/* Sección Hero Ampliada y Centrada */}
        <div className={styles.hero}>
          <h1 className={styles.title}>The specialists behind your recovery.</h1>
          <p className={styles.intro}>{TEAM_INTRO}</p>
        </div>

        {/* Cuadrícula del equipo con un contenedor alineado */}
        <div className={styles.teamSection}>
          <Team />
        </div>
      </main>
      <Footer />
    </>
  );
}
