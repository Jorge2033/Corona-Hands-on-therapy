```markdown
# Corona Hands-On Therapy — Landing Page

A highly modular, performance-optimized, and fully responsive landing page built with **Next.js 14 (App Router)**, **TypeScript**, and **CSS Modules** for **Corona Hands-On Therapy** located in Elmhurst, NY.

This project is structured following modern frontend web standards, ensuring type safety, rapid loading times, full SEO optimization, and a single source of truth for seamless content management.

---

## 🚀 Tech Stack & Core Technologies

* **Next.js 14 (App Router)** — Production-grade React framework utilizing Server Components for optimal performance and SEO, with built-in API Routes eliminating the need for a separate backend architecture.
* **TypeScript** — Strict type-safety layer across the codebase ensuring predictable data flow, robust form validation, and preventative debugging.
* **CSS Modules** — Component-scoped, zero-dependency styling architecture preventing class name collisions and maintaining a clean, lightweight CSS footprint without external UI library overhead.
* **Nodemailer + Gmail API** — Secure, automated server-side email dispatching service for patient inquiries and contact form submissions.

---

## 📂 Comprehensive Project Directory Structure

Based on the actual project repository configuration, the structure is organized as follows:

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
├── public/                     # Static assets (images, logos, favicon, etc.)
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

## 🛠️ Step-by-Step Local Development Setup

### 1. Installation

Clone your repository and install the production and development dependencies using npm:

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

*Note: `.env.local` contains sensitive secrets and is explicitly blocked from tracking inside `.gitignore`.*

### 3. Run the Development Server

Initiate the Next.js local compilation instance:

```bash
npm run dev

```

Open your browser and navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to review the live reload pipeline.

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

### Step 3: Trigger Build

Click **Deploy**. Within less than a minute, Vercel will issue a live, globally distributed SSL-secured temporary canonical domain (e.g., `corona-landing.vercel.app`).

### Step 4: Map Custom Professional Domain

To bind a professional business domain (e.g., `coronahandsontherapy.com`):

1. Inside your Vercel Project Dashboard, navigate to **Settings > Domains**.
2. Type in your domain name and click **Add**.
3. Vercel will provide specific DNS records. Log into your external Registrar (Namecheap, GoDaddy, Google/Squarespace Domains) and configure the records:
* **A Record:** Pointing `@` to Vercel's Edge network IP (`76.76.21.21`).
* **CNAME Record:** Pointing `www` to `cname.vercel-dns-com`.


4. Allow a few minutes to a maximum of 24 hours for global propagation and automated SSL certificate assignment.

> 🔄 **Continuous Integration (CI/CD):** Every time you merge or execute `git push` into the `main` branch, Vercel detects the hook and builds/deploys a zero-downtime production revision instantly.

```

```
