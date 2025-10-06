import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  client: string;
  timeline: string;
  results: string;
};

type Props = {
  onSelect: (project: Project) => void;
};

const projects: Project[] = [
  {
    id: 1,
    title: "The Moss Karen Hotel Website",
    category: "Web Development",
    description: "Responsive website for a boutique hotel in Nairobi.",
    fullDescription:
      "Designed and deployed a modern website for The Moss Karen featuring a booking engine, gallery, and admin dashboard. Improved direct bookings by 35% within the first quarter and enhanced brand visibility in the Karen hospitality circuit.",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&w=600&h=400&fit=crop",
    tags: ["Hospitality", "Booking System", "React"],
    client: "The Moss Karen",
    timeline: "6 weeks",
    results: "35% increase in direct bookings"
  },
  {
    id: 2,
    title: "Nairobi Eats Directory",
    category: "Digital Marketing",
    description: "Local food discovery platform for Nairobi’s culinary scene.",
    fullDescription:
      "Built a searchable directory of restaurants and food vendors with SEO optimization and social media integration. Helped onboard 120+ vendors and reached 15K monthly users.",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&h=400&fit=crop",
    tags: ["SEO", "Content Strategy", "Local Discovery"],
    client: "Nairobi Eats",
    timeline: "2 months",
    results: "15K monthly active users"
  },
  {
    id: 3,
    title: "SafiSpaces Booking App",
    category: "Mobile Design",
    description: "Mobile-first coworking space booking experience.",
    fullDescription:
      "Developed a mobile-friendly app for booking shared workspaces across Nairobi. Integrated M-Pesa payments and real-time availability. Used by 3,000+ professionals monthly.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=600&h=400&fit=crop",
    tags: ["Mobile UX", "M-Pesa", "Coworking"],
    client: "SafiSpaces",
    timeline: "3 months",
    results: "3,000+ monthly bookings"
  },
  {
    id: 4,
    title: "GreenGrid Energy Campaign",
    category: "Branding",
    description: "Brand identity and awareness campaign for a solar startup.",
    fullDescription:
      "Crafted a full brand identity for GreenGrid Energy including logo, color system, and pitch deck. Campaign reached 500K impressions and helped secure a government pilot.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&w=600&h=400&fit=crop",
    tags: ["Branding", "Sustainability", "Pitch Design"],
    client: "GreenGrid Energy",
    timeline: "1 month",
    results: "500K impressions, pilot secured"
  },
  {
    id: 5,
    title: "Twende CRM Dashboard",
    category: "Software Development",
    description: "Custom CRM for a Nairobi-based logistics firm.",
    fullDescription:
      "Built a modular CRM dashboard with lead tracking, automated invoicing, and performance analytics. Reduced manual reporting time by 60% and improved client retention.",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&w=600&h=400&fit=crop",
    tags: ["CRM", "Automation", "Logistics"],
    client: "Twende Logistics",
    timeline: "5 weeks",
    results: "60% reduction in reporting time"
  }
];

const ProjectGrid = ({ onSelect }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card
          key={project.id}
          className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-up border-none cursor-pointer"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onSelect(project)}
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Eye className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <ExternalLink className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary" className="bg-teal/10 text-teal">
                {project.category}
              </Badge>
            </div>

            <h3 className="text-lg font-bold text-black mb-2">
              {project.title}
            </h3>

            <p className="text-black/70 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-2 py-1 bg-black/5 text-black/60 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="text-xs px-2 py-1 bg-black/5 text-black/60 rounded-full">
                  +{project.tags.length - 2} more
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGrid;