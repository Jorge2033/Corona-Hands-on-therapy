import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FaqsPageContent from "./FaqsPageContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Corona Hands-On Therapy",
  description:
    "Find answers to common questions about physical therapy, chiropractic care, and acupuncture at Corona Hands-On Therapy.",
};

export default function FaqsPage() {
  return (
    <>
      <Header />
      <FaqsPageContent />
      <Footer />
    </>
  );
}
