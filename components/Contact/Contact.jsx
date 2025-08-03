// import React, { useState } from "react";
// import "./Contact.css"; // You'll create this CSS file

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [activeInput, setActiveInput] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic here
//     console.log("Submitted:", formData);
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <div className="contact-container">
//         <h2 className="contact-title">
//           <span className="title-word title-word-1">Let's</span>
//           <span className="title-word title-word-2">Connect</span>
//           <span className="title-word title-word-3">!</span>
//         </h2>

//         <div className="contact-grid">
//           <div className="contact-visual">
//             <div className="visual-element pulse"></div>
//             <div className="visual-element circle-1"></div>
//             <div className="visual-element circle-2"></div>
//             <div className="visual-element wave"></div>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div
//               className={`form-group ${activeInput === "name" ? "active" : ""}`}
//               onClick={() => setActiveInput("name")}
//             >
//               <label className="floating-label">Your Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 onFocus={() => setActiveInput("name")}
//                 onBlur={() => setActiveInput(null)}
//                 required
//               />
//               <div className="input-underline"></div>
//             </div>

//             <div
//               className={`form-group ${
//                 activeInput === "email" ? "active" : ""
//               }`}
//               onClick={() => setActiveInput("email")}
//             >
//               <label className="floating-label">Your Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onFocus={() => setActiveInput("email")}
//                 onBlur={() => setActiveInput(null)}
//                 required
//               />
//               <div className="input-underline"></div>
//             </div>

//             <div
//               className={`form-group ${
//                 activeInput === "message" ? "active" : ""
//               }`}
//               onClick={() => setActiveInput("message")}
//             >
//               <label className="floating-label">Your Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 onFocus={() => setActiveInput("message")}
//                 onBlur={() => setActiveInput(null)}
//                 rows="3"
//                 required
//               ></textarea>
//               <div className="input-underline"></div>
//             </div>

//             <button type="submit" className="submit-btn">
//               <span className="btn-text">Send Message</span>
//               <span className="btn-icon">→</span>
//             </button>

//             {isSubmitted && (
//               <div className="success-message">
//                 Message sent! I'll get back to you soon.
//               </div>
//             )}
//           </form>
//         </div>

//         {/* <div className="contact-social">
//           <a href="mailto:ztmanas@gmail.com" className="social-link">
//             <span className="link-icon">✉️</span>
//             <span className="link-text">ztmanas@gmail.com</span>
//           </a>
//           <a href="tel:+12244937062" className="social-link">
//             <span className="link-icon">📱</span>
//             <span className="link-text">+1 (224) 493-7062</span>
//           </a>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Contact;
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

    if (!validate()) return; // stop if errors

    const formData = new FormData(e.target);

    fetch("/", {
      method: "POST",
      body: formData,
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

        <div className="contact-grid">
          {/* Visual elements */}
          <div className="contact-visual">
            <div className="visual-element pulse"></div>
            <div className="visual-element circle-1"></div>
            <div className="visual-element circle-2"></div>
            <div className="visual-element wave"></div>
          </div>

          {/* Netlify form */}
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Hidden Netlify fields */}
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Name input */}
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

            {/* Email input */}
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

            {/* Message textarea */}
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

            {/* Submit button */}
            <button type="submit" className="submit-btn">
              <span className="btn-text">Send Message</span>
              <span className="btn-icon">→</span>
            </button>

            {/* Success message */}
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
