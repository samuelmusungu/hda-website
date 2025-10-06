import { Palette, Monitor, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity Design",
      description:
        "We help brands find their voice and visual rhythm—from logos and typography to full identity systems. Whether you're launching or evolving, we build clarity and recognition into every pixel.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      icon: Monitor,
      title: "UI/UX & Web Development",
      description:
        "We design and build responsive websites that feel intuitive, cinematic, and fast. Every layout is crafted with purpose—balancing form, function, and flow for real-world users.",
      features: ["Web Design", "UI/UX Design", "Frontend Development", "User Research"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Strategy",
      description:
        "We create digital strategies that connect. From SEO and content to campaign rollouts, we help brands grow with intention—driven by data, storytelling, and local relevance.",
      features: ["SEO Optimization", "Content Strategy", "Campaign Management", "Analytics & Insights"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-gradient">Core Services</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            We blend design, development, and strategy to help brands move with clarity and impact. Every service is tailored to real goals, real users, and real results.
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
            Have a project in mind? Let’s explore how we can bring it to life—together.
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