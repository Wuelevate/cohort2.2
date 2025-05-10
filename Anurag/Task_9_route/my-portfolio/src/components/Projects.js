import React from "react";
import { useLocation } from "react-router";

const projects = [
  {
    title: "Quiz Application",
    description: "An interactive quiz app built using JavaScript, HTML, and CSS.",
    link: "#",
  },
  {
    title: "Hotel Management System",
    description: "A Java & SQL-based hotel booking system.",
    link: "#",
  },
  {
    title: "Event Management System",
    description: "A full-stack React + Spring Boot project to manage events.",
    link: "#",
  },
];

const Projects = () => {
  const location=useLocation()
  console.log(location)
  return (
    <div className="container">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
