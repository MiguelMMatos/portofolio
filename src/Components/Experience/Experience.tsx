import { useState } from "react";
import "./experience.css";
import Job from "./Job/Job";

export type TDescription = {
  job: string;
  companyName: string;
  description: string;
  date: string;
  skills: string[];
};

const multivision: TDescription = {
  job: "Full-Stack Developer",
  companyName: "Multivision",
  date: "February 2022 - March 2023",
  description:
    "Worked there and did stuff like Worked there and did stuff like Worked there and did stuff like Worked there and did stuff like Worked there and did stuff like",
  skills: [" C#", "Java", "RestAPI", "SQL"],
};

const collab: TDescription = {
  job: "Full-Stack Developer",
  companyName: "Collab",
  date: "March 2023 - Present",
  description: "teste",
  skills: [" C#", "Java", "RestAPI", "SQL", "React"],
};

const experience: TDescription[] = [multivision, collab];

function Experience() {
  const [company, setCompany] = useState(experience[0].companyName);

  return (
    <div id="Experience" className="content">
      <div className="experience_container">
        <div className="content_tab">/ experience</div>
        <div className="experience_show inner_content">
          <div className="company_container">
            {experience.map((description) => (
              <div
                onClick={() => setCompany(description.companyName)}
                className={
                  company == description.companyName
                    ? "company selected"
                    : "company"
                }
              >
                {description.companyName}
              </div>
            ))}
          </div>
          <div className="job_container">
            {experience.map(
              (description) =>
                company == description.companyName && (
                  <Job description={description}></Job>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
