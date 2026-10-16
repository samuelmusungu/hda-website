import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/shared/Reveal";
import SectionHeader from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/shared/ProjectCard";
import FaqSection from "@/components/shared/FaqSection";
import CtaBand from "@/components/shared/CtaBand";
import NotFound from "@/pages/NotFound";
import { serviceBySlug, services } from "@/content/services";
import { projects } from "@/content/projects";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = serviceBySlug(slug);
  if (!service) return <NotFound />;

  const related = projects.filter((p) => p.services.includes(service.slug as never));
  const others = services.filter((s) => s.slug !== service.slug);
  const isTalent = service.slug === "talent-sourcing";

  return (
    <>
      <PageHero
        eyebrow={service.kicker}
        title={service.headline}
        description={service.short}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.title }]}
      >
        <div className="flex flex-wrap gap-4">
          <Link to={isTalent ? "/contact?type=talent" : "/contact"} className="inline-flex items-center gap-2 rounded-full bg-teal hover:bg-teal-light px-7 py-4 font-semibold transition-colors">
            {isTalent ? "Request a shortlist" : "Scope this service"}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a href="#details" className="inline-flex items-center rounded-full border border-white/25 hover:border-white/70 px-7 py-4 font-semibold transition-colors">
            See what's included
          </a>
        </div>
      </PageHero>

      {/* Overview */}
      <section id="details" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-3xl md:text-4xl leading-snug text-black">{service.overview}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="eyebrow text-black/45 mb-6">Clients usually come to us because</p>
            <ol className="space-y-5">
              {service.problems.map((p, i) => (
                <li key={p} className="flex gap-4 border-t border-black/10 pt-5">
                  <span className="font-mono text-xs text-teal pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-black/75 leading-relaxed">{p}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 md:py-32 bg-black/[0.03]">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="What's included" title={<>Everything you <span className="italic text-teal">get</span>.</>} />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {service.deliverables.map((d, i) => (
              <Reveal key={d} delay={(i % 2) * 0.05}>
                <div className="flex items-center justify-between gap-6 border-t border-black/10 py-6">
                  <span className="text-lg text-black">{d}</span>
                  <span className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-teal" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionHeader invert align="left" className="mb-0" eyebrow="Process" title={<>How we <span className="italic text-teal-glow">work it</span>.</>} />
          </div>
          <div className="lg:col-span-8 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-white/15" aria-hidden />
            <ol className="space-y-12">
              {service.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <li className="relative pl-16">
                    <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black border border-teal-glow/60 flex items-center justify-center font-mono text-xs text-teal-glow">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl mb-3">{step.title}</h3>
                    <p className="text-white/65 leading-relaxed max-w-xl">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Tools + outcome */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-black/45 mb-6">Tools & stack</p>
            <div className="flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <span key={t} className="font-mono text-sm px-4 py-2 rounded-full border border-black/10 text-black/70">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl bg-teal text-white p-10 md:p-12 h-full flex flex-col justify-center">
              <p className="eyebrow text-white/65 mb-5">Outcome</p>
              <p className="font-display text-3xl md:text-4xl leading-tight">{service.outcome}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 && (
        <section className="py-24 md:py-32 bg-black/[0.03]">
          <div className="container mx-auto px-6">
            <div className="flex items-end justify-between gap-6 mb-12">
              <SectionHeader align="left" className="mb-0" eyebrow="Related work" title={<>Proof in <span className="italic text-teal">practice</span>.</>} />
              <Link to="/portfolio" className="link-underline hidden md:inline-flex font-semibold pb-4">All work</Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqSection items={service.faqs} />

      {/* Other services */}
      <section className="py-24 bg-white border-t border-black/10">
        <div className="container mx-auto px-6">
          <p className="eyebrow text-black/45 mb-8">Other services</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {others.map((o) => (
              <Link key={o.slug} to={`/services/${o.slug}`} className="group rounded-2xl border border-black/10 p-6 hover:border-teal hover:bg-teal/[0.03] transition-colors">
                <o.icon className="w-6 h-6 text-teal mb-6" />
                <p className="font-semibold leading-snug flex items-center justify-between gap-2">
                  {o.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={isTalent ? "Your next hire" : "Let's scope it"}
        accent={isTalent ? "is a message away." : "together."}
        description={isTalent ? "Send the role, the stack and the time zone. We'll come back with a shortlist plan." : "A short call, a clear brief, and a proposal within a few working days."}
        primary={{ label: isTalent ? "Request a shortlist" : "Start a brief", to: isTalent ? "/contact?type=talent" : "/contact" }}
      />
    </>
  );
};

export default ServiceDetailPage;
