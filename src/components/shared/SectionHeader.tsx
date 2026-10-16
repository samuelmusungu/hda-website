import { ReactNode } from "react";
import Reveal from "@/components/shared/Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  className?: string;
};

/** Heading block shared across sections so the type rhythm stays consistent. */
const SectionHeader = ({ eyebrow, title, description, align = "center", invert = false, className = "" }: Props) => (
  <Reveal className={`max-w-3xl mb-16 md:mb-20 ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}>
    <p className={`eyebrow mb-6 flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${invert ? "text-white/55" : "text-teal"}`}>
      <span className="inline-block w-6 h-px bg-current" />
      {eyebrow}
      <span className="inline-block w-6 h-px bg-current" />
    </p>
    <h2
      className={`font-display text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight mb-6 ${
        invert ? "text-white" : "text-black"
      }`}
    >
      {title}
    </h2>
    {description && (
      <div className={`text-lg md:text-xl leading-relaxed ${invert ? "text-white/65" : "text-black/65"}`}>{description}</div>
    )}
  </Reveal>
);

export default SectionHeader;
