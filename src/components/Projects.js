import React from "react";
import "./Projects.css";

// Images
import ecomImage from "./Assets/projects/ecom.png";
import kanbanImage from "./Assets/projects/kanban.png";
import doitImage from "./Assets/projects/doit.png";
import memoImage from "./Assets/projects/memo.png";
import tictactoeImage from "./Assets/projects/tictactoe.png";
import omImage from "./Assets/projects/om.png";
import deepworkImage from "./Assets/projects/deepwork.png";

// Data with GitHub links
const projectsData = [
  {
    name: "Crystal Chandelier",
    description: "Full-featured e-commerce platform with secure authentication, item management, and dynamic cart functionality for a smooth shopping experience.",
    image: ecomImage,
    tags: ["React.js", "Node.js", "MongoDB", "CSS"],
    github: "https://github.com/binuri2018/E-commerce"
  },
  {
    name: "Workflow Management System",
    description: "Employee work management system enabling admins to add projects, assign tasks, and manage employee workloads using a Kanban-style interface.",
    image: kanbanImage,
    tags: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/binuri2018/Kanban-board"
  },
  {
    name: "Do-It",
    description: "A mobile-friendly to-do list app with intuitive task creation, editing, and tracking to improve personal productivity and daily planning.",
    image: doitImage,
    tags: ["Kotlin", "Mobile App"],
    github: "https://github.com/binuri2018/ToDo-list"
  },
  {
    name: "Memo-Cards",
    description: "Interactive flashcard app for quick learning and memory practice, allowing users to create, view, and flip digital memo cards.",
    image: memoImage,
    tags: ["React.js", "CSS"],
    github: "https://github.com/binuri2018/Memo-Cards"
  },
  {
    name: "Tic-Tac-Toe",
    description: "Classic two-player Tic Tac Toe game built with responsive design and smooth user interaction for a fun, lightweight gaming experience.",
    image: tictactoeImage,
    tags: ["React.js", "CSS"],
    github: "https://github.com/binuri2018/Tic-Tac-Toe"
  },
  {
    name: "Organizer Management System",
    description: "Web app to assign tasks to event organizers with automatic notifications and a centralized system to monitor task completion and status.",
    image: omImage,
    tags: ["React.js", "CSS", "MongoDB"],
    github: "https://github.com/binuri2018/Organizer-Management-System"
  },
  {
    name: "Deep Work",
    description: "Custom countdown timer with real-time updates and a built-in alarm notification system, ideal for productivity and time-bound activities.",
    image: deepworkImage,
    tags: ["React.js", "CSS"],
    github: "https://github.com/binuri2018/Deep_Work"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>

      <p className="projects-intro">
        Following projects showcases my skills and experience through real-world examples of my work. 
        Each project is briefly described with links to code repositories and live demos in it. 
        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </p>
      
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
              <a
                href={project.github}
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
