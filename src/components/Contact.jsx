import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-subtitle">Below are the details to reach out to me!</p>

        <div className="contact-cards">
          <a
            href="https://maps.app.goo.gl/eeSi6vAPekTLf8mh7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-link-card"
          >
            <div className="contact-icon">📍</div>
            <h4>ADDRESS</h4>
            <p>Surat, India</p>
          </a>

          <a
            href="tel:+917567920151"
            className="contact-card contact-link-card"
          >
            <div className="contact-icon">📞</div>
            <h4>CONTACT NUMBER</h4>
            <p>+91 9510199128</p>
          </a>

          <a
            href="mailto:Patilrohit6124@gmail.com"
            className="contact-card contact-link-card"
          >
            <div className="contact-icon">✉️</div>
            <h4>EMAIL ADDRESS</h4>
            <p>contact@mukesh.com</p>
          </a>

        </div>

        <div className="contact-social">
          <p>Find me on</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/its_rohit_patil_1611?utm_source=qr&igsh=anc2N3RvbWN1dzJ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="https://www.facebook.com/share/1Rvwxrm8xD/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
