import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { site } from "@/content/site";
import "./ContactIcons.css";

const ContactIcons = () => (
  <div className="contact-icons" aria-label="Quick contact">
    <a
      href={`https://wa.me/${site.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp className="icon whatsapp" />
    </a>
    <a href={`mailto:${site.email}`} aria-label="Send an email" title="Send an email">
      <FaEnvelope className="icon email" />
    </a>
  </div>
);

export default ContactIcons;
