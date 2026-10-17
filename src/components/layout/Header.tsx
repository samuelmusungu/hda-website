From 4f1cc84af511b71b7c6f59a97e47319e9a93d100 Mon Sep 17 00:00:00 2001
From: HDA Build <build@highdesign.local>
Date: Sat, 17 Oct 2026 08:17:30 +0000
Subject: [PATCH] Fix mobile menu: render full-screen overlay via portal so it
 covers the page

---
 src/components/layout/Header.tsx | 205 ++++++++++++++++++-------------
 1 file changed, 121 insertions(+), 84 deletions(-)

diff --git a/src/components/layout/Header.tsx b/src/components/layout/Header.tsx
index 7aef541..8ff727a 100644
--- a/src/components/layout/Header.tsx
+++ b/src/components/layout/Header.tsx
@@ -1,10 +1,13 @@
 import { useEffect, useState } from "react";
+import { createPortal } from "react-dom";
 import { Link, NavLink, useLocation } from "react-router-dom";
 import { Menu, X, ArrowUpRight } from "lucide-react";
 import { AnimatePresence, motion } from "framer-motion";
 import hdaLogo from "@/assets/hda-logo.png";
 import { navItems, site } from "@/content/site";
 
+const menuLinks = [...navItems, { to: "/contact", label: "Contact" }];
+
 const Header = () => {
   const [scrolled, setScrolled] = useState(false);
   const [progress, setProgress] = useState(0);
@@ -30,8 +33,10 @@ const Header = () => {
     };
   }, []);
 
+  // Close the menu whenever the route changes.
   useEffect(() => setOpen(false), [location.pathname]);
 
