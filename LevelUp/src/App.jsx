import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/Sections/About/about";
import { DailyChallenges } from "./components/Sections/DailyChallenges/dailyChallenges";
import { WeeklyChallenges } from "./components/Sections/WeeklyChallenges/weeklyChallenges";
// import { Comments } from "./components/Sections/Comments/comments";
import { ScrollToTop } from "./components/BackToTop/backtotop"

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <About />
      </div>
      <DailyChallenges />
      <WeeklyChallenges />
      {/* <Comments /> */}
      <ScrollToTop /> {/* Botão para voltar ao topo */}
    </>
  );
}

export default App;
