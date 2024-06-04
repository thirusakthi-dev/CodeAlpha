import LightIcon from "../assets/icons/light.png";
import DarkIcon from "../assets/icons/dark.png";
import { useDarkMode } from "./ThemeContext";

const Header = () => {
  const { darkMode, toggleButton } = useDarkMode();

  return (
    <header>
      <article className="header-section">
        <section>
          <p className="header-name">&lt;Porfolio/&gt;</p>
        </section>
        <nav>
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about">About me</a>
            </li>
            <li className="nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <img
          className="theme-icon"
          src={darkMode ? LightIcon : DarkIcon}
          style={{ width: 24 }}
          onClick={toggleButton}
        ></img>
      </article>
    </header>
  );
};

export default Header;
