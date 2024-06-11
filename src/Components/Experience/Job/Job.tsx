import React from "react";
import "./job.css";

interface Props {
  description: {
    job: string;
    companyName: string;
    date: string;
    skills: string[];
  };
}

function Job({ description }: Props) {
  return (
    <div className="job_card">
      <div className="job_title">
        <div>{description.job}</div>
        <div>@{description.companyName}</div>
      </div>
      <div className="job_date">{description.date}</div>
      <ul className="job_skills_container">
        {description.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Job;
