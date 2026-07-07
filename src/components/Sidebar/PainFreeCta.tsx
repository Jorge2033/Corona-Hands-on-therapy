import styles from "./Sidebar.module.css";

export default function PainFreeCta() {
  return (
    <div className={styles.ctaCard}>
      <div className={styles.ctaOverlay}>
        <h4>Are You Ready To Live Pain-Free?</h4>
        <a href="/#contact" className={styles.ctaBtn}>
          Request Appointment
        </a>
      </div>
    </div>
  );
}
