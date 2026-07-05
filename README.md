# Corona Hands-On Therapy — Landing Page

Sitio web modular construido con **Next.js 14 + TypeScript + CSS Modules** para Corona
Hands-On Therapy (Elmhurst, NY).

## Stack

- **Next.js (App Router)** — framework de React, con API routes integradas (no se
  necesita un servidor backend aparte).
- **TypeScript** — tipado para evitar errores en los datos del sitio y el formulario.
- **CSS Modules** — estilos propios por componente (sin Bootstrap ni librerías de UI).
- **Nodemailer + Gmail** — envío de correos del formulario de contacto.

## Estructura del proyecto

```
src/
  app/
    layout.tsx          -> layout raíz, fuentes (Fraunces + Public Sans)
    page.tsx             -> ensambla todos los componentes de la página
    globals.css          -> variables de diseño (colores, radios, etc.)
    api/contact/route.ts -> backend del formulario (envía el email)
  components/
    Header/               -> nav sticky + dropdown Llamar/WhatsApp + menú móvil
    Hero/
    TrustStrip/
    Services/
    About/
    Testimonials/
    Contact/              -> Contact.tsx (info+mapa) + ContactForm.tsx (cliente)
    Footer/
    icons/Icons.tsx        -> todos los íconos SVG reutilizables
  lib/
    siteData.ts           -> ÚNICA fuente de verdad: teléfono, horario, servicios,
                              providers, tipos de caso, testimonios
    types.ts               -> tipos compartidos del formulario
```

**Para cambiar cualquier dato de la clínica (teléfono, horario, providers, etc.)
solo edita `src/lib/siteData.ts`** — se actualiza automáticamente en todo el sitio.

## 1. Instalación local

```bash
npm install
```

## 2. Configurar el envío de correo (Gmail)

El formulario de contacto necesita una **contraseña de aplicación** de Gmail (no tu
contraseña normal de Google):

1. Activa la verificación en 2 pasos en la cuenta `coronahealthcare90@gmail.com`:
   https://myaccount.google.com/security
2. Genera una contraseña de aplicación en:
   https://myaccount.google.com/apppasswords
   (elige "Correo" y "Otro" como dispositivo, ej. "Corona Website")
3. Copia el archivo de ejemplo y pon tus valores reales:

```bash
cp .env.local.example .env.local
```

Edita `.env.local`:

```
GMAIL_USER=coronahealthcare90@gmail.com
GMAIL_APP_PASSWORD=la-contraseña-de-16-caracteres-que-google-te-dio
CONTACT_TO_EMAIL=coronahealthcare90@gmail.com
```

`.env.local` **nunca se sube a GitHub** (ya está en `.gitignore`).

## 3. Correr en desarrollo

```bash
npm run dev
```

Abre http://localhost:3000

## 4. Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit: Corona Hands-On Therapy landing page"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/corona-landing.git
git push -u origin main
```

## 5. Publicar con dominio propio (Vercel)

1. Ve a https://vercel.com y conecta tu cuenta de GitHub
2. Importa el repositorio `corona-landing`
3. En **Environment Variables**, agrega las mismas 3 variables de `.env.local`:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `CONTACT_TO_EMAIL`
4. Deploy — Vercel te da un dominio gratis tipo `corona-landing.vercel.app`
5. Para tu dominio propio (ej. `coronahandsontherapy.com`):
   - Cómpralo en Namecheap, GoDaddy, o Google Domains
   - En Vercel → Project → Settings → Domains, agrega el dominio
   - Vercel te da los registros DNS (A / CNAME) que debes configurar en el proveedor
     donde compraste el dominio
   - Se propaga en unos minutos a 24 horas

Cada vez que hagas `git push` a `main`, Vercel vuelve a desplegar automáticamente.

## Pendientes (marcados como PLACEHOLDER en el código)

- [ ] Fotos reales de la clínica (`src/components/Hero/Hero.tsx`)
- [ ] Fotos reales de los 3 providers (`src/lib/siteData.ts` → campo `photo` de `TEAM`,
      subir las imágenes a `public/images/team/` y poner la ruta ahí)
- [ ] Testimonios reales de pacientes con su consentimiento (`src/lib/siteData.ts` →
      `TESTIMONIALS`)
- [ ] Página de Política de Privacidad y Términos de Uso (los links del footer y del
      formulario apuntan a `#` por ahora)
