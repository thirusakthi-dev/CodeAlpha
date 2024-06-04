import { useDarkMode } from "./ThemeContext";
import LinkedInDark from "../assets/icons/social/linkedin.png";
import LinkedIn from "../assets/icons/social/linkedin-light.png";
import Email from "../assets/icons/social/email-light.png";
import EmailDark from "../assets/icons/social/email-dark.png";
import PhoneDark from "../assets/icons/social/phone-dark.png";
import Phone from "../assets/icons/social/phone-light.png";
import GithubDark from "../assets/icons/skills/github.svg";
import Github from "../assets/icons/skills/github-white.png";

const Contact = () => {
  const { darkMode } = useDarkMode();
  return (
    <article id="contact" className="contact-section">
      <section className="contact-head">
        <p className="section-head">Contact</p>
        <p className="sub-head">Feel free to reach out</p>
        <p className="contact-desc">
          Let's Build Something Together! Reach Out to Discuss Development
          Projects, Share Ideas, or Explore Opportunities for Collaboration!
        </p>
      </section>
      <section className="contact-container">
        <figure className="contact-item">
          <a>
            <img
              src={darkMode ? Phone : PhoneDark}
              style={{ width: 29, height: 29 }}
            ></img>
            <figcaption>+916369594529</figcaption>
          </a>
        </figure>
        <figure className="contact-item">
          <a href="https://www.linkedin.com/in/thirusakthi-dev" target="_blank">
            <img
              src={darkMode ? LinkedIn : LinkedInDark}
              style={{ width: 29, height: 29 }}
            ></img>
            <figcaption>linkedin.com/thirusakthi-dev</figcaption>
          </a>
        </figure>
        <figure className="contact-item">
          <a href="https://github.com/thirusakthi-dev" target="_blank">
            <img
              src={darkMode ? Github : GithubDark}
              style={{ width: 29, height: 29 }}
            ></img>
            <figcaption>github.com/thirusakthi-dev</figcaption>
          </a>
        </figure>
        <figure className="contact-item">
          <a href="mailto:thirusakthi.official@gmail.com" target="_blank">
            <img
              src={darkMode ? Email : EmailDark}
              style={{ width: 29, height: 29 }}
            ></img>
            <figcaption>thirusakthi.official@gmail.com</figcaption>
          </a>
        </figure>
      </section>
    </article>
  );
};

export default Contact;
