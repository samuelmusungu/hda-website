import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/content/testimonials";

const Testimonials = ({ showHeader = true }: { showHeader?: boolean }) => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const t = testimonials[i];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(id);
  }, [paused, n]);

  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6">
        {showHeader && (
          <SectionHeader eyebrow="Client voices" title={<>What clients <span className="italic text-teal">say</span>.</>} />
        )}
        <div className="max-w-4xl mx-auto">
          <figure key={i} className="animate-[fadeUp_0.6s_ease-out_both]">
            <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] text-black">
              <span className="text-teal">“</span>
              {t.quote}
              <span className="text-teal">”</span>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="w-12 h-px bg-teal" />
              <span>
                <span className="block font-semibold text-black">{t.name}</span>
                <span className="block text-sm text-black/60">{t.role}, {t.company}</span>
              </span>
            </figcaption>
          </figure>

          <div className="flex items-center justify-between mt-14">
            <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={`Testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? "w-10 bg-teal" : "w-4 bg-black/20 hover:bg-black/40"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setI((v) => (v - 1 + n) % n)} aria-label="Previous" className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setI((v) => (v + 1) % n)} aria-label="Next" className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
