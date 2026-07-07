import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReferralForm from "./ReferralForm";
import styles from "./referral.module.css";

export const metadata: Metadata = {
  title: "Refer a Friend | Corona Hands-On Therapy",
  description:
    "Know someone dealing with pain from an accident or injury? Refer them to Corona Hands-On Therapy in Elmhurst, NY.",
};

export default function ReferAFriendPage() {
  return (
    <>
      <Header />
      <main className={styles.mainBackground}>
        {/* MIGA DE PAN / BREADCRUMB IDENTICA */}
        <div className={styles.breadcrumbContainer}>
          <div className={styles.breadcrumb}>
            Home » Patient Information » Refer a Friend
          </div>
        </div>

        <div className={styles.layoutContainer}>
          
          {/* COLUMNA IZQUIERDA: CONTENIDO Y FORMULARIO CENTRADO */}
          <div className={styles.leftColumn}>
            <section className={styles.hero}>
              <h1 className={styles.title}>Refer a friend or family member.</h1>
              <p className={styles.intro}>
                If someone you know is dealing with pain, recovering from an accident, or
                putting off treatment for a condition that&apos;s holding them back physically,
                a referral from someone they trust often makes the difference in whether
                they actually seek help. Many people wait far too long to treat pain or
                injury, which usually makes recovery slower and more difficult.
              </p>
              <p className={styles.intro}>
                If you know someone in pain or recovering from an injury who could benefit
                from our care, let us know below and our team will reach out to them
                directly.
              </p>
            </section>

            {/* Contenedor que centra el formulario */}
            <div className={styles.formCenteringWrapper}>
              <ReferralForm />
            </div>
          </div>

          {/* COLUMNA DERECHA: SIDEBAR IDÉNTICO A PATIENT FORMS */}
          <aside className={styles.sidebar}>
            
            {/* Widget de Enlaces Rápidos */}
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
                <li>
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

            {/* Banner Promocional idéntico */}
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