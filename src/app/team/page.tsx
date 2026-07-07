import type { Metadata } from "next";
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
      <main style={{ backgroundColor: "#fbf9f6", overflowX: "hidden" }}>
        
        {/* Sección Hero Ampliada y Centrada */}
        <section className={styles.hero}>
          <div className="eyebrow" style={{ textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600, color: "#00a896" }}>
            Our Team
          </div>
          <h1 className={styles.title}>The specialists behind your recovery.</h1>
          <p className={styles.intro}>{TEAM_INTRO}</p>
        </section>

        {/* Cuadrícula del equipo con un contenedor alineado */}
        <section style={{ maxWidth: "960px", margin: "0 auto", padding: "10px 20px 80px 20px" }}>
          <Team />
        </section>
        
      </main>
      <Footer />
    </>
  );
}