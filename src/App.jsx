import { useState, useEffect } from "react";
import "./App.css";
import BtnToTop from "./components/BtnToTop";
import { projects } from "./data/projects";
import { experiences } from "./data/experiences";
import { skills } from "./data/skills";
import { Toaster } from "react-hot-toast";
import pdf from "./assets/CV/LeHuuBao_Frontend_CV.pdf";
import { DisplayPDF } from "./components/DisplayPDF";

function App() {
  const [isShowCV, setIsShowCV] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const handleCV = () => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      window.open(
        "https://github.com/lehuubao1810/portfolio/blob/main/public/CV/LeHuuBao_Frontend_CV.pdf",
        "_blank"
      );
    } else {
      setIsShowCV(!isShowCV);
    }
  };

  const navItems = [
    { id: "projects", label: "Work" },
    { id: "experience", label: "Exp" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "projects", "experience", "skills", "contact"];

      // Check if we are at the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection("contact");
        return;
      }

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjusted range for better detection
          return rect.top >= -300 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Toaster position="bottom-left" reverseOrder={true} />
      {isShowCV && <DisplayPDF pdf={pdf} setIsShowCV={setIsShowCV} />}

      {/* Brand Name */}
      <div className="brand-name" onClick={() => scrollTo("top")}>
        Le Huu Bao
      </div>

      {/* Floating Navigation */}
      <nav className="nav-container">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeSection === item.id ? "active" : ""}`}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </div>
        ))}
        <div className="nav-item" onClick={handleCV}>
          CV
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="hero-section">
        <div className="hero-manifesto">
          <h1 className="hero-title">
            <span className="outline-text">Creative</span>
            <span className="filled-text">Developer</span>
            <span className="outline-text">& Designer</span>
          </h1>
          <p className="hero-subtitle">
            I build digital experiences that blend technical precision with
            artistic chaos. Based in Vietnam, working globally.
          </p>
          <button className="hero-cta" onClick={() => scrollTo("projects")}>
            Explore Work
          </button>
        </div>
      </section>

      {/* Projects Section - Z Pattern */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <span>Selected Works</span>
          <span className="section-number">01</span>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="project-visual">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-tags">
                {project.skills.split(", ").map((skill, i) => (
                  <span key={i} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link repo-link"
                  >
                    Visit Repo <span>↗</span>
                  </a>
                )}
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Visit Site <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Experience Section - Interactive List */}
      <section id="experience" className="experience-section">
        <div className="section-header">
          <span>Experience</span>
          <span className="section-number">02</span>
        </div>

        <div className="exp-list">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item">
              <div className="exp-header">
                <h3 className="exp-company">{exp.company}</h3>
                <span className="exp-role">
                  {exp.title} // {exp.time}
                </span>
              </div>
              <div className="exp-details">
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section - Cloud */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <span>Tech Stack</span>
          <span className="section-number">03</span>
        </div>
        <div className="skills-cloud">
          {skills.map((skill, index) => (
            <div key={index} className="skill-pill">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Let's Talk</h2>
        <a href="mailto:lehuubao2909@gmail.com" className="contact-btn">
          Say Hello
        </a>
        <div className="contact-socials">
          <a
            href="https://github.com/lehuubao1810"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <span className="separator">/</span>
          <a
            href="https://www.linkedin.com/in/lehuubao2909/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          {/* <span className="separator">/</span>
          <a
            href="https://www.facebook.com/lehuubao1810"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            Facebook
          </a> */}
        </div>
      </section>

      <footer className="footer">
        © 2023 Le Huu Bao. All Rights Reserved.
      </footer>

      <BtnToTop />
    </div>
  );
}

export default App;
