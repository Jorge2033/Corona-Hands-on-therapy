"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { CAREER_ROLES } from "@/lib/siteData";
import styles from "./CareersForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function CareersForm() {
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

      // 🌟 ARREGLO DE ORO: Combinamos ambos campos en 'fullName' para pasar la validación del route.ts
      const payload = {
        formType: "careers",
        fullName: `${firstName} ${lastName}`.trim(), 
        phone: String(data.get("phone") || "").trim(),
        email: String(data.get("email") || "").trim(),
        role: String(data.get("role") || ""),
        message: String(data.get("message") || ""),
        resume: resumeBase64, // El backend lo mapeará automáticamente en 'extraRows'
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
          <h1>Join Our Team</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">»</span>
            <span aria-current="page">Join Our Team</span>
          </nav>
        </div>
      </section>

      {/* CONTENEDOR CONTINUO Y COMPACTO DE CONTENIDO (PEGADO) */}
      <main className={styles.contentWrapper}>

        {/* TÍTULO PRINCIPAL DE BIENVENIDA PEGADO ABAJO DEL HERO */}
        <h2 className={styles.sectionTitle} style={{ marginTop: 0, marginBottom: "8px" }}>
          Grow your career at Corona Hands-On Therapy.
        </h2>

        {/* 2. SECCIÓN WHO ARE WE? PEGADA */}
        <section style={{ marginBottom: "15px" }}>
          <h2 className={styles.sectionTitle}>Who are we?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p><strong>Forward-Thinking and Progressive:</strong> Our group of physical therapy offices is dedicated to enhancing patient well-being through manual therapy and advanced techniques.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p><strong>Advanced Diagnostic Testing:</strong> We offer cutting-edge diagnostic testing opportunities that allow our staff to stay at the forefront of physical therapy innovations.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p><strong>Career Growth:</strong> We provide significant career growth opportunities, including professional development, continuous education, and leadership training programs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN WHY WORK WITH US? PEGADA */}
        <section style={{ marginBottom: "15px" }}>
          <h2 className={styles.sectionTitle}>Why Work with Us?:</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p>Join a team committed to innovative patient care.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p>Access to the latest advancements in diagnostic testing.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p>Grow your career with our extensive development programs.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureText}>
                <p>Be part of a supportive and dynamic work environment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN PUESTOS ABIERTOS */}
        <section className={styles.vacanciesSection}>
          <h2 className={styles.sectionTitle}>Looking for a career at Corona Hands-On Therapy?</h2>

          <div className={styles.vacancyCard}>
            <span>Physical Therapist – Elmhurst Clinic</span>
            <span className={styles.vacancyBadge}>Open Position</span>
          </div>

          <div className={styles.vacancyCard}>
            <span>Chiropractor – Full Time</span>
            <span className={styles.vacancyBadge}>Open Position</span>
          </div>

          <div className={styles.vacancyCard}>
            <span>Physical Therapy Assistant</span>
            <span className={styles.vacancyBadge}>Open Position</span>
          </div>
        </section>

        {/* 5. SECCIÓN FORMULARIO, EN TARJETA BLANCA SOBRE EL MISMO FONDO DE LA PÁGINA */}
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <div className={styles.formSectionHeader}>
              <h2 style={{ marginBottom: "4px" }}>Contact us today or submit the form below</h2>
              <p style={{ marginTop: 0 }}>
                Advance your PT career by joining our team and training under the leaders in Diagnostic Testing. Gain expertise in EMG, NCV and MSK Ultrasound.
              </p>
            </div>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <h3 style={{ color: "var(--navy)", marginBottom: "4px" }}>Application Received Successfully!</h3>
                <p>Thank you for applying. Our recruitment team will review your profile shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.grid}>

                  <div className={styles.field}>
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" placeholder="(347) 000-0000" required />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" placeholder="name@example.com" required />
                  </div>

                  <div className={`${styles.field} ${styles.full}`}>
                    <label htmlFor="role">Position Applying For *</label>
                    <select id="role" name="role" required defaultValue="">
                      <option value="" disabled>Select a position</option>
                      {CAREER_ROLES.map((r) => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className={`${styles.field} ${styles.full}`}>
                    <label htmlFor="resume">Upload Resume *</label>
                    <div className={styles.fileInputContainer}>
                      <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
                      <div className={styles.fileHelpText}>Accepted file types: pdf, doc, docx. Max file size: 50 MB.</div>
                    </div>
                  </div>

                  <div className={`${styles.field} ${styles.full}`}>
                    <label htmlFor="message">Cover Letter</label>
                    <textarea id="message" name="message" placeholder="Tell us more about your clinical experience..." />
                  </div>

                  {status === "error" && <p className={styles.errorMsg}>{errorMsg}</p>}

                  <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Submit Application"}
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