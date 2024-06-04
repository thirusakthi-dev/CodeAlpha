import SkillItem from "./Skill-Item";
import { SkillsData, ToolsData } from "../utils/SkillIcons";

const Skills = () => {
  return (
    <article id="skills" className="skills-section">
      <section className="skills-head ">
        <p className="section-head">Skills</p>
        <p className="sub-head">
          The Skills, tools and technologies I am really good at:
        </p>
      </section>
      <section className="skill-items">
        <ul className="skills-list">
          {SkillsData.map((skill) => (
            <SkillItem key={skill.id} icon={skill.icon} />
          ))}
        </ul>
      </section>
      <section className="skills-head">
        <p className="sub-head">Tools</p>
        <ul className="skills-list">
          {ToolsData.map((tool) => (
            <SkillItem key={tool.id} icon={tool.icon} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Skills;
