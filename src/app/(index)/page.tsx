import HeroSection from "@/components/hero-section";
import AboutUs from "@/components/about-us";
import Services from "@/components/services";
import Solution from "@/components/solution";
import ContactUs from "@/components/contact-us";
import TermsAndConditions from "@/components/terms-and-conditions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Solution />
      <ContactUs />
      <TermsAndConditions />
    </>
  );
}
