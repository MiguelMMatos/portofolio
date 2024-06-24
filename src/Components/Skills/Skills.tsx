import "./skills.css";

export type TSkills = {
  name: string;
  experience: number;
};

const react: TSkills = {
  name: "React",
  experience: 9,
};

const python: TSkills = {
  name: "Python",
  experience: 4,
};

const c: TSkills = {
  name: "C#",
  experience: 2,
};

const ts: TSkills = {
  name: "TypeScript",
  experience: 5,
};

const html: TSkills = {
  name: "HTML",
  experience: 4,
};

const sql: TSkills = {
  name: "SQL",
  experience: 5,
};

const php: TSkills = {
  name: "PHP",
  experience: 2,
};

const angular: TSkills = {
  name: "Angular",
  experience: 2,
};

const js: TSkills = {
  name: "JavaScript",
  experience: 6,
};

const css: TSkills = {
  name: "CSS",
  experience: 3,
};

const chartJS: TSkills = {
  name: "chartJS",
  experience: 2,
};

const java: TSkills = {
  name: "Java",
  experience: 4,
};

const ps: TSkills = {
  name: "Photoshop",
  experience: 2,
};

const github: TSkills = {
  name: "Github",
  experience: 3,
};

const vs: TSkills = {
  name: "Visual Studio",
  experience: 3,
};

const pd: TSkills = {
  name: "Pandas",
  experience: 3,
};

function Skills() {
  const skills = [
    react,
    c,
    ts,
    chartJS,
    ps,
    js,
    html,
    pd,
    css,
    java,
    sql,
    php,
    vs,
    angular,
    python,
    github,
  ];

  return (
    <div id="Skills" className="content">
      <div className="skills">
        <div className="content_tab">/ skills</div>
        <div className="skills_container">
          <div className="skill_description">
            Proficient in React, JavaScript, TypeScript, HTML, CSS, SQL, Python,
            and various other technologies including Pandas, PHP, Java, C#,
            Angular, chartJS, Photoshop, Visual Studio, and GitHub.
          </div>
          <div>
            <ul
              className="cloud"
              role="navigation"
              aria-label="Webdev word cloud"
            >
              {skills.map((skill) => (
                <li data-weight={skill.experience}>{skill.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

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

*/

export default Skills;
