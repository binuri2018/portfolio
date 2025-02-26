import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
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
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" }); // Clear form after submit
  };

  return (
    <div className="contact-container1">
      <h2>Get in Touch</h2>
      <h3>Contact</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="What's your name?"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="What's your email address?"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Your Message</label>
        <textarea
          name="message"
          placeholder="What do you want to say?"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className="submit-btn" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
