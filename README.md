```markdown
# Corona Hands-On Therapy — Landing Page

Welcome to the official repository for the **Corona Hands-On Therapy** landing page, a physical therapy, chiropractic care, and acupuncture clinic located in Elmhurst, NY. 

This website has been built following modern frontend web development standards to provide an optimal, fast, and responsive user experience for patients seeking recovery-focused care, featuring a unified architecture that serves as a single source of truth for all clinical data management.

---

## 🚀 Tech Stack & Core Technologies

* **Next.js 14 (App Router)** — Production-grade React framework utilizing Server Components for optimal performance and SEO, with built-in API Routes eliminating the need for a separate backend architecture.
* **TypeScript** — Strict type-safety layer across the codebase ensuring predictable data flow, robust form validation, and preventative debugging.
* **CSS Modules** — Component-scoped, zero-dependency styling architecture preventing class name collisions and maintaining a clean, lightweight CSS footprint without external UI library overhead.
* **Nodemailer + Gmail API** — Secure, automated server-side email dispatching service for patient inquiries and contact form submissions.

---

## 📂 Comprehensive Project Directory Structure

Based on the actual project repository configuration, the application source code is organized as follows:

```text
Corona-Hands-On-therapy/
├── .env.local                  # Local environment variables (git-ignored)
├── next-env.d.ts               # TypeScript Next.js declarations
├── next.config.js              # Next.js custom configuration settings
├── package.json                # Project dependencies, metadata, and script definitions
├── package-lock.json           # Exact dependency tree lockfile
├── tsconfig.json               # TypeScript compiler configuration options
├── tsconfig.tsbuildinfo        # TypeScript incremental compilation cache
├── README.md                   # Project documentation
│
├── public/                     # Static assets (images, logos, screenshots, favicon, etc.)
│
├── src/                        # Main Application Source Code
│   ├── app/                    # Next.js App Router Architecture
│   │   ├── api/                # API Route Handlers (Backend Logic)
│   │   │   └── contact/
│   │   │       └── route.ts    # Secure Nodemailer endpoint for contact forms
│   │   ├── careers/            # Careers page / section routing context
│   │   ├── conditions/         # Treated medical conditions routing context
│   │   ├── patient-info/       # Essential documentation and forms for patients
│   │   ├── team/               # Medical personnel directory routing context
│   │   ├── globals.css         # Global design tokens (colors, typography, variables)
│   │   ├── layout.tsx          # Root Layout injecting global fonts (Fraunces + Public Sans)
│   │   └── page.tsx            # Main application landing page wrapper assembling components
│   │
│   ├── components/             # Reusable UI & Layout Components
│   │   ├── About/              # Clinic presentation and company history
│   │   ├── Contact/            # Interactive map integration and comprehensive contact channels
│   │   ├── FloatingActions/    # Persistent overlay quick-access communication widgets
│   │   ├── Footer/             # Comprehensive multi-column copyright, links, and legal footer
│   │   ├── Header/             # Sticky responsive navbar with Call/WhatsApp actions & mobile drawer
│   │   ├── Hero/               # High-impact primary header section with primary CTA hooks
│   │   ├── icons/
│   │   │   └── Icons.tsx       # Single optimized file compiling reusable inline SVG vector assets
│   │   ├── PainAreas/          # Interactive/visual clinical specialization and pain topography mapping
│   │   ├── Reviews/            # Dynamic social proof and patient testimonials section
│   │   ├── Services/           # Detailed clinic physical therapy services catalog
│   │   ├── Sidebar/            # Secondary auxiliary or administrative dashboard navigation
│   │   ├── Team/               # Clinic practitioners profile presentation
│   │   └── TrustStrip/         # Value-proposition horizontal credential/trust badge matrix
│   │
│   └── lib/                    # Core Infrastructure Utilities
│       ├── siteData.ts         # SINGLE SOURCE OF TRUTH (Phone numbers, schedules, lists, providers)
│       └── types.ts            # Shared TypeScript interface and type declarations

```

> 💡 **CRITICAL MAINTENANCE NOTE:** To modify any global clinic data (such as phone numbers, working hours, active insurance providers, list of services, or text testimonials), **only edit `src/lib/siteData.ts**`. Every component references this file directly, and changes will instantly propagate across the entire website.

---

## 📸 Interface Preview

Below are the visual highlights of the modular design implemented for the clinic.

### 1. Hero Section & Main Value Proposition

*Professional design optimized for patient conversion, clear calls to action, and seamless mobile engagement.*
<img width="1469" height="803" alt="Captura de pantalla 2026-07-07 a la(s) 11 11 23 p  m" src="https://github.com/user-attachments/assets/b59bd748-69b1-4ccf-a537-8ac48f24a0d0" />


### 2. Clinical Disciplines & Services Offered

*Clear layout displaying Physical Therapy, Chiropractic Care, and Acupuncture specialized treatments.*

### 3. Specialty Anatomy Mapping (Pain Areas)

*Interactive topography component allowing patients to visually explore clinical specializations based on symptoms.*

### 4. Patient Experience & Testimonials

*Social proof module designed to highlight patient success, five-star ratings, and recovery stories.*

---

## 🛠️ Step-by-Step Local Development Setup

### 1. Installation

Clone your repository, navigate to the project directory, and install all dependencies using npm:

```bash
npm install

```

### 2. Configure Environment Variables (Gmail Integration)

The contact form relies on a secure server-side routine powered by Nodemailer. It requires a dedicated **App Password** from your Google Account (do not use your primary personal password).

1. Go to your Google Account Security Settings for `coronahealthcare90@gmail.com`:
👉 [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Turn on **2-Step Verification**.
3. Navigate to **App Passwords**:
👉 [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Select *Mail* and *Other (Custom Name)* (e.g., "Corona Website PT").
5. Generate and securely copy the generated 16-character string.
6. Localize your environment configuration template:

```bash
cp .env.local.example .env.local

```

Open `.env.local` and substitute your actual parameters:

```env
GMAIL_USER=coronahealthcare90@gmail.com
GMAIL_APP_PASSWORD=your_16_character_generated_app_password
CONTACT_TO_EMAIL=coronahealthcare90@gmail.com

```

*Note: `.env.local` contains sensitive credentials and is explicitly blocked from git tracking inside `.gitignore`.*

### 3. Run the Development Server

Initiate the Next.js local compilation development instance:

```bash
npm run dev

```

Open your browser and navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to review the live reload application pipeline.

---

## 📤 Version Control Workflow (GitHub)

To push your local repository configuration to your remote GitHub hosting space:

```bash
# Initialize git tracker if not already done
git init

# Track files
git add .

# Create initial baseline commit snapshot
git commit -m "Initial commit: Corona Hands-On Therapy highly-detailed modular landing page"

# Establish target default branch
git branch -M main

# Link to your remote repository URL
git remote add origin [https://github.com/YOUR-USERNAME/corona-landing.git](https://github.com/YOUR-USERNAME/corona-landing.git)

# Execute push to origin target tracking branch
git push -u origin main

```

---

## 🌐 Production Deployment Guide via Vercel

Vercel is the native cloud serverless engine optimized perfectly for Next.js 14 App Routers.

### Step 1: Connect Repository

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New > Project** and link/import your `corona-landing` GitHub repository.

### Step 2: Inject Environment Variables

Before triggering the deployment build, expand the **Environment Variables** section and register the identical keys from your local configuration:

* `GMAIL_USER`
* `GMAIL_APP_PASSWORD`
* `CONTACT_TO_EMAIL`


```
