import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import TechGrid from "@/components/shared/TechGrid";
import { site, stats } from "@/content/site";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

const clockFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.location.tz,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const useNairobiClock = () => {
  const [now, setNow] = useState(() => clockFormatter.format(new Date()));
  useEffect(() => {
    const id = setInterval(() => setNow(clockFormatter.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
};

const script = [
  { text: "$ hda brief --new", kind: "cmd" },
  { text: "→ scope: brand · product · talent", kind: "out" },
  { text: "$ hda stack --list", kind: "cmd" },
  { text: "→ react · typescript · supabase · python", kind: "out" },
  { text: "$ hda launch --env production", kind: "cmd" },
  { text: "✓ live. shipped in 6 weeks.", kind: "ok" },
];

/** Typed terminal that loops. Shows the full script immediately for reduced motion. */
const Terminal = () => {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState<number[]>(() => script.map((l) => (reduce ? l.text.length : 0)));

  useEffect(() => {
    if (reduce) return;
    if (active >= script.length) {
      const id = setTimeout(() => {
        setShown(script.map(() => 0));
        setActive(0);
      }, 3200);
      return () => clearTimeout(id);
    }
    const line = script[active];
    if (shown[active] < line.text.length) {
      const id = setTimeout(
        () => setShown((s) => s.map((v, i) => (i === active ? v + 1 : v))),
        line.kind === "cmd" ? 40 : 8
      );
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setActive((a) => a + 1), line.kind === "cmd" ? 420 : 520);
    return () => clearTimeout(id);
  }, [active, shown, reduce]);

  return (
    <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_30px_80px_-20px_hsl(176_90%_30%/0.4)] overflow-hidden">
      <div className="scanline absolute inset-0 pointer-events-none" aria-hidden />
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 font-mono text-[11px] text-white/45">
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="ml-3 tracking-wider">hda://studio/session</span>
      </div>
      <div className="p-6 font-mono text-[13px] md:text-sm leading-7 min-h-[260px]">
        {script.map((line, i) => {
          if (i > active) return null;
          const text = line.text.slice(0, shown[i]);
          const color =
            line.kind === "cmd" ? "text-white" : line.kind === "ok" ? "text-teal-glow" : "text-white/60";
          return (
            <div key={i} className={color}>
              {text}
              {i === active && i < script.length && <span className="inline-block w-2 h-4 bg-teal-glow align-middle ml-0.5 animate-pulse" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const lines = ["Design that", "ships. Code that", "scales."];

const Hero = () => {
  const time = useNairobiClock();
  const { ref: statRef, inView } = useInView<HTMLDivElement>();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[100svh] flex flex-col bg-black text-white overflow-hidden">
      <div className="absolute inset-0 hero-gradient" aria-hidden />
      <div className="absolute inset-0">
        <TechGrid />
      </div>
      {/* Vignette keeps the headline readable over the grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" aria-hidden />

      {/* HUD: top strip */}
      <div className="relative z-10 container mx-auto px-6 pt-28 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
        <span className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-teal-glow ping-soft" />
            <span className="relative w-2 h-2 rounded-full bg-teal-glow" />
          </span>
          Studio online
        </span>
        <span className="hidden md:block">{site.location.city} · {site.location.lat} · {site.location.lng}</span>
        <span className="tabular-nums">{time} EAT</span>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex-1 flex flex-col justify-center py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="eyebrow text-teal-glow mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-teal-glow" />
              Design · Engineering · Talent
            </motion.p>

            <h1 className="font-display text-[14vw] sm:text-[11vw] lg:text-[7.4vw] leading-[0.92] tracking-[-0.02em]">
              {lines.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="block"
                    initial={{ y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    {i === 1 ? (
                      <>
                        <span className="text-teal-glow">ships.</span> Code that
                      </>
                    ) : i === 2 ? (
                      <span className="italic text-white/90">{line}</span>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
            >
              HighDesign Agency designs and engineers digital products for startups, hospitality brands and global
              teams. We also source the engineers and designers who build them, so the people on your roadmap are
              the people we vetted.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal hover:bg-teal-light px-8 py-4 font-semibold shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Start a brief
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/25 hover:border-white/70 px-8 py-4 font-semibold transition-colors"
              >
                See selected work
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-5"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>

      {/* Stats rail */}
      <div ref={statRef} className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <StatCell key={s.label} value={s.value} suffix={s.suffix} label={s.label} start={inView} last={i === stats.length - 1} />
          ))}
        </div>
      </div>

      <button
        onClick={() => go("home-intro")}
        aria-label="Scroll down"
        className="absolute bottom-24 right-8 z-10 hidden md:flex text-white/40 hover:text-white transition-colors"
      >
        <ArrowDown className="w-5 h-5 scroll-cue" />
      </button>
    </section>
  );
};

const StatCell = ({ value, suffix, label, start, last }: { value: number; suffix: string; label: string; start: boolean; last: boolean }) => {
  const n = useCountUp(value, start);
  return (
    <div className={`py-6 md:py-7 ${last ? "" : "md:border-r md:border-white/10"} ${"pr-4"}`}>
      <div className="font-display text-4xl md:text-5xl tabular-nums">
        {n}
        <span className="text-teal-glow">{suffix}</span>
      </div>
      <div className="font-mono text-[11px] uppercase tracking-wider text-white/45 mt-1">{label}</div>
    </div>
  );
};

export default Hero;
