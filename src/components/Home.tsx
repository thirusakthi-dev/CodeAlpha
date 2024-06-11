import Profile from "../assets/images/dev-profile.png";
import Resume from "../assets/files/Thiruvengadam Resume Updated.pdf";

const Home = () => {
  return (
    <article id="home" className="home-section">
      <section className="home-details">
        <div className="home-info">
          <p className="dev-name">
            Hello, <br></br>I'm Thiruvengadam
          </p>
          <p className="home-desc">
            Versatile developer proficient in React, JavaScript, SASS, and
            TypeScript. Let's connect for further discussion.
          </p>
        </div>
        <div className="home-btns">
          <a href={Resume} className="button" target="_blank">
            Resume
          </a>
          <a href="#contact" className="button">
            Contact
          </a>
        </div>
      </section>
      <figure className="profile-logo">
        <img src={Profile} className="profile-img"></img>
      </figure>
    </article>
  );
};

export default Home;
