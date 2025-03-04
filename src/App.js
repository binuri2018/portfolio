import React from "react";
import { Element } from "react-scroll";
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
          <button className="download-btn">Download CV</button>
        </div>
      </div>

      <div className="content-section1">
        
        <Element name="about" className="section">
          <AboutMe />
        </Element>

        <Education />
        <Skills />

        <Element name="projects" className="section">
          <Projects />
        </Element>

        <Element name="contact" className="section">
          <Contact />
        </Element>
      </div>
    </div>
  );
}

export default App;
