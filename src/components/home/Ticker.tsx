import { capabilities, toolStack } from "@/content/site";

const Row = ({ items, reverse = false, mono = false }: { items: string[]; reverse?: boolean; mono?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee relative overflow-hidden py-5 ${reverse ? "marquee-reverse" : ""}`}>
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {doubled.map((item, i) =>
          mono ? (
            <span key={i} className="font-mono text-sm uppercase tracking-[0.2em] text-black/45 flex items-center gap-10">
              {item}
              <span className="w-1.5 h-1.5 bg-teal" />
            </span>
          ) : (
            <span key={i} className="font-display text-5xl md:text-6xl text-black flex items-center gap-10">
              {item}
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal" />
            </span>
          )
        )}
      </div>
    </div>
  );
};

const Ticker = () => (
  <section aria-hidden className="bg-white border-y border-black/10 overflow-hidden">
    <Row items={capabilities} />
    <div className="border-t border-black/5">
      <Row items={toolStack} reverse mono />
    </div>
  </section>
);

export default Ticker;
