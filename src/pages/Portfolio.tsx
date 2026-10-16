import { useMemo, useState } from "react";
import PageHero from "@/components/layout/PageHero";
import ProjectCard from "@/components/shared/ProjectCard";
import Reveal from "@/components/shared/Reveal";
import CtaBand from "@/components/shared/CtaBand";
import { projects, projectCategories } from "@/content/projects";

const PortfolioPage = () => {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Work that <span className="italic text-teal-glow">moves</span> numbers.
          </>
        }
        description="A selection of projects across brand, web, product and growth. Open any case study for the challenge, the approach and the results."
        crumbs={[{ label: "Home", to: "/" }, { label: "Work" }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filter projects">
            {projectCategories.map((c) => {
              const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    filter === c ? "bg-black text-white" : "bg-white text-black/70 border border-black/10 hover:text-black hover:border-black/30"
                  }`}
                >
                  {c} <span className="opacity-50 ml-1">{count}</span>
                </button>
              );
            })}
          </div>

          {visible.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {visible.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 0.08} className={i === 0 && visible.length % 2 === 1 ? "md:col-span-2" : ""}>
                  <ProjectCard project={p} wide={i === 0 && visible.length % 2 === 1} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-black/60">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <CtaBand title="Your project" accent="could be next." description="Share the goal and the constraints. We'll show you how we'd approach it." />
    </>
  );
};

export default PortfolioPage;
