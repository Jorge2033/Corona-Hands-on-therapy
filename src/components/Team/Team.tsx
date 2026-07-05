import { TEAM } from "@/lib/siteData";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <div className={styles.teamGrid}>
      {TEAM.map((member) => (
        <div key={member.id} className={styles.teamCard}>
          <div className={styles.teamPhoto}>
            {member.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={member.photo} alt={`Photo of ${member.name}`} />
            ) : (
              // PLACEHOLDER: reemplazar con foto real (member.photo en siteData.ts)
              <span aria-hidden="true">{member.initials}</span>
            )}
          </div>
          <div>
            <div className={styles.teamName}>{member.name}</div>
            <div className={styles.teamRole}>{member.role}</div>
            <div className={styles.teamNote}>{member.note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}