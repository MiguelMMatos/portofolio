import { useState } from "react";
import "./experience.css";
import Job from "./Job/Job";

type TDescription = {
  job: string;
  companyName: string;
  date: string;
  skills: string[];
};

const multivision: TDescription = {
  job: "Full-Stack Developer",
  companyName: "Multivision",
  date: "january 2012 - january 12121",
  skills: [" C#", "Java"],
};

const collab: TDescription = {
  job: "Full-Stack Developer",
  companyName: "Collab",
  date: "january 2012 - january 12121",
  skills: [" C#", "Java"],
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
