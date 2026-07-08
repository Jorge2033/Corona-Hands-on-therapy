import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TrustStrip from "@/components/TrustStrip/TrustStrip";
import PainAreas from "@/components/PainAreas/PainAreas";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import ReviewsCarousel from "@/components/Reviews/Reviews"; // Importación corregida y limpia
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <PainAreas />
        <Services />
        <About />
        <ReviewsCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}