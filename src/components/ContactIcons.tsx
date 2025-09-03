import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <a
        href="https://wa.me/254712345678"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="icon whatsapp" />
      </a>
      <a
        href="mailto:hello@highdesign.agency"
        aria-label="Email"
      >
        <FaEnvelope className="icon email" />
      </a>
    </div>
  );
};

export default ContactIcons;