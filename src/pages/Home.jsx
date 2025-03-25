import React, { useContext } from "react";
import Swal from "sweetalert2";
import "./Home.css";
import profileImage from "../assets/images/bg.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";
import cvPdf from "../../public/cv.pdf"; // Make sure this path is correct

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const handleDownload = () => {
    try {
      // Create download link
      const link = document.createElement("a");
      link.href = cvPdf;
      link.download = "Yogini-Girigosavi-CV.pdf"; // Name when downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      Swal.fire("Success!", "CV download started", "success");
    } catch (error) {
      console.error("Download failed:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to download CV. Please try again or contact me directly.",
        icon: "error"
      });
    }
  };

  return (
    <section className={`home ${theme}-mode`}>
      <div className="content">
        <h1>
          Hello, I'm <span className="highlight">Yogini Girigosavi</span>
        </h1>
        <p className="sub-title">A Java Full Stack Developer</p>
        <button className="resume-button" onClick={handleDownload}>
          Download CV
        </button>
      </div>

      {/* Profile Image Section */}
      <div className="profile-wrapper">
        <div className="circle-border">
          <img loading="lazy" src={profileImage} alt="Profile" className="profile-pic" />
        </div>

        {/* Icons Below Profile */}
        <div className="icon-container">
          <a
            href="https://github.com/yogini-1005"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <FaGithub />
          </a>
        
          <a
            href="https://www.linkedin.com/in/yogini-girigosavi-ba497317a"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yoginigosavi1005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <FaEnvelope />
          </a>

          <a
            href="#"
            className="icon-wrapper"
            onClick={(e) => {
              e.preventDefault();
              Swal.fire({
                title: "Coming Soon!",
                text: "This feature will be available soon.",
                icon: "info",
                confirmButtonText: "OK",
                confirmButtonColor: "#4CAF50",
              });
            }}
          >
            <FaFileAlt />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Home;
