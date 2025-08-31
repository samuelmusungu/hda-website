import { Palette, Monitor, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity Design",
      description: "Complete brand development including logos, style guides, and corporate identity systems that create lasting impressions and drive recognition.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      icon: Monitor,
      title: "UI/UX & Web Development",
      description: "Cutting-edge web experiences with intuitive design, responsive development, and user-centered approaches that convert and engage.",
      features: ["Web Design", "UI/UX Design", "Frontend Development", "User Research"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Strategy",
      description: "Strategic digital marketing campaigns that increase visibility, drive engagement, and deliver measurable business growth.",
      features: ["SEO Optimization", "Content Strategy", "Campaign Management", "Analytics & Insights"]
    },
    {
      icon: Users,
      title: "Talent Outsourcing & Remote Hiring",
      description: "Connect with exceptional African talent for your projects while supporting global collaboration and creating meaningful opportunities.",
      features: ["Talent Matching", "Remote Teams", "Project Management", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            From concept to execution, we provide comprehensive creative and technical 
            solutions that drive results and create lasting impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 animate-fade-up border-none bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-teal/10 rounded-lg flex items-center justify-center group-hover:bg-teal/20 transition-colors flex-shrink-0">
                    <service.icon className="w-8 h-8 text-teal" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-black/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="text-sm text-black/60 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-teal rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up [animation-delay:0.6s]">
          <p className="text-lg text-black/70 mb-6">
            Ready to transform your business with our expertise?
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-teal hover:bg-teal-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;