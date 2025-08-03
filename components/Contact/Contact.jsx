import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Use native form submission to trigger Netlify form handling
    e.target.submit();

    // Optional: show a success message after submit
    setIsSubmitted(true);

    // Reset form values after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormValues({ name: "", email: "", message: "" });
    }, 3000);
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

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div
              className={`form-group ${activeInput === "name" ? "active" : ""}`}
              onClick={() => setActiveInput("name")}
            >
              <label className="floating-label">Your Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                onFocus={() => setActiveInput("name")}
                onBlur={() => setActiveInput(null)}
                required
              />
              <div className="input-underline"></div>
              {errors.name && <small className="error">{errors.name}</small>}
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
                value={formValues.email}
                onChange={handleChange}
                onFocus={() => setActiveInput("email")}
                onBlur={() => setActiveInput(null)}
                required
              />
              <div className="input-underline"></div>
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            <div
              className={`form-group ${
                activeInput === "message" ? "active" : ""
              }`}
              onClick={() => setActiveInput("message")}
            >
              <label className="floating-label">Your Message</label>
              <textarea
                name="message"
                rows="3"
                value={formValues.message}
                onChange={handleChange}
                onFocus={() => setActiveInput("message")}
                onBlur={() => setActiveInput(null)}
                required
              ></textarea>
              <div className="input-underline"></div>
              {errors.message && (
                <small className="error">{errors.message}</small>
              )}
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
      </div>
    </section>
  );
};

export default Contact;
