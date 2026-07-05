import { ShieldIcon, ClockIcon, BuildingIcon } from "@/components/icons/Icons";
import styles from "./TrustStrip.module.css";

export default function TrustStrip() {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.item}>
          <ShieldIcon className={styles.icon} />
          <span>Auto, work, home &amp; personal injury cases welcome</span>
        </div>
        <div className={styles.item}>
          <ClockIcon className={styles.icon} />
          <span>Same-week appointments available</span>
        </div>
        <div className={styles.item}>
          <BuildingIcon className={styles.icon} />
          <span>Located in Elmhurst, Queens</span>
        </div>
      </div>
    </div>
  );
}