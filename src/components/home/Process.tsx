import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";

const steps = [
  { t: "Discover", d: "We listen first. Stakeholder interviews, competitor review and an audit of what already exists." },
  { t: "Design", d: "Research-led flows, prototypes tested with users, then high-fidelity interfaces and a living system." },
  { t: "Build", d: "Weekly demos in React and TypeScript, backed by Supabase or Python, with performance tracked from day one." },
  { t: "Launch", d: "Accessibility checks, analytics, deployment and a handover session your team can actually use." },
  { t: "Grow", d: "Measured iteration, growth experiments and optional retainers for design, engineering or talent." },
];

const Process = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-black/[0.03] overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              A process with <span className="italic text-teal">no surprises</span>.
            </>
          }
        />

        <div className="relative">
          {/* Track line that draws as the section scrolls */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-black/10" aria-hidden>
            <motion.div className="h-full bg-teal origin-left" style={{ scaleX: scale }} />
          </div>

          <div className="grid md:grid-cols-5 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="relative">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-black/15 flex items-center justify-center font-mono text-sm mb-8">
                    <span className="text-teal">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-3xl mb-3">{s.t}</h3>
                  <p className="text-black/65 leading-relaxed text-[15px]">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
