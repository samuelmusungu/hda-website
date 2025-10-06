import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/254757436746"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="icon whatsapp" />
      </a>

      {/* Email Icon */}
      <a
        href="mailto:info@HighDesignAgency.co.ke"
        aria-label="Send an Email"
        title="Send an Email"
      >
        <FaEnvelope className="icon email" />
      </a>
    </div>
  );
};

export default ContactIcons;