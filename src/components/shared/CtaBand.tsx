import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

type Props = {
  title: string;
  accent?: string;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
};

/** Closing call to action used at the bottom of inner pages. */
const CtaBand = ({
  title,
  accent,
  description,
  primary = { label: "Start a brief", to: "/contact" },
  secondary,
}: Props) => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container mx-auto px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-teal p-10 md:p-20 text-white">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-white/20" aria-hidden />
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full border border-white/20" aria-hidden />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] mb-6">
              {title} {accent && <span className="italic text-black/80">{accent}</span>}
            </h2>
            {description && <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl">{description}</p>}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={primary.to} className="group inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-7 py-4 font-semibold hover:bg-white hover:text-black transition-colors">
                {primary.label}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              {secondary && (
                <Link to={secondary.to} className="inline-flex items-center justify-center rounded-full border border-white/50 hover:border-white px-7 py-4 font-semibold transition-colors">
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBand;
