import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
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
  title:
    "Corona Hands-On Therapy | Physical Therapy, Chiropractic & Acupuncture — Elmhurst, NY",
  description:
    "Corona Hands-On Therapy in Elmhurst, NY provides physical therapy, chiropractic care, and acupuncture for auto, work, home, and personal injury recovery.",
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
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}