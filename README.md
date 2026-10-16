# HighDesign Agency website

Multi-page marketing site for HighDesign Agency: brand, UI/UX, web development, product engineering, digital growth and technical talent sourcing.

Stack: Vite, React 18, TypeScript, React Router, Tailwind CSS, Framer Motion, shadcn/ui (Radix), lucide icons.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # serve the build locally
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home: animated hero, ticker, manifesto, services, process, work, talent, testimonials, FAQ |
| `/services` | All services, add-ons and FAQ |
| `/services/:slug` | Service detail: overview, deliverables, process, tools, related work, FAQ |
| `/portfolio` | Filterable project index |
| `/portfolio/:slug` | Case study: challenge, approach, results, next project |
| `/talent` | Talent pipeline, promises, roles, candidate sign-up |
| `/about` | Story, principles, stats, testimonials |
| `/contact` | Brief builder (`?type=talent` pre-selects talent sourcing) |

Service slugs: `brand-identity`, `ui-ux-design`, `web-development`, `product-engineering`, `digital-growth`, `talent-sourcing`.

## Where content lives

All copy and data sit in `src/content/`. Change text there, not in components.

| File | Controls |
| --- | --- |
| `site.ts` | Brand, contact details, socials, nav, headline stats, ticker tools |
| `services.ts` | Six services: overview, problems, process, deliverables, tools, FAQs. Also the add-on list |
| `projects.ts` | Case studies: challenge, approach, metrics, linked services |
| `talent.ts` | Talent pipeline, promises, roles, candidate points |
| `faqs.ts` | Home and general FAQs |
| `testimonials.ts` | Client quotes |

Linking a case study to a service is done by adding the service slug to `services` in `projects.ts`. Related work appears automatically on the service page.

## Motion and interaction

- **Preloader:** a boot sequence shown once per browser session. It counts to 100 and lifts away to reveal the site. Skipped to a short fade for reduced motion.
- **Tech grid:** a canvas dot-matrix background that brightens around the cursor, with a slow scan line.
- **Hero:** masked headline reveal, live Nairobi clock, typed terminal and animated stats.
- **Scroll:** word-by-word manifesto reveal, a process line that draws as you scroll, and reveal-on-enter for sections.
- **Services bento:** cards with a cursor-following spotlight.
- **Route transitions:** pages fade between each other.

All motion respects `prefers-reduced-motion`.

## Before going live

- Replace the stock images in `projects.ts` with real project screenshots. Confirm the case-study narratives and figures, which were drafted from the previous site.
- Confirm the commitments written into the copy. These include the 30 and 90-day talent check-ins, pay ranges shared up front, never asking candidates to work unpaid, and that source code transfers on final payment.
- Add `public/og-image.png` (1200 × 630) so link previews render.
- Wire the brief builder to a backend if you want submissions stored. Supabase fits this stack. Currently it opens the visitor's email or WhatsApp app.

## Design benchmarks

The site draws patterns from these studios and products. They were applied as design choices and were not a live audit of those sites.

- **Pentagram:** large serif display type, editorial whitespace.
- **Locomotive, Active Theory:** scroll-led reveals and a slow capability ticker.
- **Linear, Vercel:** dark feature sections, grid texture and precise micro-interactions.
- **Stripe:** clear service explanations and one primary action per section.
- **Toptal, Andela:** the talent pipeline framing: vetting stages, shortlists and explicit promises to both client and candidate.
