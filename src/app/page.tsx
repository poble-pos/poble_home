import NavBar from "@/components/nav-bar";
import HeroSection from "@/components/hero-section";
import AboutUs from "@/components/about-us";
import Services from "@/components/services";
import Solution from "@/components/solution";
import ContactUs from "@/components/contact-us";
import TermsAndConditions from "@/components/terms-and-conditions";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className={"w-full mx-auto"}>
        <HeroSection />
        <AboutUs />
        <Services />
        <Solution />
        <ContactUs />
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  );
}
