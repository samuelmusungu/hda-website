import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProjectGrid from "./ProjectGrid"; // new component

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

        {/* Grid */}
        <ProjectGrid onSelect={setSelectedProject} />

        {/* Dialog */}
        {selectedProject && (
          <Dialog open={true} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-black">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

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
                      <div><span className="text-black/60">Results:</span> {selectedProject.results}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Description</h4>
                    <p className="text-black/70 text-sm">{selectedProject.fullDescription}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-black/5 text-black/60 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Portfolio;