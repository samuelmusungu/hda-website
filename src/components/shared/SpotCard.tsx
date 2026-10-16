import { ReactNode, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";

type Props = { to: string; children: ReactNode; className?: string; dark?: boolean };

/** Link card with a cursor-following light spotlight. Used across the services grid. */
const SpotCard = ({ to, children, className = "", dark = false }: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-3xl border transition-colors duration-300 ${
        dark ? "bg-black text-white border-white/10 hover:border-teal/60" : "bg-white text-black border-black/10 hover:border-teal/50"
      } ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), hsl(176 90% 45% / ${dark ? 0.22 : 0.1}), transparent 70%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </Link>
  );
};

export default SpotCard;
