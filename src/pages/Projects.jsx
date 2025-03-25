import React, { useState } from "react";
import Modal from "react-modal"; // Import React Modal
import amazon from "../assets/images/amazon.png";
import beautyproducts from "../assets/images/beauty-products.png";
import household from "../assets/images/household.png";
import portfolio from "../assets/images/portfolio.png";
import "./Projects.css";

Modal.setAppElement("#root"); // To prevent accessibility issues

const projects = [
  { name: "Amazon Clone Website", image: amazon, description: "A static Amazon Clone built using HTML and CSS, replicating the UI of Amazon's homepage.The project includes a responsive navbar, product sections, banner sliders, and a footer. This clone focuses on layout design and styling to closely match Amazon's look and feel.", link: "https://github.com/yogini1005" },
  { name: "Beauty Products Website", image: beautyproducts, description: "A Java full-stack website for browsing skincare products with a classic UI and cash-on-delivery option. The platform allows users to explore various beauty products, add them to their cart, and place orders. Features include product search, filtering, and a simple checkout process.", link: "https://github.com/yogini1005" },
  { name: "React Portfolio Website", image: portfolio, description: "A simple portfolio with theme customization and file download options. Users can choose a theme, view skills and projects.", link: "https://github.com/yogini1005" },
  { name: "Household Services Provider Website", image: household, description: "A web platform connecting users with service providers like electricians, plumbers, and maids. Users can register, browse service providers, book appointments, and track their requests. Service providers can manage bookings and update their availability in real-time.", link: "#" }

];

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img loading="lazy" src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <button onClick={() => openModal(project)}>View Project</button>
          </div>
        ))}
      </div>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Project Details"
  className="modal-content"
  overlayClassName="modal-overlay"
>
  {selectedProject && (
    <div className="modal-body">
      <h2>{selectedProject.name}</h2>
      <img loading="lazy" src={selectedProject.image} alt={selectedProject.name} />
      <p>{selectedProject.description}</p>
      <div className="buttons">
        {selectedProject.link !== "#" ? (
          <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
            <button className="view-btn">Visit Project</button>
          </a>
        ) : (
          <button className="view-btn" disabled style={{ backgroundColor: "#ccc", cursor: "not-allowed" }}>
            Coming Soon
          </button>
        )}
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  )}
</Modal>


    </section>
  );
};

export default Projects;
