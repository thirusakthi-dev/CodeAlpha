import React from "react";

interface ExperienceProps {
  CompanyLogo: string;
  Role: string;
  CompanyName: string;
  Description: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  CompanyLogo,
  Role,
  CompanyName,
  Description,
}) => {
  return (
    <div className="experience-item">
      <figure className="experience-logo">
        <img
          src={CompanyLogo}
          style={{ width: 60, height: 60 }}
          alt="Company Logo"
          loading="lazy"
        />
      </figure>
      <section className="experience-content">
        <p className="role">{Role}</p>
        <p className="firm">{CompanyName}</p>
        <ul>
          {Description.map((item: string, index: number) => (
            <li key={index} className="experience-desc">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ExperienceItem;
