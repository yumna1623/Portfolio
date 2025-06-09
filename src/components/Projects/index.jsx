import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { darkMode, toggleTheme } = useTheme();

  const projects = [
    {
      name: "Kababjees Website Clone",
      category: "Clone",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "A responsive restaurant website inspired by Kababjees using Bootstrap for layout and styling.",
      github: "https://github.com/your-username/kababjees-clone",
      live: "https://kababjees-clone-demo.com",
    },
    {
      name: "Apple Website Clone",
      category: "Clone",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "A clone of Apple’s official website featuring smooth transitions, product sections, and responsiveness.",
      github: "https://github.com/your-username/apple-clone",
      live: "https://apple-clone-demo.com",
    },
    {
      name: "Task Manager App",
      category: "Management System",
      tags: ["React", "JavaScript", "Tailwind", "Bootstrap", "Firebase"],
      description:
        "A web app to manage tasks with CRUD operations. Used Firebase for authentication and data storage.",
      github: "https://github.com/your-username/task-manager",
      live: "https://task-manager-demo.com",
    },
    {
      name: "Route Finder",
      category: "Problem",
      tags: ["C++", "DSA", "Graphs", "Dijkstra"],
      description:
        "Console-based program in C++ for finding shortest paths using graph algorithms like Dijkstra.",
      github: "https://github.com/your-username/route-finder",
      live: "https://your-route-finder-link.com",
    },
    {
      name: "Hospital Management System",
      category: "Management System",
      tags: ["Java", "JavaFX", "SceneBuilder", "File Handling"],
      description:
        "JavaFX-based system allowing patient and doctor management with file-based storage.",
      github: "https://github.com/your-username/hospital-management",
      live: "https://your-project-live-link.com",
    },
    {
      name: "Menu Driven Program",
      category: "Problem",
      tags: ["C++"],
      description:
        "A console-based C++ program that allows users to play various games like Hangman, Number Guessing Game, Rock Paper Scissors, and Tic Tac Toe through a menu-driven interface.",
      github: "https://github.com/your-username/menu-driven-program",
      live: "https://your-project-live-link.com",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
    id="projects"
      className={`py-16 px-4 sm:px-6 md:px-10 lg:px-20 transition-all duration-500 
        ${
        darkMode ? "bg-[#0F172A] text-white" : " bg-gradient-to-b from-purple-100 via-white to-purple-100text-black"    	    
      }`}
    >
      <div className="flex justify-between items-center mb-10 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center w-full">
          My Projects
        </h2>
        
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["All", "Clone", "Management System", "Problem"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              selectedCategory === category
                ? "bg-cyan-300 text-black shadow-[0_0_10px_cyan,0_0_20px_cyan]"
                : `${
                    darkMode
                      ? "bg-[#334155] text-white hover:bg-cyan-100 hover:text-black"
                      : "bg-gray-200 text-black hover:bg-cyan-200 hover:text-black"
                  }`
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transition-all duration-500 
              hover:shadow-[0_0_15x_#00ffff,0_0_26px_#00ffff,0_0_35px_#00ffff]
             hover:bg-[#1e293b] hover:text-black hover:transform hover:scale-105
              ease-in-out border flex flex-col cursor-pointer ${
                darkMode
                  ? "bg-[#1e293b] text-white border-transparent hover:border-[#00ffff]"
                  :  " bg-gray-100 text-black border border-cyan-300 hover:border-[#00ffff] hover:bg-[#1e293b] hover:text-white "
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`text-xs sm:text-sm px-3 py-1 rounded-full transition duration-300 ${
                    darkMode
                      ? "bg-[#334155] text-white hover:bg-[#00ffff] hover:text-black hover:shadow-[0_0_10px_#00ffff]"
                      : "bg-gray-300 text-black hover:bg-[#00ffff] hover:text-black hover:shadow-[0_0_10px_#00ffff]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm sm:text-base mb-6 leading-relaxed min-h-[72px] flex-grow">
              {project.description}
            </p>
            <div className="flex gap-4 flex-wrap mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-[#00ffff] hover:text-black text-white px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition duration-300 whitespace-nowrap"
                >
                  View GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition duration-300 whitespace-nowrap ${
                    darkMode
                      ? "border border-white bg-white text-black hover:bg-black hover:text-white"
                      : "bg-cyan-300 text-black  border-black hover:bg-black hover:text-white"
                  }`}
                >
                  Live Preview
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
