import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactIcons from "@/components/ContactIcons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ContactIcons /> {/* ✅ Floating contact icons */}
    </div>
  );
};

export default Index;