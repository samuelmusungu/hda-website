import { MapPin, Heart, Briefcase, Globe2 } from "lucide-react";

const GlobalImpact = () => {
  const impacts = [
    {
      icon: Briefcase,
      title: "Employment Opportunities",
      description: "Creating sustainable roles for talented professionals across Africa.",
      stat: "12+ Jobs Created"
    },
    {
      icon: Globe2,
      title: "Global Collaboration",
      description: "Bridging continents to foster meaningful partnerships and shared innovation.",
      stat: "3 Countries Connected"
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Mentoring and upskilling local creatives through workshops and peer networks.",
      stat: "30+ Professionals Engaged"
    },
    {
      icon: MapPin,
      title: "Market Expansion",
      description: "Helping brands expand their reach while tapping into world-class talent.",
      stat: "8+ Companies Served"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-navy-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global <span className="text-accent-blue">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Partnering with HighDesign means investing in innovation, opportunity, and cultural connection. We don’t just deliver projects—we build bridges that last.
          </p>
        </div>

        {/* World Map Concept */}
        <div className="relative mb-16 animate-fade-up [animation-delay:0.2s]">
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 text-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Connecting Continents</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Our model connects forward-thinking companies with exceptional African talent—creating a vibrant ecosystem of collaboration, creativity, and growth.
                </p>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-8 h-8 text-accent-blue" />
                    </div>
                    <div className="text-sm text-white/60">United States</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-px bg-accent-blue/40"></div>
                    <Globe2 className="w-6 h-6 text-accent-blue mx-2" />
                    <div className="w-16 h-px bg-accent-blue/40"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-8 h-8 text-accent-blue" />
                    </div>
                    <div className="text-sm text-white/60">Africa</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {impacts.map((impact, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/15 transition-colors duration-300"
                  >
                    <impact.icon className="w-8 h-8 text-accent-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent-blue mb-1">{impact.stat}</div>
                    <div className="text-sm text-white/80">{impact.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up [animation-delay:0.4s]">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-blue/30 transition-colors duration-300">
                <impact.icon className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">{impact.title}</h3>
              <p className="text-white/70 leading-relaxed mb-4">{impact.description}</p>
              <div className="text-accent-blue font-semibold">{impact.stat}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up [animation-delay:0.6s]">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join us in shaping a more connected, creative, and prosperous future—one project, one partnership, one story at a time.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Let's Build Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;