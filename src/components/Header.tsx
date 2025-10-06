import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import hdaLogo from "@/assets/hda-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[var(--shadow-card)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={hdaLogo}
              alt="HighDesign Agency"
              className="h-10 w-auto"
            />
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              HighDesign Agency
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "portfolio", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition-colors ${
                  isScrolled
                    ? "text-black hover:text-teal"
                    : "text-white hover:text-teal"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-teal hover:bg-teal-light text-white font-semibold"
            >
              Work With Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-[var(--shadow-card)]">
            <nav className="flex flex-col space-y-4 px-4">
              {["home", "about", "services", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-black hover:text-teal transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-teal hover:bg-teal-light text-white mt-4"
              >
                Work With Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;