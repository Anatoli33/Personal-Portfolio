import "./projects.css";

export default function Projects() {
    return(
        <div className="projects">
        <h1>Projects</h1>
        <h2>Sport Talk</h2>
        <p>Course Project</p>
        <p className="text">React web application with Firebase for authentication and real-time data. Allows users to create and interact with posts, comments, and polls through a clean, responsive interface.</p>
        <h2>Movie Magic</h2>
        <p>Coursework</p>
        <p className="text">A dynamic movie catalog website built with Node.js, Express, and Handlebars. Features include user authentication, interactive flip-card movie displays, searchable movie listings, and detailed movie pages.</p>
        <h2>Main Quest</h2>        
        <p>Personal Project</p>
        <p className="text"> SPA built with JS, lit-html, and page.js to help students prepare for exams through interactive quizzes. Features include randomized questions, instant feedback, and a clean, responsive interface.</p>
        <h2>Mini Tech Shop</h2>        
        <p>Personal Project</p>
        <p className="text"> Modern React e-commerce demo with product slider, responsive grid, and fully functional shopping cart. Built with React Context for global state management, React Router for dynamic product pages, and Swiper.js for interactive UI. Focused on clean architecture, reusable components, and real-world front-end patterns.</p>
   
        </div>
    );
}