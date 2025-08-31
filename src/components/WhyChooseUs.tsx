import { Lightbulb, Globe, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovative Designs",
      description: "We push creative boundaries with cutting-edge design solutions that stand out in the market and capture attention."
    },
    {
      icon: Globe,
      title: "Global Talent Network",
      description: "Access to exceptional talents worldwide, bringing diverse perspectives and expertise to every project we undertake."
    },
    {
      icon: Heart,
      title: "Supporting Tech in Africa",
      description: "Every partnership contributes to empowering African tech talent and creating sustainable employment opportunities."
    },
    {
      icon: Target,
      title: "Proven Impact",
      description: "Track record of delivering measurable results that drive business growth and create lasting brand recognition."
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
            We combine creative excellence with meaningful impact, delivering results 
            that matter for your business and the global community.
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
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg text-black/70 mb-6">
              Join innovative companies that trust us to deliver exceptional results 
              while making a positive global impact.
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