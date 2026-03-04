import "./projects.css";

const projects = [
  {
    title: "Sport Talk",
    type: "Course Project",
    description:
      "React web application with Firebase for authentication and real-time data. Users can create and interact with posts, comments and polls.",
    tech: ["React", "Firebase", "Context API"],
    image: "#",
    live: "#",
    github: "#",
  },
  {
    title: "Movie Magic",
    type: "Coursework",
    description:
      "Movie catalog built with Node.js, Express and Handlebars. Features authentication, searchable listings and detailed movie pages.",
    tech: ["Node.js", "Express", "Handlebars"],
    image: "#",
    live: "#",
    github: "#",
  },
  {
    title: "Main Quest",
    type: "Personal Project",
    description:
      "SPA built with JS, lit-html and page.js to help students prepare for exams through interactive quizzes.",
    tech: ["JavaScript", "lit-html", "page.js"],
    image: "#",
    live: "#",
    github: "#",
  },
  {
    title: "Mini Tech Shop",
    type: "Personal Project",
    description:
      "Modern React e-commerce demo with slider, cart logic and dynamic routing. Focused on reusable components and real-world patterns.",
    tech: ["React", "Context API", "React Router", "Swiper.js"],
    image: "#",
    live: "#",
    github: "#",
  },
];
export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} />

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