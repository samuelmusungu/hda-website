import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TechGrid from "@/components/shared/TechGrid";

export type Crumb = { label: string; to?: string };

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
  compact?: boolean;
};

/** Dark, tech-grid header used at the top of every inner page. */
const PageHero = ({ eyebrow, title, description, crumbs, children, compact = false }: Props) => (
  <section className={`relative bg-black text-white overflow-hidden ${compact ? "pt-36 pb-20" : "pt-40 pb-24 md:pb-32"}`}>
    <div className="absolute inset-0 hero-gradient" aria-hidden />
    <TechGrid intensity={0.8} />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" aria-hidden />

    <div className="container mx-auto px-6 relative z-10">
      <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 mb-10 flex flex-wrap gap-2">
        {crumbs.map((c, i) => (
          <span key={`${c.label}-${i}`} className="flex gap-2">
            {c.to ? (
              <Link to={c.to} className="hover:text-white transition-colors">{c.label}</Link>
            ) : (
              <span className="text-teal-glow">{c.label}</span>
            )}
            {i < crumbs.length - 1 && <span>/</span>}
          </span>
        ))}
      </nav>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="eyebrow text-teal-glow mb-6 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-teal-glow" />
        {eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] tracking-[-0.02em] max-w-5xl"
      >
        {title}
      </motion.h1>

      {description && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.div>
      )}

      {children && <div className="mt-12">{children}</div>}
    </div>
  </section>
);

export default PageHero;
