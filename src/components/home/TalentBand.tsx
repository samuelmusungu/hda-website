import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import TechGrid from "@/components/shared/TechGrid";
import { talentRoles } from "@/content/talent";

const TalentBand = () => (
  <section className="relative bg-black text-white py-28 md:py-36 overflow-hidden">
    <TechGrid intensity={0.6} />
    <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-teal/25 blur-[120px]" aria-hidden />

    <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
      <Reveal className="lg:col-span-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white/70 mb-8">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-teal-glow ping-soft" />
            <span className="relative w-2 h-2 rounded-full bg-teal-glow" />
          </span>
          Sourcing now
        </div>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.98] mb-8">
          Hire the engineers <span className="italic text-teal-glow">your roadmap</span> needs.
        </h2>
        <p className="text-lg text-white/65 leading-relaxed max-w-xl mb-10">
          Full-cycle technical recruitment, from brief to offer. We source across Nairobi and the African tech
          community, screen for skill and remote working, and place people who can contribute quickly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/talent" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-4 font-semibold hover:bg-teal-glow transition-colors">
            Explore talent sourcing
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/contact?type=talent" className="inline-flex items-center justify-center rounded-full border border-white/25 hover:border-white/70 px-7 py-4 font-semibold transition-colors">
            Request a shortlist
          </Link>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="lg:col-span-6">
        <div className="glass rounded-3xl p-8 md:p-10">
          <p className="eyebrow text-white/45 mb-6">Roles we source</p>
          <ul className="divide-y divide-white/10">
            {talentRoles.map((r, i) => (
              <li key={r} className="flex items-center justify-between gap-4 py-4 text-white/85">
                <span>{r}</span>
                <span className="font-mono text-xs text-white/35">{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default TalentBand;
