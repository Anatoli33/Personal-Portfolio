import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Anatoli Hadzhiev</span>
        </h1>

        <h2>Front-End Developer</h2>

        <p>
          I build fast, responsive, and user-focused web applications using
          modern JavaScript and React. Passionate about clean code,
          performance, and creating smooth digital experiences.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn primary">
            View My Projects
          </Link>

          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}