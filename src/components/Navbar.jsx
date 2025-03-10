import React, { useContext, memo } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import sunIcon from "../assets/images/sun.png";
import moonIcon from "../assets/images/moon.png";
import logo from "../assets/images/favicon.png";
import ThemeContext from "../context/ThemeContext";


const Navbar = memo(() => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <nav className={`navbar ${theme}-mode`}>
      <div className="left">
        <img loading="lazy" src={logo} alt="Logo" />
        Portfolio
      </div>
      <div className="right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button id="theme-toggle" onClick={toggleTheme}>
            <img loading="lazy" src={theme === "light" ? moonIcon : sunIcon} alt="Toggle Theme" />
          </button>
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
