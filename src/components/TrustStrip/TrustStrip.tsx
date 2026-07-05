import { ShieldIcon, ClockIcon, BuildingIcon } from "@/components/icons/Icons";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.item}>
          <ShieldIcon className={styles.icon} />
          Auto, work, home &amp; personal injury cases welcome
        </div>
        <div className={styles.item}>
          <ClockIcon className={styles.icon} />
          Same-week appointments available
        </div>
        <div className={styles.item}>
          <BuildingIcon className={styles.icon} />
          Located in Elmhurst, Queens
        </div>
      </div>
    </div>
  );
}
