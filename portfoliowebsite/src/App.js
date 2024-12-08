import logo from './logo.svg';
import './App.css';
import video from './video.mp4';
import cv from './CV.pdf';

function onClickLink(link){
  window.open(link);
}
function onClickCV(){
  window.open(cv);
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
            <h2>My name is Lauren and I am a Software Developer currently in my final year studying Computer Science at Brunel University London. In my spare time I enjoy playing games with my friends, reading, as well as exploring new technologies to work with.</h2>
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
                <h1>Work Experience</h1>
              </div>
            <div className="textC">
              <h2> Innovate UK Smart Grant Project (Part-Time)</h2>
              <h3>
                <ul>
                  <li>Worked with Python, Isaac Sim, ROS, and 3D Point Clouds</li>
                  <li>Detect specific object locations from a robot camera point cloud reading</li>
                  <li>Pre-processing and manipulation of point cloud data in Python</li>
                  <li>Object classification</li>
                  <li>Worked as part of a team</li>
                </ul>
              </h3>
              <h2>Full-Stack Developer at Feral Interactive (London, Full-Time)</h2>
              <h3>
                <ul>
                  <li>Worked in a game development company as a full stack developer</li>
                  <li>Java backend developemnt. Javascript, HTML, CSS frontend development</li>
                  <li>Database handling, upgrading, etc. (MySQL)</li>
                  <li>Knowledge of Unix terminal, bash scripting, etc.</li>
                  <li>Worked as part of the Internal Tools department</li>
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
              <h1>Work Experience (continued)</h1>
            </div>
            <div className="textC">
              <h2> Front-End Developer for HecoAnalytics (London,Part-Time)</h2>
              <h3>
                <ul>
                  <li>Worked with React and AWS</li>
                  <li>Developed an application to track hospital costs and calculate statistics based on those costs</li>
                  <li>Was part of the Senior Leadership team</li>
                  <li>Onboarded new starters, teaching them about the project, reviewing code and distributing tasks</li>
                  <li>Managed a small team of about 3 people</li>
                </ul>
              </h3>
              <h2>Teaching Assistant Brunel University(London, Part-Time)</h2>
              <h3>
                <ul>
                  <li>Worked as a teaching assistant for the Computer Science department</li>
                  <li>Developed teaching and speaking skills in order to help others</li>
                  <li>Further solidified knowledge that I myself was learning the previous years</li>
                  <li>Helped the department and lecturers by aiding in the Laboratory Sessions</li>
                </ul>
              </h3>

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
            <div className="links" onClick={() => onClickLink("https://github.com/LaurenRuuyx/The_Giant")}>
              <h1>The Giant</h1>
              <h3>C# game made with Unity</h3>
              <p>(Final Year Coursework)</p>
            </div>
            <div className="links" onClick={onClickCV}>
              <h1>Full CV</h1>
            </div>
            <div className="links" onClick={() => onClickLink("https://www.linkedin.com/in/laurentiu-cristian-miscoci-479713233/")}>
              <h1>LinkedIn</h1>
            </div>
            <div className="links" onClick={() => onClickLink("https://github.com/LaurenRuuyx/SeatingPlanSystem")}>
              <h1>Airport Seating System</h1>
              <h3>Dynamic seating plan system coded in Java</h3>
              <p>(First-Year Group Project)</p>
            </div>
            <div className="links" onClick={() => onClickLink("https://github.com/LaurenRuuyx")}>
              <h1>Other Projects on my GitHub</h1>
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
