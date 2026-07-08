import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TeamPageContent from "./TeamPageContent";

export const metadata: Metadata = {
  title: "Our Team | Corona Hands-On Therapy",
  description:
    "Meet the physical therapy, chiropractic, and acupuncture providers at Corona Hands-On Therapy in Elmhurst, NY.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <TeamPageContent />
      <Footer />
    </>
  );
}
