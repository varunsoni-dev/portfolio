import "./Skills.css";

import SkillCard from "./SkillCard";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillsData.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;