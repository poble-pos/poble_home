import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import ContactUs from "@/components/ContactUs";
import TermsAndConditions from "@/components/TermsAndConditions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={"w-full mx-auto max-w-7xl"}>
        <HeroSection />
        <AboutUs />
        <Services />
        <Solutions />
        <ContactUs />
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  );
}
