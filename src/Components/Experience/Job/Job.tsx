import { TDescription } from "../Experience";
import "./job.css";

interface Props {
  description: TDescription;
}

function Job({ description }: Props) {
  return (
    <div className="job_card">
      <div className="job_title">
        <div>{description.job}</div>
        <div>@{description.companyName}</div>
      </div>
      <div className="job_date">{description.date}</div>
      <div className="job_description">{description.description}</div>
      <div className="job_skills_container">
        {description.skills.map((skill) => (
          <div>{skill}</div>
        ))}
      </div>
    </div>
  );
}

export default Job;
