import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Eye, X } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "TechCorp Rebrand",
      category: "Branding",
      description: "Complete brand transformation for a leading technology company.",
      fullDescription: "A comprehensive rebranding project that included logo design, brand guidelines, website redesign, and marketing materials. The new identity increased brand recognition by 65% and helped secure $2M in new contracts.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tags: ["Branding", "Identity", "Logo Design"],
      client: "TechCorp Inc.",
      timeline: "3 months",
      results: "65% increase in brand recognition"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern, responsive e-commerce platform with seamless UX.",
      fullDescription: "Built a fully responsive e-commerce platform with custom CMS, payment integration, and inventory management. The platform handles 10,000+ daily visitors with 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Web Design", "UX/UI", "E-Commerce"],
      client: "RetailMax",
      timeline: "4 months",
      results: "40% increase in online sales"
    },
    {
      id: 3,
      title: "FinTech Mobile App",
      category: "Mobile Design",
      description: "Secure and user-friendly mobile banking application.",
      fullDescription: "Designed and developed a comprehensive mobile banking app with advanced security features, biometric authentication, and real-time transaction tracking for over 50,000 users.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      tags: ["Mobile App", "FinTech", "UI/UX"],
      client: "SecureBank",
      timeline: "6 months",
      results: "50,000+ active users"
    },
    {
      id: 4,
      title: "Global Marketing Campaign",
      category: "Digital Marketing",
      description: "Multi-channel campaign reaching 5 countries.",
      fullDescription: "Executed a comprehensive digital marketing strategy across social media, search engines, and content platforms. The campaign achieved 300% ROI and expanded market presence internationally.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Marketing", "Strategy", "Global"],
      client: "InnovateTech",
      timeline: "2 months",
      results: "300% ROI achieved"
    },
    {
      id: 5,
      title: "Healthcare Platform",
      category: "Web Development",
      description: "Patient management system for healthcare providers.",
      fullDescription: "Developed a comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine capabilities. Now serving 25+ clinics across the region.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["Healthcare", "Web App", "System Design"],
      client: "MedCare Solutions",
      timeline: "5 months",
      results: "25+ clinics onboarded"
    },
    {
      id: 6,
      title: "Startup Brand Identity",
      category: "Branding",
      description: "Complete brand identity for emerging tech startup.",
      fullDescription: "Created a complete brand identity package including logo, color palette, typography, and brand guidelines. The startup successfully raised $1.5M in Series A funding shortly after the rebrand.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
      tags: ["Startup", "Identity", "Branding"],
      client: "NexGen AI",
      timeline: "2 months",
      results: "$1.5M Series A raised"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Explore our latest projects and discover how we've helped businesses 
            transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-up border-none cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
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

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-black">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-6">
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Project Details</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-black/60">Client:</span> {selectedProject.client}</div>
                      <div><span className="text-black/60">Timeline:</span> {selectedProject.timeline}</div>
                      <div><span className="text-black/60">Category:</span> {selectedProject.category}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Results</h4>
                    <p className="text-sm text-teal font-medium">{selectedProject.results}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-black mb-2">Description</h4>
                  <p className="text-black/70 leading-relaxed">{selectedProject.fullDescription}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-teal/10 text-teal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;