import './App.css';
import CardProject from './components/cardProject';

function App() {

  const handleCV = () => {
    alert('Downloading...');
  }



  const skills = [ 
    'ReactJS', 'HTML', 'CSS', 'JavaScript',
     'TypeScript', 'TailwindCSS', 'Sass',
    'React Native', 'Git', 'Redux', 'NextJS',
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
          <CardProject 
            title="Project 1"
            image="https://picsum.photos/500/300"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl eu nisl."
            skills= "React, NodeJS, MongoDB"
            github="https://github.com/lehuubao1810"
            preview="#"
            type= "web"
          />
          <CardProject 
            title="MATH BIN"
            image="https://lehuubao1810.github.io/dataquiz/mathbin.png"
            description="A android application helps students improve their math skills by quizzes and exercises."
            skills= "React Native, JSON Server"
            github="https://github.com/lehuubao1810/QuizApp"
            // preview="https://expo.dev/artifacts/eas/envG2WyKpFTJZ5hEBA3U5v.apk"
            preview="https://drive.google.com/file/d/1w_o6jFag7hOHpiWwKWTvRd0DmqnqmmD4/view?usp=share_link"
          />
          <CardProject 
            title="Calculator App" 
            image="https://raw.githubusercontent.com/lehuubao1810/Calculator-App/main/design/desktop-design-theme-1.jpg"
            description=" A calculator app can perform basic arithmetic operations (add, subtract, multiply, divide) and have three themes."
            skills= "React, NodeJS, MongoDB"
            github="https://github.com/lehuubao1810/Calculator-App"
            preview="https://lehuubao1810.github.io/Calculator-App/"
            type= "web"
          />
          <CardProject 
            title="Project 4"
            image="https://picsum.photos/500/300"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl eu nisl."
            skills= "React, NodeJS, MongoDB"
            github="https://github.com/lehuubao1810"
            preview="#"
            type= "web"
          />
        </div>
      </section>
      <section id='about'>
        <hr className='line'></hr>
        <h1>About</h1>
        <div className="about">
          <div className="about-left">
            <img src="https://picsum.photos/250/300" alt="avatar" />
          </div>
          <div className="about-right">
            <h1>Le Huu Bao</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl eu nisl. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl eu nisl.</p>
          </div>
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
                <i className="fas fa-envelope"></i>
                <span>
                  <a href="mailto:lehuubao2909@gmail.com">
                  </a>
                </span>
              </p>
              <p>
                <i className="fab fa-github"></i>
                <span>
                  <a href="https://github.com/lehuubao1810"></a>
                </span>
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
