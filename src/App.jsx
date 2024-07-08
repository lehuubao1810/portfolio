import { useRef, useState } from "react";
import "./App.css";
import BtnToTop from "./components/BtnToTop";
import { CardProject } from "./components/CardProject";

function App() {
  const handleCV = () => {
    window.open(
      "https://github.com/lehuubao1810/portfolio/tree/main/public/CV/LeHuuBao_CV.pdf",
      "_blank"
    );
  };

  const projects = [
    {
      title: "Shop BB",
      image:
        "https://raw.githubusercontent.com/lehuubao1810/portfolio/main/public/img/shopbb.png",
      description: "A web E-commerce built by the MERN stack.",
      skills: "ReactJS, NodeJS, ExpressJS, MongoDB, MUI",
      github: "https://github.com/lehuubao1810/shopBB",
      preview: "https://shop-bb.vercel.app/",
      type: "web",
    },
    {
      title: "UrFeeds",
      image:
        "https://raw.githubusercontent.com/lehuubao1810/portfolio/main/public/img/urfeeds.png",
      description: "A web to manage feeds and read posts.",
      skills: "ReactJS, TypeScript, Redux, Firebase, TailwindCSS",
      github: "https://github.com/lehuubao1810/UrFeeds",
      preview: "https://urfeeds.vercel.app/",
      type: "web",
    },
    {
      title: "Chat App",
      image:
        "https://raw.githubusercontent.com/lehuubao1810/portfolio/main/public/img/chatapp.png",
      description:
        "A web application that allows users chat with each other and can translate the message.",
      skills: "ReactJS, Firebase",
      github: "https://github.com/joi-lightyears/chatReactFirebase",
      preview: "https://pdbbchat.vercel.app/",
      type: "web",
    },
    {
      title: "Todo App",
      image:
        "https://raw.githubusercontent.com/lehuubao1810/Todo/dev/src/assets/1.png",
      description:
        "A web application that allows users to create, edit, delete, and mark tasks as completed.",
      skills: "ReactJS, Firebase",
      github: "https://github.com/lehuubao1810/todo_cdtt",
      preview: "https://todo-cdtt.vercel.app/",
      type: "web",
    },
    {
      title: "MATH BIN",
      image: "https://lehuubao1810.github.io/dataquiz/mathbin.png",
      description:
        "A mobile application helps students improve their math skills by quizzes and exercises.",
      skills: "React Native, JSON Server",
      github: "https://github.com/lehuubao1810/QuizApp",
      preview:
        "https://drive.google.com/file/d/1w_o6jFag7hOHpiWwKWTvRd0DmqnqmmD4/view?usp=share_link",
      type: "mobile",
    },
    {
      title: "Shift Cipher",
      image:
        "https://raw.githubusercontent.com/lehuubao1810/shiftCipher/main/src/assets/1.png",
      description:
        "An app help user encrypt and decrypt text with shift cipher (ASCII code).",
      skills: "ReactJS",
      github: "https://github.com/lehuubao1810/shiftCipher",
      preview: "https://shiftcipher.vercel.app/",
      type: "web",
    },
    {
      title: "Calculator App",
      image:
        "https://raw.githubusercontent.com/lehuubao1810/Calculator-App/main/design/desktop-design-theme-1.jpg",
      description:
        "A calculator app can perform basic arithmetic operations (add, subtract, multiply, divide) and have three themes",
      skills: "JS",
      github: "https://github.com/lehuubao1810/Calculator-App",
      preview: "https://lehuubao1810.github.io/Calculator-App/",
      type: "web",
    },
    {
      title: "Rest Countries API",
      image:
        "https://raw.githubusercontent.com/lehuubao1810/countriesAPI/main/design/desktop-design-home-dark.jpg",
      description:
        "A web application that allows users to search for countries using the REST Countries API and filter them by region.",
      skills: "ReactJS, Rest API",
      github: "https://github.com/lehuubao1810/countriesAPI",
      preview: "https://lhbcountriesapi.vercel.app/",
      type: "web",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "Sass/SCSS",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "React Native",
    "Git",
    "Redux",
    "Firebase",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
  ];

  const navLinks = [
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  const experiences = [
    {
      title: "React Native Intern",
      company: "SGOD",
      time: "Apr 2024 - Jun 2024",
      description: [
        "Participated in the development of an E-Learning app.",
        "Designed UI, developed, programmed, and debugged on both Android and iOS.",
        "Worked closely with Backend team to design APIs and optimize the application.",
      ],
    },
    {
      title: "FrontEnd Intern",
      company: "DHSOFT",
      time: "Dec 2023 - Mar 2024",
      description: [
        "Utilized assigned frontend tasks to enhance user interface and experience.",
        "Developed and implemented various functionalities for an ERP application.",
        "Troubleshooted and resolved bugs within the website.",
      ],
    },
  ];

  const [activeLink, setActiveLink] = useState("");

  const [tabExperience, setTabExperience] = useState(experiences[0]);

  const appRef = useRef(null);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="App" ref={appRef}>
      <header className="App-header">
        <div className="blurBox">
          <ul className="nav">
            {navLinks.map((navLink, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveLink(navLink.name);
                  handleScrollToSection(navLink.href);
                }}
                className={`nav-link ${
                  activeLink === navLink.name ? "active" : ""
                }`}
              >
                {navLink.name}
                <div className="underline"></div>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <section id="top">
        <h4>
          <i className="fas fa-code"></i> Software Developer
        </h4>
        <h1>
          Hi, <span style={{ color: "#01fd9c" }}>I'm Le Huu Bao</span>
        </h1>
        <button onClick={handleCV} className="cv">
          My CV
        </button>
      </section>
      <section id="projects">
        <div className="line"></div>
        <h1>Projects</h1>
        <div className="cards">
          {projects.map((project, index) => (
            <CardProject key={index} project={project} />
          ))}
        </div>
      </section>
      <section id="experience">
        <div className="line"></div>
        <h1>Experience</h1>
        <div className="experience">
          <div className="tabs">
            {experiences.map((experience, index) => (
              <div
                key={index}
                onClick={() => setTabExperience(experience)}
                className={`tab ${
                  tabExperience.company === experience.company ? "active" : ""
                }`}
              >
                <h3>{experience.company}</h3>
                <p>{experience.time}</p>
              </div>
            ))}
          </div>
          <div className="tab-content">
            <h2>{tabExperience.title}</h2>
            <ul>
              {tabExperience.description.map((desc, index) => (
                <li key={index}>
                  <span style={{ color: "#01fd9c" }}>- </span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="line"></div>
        <h1>Skills</h1>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="line"></div>
        <h1>Contact</h1>
        <div className="contact">
          <h1>Le Huu Bao</h1>
          <div className="contact-link">
            <p>
              <a
                href="mailto:lehuubao2909@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </p>
            <p>
              <a
                href="https://github.com/lehuubao1810"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="line"></div>
        <p className="footer">Create by LeHuuBao @2023</p>
      </footer>

      <BtnToTop />
    </div>
  );
}

export default App;
