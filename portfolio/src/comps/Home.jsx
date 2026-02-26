import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home">
      <h1>Hello, I'm Anatoli Hadzhiev</h1>

      <p>
        I'm a junior front-end developer building clean and responsive web apps.
      </p>

      <Link to="/projects" className="btn">
        View My Projects
      </Link>
    </section>
  );
}