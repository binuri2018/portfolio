import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import "./style.css";

const Profile = () => {
  return (
    <div className="container">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span className="highlight">Binuri</span>
        </h1>
        <p className="subtitle">A Full Stack Developer || Information Technology Undergraduate</p>
        

        <div className="social-icons">
          <a href="https://github.com/binuri2018" target="_blank"><FaGithub /></a>
          <a href="#" target="_blank"><FaLinkedin /></a>
          <a href="#" target="_blank"><FaInstagram /></a>
        </div>

        <motion.a
          href="/cv.pdf"
          download
          className="download-btn"
          whileHover={{ scale: 1.1 }}
          
        >
          Download CV <FaDownload />
        </motion.a>
      </motion.div>

      <div className="profile-image">
        <img src="pp1.jpg" alt="Profile" />
      </div>
    </div>
  );
};


export default Profile;

