import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FaqAccordion from "./FaqAccordion";
import { GENERAL_FAQS } from "@/lib/faqData";
import { PATIENT_QUICK_LINKS } from "@/lib/siteData";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
import styles from "./faqs.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Corona Hands-On Therapy",
  description:
    "Find answers to common questions about physical therapy, chiropractic care, and acupuncture at Corona Hands-On Therapy.",
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main className={styles.mainBackground}>
        <div className={styles.breadcrumbContainer}>
          <div className={styles.breadcrumb}>
            Home » Patient Information » FAQs
          </div>
        </div>

        <div className={styles.layoutContainer}>
          
          {/* COLUMNA IZQUIERDA */}
          <div className={styles.leftColumn}>
            <div className={styles.hero}>
              <h1 className={styles.title}>Frequently asked questions.</h1>
              <p className={styles.intro}>
                New to physical therapy, chiropractic care, or acupuncture? Here are answers to the questions we hear most from patients before their first visit. Don&apos;t see your question here? Call us at <a href="tel:+13472299167">(347) 229-9167</a>.
              </p>
            </div>

            <div className={styles.contentSection}>
              {/* Le pasamos directamente tu constante GENERAL_FAQS */}
              <FaqAccordion items={GENERAL_FAQS} />
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <aside className={styles.sidebar}>
            <QuickLinksCard links={PATIENT_QUICK_LINKS} activeHref="/patient-info/faqs" />
            <PainFreeCta />
          </aside>

        </div>
      </main>
      <Footer />
    </>
  );
}