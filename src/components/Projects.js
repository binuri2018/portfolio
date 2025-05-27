import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

// Images
import ecomImage from "./Assets/projects/ecom.png";
import kanbanImage from "./Assets/projects/kanban.png";
import doitImage from "./Assets/projects/doit.png";
import memoImage from "./Assets/projects/memo.png";
import tictactoeImage from "./Assets/projects/tictactoe.png";
import omImage from "./Assets/projects/om.png";
import deepworkImage from "./Assets/projects/deepwork.png";
import blogmeImage from "./Assets/projects/blogme.png";

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
  {
    name: "Task Hive",
    description: "A full-stack skill-sharing and learning platform where users can share their expertise through multimedia posts, follow others, and engage through comments, likes, and notifications. The platform also supports creating structured learning plans and sharing progress updates, with secure login and user-friendly interaction features.",
    image: deepworkImage,
    tags: ["React.js", "Tailwind CSS", "SpringBoot","MongoDB"],
    github: "https://github.com/binuri2018/Task-Hive"
  },
  {
    name: "Blog Me",
    description: "A modern, responsive blogging platform built with React and Firebase, offering a seamless experience for both writers and readers. Blog Me combines elegant design with powerful features to create an engaging blogging environment.",
    image: blogmeImage,
    tags: ["React.js", "CSS", "Firebase"],
    github: "https://github.com/binuri2018/blog-me.git"
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
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

  const handleGitHubClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="projects-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Following projects showcases my skills and experience through real-world examples of my work. 
        Each project is briefly described with links to code repositories and live demos in it. 
        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>
      
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={projectVariants}
            onHoverStart={() => setHoveredProject(index)}
            onHoverEnd={() => setHoveredProject(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
                loading="lazy"
              />
              {hoveredProject === index && (
                <motion.div
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.a
                    href={project.github}
                    onClick={(e) => handleGitHubClick(e, project.github)}
                    className="project-link github-link-overlay"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>View on GitHub</span>
                  </motion.a>
                </motion.div>
              )}
            </div>
            
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
