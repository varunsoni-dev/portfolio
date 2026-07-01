function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;