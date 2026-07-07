import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CareersForm from "./CareersForm";

export const metadata: Metadata = {
  title: "Join Our Team | Corona Hands-On Therapy",
  description:
    "Careers at Corona Hands-On Therapy in Elmhurst, NY — physical therapy, chiropractic, acupuncture, and front-desk roles.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#fbf9f6" }}>
        {/* Eliminamos el contenedor global que limitaba el ancho */}
        <CareersForm />
      </main>
      <Footer />
    </>
  );
}