import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/Sections/About/about";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <About />
      </div>
    </>
  );
}

export default App;
