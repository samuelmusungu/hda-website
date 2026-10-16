import { useEffect, useRef } from "react";

type Props = { className?: string; intensity?: number };

/**
 * Dot-matrix grid on a canvas. Dots brighten near the cursor and a faint
 * scan line sweeps down. Draws a single still frame for reduced motion.
 */
const TechGrid = ({ className = "", intensity = 1 }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !canvas.parentElement) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const GAP = 36;
    let w = 0, h = 0, raf = 0;
    let mx = -9999, my = -9999;
    let mounted = true;

    const resize = () => {
      const r = canvas.parentElement!.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const frame = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          const d = Math.hypot(x - mx, y - my);
          const near = Math.max(0, 1 - d / 170);
          const pulse = 0.5 + 0.5 * Math.sin(t / 1500 + (x + y) / 140);
          const a = (0.1 + near * 0.8 + pulse * 0.05) * intensity;
          const r = 0.9 + near * 1.6;
          ctx.fillStyle = `hsla(176, 90%, 58%, ${Math.min(a, 1)})`;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (!reduce) {
        const sy = ((t / 14) % (h + 240)) - 120;
        const g = ctx.createLinearGradient(0, sy - 80, 0, sy + 80);
        g.addColorStop(0, "hsla(176, 90%, 58%, 0)");
        g.addColorStop(0.5, "hsla(176, 90%, 58%, 0.07)");
        g.addColorStop(1, "hsla(176, 90%, 58%, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, sy - 80, w, 160);
      }
    };

    const loop = (t: number) => {
      if (!mounted) return;
      frame(t);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => { mx = -9999; my = -9999; };

    resize();
    const parent = canvas.parentElement;
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);

    if (reduce) frame(0);
    else raf = requestAnimationFrame(loop);

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} />;
};

export default TechGrid;
