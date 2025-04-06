import React, { useEffect, useRef } from "react";
import "./AboutMe.css";
import profilePic from "./Assets/cv.jpg"; 

const AboutMe = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          aboutRef.current.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={aboutRef} className="about-me-container">
      <h2>About Me</h2>

      <div className="about-me-content">
        <div className="profile-image">
          <img src={profilePic} alt="Profile" />
        </div>

        <div className="about-me-text">
          <p>
          I'm an IT undergraduate passionate about 
          software engineering and web development. 
          I enjoy building efficient, user-focused applications
           that solve real-world problems. With a strong foundation 
           in full-stack development, I thrive in collaborative environments 
           and adapt quickly to new technologies.
            My professional strengths include problem-solving, attention to detail, 
            effective communication, and a continuous drive to improve and innovate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
