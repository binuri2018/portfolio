import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me-container">
      <h2>About Me</h2>
      <div className="profile-image">
        <img src="pp1.jpg" alt="Profile" />
      </div>
      <p>
        I'm an IT undergraduate with a passion for developing efficient and scalable web applications 
        that enhance user experience and business success. A dedicated and self-motivated individual, 
        I thrive on solving complex problems and continuously expanding my technical skills.
      </p>
      <p>
        I have experience working with the MERN stack and enjoy building innovative solutions that 
        streamline processes. With a flexible and enthusiastic approach, I adapt quickly to new 
        challenges and always strive for improvement. My strong interpersonal and communication skills 
        help me collaborate effectively with teams, making me a valuable contributor in any development environment.
      </p>
      <p>
        Currently, I'm seeking an opportunity as a software engineering intern to apply my skills, 
        learn from industry professionals, and contribute to impactful projects.
      </p>
    </section>
  );
};

export default AboutMe;
