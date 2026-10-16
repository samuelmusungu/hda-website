import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SpotCard from "@/components/shared/SpotCard";
import Reveal from "@/components/shared/Reveal";
import SectionHeader from "@/components/shared/SectionHeader";
import FaqSection from "@/components/shared/FaqSection";
import CtaBand from "@/components/shared/CtaBand";
import { services, addOns } from "@/content/services";

const ServicesPage = () => (
  <>
    <PageHero
      eyebrow="Services"
      title={
        <>
          Design it. Build it. <span className="italic text-teal-glow">Grow it.</span>
        </>
      }
      description="Six disciplines that cover the full life of a digital product, from the first sketch to the team that runs it. Pick one, or bring them all under one brief."
      crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
    />

    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <SpotCard to={`/services/${s.slug}`} className="h-full p-8 md:p-10 flex flex-col min-h-[340px]">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs text-teal">0{i + 1} / 0{services.length}</span>
                  <span className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-teal" />
                  </span>
                </div>
                <p className="eyebrow text-black/45 mb-3">{s.kicker}</p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">{s.title}</h2>
                <p className="text-black/65 leading-relaxed mb-8">{s.short}</p>
                <ul className="mt-auto grid grid-cols-2 gap-2 mb-8">
                  {s.deliverables.slice(0, 4).map((d) => (
                    <li key={d} className="text-sm text-black/60 flex gap-2">
                      <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 font-semibold">
                  View service <ArrowUpRight className="w-4 h-4" />
                </span>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          invert
          align="left"
          eyebrow="Add-ons"
          title={<>Extend any project with <span className="italic text-teal-glow">more depth</span>.</>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {addOns.map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) * 0.05}>
              <div className="bg-black p-8 h-full hover:bg-white/[0.03] transition-colors">
                <span className="font-mono text-xs text-teal-glow">+{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold mt-6 mb-3">{a.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <FaqSection />
    <CtaBand
      title="Not sure which service"
      accent="you need?"
      description="Most projects combine two or three. Tell us the goal and we'll recommend the leanest way to get there."
      secondary={{ label: "Browse our work", to: "/portfolio" }}
    />
  </>
);

export default ServicesPage;
