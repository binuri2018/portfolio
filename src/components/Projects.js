import React from "react";
import "./Projects.css";

const projectsData = [
  {
    name: "Crystal Chandelier",
    description: "Clothing website built with the MERN stack for online shopping.",
    image: "/projects/chandelier.png", // Place image in public/projects/
    tags: ["MERN", "E-commerce"],
  },
  {
    name: "Workflow",
    description: "Workflow management system with user roles and task tracking.",
    image: "/projects/workflow.png",
    tags: ["MERN", "Task Management"],
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
    tags: ["React", "Tailwind CSS"],
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
