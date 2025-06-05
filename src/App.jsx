import "./App.css";
import { NavBar, Hero, About, Skills, Projects,Contact } from "./components";

function App() {
  return (
    <div className="flex flex-col items-center text-white space-y-6">
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
