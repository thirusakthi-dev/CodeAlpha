import React from "react";
import ExperienceItem from "./Experience-Item";
import { ExperienceData } from "../utils/ExperienceData";

const Experience: React.FC = () => {
  return (
    <article id="experience" className="experience-section">
      <section className="experience-head">
        <p className="section-head">Experience</p>
        <p className="sub-head">
          Here is a quick summary of my most recent experiences
        </p>
      </section>
      <section className="experience-container">
        {ExperienceData.map((company) => (
          <ExperienceItem
            key={company.id}
            CompanyLogo={company.logo}
            CompanyName={company.name}
            Role={company.role}
            Description={company.description}
          />
        ))}
      </section>
    </article>
  );
};

export default Experience;
