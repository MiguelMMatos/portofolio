import Skill from "./Skill/Skill";
import "./skills.css";

export type TSkills = {
  name: string;
  experience: number;
};

const react: TSkills = {
  name: "React",
  experience: 80,
};

const python: TSkills = {
  name: "Python",
  experience: 85,
};

const c: TSkills = {
  name: "C#",
  experience: 90,
};

const ts: TSkills = {
  name: "TypeScript",
  experience: 75,
};

const html: TSkills = {
  name: "HTML",
  experience: 85,
};

const sql: TSkills = {
  name: "SQL",
  experience: 80,
};

function Skills() {
  const skills = [react, c, ts, python, html, sql];

  return (
    <div id="Skills" className="content">
      <div className="skills">
        <div className="content_tab">/ skills</div>
        <div className="skills_container inner_content">
          {skills.map((skill) => (
            <Skill skill={skill}></Skill>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
