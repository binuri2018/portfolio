import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaUser, FaPaperPlane, FaSpinner } from "react-icons/fa";
import FallingStars from "./FallingStars";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSending: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear any previous error when user starts typing
    if (formStatus.isError) {
      setFormStatus(prev => ({ ...prev, isError: false, message: "" }));
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (name.trim().length < 2) {
      setFormStatus({
        isError: true,
        message: "Name should be at least 2 characters long",
      });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus({
        isError: true,
        message: "Please enter a valid email address",
      });
      return false;
    }
    if (message.trim().length < 10) {
      setFormStatus({
        isError: true,
        message: "Message should be at least 10 characters long",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setFormStatus(prev => ({ ...prev, isSending: true, isError: false }));

    const serviceID = "service_cxvf2se";
    const templateID = "template_caiw43f";
    const publicKey = "LUoeuVKYmpQmzxyIO";

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setFormStatus({
        isSuccess: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        isError: true,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setFormStatus(prev => ({ ...prev, isSending: false }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="contact-container">
      <FallingStars />
      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>Get in Touch</motion.h2>
        <motion.p variants={itemVariants} className="contact-intro">
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          variants={itemVariants}
        >
          <div className="form-group">
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={focusedField === "name" ? "focused" : ""}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={focusedField === "email" ? "focused" : ""}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper textarea-wrapper">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={focusedField === "message" ? "focused" : ""}
                required
              />
            </div>
          </div>

          <AnimatePresence>
            {formStatus.isError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {formStatus.message}
              </motion.div>
            )}
            {formStatus.isSuccess && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {formStatus.message}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            className="submit-btn"
            disabled={formStatus.isSending}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {formStatus.isSending ? (
              <>
                <FaSpinner className="spinner" />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
