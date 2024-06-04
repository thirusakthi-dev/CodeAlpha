import React, { useContext, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import { useDarkMode } from "./ThemeContext";
import Experience from "./Experience";
import Header from "./Header";

const Main: React.FC = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Main;
