import SectionHeader from "@/components/shared/SectionHeader";
import Accordion from "@/components/shared/Accordion";
import Reveal from "@/components/shared/Reveal";
import { homeFaqs } from "@/content/faqs";
import type { FAQ } from "@/content/services";

const FaqSection = ({ items = homeFaqs }: { items?: FAQ[] }) => (
  <section className="py-28 md:py-36 bg-black/[0.03]">
    <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-4">
        <SectionHeader
          align="left"
          className="mb-0"
          eyebrow="Questions"
          title={<>Good questions, <span className="italic text-teal">straight answers</span>.</>}
        />
      </div>
      <Reveal delay={0.1} className="lg:col-span-8">
        <Accordion items={items} />
      </Reveal>
    </div>
  </section>
);

export default FaqSection;
