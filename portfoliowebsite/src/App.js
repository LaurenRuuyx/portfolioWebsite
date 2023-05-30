import logo from './logo.svg';
import './App.css';
import video from './video.mp4';
import cv from './CV.pdf';

function onClickGithub(){
    window.open("https://github.com/LaurenRuuyx");
}
function onClickDemon(){
  window.open("https://github.com/LaurenRuuyx/DemonSamurai");
}
function onClickSeating(){
  window.open("https://github.com/LaurenRuuyx/SeatingPlanSystem");
}
function onClickDrinking(){
  window.open(cv);
}
function onClickLinkedIn(){
  window.open("https://www.linkedin.com/in/laurentiu-cristian-miscoci-479713233/");
}
function onClickEmail(){
  window.open("mailto:laurmscc@gmail.com");
}
function App() {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

  return (

    
    <div className="App">
      <div className="App-header" ></div>
      <video src={video} id="video" autoPlay loop reverse muted />
      <div className="content">
        <h1 id="maintitle">Laurenitu-Cristian Miscoci</h1>
        <h2>Computer Science Student at Brunel University London</h2>
      </div>


      <div class="progress"></div>
        <div class="cube-wrap">
        <div class="cube">
        <div class="side top"></div>
        <div class="side bottom"></div>
        <div class="side front"></div>
        <div class="side back"></div>
        <div class="side left"></div>
        <div class="side right"></div>
        </div>
        </div>
      <div className="content" id="underCube">
        <h2>scroll down</h2>
      </div>
      <div className="spacing-div"></div>
      <div className="lightsDiv-container">
      <div className="lightsDiv">
        <div className="contentDiv">
          <div className="titleCard">
            <h1>About Me</h1>

          </div>
          <div className="textC">
            <h2>I am Lauren and I am an aspiring Software Engineer currently in my second year studying Computer Science at Brunel University London. In my spare time I enjoy playing games with my friends, reading, as well as learning new technologies to work with.</h2>
            <h2>I am a very flexible individual with the ability to adapt to any situation on the spot, as well as an innate ability for learning new things at a fast pace.</h2>
            <h2>Throughout my studies and personal projects I have developed the ability to write clean, high-quality code as well as work as part of a team in order to create larger scale projects.</h2>
          </div>
          
        </div>
      </div>
      </div>
      <div className="lightsDiv2-container">
        <div className="lightsDiv" id="lightsDiv2">
          <div className="contentDiv">
            <div className="titleCard">
                <h1>University Studies</h1>
              </div>
            <div className="textC">
              <h2> First-Year Modules</h2>
              <h3>
                <ul>
                  <li>Introductory Programming (A*)</li>
                  <li>Logic and Computation (A+)</li>
                  <li>Data and Information (A+) </li>
                  <li>Year 1 Group Project (A*)</li>
                  <li>Information Systems and Organisations (A)</li>
                </ul>
              </h3>
              <h2>Second-Year Modules</h2>
              <h3>
                <ul>
                  <li>Algorithms and their Applications</li>
                  <li>Year 2 Group Project (A*)</li>
                  <li>Software Development and Management</li>
                  <li>Networks and Operating Systems</li>
                  <li>Usability Engineering</li>
                </ul>
              </h3>

            </div>
          </div>
        </div>
      </div>
      <div className="lightsDiv-container">
        <div className="lightsDiv">
          <div className="contentDiv">
            <div className="titleCard">
              <h1>Technologies</h1>
            </div>
            <div className="textC">
              <h2>
                <ul>
                  <li>Java (Main programming language)</li>
                  <li>Python</li>
                  <li>C++ (Beginner)</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>MySQL</li>
                  <li>SpringBoot</li>
                  <li>Visual Paradigm</li>
                  <li>SPSS</li>
                  <li>Virtual Box</li>
                  <li>Strong Object-Oriented Programming Skills</li>
                </ul>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="lightsDiv" id="footer">
        <div className="contentDiv">
          <div className="titleCard">
            <h1>Links & Projects</h1>
          </div>
          <div className="buttonDivs">
            <div className="links" onClick={onClickDemon}>
              <h1>Demon Samurai</h1>
              <h3>Python game made with the PyGame library</h3>
              <p>(A-Level Final Project)</p>
            </div>
            <div className="links" onClick={onClickDrinking}>
              <h1>Full CV</h1>
            </div>
            <div className="links" onClick={onClickLinkedIn}>
              <h1>LinkedIn</h1>
            </div>
            <div className="links" onClick={onClickSeating}>
              <h1>Airport Seating System</h1>
              <h3>Dynamic seating plan system coded in Java</h3>
              <p>(First-Year Group Project)</p>
            </div>
            <div className="links" onClick={onClickGithub}>
              <h1>GitHub Profile</h1>
            </div>
            <div className="links" onClick={onClickEmail}>
              <h1>Email</h1>
              <h3>laurmscc@gmail.com</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
