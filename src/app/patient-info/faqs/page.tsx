import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FaqAccordion from "./FaqAccordion";
import { GENERAL_FAQS } from "@/lib/faqData";
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
            <section className={styles.hero}>
              <h1 className={styles.title}>Frequently asked questions.</h1>
              <p className={styles.intro}>
                New to physical therapy, chiropractic care, or acupuncture? Here are answers to the questions we hear most from patients before their first visit. Don&apos;t see your question here? Call us at <a href="tel:+13472299167">(347) 229-9167</a>.
              </p>
            </section>

            <div className={styles.contentSection}>
              {/* Le pasamos directamente tu constante GENERAL_FAQS */}
              <FaqAccordion items={GENERAL_FAQS} />
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarWidget}>
              <h4 className={styles.widgetTitle}>Quick links</h4>
              <ul className={styles.quickLinksList}>
                <li>
                  <a href="/patient-info/forms">
                    <span className={styles.linkIcon}>📋</span> Patient Info / Forms
                  </a>
                </li>
                <li>
                  <a href="/#contact">
                    <span className={styles.linkIcon}>📍</span> Our Locations
                  </a>
                </li>
                <li className={styles.activeLink}>
                  <a href="/patient-info/faqs">
                    <span className={styles.linkIcon}>❓</span> FAQs
                  </a>
                </li>
                <li>
                  <a href="/conditions">
                    <span className={styles.linkIcon}>🚶‍♂️</span> View More Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.promoWidget}>
              <div className={styles.promoImagePlaceholder}>
                <div className={styles.promoOverlay}>
                  <h5>Are You Ready To Live Pain-Free?</h5>
                  <a href="/#contact" className={styles.promoBtn}>Request Appointment</a>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>
      <Footer />
    </>
  );
}