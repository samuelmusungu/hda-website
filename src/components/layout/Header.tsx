import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import hdaLogo from "@/assets/hda-logo.png";
import { navItems, site } from "@/content/site";

const menuLinks = [...navItems, { to: "/contact", label: "Contact" }];

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

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [location.pathname]);

  // Escape closes the menu; background scroll is locked while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Solid colours only: no translucency, so the header reads the same on every browser.
  const solid = scrolled;
  const headerBg = solid ? "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : "bg-transparent";
  const ink = solid ? "text-neutral-900" : "text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg} ${
          open ? "invisible" : "visible"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="HighDesign Agency home">
            <img src={hdaLogo} alt="" className="h-9 w-auto transition-transform group-hover:rotate-6" />
            <span className={`font-semibold tracking-tight ${ink}`}>{site.name}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium py-1 transition-colors ${
                    solid ? "text-neutral-700 hover:text-neutral-900" : "text-white/80 hover:text-white"
                  } ${isActive ? (solid ? "!text-neutral-900" : "!text-white") : ""}`
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
            className={`lg:hidden p-2 -mr-2 ${ink}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-haspopup="dialog"
          >
            <Menu size={26} />
          </button>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-teal-glow origin-left"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden
        />
      </header>

      {/* Full-screen menu, rendered at the document root with a fully opaque background. */}
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="lg:hidden fixed inset-0 z-[100] flex flex-col text-white overflow-y-auto animate-[fadeIn_0.2s_ease-out_both]"
            style={{ backgroundColor: "#000000", minHeight: "100vh", height: "100dvh" }}
          >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between shrink-0">
              <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <img src={hdaLogo} alt="" className="h-9 w-auto" />
                <span className="font-semibold tracking-tight text-white">{site.name}</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 text-white"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="container mx-auto px-6 pt-8 pb-12 flex flex-col" aria-label="Mobile">
              {menuLinks.map((item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block font-display text-5xl py-4 border-b border-white/15 text-white hover:text-teal-glow transition-colors animate-[fadeUp_0.5s_ease-out_both]"
                  style={{ animationDelay: `${0.05 * i + 0.08}s` }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-10 bg-teal text-white rounded-full py-4 text-center font-semibold"
              >
                Start a brief
              </Link>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
};

export default Header;
