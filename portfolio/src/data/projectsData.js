import sportTalkImg from "../img/Sport-Talk.png";
import streetGarageImg from "../img/Street-Garage.png";
import mainQuestImg from "../img/Main-Quest.png";
import movieMagicImg from "../img/Movie-Magic.png";
import miniTechShopImg from "../img/Mini-Tech-Shop.png";

export const projects = [
  {
    title: "Sport Talk",
    type: "Course Project",
    description:
      "React web application with Firebase for authentication and real-time data. Users can create and interact with posts, comments and polls.",
    tech: ["React", "Firebase", "Context API"],
    image: sportTalkImg,
    live: "#",
    github: "https://github.com/Anatoli33/Sport-Talk",
  },
  {
    title: "Movie Magic",
    type: "Coursework",
    description:
      "Movie catalog built with Node.js, Express and Handlebars. Features authentication, searchable listings and detailed movie pages.",
    tech: ["Node.js", "Express", "Handlebars"],
    image: movieMagicImg,
    live: "#",
    github: "https://github.com/Anatoli33/Movie-Magic",
  },
  {
    title: "Main Quest",
    type: "Personal Project",
    description:
      "SPA built with JS, lit-html and page.js to help students prepare for exams through interactive quizzes.",
    tech: ["JavaScript", "lit-html", "page.js"],
    image: mainQuestImg,
    live: "#",
    github: "https://github.com/Anatoli33/Main-Quest",
  },
  {
    title: "Mini Tech Shop",
    type: "Personal Project",
    description:
      "Modern React e-commerce demo with slider, cart logic and dynamic routing. Focused on reusable components and real-world patterns.",
    tech: ["React", "Context API", "React Router", "Swiper.js"],
    image: miniTechShopImg,
    live: "#",
    github: "https://github.com/Anatoli33/Mini-Tech-Shop",
  },
    {
    title: "Street Garage",
    type: "Course Project",
    description: "A modern Angular web application where car enthusiasts can share vehicles, ask questions, and interact with a growing community.",
    tech: ["Angular", "Angular services", "RxJS operators"],
    image: streetGarageImg,
    live: "#",
    github: "https://github.com/Anatoli33/Street-Garage",
  },
];