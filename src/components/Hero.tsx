import { Button } from "@/components/ui/button";
import hdaLogo from "@/assets/hda-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Hero Background with subtle gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
        <img
          src={hdaLogo}
          alt="HDA Watermark"
          className="w-[800px] h-[800px] object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main Heading */}
        <div className="animate-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-tight">
            Building Brands with Soul & Scale
          </h1>
        </div>

        {/* Subheading */}
        <div className="animate-fade-up [animation-delay:0.1s]">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white/95 mb-10 tracking-wide">
            Nairobi-rooted. Globally-minded. Developer-led.
          </h2>
        </div>

        {/* Supporting Text */}
        <div className="animate-fade-up [animation-delay:0.2s]">
          <p className="text-lg md:text-xl lg:text-2xl text-white/85 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            We design cinematic websites, authentic brand systems, and scalable digital platforms—for startups, creatives, and global teams ready to move with clarity.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="animate-fade-up [animation-delay:0.3s]">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-teal hover:bg-teal-light text-white text-lg px-12 py-6 rounded-lg font-semibold shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Work With Us
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;