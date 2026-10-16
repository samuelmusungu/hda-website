import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

const ProjectCard = ({ project, wide = false }: { project: Project; wide?: boolean }) => (
  <Link to={`/portfolio/${project.slug}`} className={`group block ${wide ? "md:col-span-2" : ""}`}>
    <div className={`relative overflow-hidden rounded-3xl bg-black ${wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
      <img
        src={project.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-[900ms] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
      <div className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-wider text-white bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">
        {project.category} · {project.year}
      </div>
      <span className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="w-5 h-5" />
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8 text-white">
        <h3 className="font-display text-3xl md:text-4xl leading-tight mb-2">{project.title}</h3>
        <p className="text-white/70 text-sm md:text-base max-w-lg mb-4">{project.summary}</p>
        <p className="font-mono text-xs uppercase tracking-wider text-teal-glow">
          {project.metrics[0].value} · {project.metrics[0].label}
        </p>
      </div>
    </div>
  </Link>
);

export default ProjectCard;
