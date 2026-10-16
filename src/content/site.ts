// Brand facts, contact details and global copy. Components read from here.

export const site = {
  name: "HighDesign Agency",
  shortName: "HDA",
  tagline: "Design. Engineer. Staff.",
  url: "https://hda-website-iota.vercel.app",
  email: "info@HighDesignAgency.co.ke",
  phoneDisplay: "+254 757 436 746",
  phoneTel: "+254757436746",
  whatsappNumber: "254757436746",
  presence: "Nairobi • Remote • Global",
  // Used for the live HUD clock and coordinates on the home page.
  location: { city: "Nairobi", tz: "Africa/Nairobi", lat: "1.2921° S", lng: "36.8219° E" },
  responseTime: "24 hours",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/company/highdesignagency" },
    { label: "Twitter", href: "https://twitter.com/highdesignke" },
    { label: "GitHub", href: "https://github.com/highdesignagency" },
    { label: "Instagram", href: "https://instagram.com/highdesign.agency" },
  ],
} as const;

export const navItems = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/talent", label: "Talent" },
  { to: "/about", label: "About" },
] as const;

// Headline figures carried over from the previous site. Update here only.
export const stats = [
  { value: 12, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "+", label: "Countries served" },
  { value: 20, suffix: "+", label: "Talents connected" },
  { value: 2, suffix: "+", label: "Years in motion" },
] as const;

export const capabilities = [
  "Brand Identity",
  "UI / UX Design",
  "Web Development",
  "Product Engineering",
  "Design Systems",
  "Digital Growth",
  "Talent Sourcing",
  "Motion & Interaction",
];

export const toolStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Python",
  "Node.js",
  "Figma",
  "Framer Motion",
  "Stripe",
  "M-Pesa",
  "Vercel",
  "Google Analytics",
];
