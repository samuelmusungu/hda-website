import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to contact@highdesignagency.com
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Get in touch with our team 
            and let's discuss how we can help elevate your brand and business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-up [animation-delay:0.2s]">
            <Card className="border-none shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="border-black/20 focus:border-teal"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-black mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="border-black/20 focus:border-teal"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-black mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      required
                      className="min-h-32 border-black/20 focus:border-teal"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-teal hover:bg-teal-light text-white w-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-up [animation-delay:0.4s]">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Get in touch</h3>
                <p className="text-black/70 leading-relaxed mb-8">
                  We're here to help bring your ideas to life. Whether you need branding, 
                  web design, digital marketing, or want to connect with our global talent 
                  network, we're ready to start the conversation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-black/5 transition-colors duration-300">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email Us</h4>
                    <a 
                      href="mailto:contact@highdesignagency.com"
                      className="text-black/70 hover:text-teal transition-colors"
                    >
                      contact@highdesignagency.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-black/5 transition-colors duration-300">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Call Us</h4>
                    <span className="text-black/70">Available for consultations</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-black/5 transition-colors duration-300">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Global Presence</h4>
                    <span className="text-black/70">USA • Africa • Worldwide</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-teal/5 p-6 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Quick Response</h4>
                <p className="text-black/70 text-sm">
                  We typically respond to all inquiries within 24 hours. For urgent 
                  projects, please mention it in your message for prioritized assistance.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-lg text-black/70 mb-4">
                  Ready to start your project?
                </p>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-black hover:bg-black/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Let's Build Something Great Together
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;