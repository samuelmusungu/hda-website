import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import hdaLogo from "@/assets/hda-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={hdaLogo} 
                alt="HighDesign Agency" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">HighDesign Agency</span>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              A global creative agency dedicated to shaping impactful brands, 
              empowering businesses, and connecting talent worldwide.
            </p>

            <div className="space-y-2">
              <p className="text-white/60 text-sm">
                <span className="font-medium">Email:</span> contact@highdesignagency.com
              </p>
              <p className="text-white/60 text-sm">
                <span className="font-medium">Global Presence:</span> USA • Africa • Worldwide
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter/CTA */}
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Ready to Start Your Project?</h4>
              <p className="text-white/70 text-sm mb-4">
                Let's discuss how we can help transform your vision into reality.
              </p>
              <button 
                onClick={() => scrollToSection("#contact")}
                className="bg-teal hover:bg-teal-light text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} HighDesign Agency. All Rights Reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;