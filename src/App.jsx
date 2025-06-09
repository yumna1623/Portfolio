import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavBar, Hero, About, Skills, Projects, Contact } from "./components";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();
  }, []);

  return (
    <div
      className={`flex flex-col items-center space-y-6 min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#0F172A] text-white" : "bg-white text-black"
      }`}
    >
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
