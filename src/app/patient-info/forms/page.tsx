import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FormsPageContent from "./FormsPageContent";

export const metadata: Metadata = {
  title: "Patient Info & Forms | Corona Hands-On Therapy",
  description:
    "Everything you need before your first visit to Corona Hands-On Therapy in Elmhurst, NY, including downloadable patient intake forms.",
};

export default function PatientFormsPage() {
  return (
    <>
      <Header />
      <FormsPageContent />
      <Footer />
    </>
  );
}
