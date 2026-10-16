import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Instagram, ArrowUpRight } from "lucide-react";
import hdaLogo from "@/assets/hda-logo.png";
import { navItems, site } from "@/content/site";
import { services } from "@/content/services";

const socialIcons = { LinkedIn: Linkedin, Twitter, GitHub: Github, Instagram } as const;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <Link
          to="/contact"
          className="group block border-t border-b border-white/15 py-12 md:py-16 mb-20 overflow-hidden"
        >
          <span className="flex items-end justify-between gap-6">
            <span className="font-display text-[12vw] md:text-[9vw] leading-[0.85] tracking-tight group-hover:text-teal-glow transition-colors duration-500">
              Let's build.
            </span>
            <span className="hidden md:flex flex-shrink-0 w-20 h-20 rounded-full bg-teal items-center justify-center transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="w-8 h-8" />
            </span>
          </span>
        </Link>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={hdaLogo} alt="" className="h-9 w-auto" />
              <span className="font-semibold text-lg">{site.name}</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              A Nairobi-rooted studio for design, engineering and technical talent. We work with teams building
              products across Africa and beyond.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/40 mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-white/70 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-white/40 mb-5">Studio</p>
            <ul className="space-y-3">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/70 hover:text-white transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/40 mb-5">Connect</p>
            <a href={`mailto:${site.email}`} className="block text-white/80 hover:text-white break-all mb-2">
              {site.email}
            </a>
            <p className="text-white/60 mb-8">{site.phoneDisplay}</p>
            <div className="flex gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-white/45 font-mono">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>{site.location.lat} · {site.location.lng} · Built in Nairobi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
