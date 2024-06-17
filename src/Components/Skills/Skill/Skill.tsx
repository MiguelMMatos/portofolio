import { TSkills } from "../Skills";
import "./skill.css";

interface Props {
  skill: TSkills;
}
function Skill({ skill }: Props) {
  return (
    <div className="skill_container">
      <div
        className="progress-circle"
        style={{
          background:
            "conic-gradient(var(--orange) 0% " +
            skill.experience +
            "%, var(--blue_darker) " +
            skill.experience +
            "% 100%)",
        }}
      >
        <span className="progress-value">{skill.experience}%</span>
      </div>
      <div className="skill_name">{skill.name}</div>
    </div>
  );
}

export default Skill;
