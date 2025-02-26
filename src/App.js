import React from "react";
import FallingStars from "./components/FallingStars";
import GlowingNetwork from "./components/GlowingNetwork";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <FallingStars />
      

      {/* Wrap content and AboutMe in a single div */}
      <div className="content-section">
        <div className="content">
          <h1>Hi, I'm Binuri</h1>
          <p>Full Stack Developer || Information Technology Undergraduate</p>
          <button className="download-btn">Download CV</button>
        </div>

        <section id="about">
        <AboutMe />
        </section>

        <Education /> 
        <Skills />

        <section id="projects">
        <Projects />
        </section>
        
        <section id="contact">
        <Contact />
        </section>
         
        </div>
    </div>
  );
}

export default App;
