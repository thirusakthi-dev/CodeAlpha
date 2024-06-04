import React from "react";

interface SkillProps {
  icon: string;
}

const SkillItem: React.FC<SkillProps> = ({ icon }) => {
  return (
    <li className="skill-item">
      <img
        src={icon}
        style={{ width: 33, height: 33 }}
        className="skill-icon"
      ></img>
    </li>
  );
};

export default SkillItem;
