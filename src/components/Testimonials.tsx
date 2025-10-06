import React from "react";

const testimonials = [
  {
    name: "Peter Witthaut, MSc BSc",
    role: "International Development Consultant",
    company: "GIZ",
    quote:
      "HighDesign Agency’s modular systems and strategic dashboards reflect a deep understanding of development sector needs. Their work aligns with the kind of impact-driven digital transformation I’ve seen succeed across Africa.",
    rating: 5
  },
  {
    name: "Jimmy Nabwera",
    role: "Founder, Nabwera Farm",
    company: "Kiminini, Trans Nzoia",
    quote:
      "Their farm system helped me digitize everything—from dairy yield tracking to crop rotation planning. It’s now easier to manage staff, monitor inputs, and scale sustainably. I recommend them to any serious farmer.",
    rating: 5
  },
  {
    name: "Adrian",
    role: "Owner, Karen Little Paradise",
    company: "Karen, Nairobi",
    quote:
      "We run a hospitality retreat rooted in sustainability. HighDesign Agency helped us integrate booking flows, garden tours, and guest feedback into one seamless platform. Their work reflects our values and vision.",
    rating: 5
  },
  {
    name: "Dr. Grace Muthoni",
    role: "Director, Urban Sustainability Lab",
    company: "Nairobi",
    quote:
      "Their civic engagement platform helped us reach thousands of Nairobi residents with real-time updates and feedback loops. It’s rare to find a team that blends UX, accessibility, and civic purpose so well.",
    rating: 5
  },
  {
    name: "Kevin Otieno",
    role: "Lead Developer, Twende Logistics",
    company: "Nairobi",
    quote:
      "We collaborated on a custom CRM dashboard and I was impressed by their clean code, scalable architecture, and intuitive admin flows. They’re not just developers—they’re solution architects.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            We’ve worked with farmers, developers, consultants, and hospitality leaders—each with a unique story. Here’s what they had to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-up [animation-delay:0.2s]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-black/5 p-6 rounded-xl shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow duration-300"
            >
              <p className="italic text-black/80 mb-4">“{t.quote}”</p>
              <footer className="font-semibold text-black">
                — {t.name}, {t.role} ({t.company})
              </footer>
              <div className="mt-2 text-yellow-500 text-sm">
                {"★".repeat(t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}