import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import { projects } from "@/content/projects";

const FeaturedWork = () => {
  const featured = projects.slice(0, 3);
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeader
            align="left"
            className="mb-12 md:mb-16"
            eyebrow="Selected work"
            title={
              <>
                Projects that <span className="italic text-teal">moved numbers</span>.
              </>
            }
          />
          <Reveal>
            <Link to="/portfolio" className="link-underline inline-flex items-center gap-2 font-semibold pb-16 md:pb-20">
              All case studies <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link to={`/portfolio/${p.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-black">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-wider text-white bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">
                    {p.category} · {p.year}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="font-display text-3xl leading-tight mb-3">{p.title}</p>
                    <p className="text-sm text-teal-glow font-semibold">{p.metrics[0].value} · {p.metrics[0].label}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
