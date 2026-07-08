"use client";

import Link from "next/link";
import ReferralForm from "./ReferralForm";
import { PATIENT_QUICK_LINKS } from "@/lib/siteData";
import QuickLinksCard from "@/components/Sidebar/QuickLinksCard";
import PainFreeCta from "@/components/Sidebar/PainFreeCta";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./referral.module.css";

export default function ReferAFriendContent() {
  const { t } = useLanguage();
  return (
    <main className={styles.mainBackground}>
      {/* MIGA DE PAN / BREADCRUMB IDENTICA */}
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Link href="/">{t.breadcrumb.home}</Link> » {t.breadcrumb.patientInformation} » {t.referral.breadcrumbLabel}
        </div>
      </div>

      <div className={styles.layoutContainer}>

        {/* COLUMNA IZQUIERDA: CONTENIDO Y FORMULARIO CENTRADO */}
        <div className={styles.leftColumn}>
          <div className={styles.hero}>
            <h1 className={styles.title}>{t.referral.title}</h1>
            <p className={styles.intro}>{t.referral.intro1}</p>
            <p className={styles.intro}>{t.referral.intro2}</p>
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
  );
}
