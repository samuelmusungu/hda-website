import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import SpotCard from "@/components/shared/SpotCard";
import Reveal from "@/components/shared/Reveal";
import { services } from "@/content/services";

// Column spans give the grid an intentional, asymmetric rhythm on large screens.
const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4", "lg:col-span-3", "lg:col-span-3"];

const ServicesBento = () => (
  <section id="services" className="py-28 md:py-36 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeader
        eyebrow="What we do"
        title={
          <>
            Six disciplines. <span className="italic text-teal">One team.</span>
          </>
        }
        description="Most agencies hand over a deck and disappear. We design it, build it, grow it and staff the people who keep it running."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
        {services.map((s, i) => {
          const dark = i === 0 || i === 3;
          return (
            <Reveal key={s.slug} delay={(i % 2) * 0.08} className={spans[i]}>
              <SpotCard to={`/services/${s.slug}`} dark={dark} className="h-full min-h-[280px] p-8 flex flex-col">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs text-teal">0{i + 1}</span>
                  <span
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      dark ? "bg-white/10" : "bg-teal/10"
                    }`}
                  >
                    <s.icon className="w-6 h-6 text-teal" />
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3">{s.title}</h3>
                <p className={`leading-relaxed ${dark ? "text-white/65" : "text-black/65"}`}>{s.short}</p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-semibold">
                  Explore
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </SpotCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesBento;
