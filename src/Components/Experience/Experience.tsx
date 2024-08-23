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
    "Designed and implemented web applications utilizing Java, SQL, working closely with product managers and UI/UX designers to deliver scalable and user-friendly solutions. Focused on improving application performance and adhering to industry standards in software development and testing practices.",
  skills: [" C#", "Java", "RestAPI", "SQL"],
};

const collab: TDescription = {
  job: "Full-Stack Developer",
  companyName: "Collab",
  date: "March 2023 - Present",
  description:
    "Developed and maintained  web applications using C#, React, Python, and RESTful APIs, collaborating with cross-functional teams to deliver high-quality features and optimize performance while ensuring best practices in code quality and development processes.",
  skills: [" C#", "Java", "RestAPI", "SQL", "React"],
};

const experience: TDescription[] = [collab, multivision];

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
