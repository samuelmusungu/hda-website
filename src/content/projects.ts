import type { ServiceSlugHint } from "./types";

export type ProjectCategory = "Web" | "Brand" | "Product" | "Growth";

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  // Case-study narrative. Drafted from the previous site's copy; confirm before launch.
  challenge: string;
  solution: string;
  image: string;
  tags: string[];
  client: string;
  timeline: string;
  services: ServiceSlugHint[];
  metrics: Metric[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "moss-karen",
    title: "The Moss Karen Hotel Website",
    category: "Web",
    year: "2025",
    summary: "A booking-led website and admin system for a boutique hotel in Karen, Nairobi.",
    challenge:
      "Most direct enquiries were leaking to third-party booking platforms, which took commission and kept guests from building a relationship with the hotel.",
    solution:
      "A fast, editorial website with a direct booking engine, a gallery built around the property, and an admin dashboard so the team can manage rooms and rates without a developer.",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&w=1200&h=900&fit=crop",
    tags: ["Hospitality", "Booking engine", "React"],
    client: "The Moss Karen",
    timeline: "6 weeks",
    services: ["web-development", "ui-ux-design"],
    metrics: [
      { value: "35%", label: "Increase in direct bookings in the first quarter" },
      { value: "6 wks", label: "From concept to launch" },
    ],
    featured: true,
  },
  {
    slug: "nairobi-eats",
    title: "Nairobi Eats Directory",
    category: "Growth",
    year: "2025",
    summary: "A searchable food discovery platform for Nairobi's restaurants and vendors.",
    challenge:
      "Nairobi's food scene was spread across social feeds and word of mouth. Vendors had no reliable way to be found, and diners had no single place to search.",
    solution:
      "A searchable directory with SEO-first pages for every vendor, social integration, and a vendor onboarding flow that a small team could run.",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=1200&h=900&fit=crop",
    tags: ["SEO", "Content strategy", "Local discovery"],
    client: "Nairobi Eats",
    timeline: "2 months",
    services: ["digital-growth", "web-development"],
    metrics: [
      { value: "15K", label: "Monthly active users" },
      { value: "120+", label: "Vendors onboarded" },
    ],
  },
  {
    slug: "safispaces",
    title: "SafiSpaces Booking App",
    category: "Product",
    year: "2025",
    summary: "Mobile-first booking for shared workspaces, with real-time availability and M-Pesa payments.",
    challenge:
      "Professionals needed to find and book shared desks across Nairobi quickly, but availability was scattered across calls and messages.",
    solution:
      "A mobile-first booking flow with live availability, M-Pesa checkout, and a clear confirmation path, designed and tested with real users before build.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=1200&h=900&fit=crop",
    tags: ["Mobile UX", "M-Pesa", "Real-time availability"],
    client: "SafiSpaces",
    timeline: "3 months",
    services: ["ui-ux-design", "product-engineering"],
    metrics: [
      { value: "3,000+", label: "Professionals booking every month" },
      { value: "M-Pesa", label: "Native payments in checkout" },
    ],
    featured: true,
  },
  {
    slug: "greengrid",
    title: "GreenGrid Energy Campaign",
    category: "Brand",
    year: "2024",
    summary: "A complete brand identity and launch campaign for a solar energy startup.",
    challenge:
      "An early-stage solar company needed to look credible to investors and government partners, and approachable to households, with a budget for one launch only.",
    solution:
      "A logo, colour and type system, a campaign toolkit and a pitch deck built on one narrative, so every touchpoint reinforced the same message.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&w=1200&h=900&fit=crop",
    tags: ["Brand identity", "Sustainability", "Pitch design"],
    client: "GreenGrid Energy",
    timeline: "1 month",
    services: ["brand-identity"],
    metrics: [
      { value: "500K", label: "Campaign impressions" },
      { value: "1", label: "Government pilot secured" },
    ],
  },
  {
    slug: "twende-crm",
    title: "Twende CRM Dashboard",
    category: "Product",
    year: "2024",
    summary: "A modular CRM for a Nairobi logistics firm, replacing a stack of spreadsheets.",
    challenge:
      "Leads, invoices and performance reporting lived in separate spreadsheets, so reporting took days and the numbers rarely agreed.",
    solution:
      "A modular dashboard with lead tracking, automated invoicing and live analytics, built on a single data model the whole team shares.",
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&w=1200&h=900&fit=crop",
    tags: ["CRM", "Automation", "Analytics"],
    client: "Twende Logistics",
    timeline: "5 weeks",
    services: ["product-engineering"],
    metrics: [
      { value: "60%", label: "Less time on manual reporting" },
      { value: "1", label: "Shared source of truth" },
    ],
  },
];

export const projectCategories = ["All", "Web", "Brand", "Product", "Growth"] as const;

export const projectBySlug = (slug: string | undefined) => projects.find((p) => p.slug === slug);
