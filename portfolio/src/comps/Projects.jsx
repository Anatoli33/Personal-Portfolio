import "./projects.css";

import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            {/* <img src={project.image} alt={project.title} /> */}

            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-type">{project.type}</p>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <button className="btn-primary">Live</button>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className="btn-secondary">Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}