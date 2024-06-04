import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ThemeProvider, useDarkMode } from "./components/ThemeContext";
import Main from "./components/Main";
import "./styles/Index.scss";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
