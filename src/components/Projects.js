import React from "react";
import "./Projects.css";

// Correct relative path to images inside src/components/Assets/projects/
import ecomImage from "./Assets/projects/ecom.png";
import kanbanImage from "./Assets/projects/kanban.png";
import doitImage from "./Assets/projects/doit.png";
//import blogmeImage from "./Assets/projects/blogme.png";
import memoImage from "./Assets/projects/memo.png";
import tictactoeImage from "./Assets/projects/tictactoe.png";
import omImage from "./Assets/projects/om.png";
import deepworkImage from "./Assets/projects/deepwork.png";

const projectsData = [
  {
    name: "Crystal Chandelier",
    description: "Clothing website built with the MERN stack for online shopping.",
    image: ecomImage,
    tags: ["React.js", "Node.js", "MongoDB", "CSS"],
  },
  {
    name: "Workflow Management System",
    description: "Workflow management system with user roles and task tracking.",
    image: kanbanImage,
    tags: ["React.js", "Node.js", "MongoDB"],
  },
  {
    name: "Do-It",
    description: "A mobile to-do list application for managing tasks efficiently.",
    image: doitImage,
    tags: ["Kotlin", "Mobile App"],
  },
  {
    name: "Memo-Cards",
    description: "A simple memory card game built using React.",
    image: memoImage,
    tags: ["React.js", "CSS"],
  },
  {
    name: "Tic-Tac-Toe",
    description: "A simple React-based Tic Tac Toe game.",
    image: tictactoeImage,
    tags: ["React.js", "CSS"],
  },
  {
    name: "Organizer Management System",
    description: "A web-based organizer tool to manage events and users.",
    image: omImage,
    tags: ["React.js", "CSS", "MongoDB"],
  },
  {
    name: "Deep Work",
    description:
      "A Pomodoro-style timer that helps improve focus with mood-based backgrounds and notifications.",
    image: deepworkImage,
    tags: ["React.js", "CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
