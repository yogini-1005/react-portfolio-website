import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{project.name}</h2>
        <p><strong>Tools:</strong> {project.tools}</p>
        <p><strong>Skills:</strong> {project.skills}</p>
        <p>{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectModal;
