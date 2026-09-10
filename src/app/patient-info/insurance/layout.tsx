import type { Metadata } from "next";

// La página de seguros es un componente cliente ("use client") y por eso no
// puede exportar metadata. Este layout se la aporta sin tener que dividirla.
// Es una página con búsquedas propias ("does X clinic take my insurance"),
// así que necesita su propio título en vez de heredar el genérico del sitio.

export const metadata: Metadata = {
  title: "Insurance Plans Accepted | Corona Hands-On Therapy — Elmhurst, NY",
  description:
    "See the insurance plans accepted at Corona Hands-On Therapy in Elmhurst, NY, including no-fault, workers' compensation, and major medical carriers.",
  alternates: {
    canonical: "/patient-info/insurance",
  },
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
