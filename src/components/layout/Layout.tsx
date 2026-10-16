import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import ContactIcons from "@/components/ContactIcons";

const SESSION_KEY = "hda-preloader-seen";

const shouldShowPreloader = () => {
  try {
    return !sessionStorage.getItem(SESSION_KEY);
  } catch {
    return true;
  }
};

/** Shared chrome: preloader gate, header, routed content, footer, quick contact. */
const Layout = () => {
  const location = useLocation();
  const [booting, setBooting] = useState<boolean>(() => typeof window !== "undefined" && shouldShowPreloader());

  // Reset scroll on route change, but never on the first paint.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const finishBoot = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage unavailable: the preloader will simply show again next visit */
    }
    setBooting(false);
  };

  return (
    <>
      {booting && <Preloader onDone={finishBoot} />}
      <div className="min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            className="flex-1"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
        <ContactIcons />
      </div>
    </>
  );
};

export default Layout;
