import React from "react";
import "./Skills.css";

// Import all logos from your local src/components/Assets/logos/ directory
import jsLogo from "./Assets/logos/js.png";
import cssLogo from "./Assets/logos/css.png";
import htmlLogo from "./Assets/logos/html.png";
import cppLogo from "./Assets/logos/cpp.png";
import javaLogo from "./Assets/logos/java.png";
import kotlinLogo from "./Assets/logos/kotlin.png";
import pythonLogo from "./Assets/logos/python.png";

import reactLogo from "./Assets/logos/react.png";
import expressLogo from "./Assets/logos/express.png";
import tailwindLogo from "./Assets/logos/tailwind.png";
import bootstrapLogo from "./Assets/logos/bootstrap.png";

const skillsData = [
  { name: "JavaScript", logo: jsLogo },
  { name: "CSS 3", logo: cssLogo },
  { name: "HTML 5", logo: htmlLogo },
  { name: "C++", logo: cppLogo },
  { name: "Java", logo: javaLogo },
  { name: "Kotlin", logo: kotlinLogo },
  { name: "Python", logo: pythonLogo },
];

const frameworksData = [
  { name: "React.js", logo: reactLogo },
  { name: "Express.js", logo: expressLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
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
