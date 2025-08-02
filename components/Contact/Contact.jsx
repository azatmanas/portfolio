import React, { useState } from "react";
import "./Contact.css"; // You'll create this CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          <span className="title-word title-word-1">Let's</span>
          <span className="title-word title-word-2">Connect</span>
          <span className="title-word title-word-3">!</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-visual">
            <div className="visual-element pulse"></div>
            <div className="visual-element circle-1"></div>
            <div className="visual-element circle-2"></div>
            <div className="visual-element wave"></div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div
              className={`form-group ${activeInput === "name" ? "active" : ""}`}
              onClick={() => setActiveInput("name")}
            >
              <label className="floating-label">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setActiveInput("name")}
                onBlur={() => setActiveInput(null)}
                required
              />
              <div className="input-underline"></div>
            </div>

            <div
              className={`form-group ${
                activeInput === "email" ? "active" : ""
              }`}
              onClick={() => setActiveInput("email")}
            >
              <label className="floating-label">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setActiveInput("email")}
                onBlur={() => setActiveInput(null)}
                required
              />
              <div className="input-underline"></div>
            </div>

            <div
              className={`form-group ${
                activeInput === "message" ? "active" : ""
              }`}
              onClick={() => setActiveInput("message")}
            >
              <label className="floating-label">Your Message</label>
              <form
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setActiveInput("message")}
                onBlur={() => setActiveInput(null)}
                rows="3"
                required
              ></form>
              <div className="input-underline"></div>
            </div>

            <button type="submit" className="submit-btn">
              <span className="btn-text">Send Message</span>
              <span className="btn-icon">→</span>
            </button>

            {isSubmitted && (
              <div className="success-message">
                Message sent! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        {/* <div className="contact-social">
          <a href="mailto:ztmanas@gmail.com" className="social-link">
            <span className="link-icon">✉️</span>
            <span className="link-text">ztmanas@gmail.com</span>
          </a>
          <a href="tel:+12244937062" className="social-link">
            <span className="link-icon">📱</span>
            <span className="link-text">+1 (224) 493-7062</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
