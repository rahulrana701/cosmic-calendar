import "./App.css";
import Background from "./Components/Background";
import Intro from "./Components/Intro";
import Astronaut from "./Components/Astronaut";
import Meteor from "./Components/Meteor";
import Navbar from "./Components/Navbar";
import CheckEvents from "./Components/CheckEvents";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <section className="page1">
        <div className="Intro-text">
          <Intro />
        </div>
        <div className="svgs">
          <Astronaut />
        </div>
      </section>
          <CheckEvents />
      <section className="page3">
        <Meteor />
      </section>
    </div>
  );
}

export default App;
