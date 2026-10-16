import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import hdaLogo from "@/assets/hda-logo.png";
import { navItems, site } from "@/content/site";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 40);
        setProgress(max > 0 ? y / max : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = scrolled && !open;
  const textClass = light ? "text-black" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="HighDesign Agency home">
          <img src={hdaLogo} alt="" className="h-9 w-auto transition-transform group-hover:rotate-6" />
          <span className={`font-semibold tracking-tight ${textClass}`}>{site.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-sm font-medium py-1 transition-colors ${
                  light ? "text-black/70 hover:text-black" : "text-white/75 hover:text-white"
                } ${isActive ? (light ? "!text-black" : "!text-white") : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-px bg-teal-glow transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-teal hover:bg-teal-light text-white text-sm font-semibold pl-5 pr-4 py-2.5 transition-colors"
          >
            Start a brief
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 -mr-2 ${textClass}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-teal-glow origin-left"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-20 bg-black text-white"
          >
            <nav className="container mx-auto px-6 pt-10 flex flex-col" aria-label="Mobile">
              {[...navItems, { to: "/contact", label: "Contact" }].map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link to={item.to} className="block font-display text-5xl py-4 border-b border-white/10">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" className="mt-10 bg-teal text-white rounded-full py-4 text-center font-semibold">
                Start a brief
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
