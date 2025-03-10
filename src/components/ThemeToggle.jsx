import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(localStorage.getItem("theme") === "light");

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  return (
    <button className="theme-toggle" onClick={() => setIsLightMode(!isLightMode)}>
      <img loading="lazy" src={isLightMode ? "../assets/sun.png" : "../assets/moon.png"} alt="Toggle Theme" />
    </button>
  );
};

export default ThemeToggle;
