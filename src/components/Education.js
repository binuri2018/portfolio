import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="education-item">
        <h3>Bachelor's degree</h3>
        <p>SriLanka Institute of Information Technology</p>
        <p>Currently I am studying for my Bachelors' Degree in Information Technology 
            (Bsc.(Hons) Information Technology Specialization in information technology) 
            at Sri Lanka Institute of Information Technology (SLIIT) </p>
            <p>2022 – present</p>
      </div>

      <div className="education-item">
        <h3>Advanced Level</h3>
        <p>Balangoda Ananda Maithreya Central College</p>
        <p>Passed General Certificate Advanced Level Exam in Biology stream with 1 C (Chemistry) 
            and 2 S (Biology, Physics) Passes (2021 A/L)</p>
        <p>Passed General Certificate Advanced Level Exam in Technology stream with 2 B (ICT, Science for Technology) 
            and  1 S (Engineering Technology) Passes (2022 A/L)</p>
        <p>2019 – 2021 </p>
      </div>
      <div className="education-item">
        <h3>Ordinary Level</h3>
        <p>Balangoda Ananda Maithreya Central College</p>
        <p>Passed General Certificate Ordinary Level 
            Exam with 6 A ,2 B, 1 C passes</p>
        <p>2013 – 2018 </p>
      </div>
    </div>
  );
};

export default Education;
