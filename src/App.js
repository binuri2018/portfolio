import React from "react";
import { Element } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NeonCursor from "./components/NeonCursor";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      <div className="content-section">
        <NeonCursor />

        <div className="content">
          <h1>Hi, I'm Binuri</h1>
          <p>Full Stack Developer || Information Technology Undergraduate</p>

          {/* Social Media Links */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/binuri-manodya/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/binuri2018"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaGithub />
            </a>
          </div>

          <button className="download-btn">Download CV</button>
        </div>
      </div>

      <div className="content-section1">
        <Element name="about">
          <AboutMe />
        </Element>
        <Education />
        <Skills />
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
