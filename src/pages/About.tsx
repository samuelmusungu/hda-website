import { Link } from "react-router-dom";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/shared/Reveal";
import SectionHeader from "@/components/shared/SectionHeader";
import Testimonials from "@/components/shared/Testimonials";
import CtaBand from "@/components/shared/CtaBand";
import { stats } from "@/content/site";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const principles = [
  { t: "Clarity", d: "We make the decision obvious before we make it beautiful. If a client can't explain the product in one sentence, we're not finished." },
  { t: "Craft", d: "Care at every level, from the kerning on a headline to the index on the database table behind it." },
  { t: "Continuity", d: "The same people from the first brief to handover, and to the optional retainer that follows." },
  { t: "Community", d: "Every project should leave the local talent market stronger than we found it." },
];

const Stat = ({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) => {
  const n = useCountUp(value, start);
  return (
    <div className="border-t border-black/15 pt-6">
      <div className="font-display text-6xl md:text-7xl leading-none tabular-nums">
        {n}<span className="text-teal">{suffix}</span>
      </div>
      <div className="mt-3 text-sm text-black/60">{label}</div>
    </div>
  );
};

const AboutPage = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={
          <>
            Built by <span className="italic text-teal-glow">builders</span>, not pitchers.
          </>
        }
        description="HighDesign Agency is a creative studio run by developers and designers. We craft cinematic websites and brand systems, then build the products behind them."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-7 space-y-8">
            <p className="font-display text-3xl md:text-4xl leading-snug">
              Alongside our creative work, we connect emerging African talent with global opportunities.
            </p>
            <p className="text-lg text-black/65 leading-relaxed">
              Our talent practice sits inside the studio, so the people who design and ship your product are the same
              people we vetted and placed. That keeps accountability close and the handover clean.
            </p>
            <Link to="/services" className="link-underline inline-block font-semibold">See what we do →</Link>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="bg-black text-white rounded-3xl p-10 md:p-12 h-full">
              <p className="eyebrow text-teal-glow mb-6">Our mission</p>
              <p className="font-display text-3xl md:text-4xl leading-tight">
                Premium digital experiences, built with African talent, for teams that want{" "}
                <span className="italic">scale without losing soul.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <SectionHeader invert align="left" eyebrow="Principles" title={<>How we <span className="italic text-teal-glow">decide</span>.</>} />
          <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={(i % 2) * 0.08} className="bg-black p-10 md:p-12">
                <p className="font-mono text-xs text-teal-glow mb-8">0{i + 1}</p>
                <h3 className="font-display text-5xl mb-5">{p.t}</h3>
                <p className="text-white/65 leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div ref={ref} className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <Stat key={s.label} {...s} start={inView} />
          ))}
        </div>
      </section>

      <Testimonials />
      <CtaBand title="Let's meet" accent="in the middle." description="Tell us what you're building. A short call is the fastest way to find out if we're the right team." />
    </>
  );
};

export default AboutPage;
