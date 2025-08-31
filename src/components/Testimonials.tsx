import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp Inc.",
      company: "TechCorp",
      quote: "HighDesign Agency transformed our brand completely. Their innovative approach and attention to detail helped us secure $2M in new contracts. The team's professionalism and creativity exceeded all expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Founder, RetailMax",
      company: "RetailMax",
      quote: "The e-commerce platform they built for us is phenomenal. Sales increased by 40% within the first quarter. Their technical expertise and user-focused design made all the difference for our business growth.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, SecureBank",
      company: "SecureBank",
      quote: "Working with HighDesign Agency was a game-changer. They delivered a secure, scalable mobile banking app that now serves over 50,000 users. Their global talent network brought incredible value to our project.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Marketing Director, InnovateTech",
      company: "InnovateTech",
      quote: "Their digital marketing strategy delivered a 300% ROI and helped us expand internationally. The team's understanding of global markets and creative execution is unmatched in the industry.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with HighDesign Agency and the results we've delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 animate-fade-up border-none bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-teal/30" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-teal text-teal" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-black/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-sm text-black/60">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up [animation-delay:0.6s]">
          <div className="bg-black/5 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-black/70 mb-6">
              Let's create something amazing together and add your testimonial to this list.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-teal hover:bg-teal-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Let's Build Something Great Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;