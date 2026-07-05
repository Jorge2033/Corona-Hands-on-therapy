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
      <main>
        <section className={`container ${styles.hero}`}>
          <div className="eyebrow">Our Team</div>
          <h1 className={styles.title}>The providers behind your recovery.</h1>
          <p className={styles.intro}>{TEAM_INTRO}</p>
        </section>

        <section className="container" style={{ paddingTop: 0 }}>
          <Team />
        </section>
      </main>
      <Footer />
    </>
  );
}