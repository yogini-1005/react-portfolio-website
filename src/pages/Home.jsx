import React, { useContext } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import "./Home.css";
import profileImage from "../assets/images/bg.jpg"; // Ensure the image is in 'src/assets/'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const handleDownload = () => {
    Swal.fire({
      title: "Download CV",
      text: "Do you want to download the CV?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Download",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = "/cv.pdf"; // Ensure the file exists in the public folder
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        Swal.fire({
          title: "Download Started!",
          text: "Your CV is being downloaded.",
          icon: "success",
          confirmButtonColor: "#4CAF50",
        });
      }
    });
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
            href="https://github.com/yogini1005"
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
