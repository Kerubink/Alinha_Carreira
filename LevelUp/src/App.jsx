import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/Sections/About/about";
import { DailyChallenges } from "./components/Sections/DailyChallenges/dailyChallenges";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <About />
      </div>
      <DailyChallenges />

    </>
  );
}

export default App;
