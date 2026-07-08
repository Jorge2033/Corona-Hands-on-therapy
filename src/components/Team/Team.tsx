"use client";

import { TEAM } from "@/lib/siteData";
import { StethoscopeIcon, HeadsetIcon } from "@/components/icons/Icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./Team.module.css";

const DEPARTMENT_ICON: Record<string, (props: { className?: string }) => JSX.Element> = {
  "Clinical Care": StethoscopeIcon,
  "Patient Support & Administration": HeadsetIcon,
};

function slugifyDepartment(department: string): string {
  return department.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Team() {
  const { t } = useLanguage();

  // Agrupamos por departamento manteniendo el orden de aparición en TEAM.
  const departments: string[] = [];
  const byDepartment: Record<string, typeof TEAM[number][]> = {};
  for (const member of TEAM) {
    if (!byDepartment[member.department]) {
      byDepartment[member.department] = [];
      departments.push(member.department);
    }
    byDepartment[member.department].push(member);
  }

  return (
    <>
      {/* Navegación rápida entre departamentos */}
      <nav className={styles.jumpNav} aria-label="Jump to department">
        {departments.map((department) => (
          <a key={department} href={`#${slugifyDepartment(department)}`} className={styles.jumpPill}>
            {t.team.departments[department] ?? department}
            <span className={styles.jumpCount}>{byDepartment[department].length}</span>
          </a>
        ))}
      </nav>

      {departments.map((department) => {
        const DepartmentIcon = DEPARTMENT_ICON[department] ?? StethoscopeIcon;
        const count = byDepartment[department].length;
        return (
          <div key={department} id={slugifyDepartment(department)} className={styles.departmentBlock}>
            <div className={styles.departmentHead}>
              <span className={styles.departmentIconWrap}>
                <DepartmentIcon className={styles.departmentIcon} />
              </span>
              <h2 className={styles.departmentTitle}>{t.team.departments[department] ?? department}</h2>
              <span className={styles.departmentCount}>
                {count} {count > 1 ? t.team.memberPlural : t.team.memberSingular}
              </span>
            </div>

            <div className={styles.teamGrid}>
              {byDepartment[department].map((member) => (
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
                    <div className={styles.teamRole}>{t.teamMembers[member.id]?.role ?? member.role}</div>
                    <div className={styles.teamNote}>{t.teamMembers[member.id]?.note ?? member.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
