import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Globe2, Scale, Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/shared/Reveal";
import SectionHeader from "@/components/shared/SectionHeader";
import FaqSection from "@/components/shared/FaqSection";
import CtaBand from "@/components/shared/CtaBand";
import { talentPipeline, talentPromises, talentRoles, candidatePoints } from "@/content/talent";
import { serviceBySlug } from "@/content/services";
import { site } from "@/content/site";

const icons = [ShieldCheck, Globe2, Scale];

const TalentPage = () => {
  const talentService = serviceBySlug("talent-sourcing");

  return (
    <>
      <PageHero
        eyebrow="Talent sourcing"
        title={
          <>
            Hire the people your <span className="italic text-teal-glow">roadmap</span> needs.
          </>
        }
        description="Full-cycle technical recruitment for engineers and designers. We source across Nairobi and the African tech community, screen for skill and remote working, and place people who contribute quickly."
        crumbs={[{ label: "Home", to: "/" }, { label: "Talent" }]}
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/contact?type=talent" className="group inline-flex items-center gap-2 rounded-full bg-teal hover:bg-teal-light px-7 py-4 font-semibold transition-colors">
            Request a shortlist
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a href="#pipeline" className="inline-flex items-center rounded-full border border-white/25 hover:border-white/70 px-7 py-4 font-semibold transition-colors">
            See the pipeline
          </a>
        </div>
      </PageHero>

      {/* Pipeline */}
      <section id="pipeline" className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            invert
            align="left"
            eyebrow="The pipeline"
            title={<>From brief to <span className="italic text-teal-glow">first day</span>.</>}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {talentPipeline.map((p, i) => (
              <Reveal key={p.step} delay={(i % 3) * 0.06} className="bg-black p-8 md:p-10 group hover:bg-white/[0.03] transition-colors">
                <div className="flex items-baseline justify-between mb-12">
                  <span className="font-mono text-xs text-teal-glow">{p.step}</span>
                  <span className="font-display text-4xl text-white/20 group-hover:text-teal-glow/70 transition-colors">{p.title}</span>
                </div>
                <p className="text-white/65 leading-relaxed">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {talentPromises.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="rounded-3xl bg-black/[0.03] p-9 h-full">
                  <Icon className="w-8 h-8 text-teal mb-8" />
                  <h3 className="text-2xl font-semibold mb-4">{p.title}</h3>
                  <p className="text-black/65 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Roles + candidates */}
      <section className="py-24 md:py-32 bg-black/[0.03]">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7 rounded-3xl bg-white p-8 md:p-12">
            <p className="eyebrow text-black/45 mb-8">For companies: roles we source</p>
            <ul className="divide-y divide-black/10">
              {talentRoles.map((r) => (
                <li key={r} className="flex items-center justify-between py-5 text-lg">
                  <span>{r}</span>
                  <ArrowRight className="w-4 h-4 text-teal" />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl bg-black text-white p-8 md:p-12 h-full flex flex-col">
              <p className="eyebrow text-white/45 mb-8">For talent: join the network</p>
              <ul className="space-y-5 mb-10">
                {candidatePoints.map((c) => (
                  <li key={c} className="flex gap-3 text-white/80 leading-relaxed">
                    <Check className="w-5 h-5 text-teal-glow flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Join the talent network")}`}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-4 font-semibold hover:bg-teal-glow transition-colors"
              >
                Introduce yourself
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {talentService && <FaqSection items={talentService.faqs} />}

      <CtaBand
        title="Shortlist in"
        accent="days, not months."
        description="Send the role, the stack and the time zone overlap. We'll return a sourcing plan and a timeline."
        primary={{ label: "Request a shortlist", to: "/contact?type=talent" }}
      />
    </>
  );
};

export default TalentPage;
