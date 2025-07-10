import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function NavBar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[75%] rounded-2xl px-4 md:px-8 py-3 shadow-md backdrop-blur-lg transition-colors duration-300 ${
        darkMode ? "bg-black/20 text-white" : "bg-white/30 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold font-[system-ui] select-none">
          Yumnaverse
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#00ADB5]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded hover:bg-amber-500 transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`md:hidden p-2 rounded border transition ${
              darkMode ? "border-gray-600" : "border-gray-300"
            }`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden px-4 pt-2 pb-4 flex flex-col space-y-3 transition-colors duration-300 ${
            darkMode ? "bg-black/20 text-white" : "bg-white/30 text-black"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#00ADB5]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
