import { useRef, useState } from "react";
import "./App.css";
import BtnToTop from "./components/BtnToTop";
import { CardProjectItem } from "./components/CardProjectItem";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { skills } from "./data/skills";
import { FormContact } from "./components/FormContact";
import { Toaster } from "react-hot-toast";

function App() {
  const handleCV = () => {
    window.open(
      "https://github.com/lehuubao1810/portfolio/tree/main/public/CV/LeHuuBao_CV.pdf",
      "_blank"
    );
  };

  const navLinks = [
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
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

  window.onscroll = () => {
    // check scroll to what section
    const sections = document.querySelectorAll("section");
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    // add active class to nav link
    navLinks.forEach((navLink) => {
      if (navLink.href.includes(current)) {
        setActiveLink(navLink.name);
      }
    });
  };

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={true} />
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
          <h1>{"</projects>"}</h1>
          <div className="cards">
            {projects.map((project, index) => (
              <CardProjectItem key={index} project={project} />
            ))}
          </div>
        </section>
        <section id="experience">
          <div className="line"></div>
          <h1>{"</experience>"}</h1>
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
          <h1>{"</skills>"}</h1>
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
          <h1>{"</contact>"}</h1>
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
            <FormContact />
          </div>
        </section>
        <footer>
          <div className="line"></div>
          <p className="footer">Create by LeHuuBao @2023</p>
        </footer>

        <BtnToTop />
      </div>
    </>
  );
}

export default App;
