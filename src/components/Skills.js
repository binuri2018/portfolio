import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

// Import logos
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
import springbootLogo from "./Assets/logos/SPboot.png";

const skillsData = [
  { name: "JavaScript", logo: jsLogo, level: 90, category: "language" },
  { name: "CSS 3", logo: cssLogo, level: 85, category: "language" },
  { name: "HTML 5", logo: htmlLogo, level: 90, category: "language" },
  { name: "C++", logo: cppLogo, level: 75, category: "language" },
  { name: "Java", logo: javaLogo, level: 80, category: "language" },
  { name: "Kotlin", logo: kotlinLogo, level: 70, category: "language" },
  { name: "Python", logo: pythonLogo, level: 75, category: "language" },
];

const frameworksData = [
  { name: "React.js", logo: reactLogo, level: 85, category: "framework" },
  { name: "Express.js", logo: expressLogo, level: 80, category: "framework" },
  { name: "Tailwind CSS", logo: tailwindLogo, level: 85, category: "framework" },
  { name: "Bootstrap", logo: bootstrapLogo, level: 90, category: "framework" },
  { name: "Spring Boot", logo: springbootLogo, level: 75, category: "framework" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const filteredSkills = [...skillsData, ...frameworksData].filter(skill => 
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        className="skills-category-filter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {["all", "language", "framework"].map((category) => (
          <motion.button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={skillVariants}
            onHoverStart={() => setHoveredSkill(index)}
            onHoverEnd={() => setHoveredSkill(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-content">
              <div className="skill-logo-container">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="skill-logo"
                  loading="lazy"
                />
                {hoveredSkill === index && (
                  <motion.div
                    className="skill-level-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="skill-level-bar">
                      <motion.div
                        className="skill-level-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <span className="skill-level-text">{skill.level}%</span>
                  </motion.div>
                )}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-category">{skill.category}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
