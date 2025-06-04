import "./App.css";
import { NavBar, Hero, About, Skills, Contact } from "./components";

function App() {
  return (
    <div className="flex flex-col items-center text-white space-y-6">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
