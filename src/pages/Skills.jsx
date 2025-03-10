import React from "react";
import "./Skills.css";
import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js.png";
import javaIcon from "../assets/images/java.png";
import springBootIcon from "../assets/images/springboot.png";
import reactIcon from "../assets/images/react.png";
import mysqlIcon from "../assets/images/mysql.png";

const skills = [
  { name: "HTML", icon: htmlIcon, progressClass: "progress-html" },
  { name: "CSS", icon: cssIcon, progressClass: "progress-css" },
  { name: "JavaScript", icon: jsIcon, progressClass: "progress-js" },
  { name: "Java", icon: javaIcon, progressClass: "progress-java" },
  { name: "Spring Boot", icon: springBootIcon, progressClass: "progress-springboot" },
  { name: "React JS", icon: reactIcon, progressClass: "progress-react" },
  { name: "MySQL", icon: mysqlIcon, progressClass: "progress-mysql" }
];

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img loading="lazy" src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
            <div className="progress-bar">
              <div className={`progress ${skill.progressClass}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
