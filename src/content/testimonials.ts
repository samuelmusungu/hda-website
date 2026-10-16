export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

// Quotes carried over from the previous site, lightly tidied for length.
export const testimonials: Testimonial[] = [
  {
    quote:
      "HighDesign Agency’s modular systems and strategic dashboards reflect a deep understanding of development sector needs. Their work aligns with the kind of impact-driven digital transformation I’ve seen succeed across Africa.",
    name: "Peter Witthaut, MSc BSc",
    role: "International Development Consultant",
    company: "GIZ",
  },
  {
    quote:
      "Their farm system helped me digitise everything, from dairy yield tracking to crop rotation planning. It’s now easier to manage staff, monitor inputs and scale sustainably.",
    name: "Jimmy Nabwera",
    role: "Founder",
    company: "Nabwera Farm, Kiminini",
  },
  {
    quote:
      "They helped us bring booking flows, garden tours and guest feedback into one seamless platform. Their work reflects our values and vision.",
    name: "Adrian",
    role: "Owner",
    company: "Karen Little Paradise",
  },
  {
    quote:
      "Their civic engagement platform helped us reach thousands of Nairobi residents with real-time updates and feedback loops. It’s rare to find a team that blends UX, accessibility and civic purpose this well.",
    name: "Dr. Grace Muthoni",
    role: "Director",
    company: "Urban Sustainability Lab",
  },
  {
    quote:
      "I was impressed by their clean code, scalable architecture and intuitive admin flows. They’re not just developers. They’re solution architects.",
    name: "Kevin Otieno",
    role: "Lead Developer",
    company: "Twende Logistics",
  },
];
