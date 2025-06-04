import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full m-0 p-4 flex justify-between items-center ${
        darkMode ? "bg-[#222831] text-white" : "bg-white text-black"
      } 
        shadow-md transition-colors duration-300
        `}
    >
      {/* Logo-style name */}
      <div
        className="text-xl font-extrabold tracking-wide"
        style={{ color: darkMode ? "#00ADB5" : "#222831" }}
      >
        YN
      </div>

      <div className="hidden md:flex space-x-6">
        <a id="home" href="#home" className="hover:text-[#00ADB5] transition">
          Home
        </a>
        <a href="#about" className="hover:text-[#00ADB5] transition">
          About Me
        </a>
        <a href="#skills" className="hover:text-[#00ADB5] transition">
          Skills
        </a>
        <a href="#projects" className="hover:text-[#00ADB5] transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-[#00ADB5] transition">
          Contact Me
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={toggleMenu}
          className="px-2 py-1 border rounded md:hidden block"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full m-0 ${
            darkMode ? "bg-[#222831] text-white" : "bg-white text-black"
          } flex flex-col space-y-4 p-4 md:hidden`}
        >
          <a href="#home" className="hover:text-[#00ADB5] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#00ADB5] transition">
            About Me
          </a>
          <a href="#skills" className="hover:text-[#00ADB5] transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#00ADB5] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#00ADB5] transition">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
