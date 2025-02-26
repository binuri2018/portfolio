import React from "react";
import "./Skills.css";

const skillsData = [
    { name: "JavaScript", logo: "/logos/js.png" },
    { name: "CSS 3", logo: "/logos/css.png" },
    { name: "HTML 5", logo: "/logos/html.png" },
    { name: "C++", logo: "/logos/cpp.png" },
    { name: "Java", logo: "/logos/java.png" },
    { name: "Kotlin", logo: "/logos/kotlin.png" },
    { name: "Python", logo: "/logos/python.png" },
  ];
  
  const frameworksData = [
    { name: "React.js", logo: "/logos/react.png" },
    { name: "Express.js", logo: "/logos/express.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
    { name: "Bootstrap", logo: "/logos/bootstrap.png" },
  ];
  
const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Languages & Frameworks</h2>
      {/* Languages */}
      <div className="skills-category">
        <h3>Languages</h3>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-badge" key={index}>
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className="skills-category">
        <h3>Frameworks</h3>
        <div className="skills-grid">
          {frameworksData.map((framework, index) => (
            <div className="skill-badge" key={index}>
              <img src={framework.logo} alt={framework.name} className="skill-logo" />
              <span>{framework.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
