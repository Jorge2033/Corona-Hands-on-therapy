import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SITE, PATIENT_QUICK_LINKS } from "@/lib/siteData";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
import styles from "./forms.module.css";

export const metadata: Metadata = {
  title: "Patient Info & Forms | Corona Hands-On Therapy",
  description:
    "Everything you need before your first visit to Corona Hands-On Therapy in Elmhurst, NY, including downloadable patient intake forms.",
};

export default function PatientFormsPage() {
  return (
    <>
      <Header />
      {/* Añadimos ID al inicio para el autoref de Patient Info */}
      <main className={styles.mainBackground} id="patient-top">
        {/* MIGA DE PAN / BREADCRUMB */}
        <div className={styles.breadcrumbContainer}>
          <div className={styles.breadcrumb}>
            Home » Patient Information » Patient Info / Forms
          </div>
        </div>

        <div className={styles.layoutContainer}>
          {/* COLUMNA IZQUIERDA: CONTENIDO PRINCIPAL */}
          <div className={styles.leftColumn}>
            
            <div className={styles.hero}>
              <h1 className={styles.title}>Welcome to Hands-On Physical Therapy</h1>
              <p className={styles.intro}>
                We are here to help you enjoy your life, pain-free! To make a convenient appointment, simply call us
                today at <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a>. Our practice is dedicated to helping our patients identify the cause of their pain and creating a custom treatment program that will allow them to return to normal activities pain-free.
              </p>
            </div>

            <div className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Patient Forms</h2>
              <p className={styles.sectionSubtitle}>
                At Hands-On Physical Therapy, we want to maximize your time with us. Therefore, we offer our paperwork online, so you can complete it in the privacy of your own home. Prior to your first visit, please download the Patient Intake Forms and bring them with you to your first visit, along with your insurance information and photo ID.
              </p>

              {/* CARD DE DESCARGA */}
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" className={styles.icon} aria-hidden="true">
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path
                      d="M12 12v6M9 15l3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.cardBody}>
                  <h3>Patient Intake Forms</h3>
                  <p>
                    Save time at your first visit by downloading and completing your
                    intake paperwork at home. Please bring the completed forms, your
                    insurance card, and a photo ID to your appointment.
                  </p>
                  <a href="/Documents/patient-intake-form.pdf" download className={styles.downloadBtn}>
                    Download &amp; Print Forms
                  </a>
                </div>
              </div>

              {/* REQUISITOS ANTES DE LA VISITA */}
              <div className={styles.notesBlock} style={{ marginBottom: "35px" }}>
                <h3>Please prepare the following for your first visit:</h3>
                <ul>
                  <li>Arrive 15 minutes early for your first appointment.</li>
                  <li>Bring with you a copy of your insurance card and a photo ID.</li>
                  <li>Please call our office to verify your insurance benefits beforehand.</li>
                </ul>
              </div>

              {/* SUBSECCIÓN FAQS (Con ID para el link del Sidebar) */}
              <div className={styles.notesBlock} id="faqs-section" style={{ marginBottom: "35px", paddingTop: "20px" }}>
                <h3>Frequently Asked Questions (FAQs)</h3>
                <ul className={styles.faqsList}>
                  <li>
                    <strong>Do I need a prescription from a doctor?</strong>
                    <p>New York is a Direct Access state, meaning you can see a physical therapist for up to 30 days or 10 visits without a referral.</p>
                  </li>
                  <li>
                    <strong>What should I wear to my first appointment?</strong>
                    <p>Wear loose, comfortable clothing that allows easy access to your area of pain or injury.</p>
                  </li>
                </ul>
              </div>

              {/* SUBSECCIÓN CONDITIONS (Con ID para el link del Sidebar) */}
              <div className={styles.notesBlock} id="conditions-section" style={{ paddingTop: "20px" }}>
                <h3>What to expect at your first visit &amp; Conditions We Treat</h3>
                <ul>
                  <li>A full evaluation to identify the cause of your pain, not just the symptoms.</li>
                  <li>A conversation about your goals and daily activities so your plan fits your life.</li>
                  <li>A personalized treatment plan across physical therapy, chiropractic care, and acupuncture as needed.</li>
                  <li>Clear next steps and a realistic timeline for your recovery.</li>
                </ul>
                <p className={styles.disclaimer}>
                  <strong>PLEASE NOTE:</strong> Remember consistency of your visits and physical therapy treatment are very important in reaching your goals and help return you to a healthy lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: SIDEBAR */}
          <aside className={styles.sidebar}>
            <QuickLinksCard links={PATIENT_QUICK_LINKS} activeHref="/patient-info/forms" />
            <PainFreeCta />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}