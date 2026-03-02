import "./about.css";
import profilePic from "../img/prof-pic.png";

export default function About() {
    return(
      <div className='body'>
      <div className='text'>
      <h1>Anatoli Hadzhiev</h1>
      <h2>Junior Front-End Developer</h2>
      <p>
        Junior Front-End Developer with a strong foundation in modern JavaScript (ES6+), React, and Next.js. 
        Experienced in building responsive, performance-optimized web applications and integrating REST APIs. 
        Skilled in Git workflows, debugging with Chrome DevTools, and transforming Figma designs into clean, 
        user-friendly interfaces. Passionate about writing maintainable code and contributing to team-driven, 
        real-world projects.
      </p>
      </div>
      <img src={profilePic} alt="Anatoli Hadzhiev profile picture" />
      </div>
    );
}