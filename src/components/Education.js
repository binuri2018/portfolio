import React, { useEffect, useRef } from "react";
import "./Education.css";

// Import your logos
import sliitLogo from "./Assets/SLIIT.png";
import schoolLogo from "./Assets/AMCC.png";

const Education = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const educationData = [
    {
      title: "Bachelor's degree",
      logo: sliitLogo,
      institute: "SriLanka Institute of Information Technology",
      description: `Currently I am studying for my Bachelors' Degree in Information Technology 
(Bsc.(Hons) Information Technology Specialization in information technology) 
at Sri Lanka Institute of Information Technology (SLIIT)`,
      duration: "2022 – present",
    },
    {
      title: "Advanced Level",
      logo: schoolLogo,
      institute: "Balangoda Ananda Maithreya Central College",
      description: `Passed General Certificate Advanced Level Exam in Biology stream with 1 C (Chemistry) 
and 2 S (Biology, Physics) Passes (2021 A/L) 

Passed General Certificate Advanced Level Exam in Technology stream with 2 B (ICT, Science for Technology) 
and 1 S (Engineering Technology) Passes (2022 A/L)`,
      duration: "2019 – 2021",
    },
    {
      title: "Ordinary Level",
      logo: schoolLogo,
      institute: "Balangoda Ananda Maithreya Central College",
      description: `Passed General Certificate Ordinary Level 
Exam with 6 A ,2 B, 1 C passes`,
      duration: "2013 – 2018",
    },
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div
          key={index}
          ref={el => (itemsRef.current[index] = el)}
          className={`education-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <h3>{edu.title}</h3>
          <img
            src={edu.logo}
            alt={`${edu.title} logo`}
            className="edu-logo"
          />
          <p>{edu.institute}</p>
          <p>{edu.description}</p>
          <p>{edu.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
