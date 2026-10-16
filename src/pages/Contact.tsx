import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/Contact";

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title={
        <>
          Let's talk about <span className="italic text-teal-glow">the brief</span>.
        </>
      }
      description="Answer a few questions and we'll prepare the brief. Send it by email or WhatsApp, and we'll reply within a working day."
      crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      compact
    />
    <ContactForm />
  </>
);

export default ContactPage;
