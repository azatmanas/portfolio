import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Name is required";
    if (!formValues.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email))
      newErrors.email = "Enter a valid email";
    if (!formValues.message.trim()) newErrors.message = "Message is required";
    else if (formValues.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = { "form-name": "contact", ...formValues };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => {
        setIsSubmitted(true);
        setFormValues({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => alert(error));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          <span className="title-word title-word-1">Let's</span>
          <span className="title-word title-word-2">Connect</span>
          <span className="title-word title-word-3">!</span>
        </h2>

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

          {/* Name */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={formValues.name}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Your Name</label>
            <div className="input-underline"></div>
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder=" "
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Your Email</label>
            <div className="input-underline"></div>
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          {/* Message */}
          <div className="form-group">
            <textarea
              name="message"
              placeholder=" "
              rows="4"
              value={formValues.message}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Your Message</label>
            <div className="input-underline"></div>
            {errors.message && (
              <small className="error">{errors.message}</small>
            )}
          </div>

          {/* Button */}
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
    </section>
  );
};

export default Contact;
