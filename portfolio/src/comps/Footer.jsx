import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Anatoli Hadzhiev. All rights reserved.</p>
      <p>
        <a href="https://github.com/Anatoli33" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://www.linkedin.com/in/anatoli-hadzhiev/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}