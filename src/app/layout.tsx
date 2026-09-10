import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import Script from "next/script";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import StructuredData from "@/components/StructuredData/StructuredData";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { SITE } from "@/lib/siteData";
// @ts-ignore
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  // Dominio base: las URLs canónicas y las previews de redes sociales se
  // resuelven contra esta base en vez de rutas relativas.
  metadataBase: new URL("https://corona-handsontherapy.com"),
  title:
    "Corona Hands-On Therapy | Physical Therapy, Chiropractic & Acupuncture — Elmhurst, NY",
  description:
    "Corona Hands-On Therapy in Elmhurst, NY provides physical therapy, chiropractic care, and acupuncture for auto, work, home, and personal injury recovery.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/images/Logo3.png",
        sizes: "192x192", 
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${fraunces.variable} ${publicSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Ficha del negocio para Google (schema.org). Ver StructuredData.tsx */}
        <StructuredData />

        {/* Google tag (gtag.js) — Google Ads y Analytics.
            "afterInteractive" lo carga tras pintar la página: mide igual
            pero no retrasa lo que ve el paciente. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE.googleTagId}');
          `}
        </Script>

        <LanguageProvider>
          {children}
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}