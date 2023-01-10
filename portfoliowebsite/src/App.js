import logo from './logo.svg';
import './App.css';
import video from './video.mp4';

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
      <div className="lightsDiv">
        <div className="contentDiv">
          <div className="titleCard">
            <h1>About Me</h1>

          </div>
          <div className="textC">
            <h2>I am Lauren and I am an aspiring Software Engineer currently in my second year studying Comptuer Science at Brunel University Lonodn. In my spare time I enjoy playing games with my friends, reading, as well as learning new technologies to work with.</h2>
            <h2>I am a very flexible individual with the ability to adapt to any situation on the spot, as well as an innate ability for learning new things at a fast pace.</h2>
            <h2>Throughout my studies and personal projects I have developed the ability to write clean, high-quality code as well as work as part of a team in order to create larger scale projects</h2>
          </div>
          
        </div>
      </div>
      <div className="spacing-div" id="secondSpacer"></div>
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
                <li>Year 2 Group Project</li>
                <li>Software Development and Management</li>
                <li>Networks and Operating Systems</li>
                <li>Usability Engineering</li>
              </ul>
            </h3>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
