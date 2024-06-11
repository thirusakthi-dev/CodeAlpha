import Profile from "../assets/images/about.jpg";

const About = () => {
  return (
    <article id="about" className="about-section">
      <figure className="dev-logo">
        <img src={Profile} className="dev-img" alt="loading" loading="lazy" />
      </figure>
      <section className="about-content">
        <p className="section-head">About</p>
        <p className="sub-head">Frontend Developer</p>
        {/* <p className="content-desc">
          I am a passionate frontend web developer proficient in HTML, CSS,
          JavaScript, TypeScript, and React.js. My expertise lies in crafting
          engaging user interfaces and smooth user experiences. Combining a
          strong design sense with coding proficiency, I am dedicated to
          enhancing websites by making them visually appealing, responsive, and
          user-friendly. Proficient in version control with GitHub and
          leveraging build tools like Vite for efficient development workflows.
        </p> */}
        <ul className="about-list list-desc">
          <li>
            I'm a dedicated Frontend Developer with a passion for crafting web
            applications that are pivotal to the overall success of the product.
          </li>
          <li>
            I thoroughly enjoy the process of building web applications that
            seamlessly blend functionality and aesthetics, empowering users with
            intuitive and efficient digital experiences.
          </li>
          <li>
            I emphasize my expertise in responsive design by showcasing projects
            optimized for various screen sizes and devices. Demonstrating my
            ability to create seamless user experiences across desktop, tablet,
            and mobile platforms underscores my commitment to accessibility and
            user-centric design principles.
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
