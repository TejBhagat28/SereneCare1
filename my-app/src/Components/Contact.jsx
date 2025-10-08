import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your message has been sent! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-hero fade-in">
        <h1>Contact <span>SereneCare+</span></h1>
        <p>
          We're here to help you with appointments, inquiries, and feedback.  
          Let’s make your healthcare journey smoother together.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info fade-in">
          <h2>Get in Touch</h2>
          <p>
            <strong>Email:</strong> support@serenecareplus.com <br />
            <strong>Phone:</strong> +91 98765 43210 <br />
            <strong>Address:</strong> 42 Serenity Avenue, Mumbai, India
          </p>
          <p className="quote">
            “Your health is our top priority — reach out anytime!”
          </p>
        </div>

        <div className="contact-form fade-in">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
