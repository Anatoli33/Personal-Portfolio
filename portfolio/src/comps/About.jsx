import "./about.css";
import profilePic from "../img/prof-pic.png";

export default function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h1>Anatoli Hadzhiev</h1>
        <h2>Front-End Developer</h2>

        <p>
          Front-End Developer focused on building fast, responsive, and
          user-friendly web applications using React and Next.js. Strong
          understanding of modern JavaScript (ES6+), REST APIs, and performance
          optimization. Passionate about clean code and delivering real-world
          solutions.
        </p>

        <ul className="about-highlights">
          <li>⚡ React & Next.js Applications</li>
          <li>📱 Responsive & Mobile-First Design</li>
          <li>🔗 REST API Integration</li>
          <li>🛠 Git & Version Control</li>
        </ul>
        <div className="about-socials">
          <a
            href="https://github.com/Anatoli33"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/anatoli-hadzhiev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:hadjiev1215@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="about-image">
        <img src={profilePic} alt="Anatoli Hadzhiev profile picture" />
      </div>
    </section>
  );
}
