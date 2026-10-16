import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const text =
  "We believe the best digital products are designed by people who can write the code, and engineered by people who obsess over every detail. So we do both. Then we staff the team that keeps shipping.";

const Word = ({ children, progress, range }: { children: ReactNode; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  );
};

const Manifesto = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  return (
    <section ref={ref} id="home-intro" className="relative bg-black text-white py-32 md:py-44">
      <div className="container mx-auto px-6">
        <p className="eyebrow text-white/40 mb-10 flex items-center gap-3">
          <span className="w-6 h-px bg-teal-glow" />
          Our approach
        </p>
        <p className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.08] max-w-6xl">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            const isAccent = ["designed", "engineered", "staff", "shipping."].some((a) => w.startsWith(a));
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                <span className={isAccent ? "italic text-teal-glow" : ""}>{w}</span>
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
