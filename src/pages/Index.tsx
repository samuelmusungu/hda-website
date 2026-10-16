import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Manifesto from "@/components/home/Manifesto";
import ServicesBento from "@/components/home/ServicesBento";
import Process from "@/components/home/Process";
import FeaturedWork from "@/components/home/FeaturedWork";
import TalentBand from "@/components/home/TalentBand";
import Testimonials from "@/components/shared/Testimonials";
import FaqSection from "@/components/shared/FaqSection";
import CtaBand from "@/components/shared/CtaBand";

const HomePage = () => (
  <>
    <Hero />
    <Ticker />
    <Manifesto />
    <ServicesBento />
    <Process />
    <FeaturedWork />
    <TalentBand />
    <Testimonials />
    <FaqSection />
    <CtaBand
      title="Ready to build"
      accent="something sharp?"
      description="Tell us about the product, the team or the brand. We'll reply within a working day with a clear next step."
      secondary={{ label: "Explore services", to: "/services" }}
    />
  </>
);

export default HomePage;