+  // Escape closes the menu, and background scrolling is locked while it's open.
   useEffect(() => {
     const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
     window.addEventListener("keydown", onKey);
@@ -46,99 +51,131 @@ const Header = () => {
   const textClass = light ? "text-black" : "text-white";
 
   return (
-    <header
-      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
-        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
-      }`}
-    >
-      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
-        <Link to="/" className="flex items-center gap-3 group" aria-label="HighDesign Agency home">
-          <img src={hdaLogo} alt="" className="h-9 w-auto transition-transform group-hover:rotate-6" />
-          <span className={`font-semibold tracking-tight ${textClass}`}>{site.name}</span>
-        </Link>
+    <>
+      <header
+        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
+          light ? "bg-white/85 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
+        }`}
+      >
+        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
+          <Link to="/" className="flex items-center gap-3 group" aria-label="HighDesign Agency home">
+            <img src={hdaLogo} alt="" className="h-9 w-auto transition-transform group-hover:rotate-6" />
+            <span className={`font-semibold tracking-tight ${textClass}`}>{site.name}</span>
+          </Link>
 
-        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
-          {navItems.map((item) => (
-            <NavLink
-              key={item.to}
-              to={item.to}
-              className={({ isActive }) =>
-                `relative text-sm font-medium py-1 transition-colors ${
-                  light ? "text-black/70 hover:text-black" : "text-white/75 hover:text-white"
-                } ${isActive ? (light ? "!text-black" : "!text-white") : ""}`
-              }
+          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
+            {navItems.map((item) => (
+              <NavLink
+                key={item.to}
+                to={item.to}
+                className={({ isActive }) =>
+                  `relative text-sm font-medium py-1 transition-colors ${
+                    light ? "text-black/70 hover:text-black" : "text-white/75 hover:text-white"
+                  } ${isActive ? (light ? "!text-black" : "!text-white") : ""}`
+                }
+              >
+                {({ isActive }) => (
+                  <>
+                    {item.label}
+                    <span
+                      className={`absolute left-0 -bottom-1 h-px bg-teal-glow transition-all duration-300 ${
+                        isActive ? "w-full" : "w-0"
+                      }`}
+                    />
+                  </>
+                )}
+              </NavLink>
+            ))}
+          </nav>
+
+          <div className="hidden lg:block">
+            <Link
+              to="/contact"
+              className="group inline-flex items-center gap-2 rounded-full bg-teal hover:bg-teal-light text-white text-sm font-semibold pl-5 pr-4 py-2.5 transition-colors"
             >
-              {({ isActive }) => (
-                <>
-                  {item.label}
-                  <span
-                    className={`absolute left-0 -bottom-1 h-px bg-teal-glow transition-all duration-300 ${
-                      isActive ? "w-full" : "w-0"
-                    }`}
-                  />
-                </>
-              )}
-            </NavLink>
-          ))}
-        </nav>
+              Start a brief
+              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
+            </Link>
+          </div>
 
-        <div className="hidden lg:block">
-          <Link
-            to="/contact"
-            className="group inline-flex items-center gap-2 rounded-full bg-teal hover:bg-teal-light text-white text-sm font-semibold pl-5 pr-4 py-2.5 transition-colors"
+          <button
+            className={`lg:hidden p-2 -mr-2 ${textClass}`}
+            onClick={() => setOpen(true)}
+            aria-label="Open menu"
+            aria-expanded={open}
+            aria-haspopup="dialog"
           >
-            Start a brief
-            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
-          </Link>
+            <Menu size={26} />
+          </button>
         </div>
 
-        <button
-          className={`lg:hidden p-2 -mr-2 ${textClass}`}
-          onClick={() => setOpen((v) => !v)}
-          aria-label={open ? "Close menu" : "Open menu"}
-          aria-expanded={open}
-        >
-          {open ? <X size={26} /> : <Menu size={26} />}
-        </button>
-      </div>
+        {/* Scroll progress */}
+        <div
+          className="absolute bottom-0 left-0 right-0 h-px bg-teal-glow origin-left"
+          style={{ transform: `scaleX(${progress})` }}
+          aria-hidden
+        />
+      </header>
 
-      {/* Scroll progress */}
-      <div
-        className="absolute bottom-0 left-0 right-0 h-px bg-teal-glow origin-left"
-        style={{ transform: `scaleX(${progress})` }}
-        aria-hidden
-      />
+      {/* Rendered at the document root so it always covers the full screen,
+          regardless of the header's blur or positioning. */}
+      {createPortal(
+        <AnimatePresence>
+          {open && (
+            <motion.div
+              key="mobile-menu"
+              role="dialog"
+              aria-modal="true"
+              aria-label="Site menu"
+              initial={{ opacity: 0 }}
+              animate={{ opacity: 1 }}
+              exit={{ opacity: 0 }}
+              transition={{ duration: 0.25 }}
+              className="lg:hidden fixed inset-0 z-[70] bg-black text-white overflow-y-auto"
+            >
+              <div className="container mx-auto px-6 h-20 flex items-center justify-between">
+                <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
+                  <img src={hdaLogo} alt="" className="h-9 w-auto" />
+                  <span className="font-semibold tracking-tight text-white">{site.name}</span>
+                </Link>
+                <button
+                  onClick={() => setOpen(false)}
+                  aria-label="Close menu"
+                  className="p-2 -mr-2 text-white"
+                >
+                  <X size={26} />
+                </button>
+              </div>
 
-      <AnimatePresence>
-        {open && (
-          <motion.div
-            key="mobile"
-            initial={{ opacity: 0 }}
-            animate={{ opacity: 1 }}
-            exit={{ opacity: 0 }}
-            className="lg:hidden fixed inset-0 top-20 bg-black text-white"
-          >
-            <nav className="container mx-auto px-6 pt-10 flex flex-col" aria-label="Mobile">
-              {[...navItems, { to: "/contact", label: "Contact" }].map((item, i) => (
-                <motion.div
-                  key={item.to}
-                  initial={{ opacity: 0, y: 20 }}
-                  animate={{ opacity: 1, y: 0 }}
-                  transition={{ delay: 0.05 * i }}
+              <nav className="container mx-auto px-6 pt-8 pb-12 flex flex-col" aria-label="Mobile">
+                {menuLinks.map((item, i) => (
+                  <motion.div
+                    key={item.to}
+                    initial={{ opacity: 0, y: 20 }}
+                    animate={{ opacity: 1, y: 0 }}
+                    transition={{ delay: 0.06 * i + 0.1 }}
+                  >
+                    <Link
+                      to={item.to}
+                      className="block font-display text-5xl py-4 border-b border-white/10 text-white hover:text-teal-glow transition-colors"
+                    >
+                      {item.label}
+                    </Link>
+                  </motion.div>
+                ))}
+                <Link
+                  to="/contact"
+                  className="mt-10 bg-teal text-white rounded-full py-4 text-center font-semibold"
                 >
-                  <Link to={item.to} className="block font-display text-5xl py-4 border-b border-white/10">
-                    {item.label}
-                  </Link>
-                </motion.div>
-              ))}
-              <Link to="/contact" className="mt-10 bg-teal text-white rounded-full py-4 text-center font-semibold">
-                Start a brief
-              </Link>
-            </nav>
-          </motion.div>
-        )}
-      </AnimatePresence>
-    </header>
+                  Start a brief
+                </Link>
+              </nav>
+            </motion.div>
+          )}
+        </AnimatePresence>,
+        document.body
+      )}
+    </>
   );
 };
 
-- 
2.43.0
