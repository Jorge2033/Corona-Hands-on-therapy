import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CAREERS_INTRO } from "@/lib/siteData";
import CareersForm from "./CareersForm";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Join Our Team | Corona Hands-On Therapy",
  description:
    "Careers at Corona Hands-On Therapy in Elmhurst, NY — physical therapy, chiropractic, acupuncture, and front-desk roles.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <section className={`container ${styles.hero}`}>
          <div className="eyebrow">Join Our Team</div>
          <h1 className={styles.title}>Grow your career at Corona Hands-On Therapy.</h1>
          <p className={styles.intro}>{CAREERS_INTRO}</p>
        </section>

        <section className="container" style={{ paddingTop: 0, paddingBottom: 80 }}>
          <CareersForm />
        </section>
      </main>
      <Footer />
    </>
  );
}