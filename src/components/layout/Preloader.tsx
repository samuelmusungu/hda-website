import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hdaLogo from "@/assets/hda-logo.png";
import { site } from "@/content/site";

const LINES = [
  "Booting studio systems",
  "Loading design tokens",
  "Compiling motion layer",
  "Syncing Nairobi → world",
  "Interface ready",
];

const DURATION = 2300;

/**
 * Full-screen boot sequence shown once per browser session.
 * Counts 000 to 100 with a rotating status log, then lifts away.
 */
const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [value, setValue] = useState(0);
  const [exiting, setExiting] = useState(false);
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const total = reduce ? 300 : DURATION;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / total, 1);
      // Ease-in-out so the counter accelerates through the middle, then settles.
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setValue(Math.min(100, Math.floor(eased * 100)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setExiting(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  useEffect(() => {
    if (!exiting) return;
    const id = setTimeout(onDone, reduce ? 150 : 1000);
    return () => clearTimeout(id);
  }, [exiting, onDone, reduce]);

  const lineIndex = Math.min(LINES.length - 1, Math.floor((value / 100) * LINES.length));
  const pad = String(value).padStart(3, "0");

  return (
    <motion.div
      aria-label="Loading"
      role="status"
      className="fixed inset-0 z-[100] bg-black text-white overflow-hidden"
      initial={false}
      animate={exiting ? { y: "-100%" } : { y: "0%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Blueprint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Corner crosshairs */}
      {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos) => (
        <div key={pos} aria-hidden className={`absolute ${pos} w-4 h-4`}>
          <span className="absolute left-1/2 top-0 bottom-0 w-px bg-teal/70" />
          <span className="absolute top-1/2 left-0 right-0 h-px bg-teal/70" />
        </div>
      ))}

      {/* Top HUD */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.25em] text-white/50 uppercase flex gap-6">
        <span>HDA / Boot</span>
        <span>v5.0</span>
      </div>

      {/* Centre: logo with rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_9s_linear_infinite]" aria-hidden>
            <circle cx="100" cy="100" r="96" fill="none" stroke="hsl(176 90% 58% / 0.15)" strokeWidth="1" />
            <circle
              cx="100"
              cy="100"
              r="96"
              fill="none"
              stroke="hsl(176 90% 58%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${(value / 100) * 603} 603`}
              transform="rotate(-90 100 100)"
            />
            <circle cx="100" cy="100" r="78" fill="none" stroke="white" strokeOpacity="0.1" strokeDasharray="2 6" />
          </svg>
          <motion.img
            src={hdaLogo}
            alt={site.name}
            className="w-28 md:w-36 h-auto"
            initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Bottom-left status log */}
      <div className="absolute bottom-10 left-8 md:left-12 font-mono text-xs md:text-sm text-white/60 space-y-1.5">
        {LINES.slice(0, lineIndex + 1).map((line, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: i === lineIndex ? 1 : 0.45, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-teal-glow">{i < lineIndex ? "✓" : "›"}</span>
            <span className={i === lineIndex ? "text-white" : ""}>{line}</span>
            {i === lineIndex && <span className="inline-block w-2 h-3.5 bg-teal-glow animate-pulse" />}
          </motion.div>
        ))}
      </div>

      {/* Bottom-right counter */}
      <div className="absolute bottom-6 right-8 md:right-12 text-right">
        <div className="font-display text-[22vw] md:text-[12rem] leading-none tabular-nums text-white/90">
          {pad}
          <span className="text-teal-glow text-[0.35em] align-top ml-1">%</span>
        </div>
      </div>

      {/* Progress rail */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
        <div className="h-full bg-teal-glow shadow-[0_0_12px_hsl(176_90%_58%)]" style={{ width: `${value}%` }} />
      </div>
    </motion.div>
  );
};

export default Preloader;
