import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ConditionsIndexContent from "./ConditionsIndexContent";

export const metadata: Metadata = {
  title: "Conditions We Treat | Corona Hands-On Therapy",
  description:
    "Learn about the causes, symptoms, and treatment options for common conditions treated at Corona Hands-On Therapy in Elmhurst, NY.",
};

export default function ConditionsIndexPage() {
  return (
    <>
      <Header />
      <ConditionsIndexContent />
      <Footer />
    </>
  );
}
