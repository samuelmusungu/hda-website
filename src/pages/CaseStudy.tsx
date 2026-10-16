import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/shared/Reveal";
import CtaBand from "@/components/shared/CtaBand";
import TechGrid from "@/components/shared/TechGrid";
import NotFound from "@/pages/NotFound";
import { projects, projectBySlug } from "@/content/projects";
import { services } from "@/content/services";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = projectBySlug(slug);
  if (!project) return <NotFound />;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const linked = services.filter((s) => project.services.includes(s.slug as never));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88svh] flex items-end bg-black text-white overflow-hidden">
        <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
        <TechGrid intensity={0.5} />
        <div className="container mx-auto px-6 relative z-10 pb-20 pt-40">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mb-10 flex flex-wrap gap-2">
            <Link to="/" className="hover:text-white">Home</Link> <span>/</span>
            <Link to="/portfolio" className="hover:text-white">Work</Link> <span>/</span>
            <span className="text-teal-glow">{project.title}</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] max-w-6xl"
          >
            {project.title}
          </motion.h1>
          <p className="mt-8 text-xl text-white/75 max-w-2xl leading-relaxed">{project.summary}</p>
        </div>
      </section>

      {/* Meta strip */}
      <section className="bg-black border-y border-white/10 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {[
            ["Client", project.client],
            ["Timeline", project.timeline],
            ["Year", project.year],
            ["Discipline", project.category],
          ].map(([k, v], i) => (
            <div key={k} className={`py-7 ${i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}`}>
              <p className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-2">{k}</p>
              <p className="font-semibold">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6">
          {project.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <div className="rounded-3xl bg-black text-white p-10 md:p-14 h-full">
                <p className="font-display text-7xl md:text-8xl text-teal-glow leading-none mb-6">{m.value}</p>
                <p className="text-lg text-white/70">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="py-24 md:py-32 bg-white border-t border-black/10">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="font-mono text-sm text-teal mb-4">01</p>
            <h2 className="font-display text-5xl mb-6">The challenge</h2>
            <p className="text-lg text-black/70 leading-relaxed">{project.challenge}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="font-mono text-sm text-teal mb-4">02</p>
            <h2 className="font-display text-5xl mb-6">The approach</h2>
            <p className="text-lg text-black/70 leading-relaxed">{project.solution}</p>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="font-mono text-sm text-teal mb-4">03</p>
            <h2 className="font-display text-5xl mb-6">The result</h2>
            <ul className="space-y-4">
              {project.metrics.map((m) => (
                <li key={m.label} className="border-t border-black/10 pt-4">
                  <span className="font-display text-3xl text-teal mr-3">{m.value}</span>
                  <span className="text-black/70">{m.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Services + tags */}
      <section className="py-20 bg-black/[0.03]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="eyebrow text-black/45 mb-4">Services delivered</p>
            <div className="flex flex-wrap gap-2">
              {linked.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="rounded-full bg-white border border-black/10 hover:border-teal px-5 py-2.5 text-sm font-medium transition-colors">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end max-w-md">
            {project.tags.map((t) => (
              <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full border border-black/10 text-black/60">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <Link to={`/portfolio/${next.slug}`} className="group relative block overflow-hidden bg-black text-white">
        <img src={next.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-[1200ms] group-hover:scale-105" />
        <div className="relative container mx-auto px-6 py-24 md:py-32 flex items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-teal-glow mb-6">Next case study</p>
            <p className="font-display text-5xl md:text-8xl leading-none">{next.title}</p>
          </div>
          <span className="hidden md:flex w-20 h-20 rounded-full bg-white text-black items-center justify-center transition-transform duration-500 group-hover:rotate-45">
            <ArrowRight className="w-8 h-8" />
          </span>
        </div>
      </Link>

      <CtaBand
        title="Want results like"
        accent="these?"
        description="Tell us about the product and the target. We'll show how we'd get there."
        secondary={{ label: "All work", to: "/portfolio" }}
      />
    </>
  );
};

export default CaseStudyPage;
