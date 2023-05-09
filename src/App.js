import './App.css';
import CardProject from './components/cardProject';

function App() {

  const handleCV = () => {
    window.open("https://github.com/lehuubao1810/portfolio/tree/main/public/CV/Le-Huu-Bao.pdf", "_blank");
  }

  const projects =
    [
      {
        "title": "Todo App",
        "image": "https://raw.githubusercontent.com/lehuubao1810/Todo/dev/src/assets/1.png",
        "description": "A web application that allows users to create, edit, delete, and mark tasks as completed.",
        "skills": "ReactJS, Firebase",
        "github": "https://github.com/lehuubao1810/todo_cdtt",
        "preview": "https://todo-cdtt.vercel.app/",
        "type": "web"
      },
      {
        "title": "MATH BIN",
        "image": "https://lehuubao1810.github.io/dataquiz/mathbin.png",
        "description": "A mobile application helps students improve their math skills by quizzes and exercises.",
        "skills": "React Native, JSON Server",
        "github": "https://github.com/lehuubao1810/QuizApp",
        "preview": "https://drive.google.com/file/d/1w_o6jFag7hOHpiWwKWTvRd0DmqnqmmD4/view?usp=share_link",
        "type": "mobile"
      },
      {
        "title": "Shift Cipher",
        "image": "https://raw.githubusercontent.com/lehuubao1810/shiftCipher/main/src/assets/1.png",
        "description": "An app help user encrypt and decrypt text with shift cipher (ASCII code).",
        "skills": "ReactJS",
        "github": "https://github.com/lehuubao1810/shiftCipher",
        "preview": "https://shiftcipher.vercel.app/",
        "type": "web"
      },
      {
        "title": "Calculator App",
        "image": "https://raw.githubusercontent.com/lehuubao1810/Calculator-App/main/design/desktop-design-theme-1.jpg",
        "description": "A calculator app can perform basic arithmetic operations (add, subtract, multiply, divide) and have three themes",
        "skills": "JS",
        "github": "https://github.com/lehuubao1810/Calculator-App",
        "preview": "https://lehuubao1810.github.io/Calculator-App/",
        "type": "web"
      },
      {
        "title": "Rest Countries API",
        "image": "https://raw.githubusercontent.com/lehuubao1810/countriesAPI/main/design/desktop-design-home-dark.jpg",
        "description": "A web application that allows users to search for countries using the REST Countries API and filter them by region.",
        "skills": "ReactJS, Rest API",
        "github": "https://github.com/lehuubao1810/countriesAPI",
        "preview": "https://lhbcountriesapi.vercel.app/",
        "type": "web"
      },
      
    ]

  const skills = [
    'ReactJS', 'HTML', 'CSS', 'JavaScript',
    'TailwindCSS', 'Sass/SCSS', 'React Native',
    'Git', 'Redux', 'Firebase', 'Rest API'
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </header>
      <section id='top'>
        <h1>Hi, I'm Le Huu Bao</h1>
        <h4>3rd year student majoring in IT<br></br>HCMC University of Transport</h4>
        <button onClick={handleCV} className="cv">My CV</button>
      </section>
      <section id='projects' >
        <hr className='line'></hr>
        <h1>Projects</h1>
        <div className="cards">
          {projects.map((project, index) => (
            <CardProject key={index} project={project} />
          ))}
        </div>
      </section>
      <section id='about'>
        <hr className='line'></hr>
        <h1>About</h1>
        <div className="about">
          {/* <div className="about-left">
            <img src="https://picsum.photos/250/300" alt="avatar" />
          </div>
          <div className="about-right"> */}
          <h1>Le Huu Bao</h1>
          <p>
            I'm a 3rd year student majoring in IT at HCMC University of Transport. I'm a passionate and hard-working person.
            I'm always willing to learn new things and improve my skills.
          </p>
          {/* </div> */}
        </div>
      </section>
      <section id='skills'>
        <hr className='line'></hr>
        <h1>Skills</h1>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>
      <section id='contact'>
        <hr className='line'></hr>
        <h1>Contact</h1>
        <div className="contact">
          <h1>Le Huu Bao</h1>
          <div className='contact-link'>
            <p>
              <a href="mailto:lehuubao2909@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </p>
            <p>
              <a href="https://github.com/lehuubao1810">
                <i className="fab fa-github"></i>
              </a>
            </p>
          </div>

        </div>
      </section>

      <footer>
        <hr className='line'></hr>
        <p className='footer'>Create by LeHuuBao @2023</p>
      </footer>
    </div>
  );
}

export default App;
