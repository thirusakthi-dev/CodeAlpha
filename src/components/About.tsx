import Profile from "../assets/images/dev-profile.png";

const About = () => {
  return (
    <article id="about" className="about-section">
      <figure className="dev-logo">
        <img src={Profile} className="dev-img" alt="loading" loading="lazy" />
      </figure>
      <section className="about-content">
        <p className="section-head">About</p>
        <p className="sub-head">Frontend Developer</p>
        <p className="content-desc">
          I am a passionate frontend web developer proficient in HTML, CSS,
          JavaScript, TypeScript, and React.js. My expertise lies in crafting
          engaging user interfaces and smooth user experiences. Combining a
          strong design sense with coding proficiency, I am dedicated to
          enhancing websites by making them visually appealing, responsive, and
          user-friendly. Proficient in version control with GitHub and
          leveraging build tools like Vite for efficient development workflows.
        </p>
      </section>
    </article>
  );
};

export default About;
