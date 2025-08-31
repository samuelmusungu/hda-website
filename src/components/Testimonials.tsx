// src/components/Testimonials.tsx

import React from 'react';

const testimonials = [
  {
    name: "Peter Witthaut, MSc BSc",
    role: "International Development Consultant",
    company: "Formerly GIZ",
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
    <section style={{ padding: '2rem 1rem', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Client Testimonials</h2>
      <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        {testimonials.map((t, index) => (
          <div key={index} style={{ background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"{t.quote}"</p>
            <footer style={{ fontWeight: 'bold' }}>
              — {t.name}, {t.role} ({t.company})
            </footer>
            <div style={{ marginTop: '0.5rem', color: '#f5a623' }}>
              {'★'.repeat(t.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}