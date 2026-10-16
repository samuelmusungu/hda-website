import { useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/content/services";

const Accordion = ({ items, dark = false }: { items: FAQ[]; dark?: boolean }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`divide-y ${dark ? "divide-white/10 border-y border-white/10" : "divide-black/10 border-y border-black/10"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`w-full flex items-center justify-between gap-6 py-6 text-left text-lg font-medium transition-colors ${
                dark ? "text-white hover:text-teal-glow" : "text-black hover:text-teal"
              }`}
            >
              {item.q}
              <Plus className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-teal" : ""}`} />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className={`pb-6 leading-relaxed max-w-3xl ${dark ? "text-white/65" : "text-black/65"}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
