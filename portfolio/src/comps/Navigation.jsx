import "./navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <h1>My Portfolio</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About me</NavLink>
          </li>

          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}