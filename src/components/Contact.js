import React, { useState } from "react";
import emailjs from "emailjs-com";
import FallingStars from "./FallingStars"; 
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false); // State to track sending status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS Configuration
    const serviceID = "service_cxvf2se";
    const templateID = "template_caiw43f";
    const publicKey = "LUoeuVKYmpQmzxyIO";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully!", response);
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="contact-container1">
      <FallingStars />
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

        <button className="submit-btn" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
