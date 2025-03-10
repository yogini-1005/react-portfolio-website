import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h1>About Me</h1>
      <p>
        Hey there! I'm Yogini, a passionate Java Full Stack Developer who loves
        turning ideas into real, functional web applications. I have hands-on
        experience with Java, Spring Boot, React.js, and MySQL, and I’ve also
        explored the MERN stack.
        <br /><br />
        I enjoy solving challenges, learning new technologies, and improving my
        skills with every project I build. Currently, I’m working on projects
        like a Household Services Provider website and a Skincare Products
        Website, constantly refining my coding and problem-solving abilities.
        <br /><br />
        Apart from coding, I have a deep interest in learning foreign languages,
        especially Japanese, and I love exploring different cultures. Feel free
        to check out my work and connect with me!
        <br /><br />
        Let’s build something amazing together.
      </p>
      {/* Link to Contact Page */}
      <Link to="/contact" className="btn">Let's Connect</Link>
    </section>
  );
};

export default About;
