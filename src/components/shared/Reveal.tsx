import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Props = { children: ReactNode; delay?: number; className?: string };

/** Fades and lifts children in the first time they enter the viewport. */
const Reveal = ({ children, delay = 0, className = "" }: Props) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
