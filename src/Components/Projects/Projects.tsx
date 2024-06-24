import "./projects.css";
import Project from "./Project/Project";

export type TProject = {
  name: string;
  description: string;
  github?: string;
  live?: string;
  skills: string[];
};

const instagram: TProject = {
  name: "Instagram AI",
  description:
    "The content on this Instagram account is fully generated by Python.",

  live: "https://www.instagram.com/_.reddit_stories._/",
  skills: ["Python", "RestAPI"],
};

const coin_detect: TProject = {
  name: "Coin Detection",
  description: "This project used image processing in order to identity coins.",
  github: "https://github.com/MiguelMMatos/Coin-Detection",
  skills: ["Python", "MatplotLib"],
};

const task_focus: TProject = {
  name: "Task Focus",
  description: "Website design to use Pomodoro method to focus on a task.",
  github: "https://github.com/MiguelMMatos/taskfocus",
  live: "https://miguelmmatos.github.io/taskfocus/",
  skills: ["React", "TypeScript"],
};

const pokedex: TProject = {
  name: "Pokedex",
  description:
    "Uses the PokeAPI to show pokemons and also show a single pokemon information.",

  live: "https://miguelmmatos.github.io/pokedex/",
  skills: ["React", "RestAPI", "TypeScript"],
};

function Projects() {
  const projects = [instagram, task_focus, pokedex, coin_detect];

  return (
    <div id="Projects" className="content">
      <div className="projects">
        <div className="content_tab">/ projects</div>
        <div className="projects_container inner_content">
          {projects.map((project) => (
            <Project project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
