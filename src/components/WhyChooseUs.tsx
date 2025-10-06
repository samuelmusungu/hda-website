import { Lightbulb, Globe, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Thoughtful Design",
      description:
        "We craft digital experiences that feel intuitive, cinematic, and true to your brand. Every layout is built with purpose and precision."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Our network blends local insight with international standards—bringing diverse thinking and scalable solutions to every project."
    },
    {
      icon: Heart,
      title: "Rooted in Impact",
      description:
        "We believe in meaningful work. Every collaboration supports African tech talent and contributes to long-term growth in the region."
    },
    {
      icon: Target,
      title: "Results That Matter",
      description:
        "We focus on outcomes—whether it’s better engagement, smoother workflows, or stronger brand presence. Our work speaks through results."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose <span className="text-gradient">HighDesign Agency</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            We blend design, strategy, and local relevance to help brands grow with clarity and confidence. Here’s what sets us apart.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 animate-fade-up border-none bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-teal" />
                </div>

                <h3 className="text-xl font-bold text-black mb-4">
                  {reason.title}
                </h3>

                <p className="text-black/70 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up [animation-delay:0.6s]">
          <div className="bg-black/5 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Let’s Build Something That Lasts
            </h3>
            <p className="text-lg text-black/70 mb-6">
              Whether you're launching a new brand or refining an existing one, we’re here to help you move with purpose and precision.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-teal hover:bg-teal-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;