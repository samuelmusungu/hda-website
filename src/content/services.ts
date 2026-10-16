import type { LucideIcon } from "lucide-react";
import { Palette, PenTool, Monitor, Layers, TrendingUp, Users } from "lucide-react";

export type ServiceStep = { title: string; body: string };
export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  short: string;
  headline: string;
  overview: string;
  problems: string[];
  process: ServiceStep[];
  deliverables: string[];
  tools: string[];
  outcome: string;
  projectIds: string[];
  icon: LucideIcon;
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "brand-identity",
    title: "Brand & Identity",
    kicker: "Look, voice, rhythm",
    short: "Identity systems that hold together from a business card to a billboard.",
    headline: "A brand people recognise in three seconds.",
    overview:
      "Most brands are recognisable by accident. We build identities on purpose: positioning first, then the visual and verbal system that carries it across every touchpoint, from the app icon to the investor deck.",
    problems: [
      "Your logo was designed years ago and no longer matches the business",
      "Every channel looks slightly different and the team improvises",
      "You're launching or pivoting and need a credible identity fast",
      "You're pitching investors and the materials undersell the company",
    ],
    process: [
      { title: "Discover", body: "Stakeholder interviews, competitor audit and a review of every existing touchpoint." },
      { title: "Position", body: "We define the brand's territory, personality and the words it owns." },
      { title: "Design", body: "Logo routes, colour and type systems, iconography and imagery direction." },
      { title: "Systemise", body: "Guidelines, templates and asset kits so your team can keep it consistent." },
      { title: "Launch", body: "Rollout support across web, social, print and presentation formats." },
    ],
    deliverables: [
      "Brand strategy and positioning",
      "Logo and wordmark design",
      "Colour, typography and grid systems",
      "Iconography and illustration direction",
      "Brand guidelines and tone of voice",
      "Pitch and investor decks",
      "Social and marketing templates",
      "Packaging and print collateral",
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Keynote", "Notion"],
    outcome: "A recognisable, consistent identity your whole team can apply without asking us.",
    projectIds: ["greengrid"],
    icon: Palette,
    faqs: [
      { q: "Do you redesign logos or only create new ones?", a: "Both. A refresh often keeps equity the brand already has, and we'll tell you honestly when a full rebrand is the better call." },
      { q: "Do you deliver source files?", a: "Yes. You receive editable source files and a guideline document, so your team or another agency can build on the work." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    kicker: "Clear flows, beautiful screens",
    short: "Research-led interfaces for web and mobile that people finish using.",
    headline: "Interfaces that people understand before they read them.",
    overview:
      "Good product design removes decisions the user shouldn't have to make. We research who the product is for, map the flows that matter, then design and test high-fidelity screens until the path from first visit to finished task is short and obvious.",
    problems: [
      "Users drop off in the middle of sign-up, checkout or booking",
      "The product works but nobody enjoys using it",
      "Features were added over time and the navigation no longer makes sense",
      "Your mobile experience is a shrunken version of the desktop site",
    ],
    process: [
      { title: "Research", body: "User interviews, analytics review and heuristic audit of the current product." },
      { title: "Map", body: "Information architecture, user flows and the critical paths we need to protect." },
      { title: "Prototype", body: "Low-fidelity wireframes that we test before anything gets styled." },
      { title: "Design", body: "High-fidelity UI, responsive layouts, states, motion and accessibility checks." },
      { title: "Validate", body: "Usability testing sessions, a handoff with specs, and a review after launch." },
    ],
    deliverables: [
      "User research and interviews",
      "Heuristic and accessibility audits",
      "Information architecture and user flows",
      "Wireframes and interactive prototypes",
      "High-fidelity UI for web and mobile",
      "Usability testing and reporting",
      "Developer handoff with specs and tokens",
      "Design system components",
    ],
    tools: ["Figma", "FigJam", "Maze", "Hotjar", "Miro"],
    outcome: "Fewer drop-offs, faster task completion and a product your users trust.",
    projectIds: ["safispaces", "moss-karen"],
    icon: PenTool,
    faqs: [
      { q: "Do you design for mobile as well as the web?", a: "Yes. We design responsive web layouts and native-feeling mobile flows, including M-Pesa and other local payment patterns." },
      { q: "Can you work from an existing product?", a: "Yes. We usually start with an audit of the current experience, then agree on what to fix first." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    kicker: "Cinematic, fast, built to last",
    short: "Marketing sites, booking flows and content platforms built for speed and search.",
    headline: "Websites that look expensive and load instantly.",
    overview:
      "We build marketing sites, hospitality and booking experiences, and content platforms in React and TypeScript. Every project is tuned for Core Web Vitals, accessibility and search from day one, and built so your team can edit content without us.",
    problems: [
      "Your site is slow, especially on mobile data",
      "It doesn't convert visitors into enquiries or bookings",
      "Updating content requires a developer every time",
      "The site was built on a template and can't do what you need",
    ],
    process: [
      { title: "Plan", body: "Sitemap, content model and the performance and SEO targets we'll hold ourselves to." },
      { title: "Design", body: "Page templates and components, designed in Figma and reviewed with you." },
      { title: "Build", body: "Responsive React and TypeScript, accessible markup and an editable content layer." },
      { title: "Optimise", body: "Speed, schema, analytics and conversion tracking set up before launch." },
      { title: "Launch", body: "Deployment, redirects, monitoring and a handover session for your team." },
    ],
    deliverables: [
      "Responsive marketing and brand websites",
      "Booking and reservation engines",
      "Content management and editable sections",
      "Technical SEO and structured data",
      "Analytics and conversion tracking",
      "Performance optimisation",
      "Forms, lead capture and CRM hooks",
      "Hosting, deployment and handover",
    ],
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel", "Google Analytics"],
    outcome: "A fast, search-ready site your team can run and grow.",
    projectIds: ["moss-karen", "nairobi-eats"],
    icon: Monitor,
    faqs: [
      { q: "Will my site be fast on mobile networks?", a: "We design for mid-range phones and variable connections, optimise images and fonts, and measure Core Web Vitals before launch." },
      { q: "Can we edit our content ourselves?", a: "Yes. We build editable sections so your team updates copy, images and listings without touching code." },
    ],
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    kicker: "Dashboards, platforms, integrations",
    short: "Custom web apps, CRMs and internal tools engineered around how your team works.",
    headline: "Software that replaces the spreadsheets.",
    overview:
      "When a product outgrows off-the-shelf tools, we build what comes next: dashboards, CRMs, marketplaces and internal platforms. We design the data model first, then engineer the front end, back end and integrations with the payment and business tools you already use.",
    problems: [
      "Your team runs the business in five spreadsheets and a group chat",
      "Off-the-shelf software doesn't fit how you actually work",
      "Reporting takes days and the numbers still disagree",
      "You need payments, invoicing or integrations that the tools don't support",
    ],
    process: [
      { title: "Model", body: "Workflows and a data model agreed with the people who use the system every day." },
      { title: "Architect", body: "Stack, auth, permissions, hosting and the integrations the product depends on." },
      { title: "Build", body: "Iterative sprints with working demos, reviewed with stakeholders every week." },
      { title: "Harden", body: "Testing, role-based access, monitoring, backups and performance tuning." },
      { title: "Operate", body: "Handover, documentation and an optional retainer for ongoing development." },
    ],
    deliverables: [
      "Custom dashboards and admin panels",
      "CRM, invoicing and reporting systems",
      "Supabase or PostgreSQL data models",
      "Python services and data pipelines",
      "Role-based access and authentication",
      "Payments: Stripe, M-Pesa and bank integrations",
      "API design and third-party integrations",
      "Documentation and handover",
    ],
    tools: ["React", "TypeScript", "Supabase", "PostgreSQL", "Python", "Node.js", "Stripe", "M-Pesa"],
    outcome: "One system of record, with the reporting your leadership actually trusts.",
    projectIds: ["twende-crm", "safispaces"],
    icon: Layers,
    faqs: [
      { q: "Do we own the code?", a: "Yes. Once the agreed milestones are paid, the source code and documentation are yours." },
      { q: "Can you take over a product another developer started?", a: "Yes. We start with a code and architecture review, then agree a plan for stabilising and extending it." },
    ],
  },
  {
    slug: "digital-growth",
    title: "Digital Growth",
    kicker: "Strategy you can measure",
    short: "Search, content and campaigns connected to a funnel you can actually track.",
    headline: "Growth built on numbers you can trust.",
    overview:
      "We set up measurement first, then build the search, content and campaign work that feeds it. Every initiative has a baseline, a target and a clear owner, so the reporting tells you what to do next instead of just what happened.",
    problems: [
      "Traffic is flat and nobody can say which channel is working",
      "Your site ranks for nothing that buyers search for",
      "Campaigns run, but the attribution is guesswork",
      "Content is published without a plan behind it",
    ],
    process: [
      { title: "Measure", body: "Analytics, conversion events and dashboards set up before any spend starts." },
      { title: "Audit", body: "Technical SEO, content gaps and a competitor and keyword review." },
      { title: "Plan", body: "A prioritised roadmap of content, search and campaign work with clear targets." },
      { title: "Execute", body: "Content production, on-page and technical fixes, and campaign management." },
      { title: "Review", body: "Monthly reporting that ties each action to traffic, enquiries or revenue." },
    ],
    deliverables: [
      "Technical and local SEO",
      "Keyword and competitor research",
      "Content strategy and production",
      "Paid and social campaign management",
      "Analytics setup and dashboards",
      "Conversion-rate optimisation",
      "Email and lifecycle flows",
      "Monthly performance reporting",
    ],
    tools: ["Google Analytics 4", "Google Search Console", "Looker Studio", "Semrush", "Meta Ads"],
    outcome: "Traffic and enquiries you can attribute, and a clear plan for the next quarter.",
    projectIds: ["nairobi-eats"],
    icon: TrendingUp,
    faqs: [
      { q: "How long before we see results from SEO?", a: "Technical fixes can move quickly. Organic growth from content usually builds over several months, and we'll set expectations against your market." },
      { q: "Do you run paid campaigns?", a: "Yes, on Google, Meta and LinkedIn, with a tracked funnel and reporting agreed before launch." },
    ],
  },
  {
    slug: "talent-sourcing",
    title: "Talent Sourcing",
    kicker: "Vetted engineers and designers, placed fast",
    short: "Full-cycle technical recruitment, from brief to offer, with African talent screened for remote teams.",
    headline: "Hire the people your roadmap actually needs.",
    overview:
      "We run the full sourcing cycle for technical and design roles. Our talent network is built in Nairobi and across the continent, and every candidate is screened for skill, communication and how they work with distributed teams.",
    problems: [
      "Hiring pipelines are slow and full of unqualified applicants",
      "Recruiters don't understand the technical role well enough",
      "Remote hires underperform because the screening missed the basics",
      "You need a full product team faster than you can hire one",
    ],
    process: [
      { title: "Brief", body: "We map the role, the must-have skills, the team it sits in and the time zone overlap you need." },
      { title: "Source", body: "Boolean search, GitHub and portfolio reviews, and a network built across the African tech community." },
      { title: "Screen", body: "A structured conversation on experience, communication, availability and motivation." },
      { title: "Assess", body: "Practical tasks or a short build, scored against a rubric agreed with you in advance." },
      { title: "Place", body: "A ranked shortlist, then we coordinate interviews, offers, contracting and onboarding." },
    ],
    deliverables: [
      "Role scoping and calibrated job briefs",
      "Multi-channel sourcing (LinkedIn, GitHub, referrals)",
      "Boolean search and pipeline building",
      "Technical screening and skills assessments",
      "Reference checks and shortlists",
      "Interview coordination and offer support",
      "Contracting and onboarding coordination",
      "Post-placement check-ins",
    ],
    tools: ["LinkedIn Recruiter", "GitHub", "Notion", "Google Workspace"],
    outcome: "Shortlists in days, and hires who can contribute in their first weeks.",
    projectIds: [],
    icon: Users,
    faqs: [
      { q: "Which roles do you source?", a: "Frontend, full-stack and backend engineers, product and UI/UX designers, data roles, and marketing and recruiting specialists." },
      { q: "Do you hire for full-time or contract roles?", a: "Both. Contracting and onboarding are handled case by case, and we'll advise on the most practical route for your country." },
    ],
  },
];

export const addOns = [
  { title: "Design systems", body: "Tokens, components and documentation that keep product teams moving in step." },
  { title: "Motion & micro-interactions", body: "Purposeful animation that guides attention and makes interfaces feel alive." },
  { title: "Pitch & investor decks", body: "Narrative-led decks built to get read, remembered and forwarded." },
  { title: "Accessibility audits", body: "WCAG-based reviews and fixes so more people can use what you build." },
  { title: "Copy & content", body: "Website, product and campaign copy written in your voice." },
  { title: "Prototyping & testing", body: "Clickable prototypes validated with real users before engineering starts." },
  { title: "Analytics & tracking", body: "Event models and dashboards that make every decision measurable." },
  { title: "Retainers & dedicated teams", body: "Ongoing design, engineering or growth capacity without the hiring overhead." },
];

export const serviceBySlug = (slug: string | undefined) => services.find((s) => s.slug === slug);
