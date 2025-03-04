import React from "react";
import "./Projects.css";

const projectsData = [
  {
    name: "Crystal Chandelier",
    description: "Clothing website built with the MERN stack for online shopping.",
    image: "/projects/ecom.png", 
    tags: ["React.js", "Node.js", "MongoDB", "CSS"],
  },
  {
    name: "Workflow Management System",
    description: "Workflow management system with user roles and task tracking.",
    image: "/projects/kanban.png",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
  {
    name: "Do-It",
    description: "A mobile to-do list application for managing tasks efficiently.",
    image: "/projects/doit.png",
    tags: ["Kotlin", "Mobile App"],
  },
  {
    name: "Blog Me",
    description: "A simple frontend blogging web app with a clean UI.",
    image: "/projects/blogme.png",
    tags: ["React.js", "CSS"],
  },
  {
    name: "Memo-Cards",
    description: "A simple frontend blogging web app with a clean UI.",
    image: "/projects/memo.png",
    tags: ["React.js", "CSS"],
  },
  {
    name: "Tic-Tac-Toe",
    description: "A simple frontend blogging web app with a clean UI.",
    image: "/projects/tictactoe.png",
    tags: ["React.js", "CSS"],
  },
  {
    name: "Organizer Management System",
    description: "A simple frontend blogging web app with a clean UI.",
    image: "/projects/om.png",
    tags: ["React.js", "CSS","MongoDB"],
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
