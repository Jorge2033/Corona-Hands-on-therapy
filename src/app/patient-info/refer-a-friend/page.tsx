import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ReferralForm from "./ReferralForm";
import { PATIENT_QUICK_LINKS } from "@/lib/siteData";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
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
            <div className={styles.hero}>
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
            </div>

            {/* Contenedor que centra el formulario */}
            <div className={styles.formCenteringWrapper}>
              <ReferralForm />
            </div>
          </div>

          {/* COLUMNA DERECHA: SIDEBAR */}
          <aside className={styles.sidebar}>
            <QuickLinksCard links={PATIENT_QUICK_LINKS} activeHref="/patient-info/refer-a-friend" />
            <PainFreeCta />
          </aside>

        </div>
      </main>
      <Footer />
    </>
  );
}