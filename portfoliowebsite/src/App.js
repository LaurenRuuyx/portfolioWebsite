import logo from './logo.svg';
import './App.css';

function App() {
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  
  return (
    <div className="App">
      <header className="App-header">
        Laurentiu-Cristian Miscoci
        <br></br>
        Software Developer
      </header>
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

      <div className="spacing-div">
      </div>
      <div className="lightsDiv">
        <div className="contentDiv">
          <p>hi</p>

      </div>

      </div>
    </div>
  );
}

export default App;
