"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { CAREER_ROLES } from "@/lib/siteData";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import styles from "./CareersForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function CareersForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const file = data.get("resume") as File | null;
    let resumeBase64 = "";

    try {
      if (file && file.size > 0) {
        // Límite de 7 MB: coincide con el máximo que acepta el servidor
        if (file.size > 7 * 1024 * 1024) {
          setStatus("error");
          setErrorMsg(t.careers.fileTooLarge);
          return;
        }
        resumeBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const resultString = reader.result as string;
            const pureBase64 = resultString.split(",")[1] || "";
            resolve(pureBase64);
          };
          reader.onerror = (error) => reject(error);
        });
      }

      const firstName = String(data.get("firstName") || "").trim();
      const lastName = String(data.get("lastName") || "").trim();

      // Combinamos ambos campos en 'fullName' para pasar la validación del route.ts
      const payload = {
        formType: "careers",
        fullName: `${firstName} ${lastName}`.trim(),
        phone: String(data.get("phone") || "").trim(),
        email: String(data.get("email") || "").trim(),
        role: String(data.get("role") || ""),
        message: String(data.get("message") || ""),
        resume: resumeBase64, // El backend lo envía como archivo adjunto
        resumeName: file?.name || "",
      };

      const res = await fetch("/api/quick-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const result = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className={styles.pageContainer}>
      
      {/* 1. SECCIÓN HERO (FULL WIDTH & HEIGHT) */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>{t.careers.heroTitle}</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">{t.careers.breadcrumbHome}</Link>
            <span aria-hidden="true">»</span>
            <span aria-current="page">{t.careers.breadcrumbJoinTeam}</span>
          </nav>
        </div>
      </section>

      {/* CONTENEDOR CONTINUO Y COMPACTO DE CONTENIDO (PEGADO) */}
      <main className={styles.contentWrapper}>

        {/* TÍTULO PRINCIPAL DE BIENVENIDA PEGADO ABAJO DEL HERO */}
        <h2 className={styles.sectionTitle} style={{ marginTop: 0, marginBottom: "8px" }}>
          {t.careers.growTitle}
        </h2>

        {/* 2. SECCIÓN WHO ARE WE? PEGADA */}
        <section style={{ marginBottom: "15px" }}>
          <h2 className={styles.sectionTitle}>{t.careers.whoAreWeTitle}</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p><strong>{t.careers.whoAreWe1Title}</strong> {t.careers.whoAreWe1Text}</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p><strong>{t.careers.whoAreWe2Title}</strong> {t.careers.whoAreWe2Text}</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p><strong>{t.careers.whoAreWe3Title}</strong> {t.careers.whoAreWe3Text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN WHY WORK WITH US? PEGADA */}
        <section style={{ marginBottom: "15px" }}>
          <h2 className={styles.sectionTitle}>{t.careers.whyWorkTitle}</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p>{t.careers.whyWork1}</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p>{t.careers.whyWork2}</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p>{t.careers.whyWork3}</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p>{t.careers.whyWork4}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN PUESTOS ABIERTOS */}
        <section className={styles.vacanciesSection}>
          <h2 className={styles.sectionTitle}>{t.careers.vacanciesTitle}</h2>

          <div className={styles.vacancyCard}>
            <span>{t.careers.vacancy1}</span>
            <span className={styles.vacancyBadge}>{t.careers.openPosition}</span>
          </div>

          <div className={styles.vacancyCard}>
            <span>{t.careers.vacancy2}</span>
            <span className={styles.vacancyBadge}>{t.careers.openPosition}</span>
          </div>

          <div className={styles.vacancyCard}>
            <span>{t.careers.vacancy3}</span>
            <span className={styles.vacancyBadge}>{t.careers.openPosition}</span>
          </div>
        </section>

        {/* 5. SECCIÓN FORMULARIO, EN TARJETA BLANCA SOBRE EL MISMO FONDO DE LA PÁGINA */}
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <div className={styles.formSectionHeader}>
              <h2 style={{ marginBottom: "4px" }}>{t.careers.formHeading}</h2>
              <p style={{ marginTop: 0 }}>
                {t.careers.formSubtitle}
              </p>
            </div>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <h3 style={{ color: "var(--navy)", marginBottom: "4px" }}>{t.careers.receivedTitle}</h3>
                <p>{t.careers.receivedText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.grid}>

                  <div className={styles.field}>
                    <label htmlFor="firstName">{t.careers.firstName}</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="lastName">{t.careers.lastName}</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone">{t.careers.phone}</label>
                    <input type="tel" id="phone" name="phone" placeholder="(347) 000-0000" required />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">{t.careers.email}</label>
                    <input type="email" id="email" name="email" placeholder="name@example.com" required />
                  </div>

                  <div className={`${styles.field} ${styles.full}`}>
                    <label htmlFor="role">{t.careers.positionApplyingFor}</label>
                    <select id="role" name="role" required defaultValue="">
                      <option value="" disabled>{t.careers.selectPosition}</option>
                      {CAREER_ROLES.map((r) => (
                        <option key={r.value} value={r.value}>{t.careers.roles[r.value] ?? r.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className={`${styles.field} ${styles.full}`}>
                    <label htmlFor="resume">{t.careers.uploadResume}</label>
                    <div className={styles.fileInputContainer}>
                      <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
                      <div className={styles.fileHelpText}>{t.careers.fileHelpText}</div>
                    </div>
                  </div>

                  <div className={`${styles.field} ${styles.full}`}>
                    <label htmlFor="message">{t.careers.coverLetter}</label>
                    <textarea id="message" name="message" placeholder={t.careers.coverLetterPlaceholder} />
                  </div>

                  {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

                  <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                    {status === "sending" ? t.careers.sending : t.careers.submitApplication}
                  </button>

                </div>
              </form>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}