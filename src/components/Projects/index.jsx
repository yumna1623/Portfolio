import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Github, Code, Layout, TrendingUp, BriefcaseMedical ,ArrowUpRight} from "lucide-react";


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { darkMode } = useTheme();

  const projects = [
    {
      name: "Kababjees Website Clone",
      category: "Clone",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "A responsive restaurant website inspired by Kababjees using Bootstrap for layout and styling.",
      github: "https://github.com/yumna1623/Kababjees-Website.git",
      live: "https://kababjees-clone-demo.com",
    },
    {
      name: "Apple Website Clone",
      category: "Clone",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "A clone of Apple’s official website featuring smooth transitions, product sections, and responsiveness.",
      github: "https://github.com/yumna1623/Apple-Website.git",
      live: "https://apple-clone-demo.com",
    },
    {
      name: "Task Manager App",
      category: "Management System",
      tags: ["React", "JavaScript", "Tailwind", "Bootstrap", "Firebase"],
      description:
        "A web app to manage tasks with CRUD operations. Used Firebase for authentication and data storage.",
      github: "https://github.com/yumna1623/Hackathon2.git",
      live: "https://task-manager-demo.com",
    },
    {
      name: "Route Finder",
      category: "Problem",
      tags: ["C++", "DSA", "Graphs", "Dijkstra"],
      description:
        "Console-based program in C++ for finding shortest paths using graph algorithms like Dijkstra.",
      github: "https://github.com/yumna1623/DSA.git",
      live: "https://your-route-finder-link.com",
    },
    {
      name: "Hospital Management System",
      category: "Management System",
      tags: ["Java", "JavaFX", "SceneBuilder", "File Handling"],
      description:
        "JavaFX-based system allowing patient and doctor management with file-based storage.",
      github: "https://github.com/yumna1623/Hospital-Managemet-System.git",
      live: "https://your-project-live-link.com",
    },
    {
      name: "Menu Driven Program",
      category: "Problem",
      tags: ["C++"],
      description:
        "A console-based C++ program that allows users to play various games like Hangman, Number Guessing Game, Rock Paper Scissors, and Tic Tac Toe through a menu-driven interface.",
      github: "https://github.com/yumna1623/c-Menu-Driven-Program.git",
      live: "https://your-project-live-link.com",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Clone":
        return <Layout size={16} className="mr-2" />;
      case "Management System":
        return <BriefcaseMedical size={16} className="mr-2" />;
      case "Problem":
        return <TrendingUp size={16} className="mr-2" />;
      default:
        return <Code size={16} className="mr-2" />;
    }
  };

  return (
    <section
      id="projects"
      className={`mt-0 relative py-20 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen overflow-hidden flex flex-col items-center
        ${darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-[#f0f4ff] via-[#ffffff] to-[#ecf5ff] text-black"}
      `}
    >
      {/* Custom radial background overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className={`w-full h-full ${
            darkMode
              ? "bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0f172a_60%,_#000000_100%)]"
              : "bg-[radial-gradient(circle_at_center,_#e3f2fd_0%,_#ffffff_80%,_#ffffff_100%)]"
          }`}
        ></div>
      </div>

      {/* Title Section */}
      <div className="max-w-4xl mb-16 text-center z-10">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
          <span className="inline-block relative">
            Showcasing My <span className="text-cyan-400">Work</span>
          </span>
        </h2>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto text-gray-500 dark:text-gray-300">
          Explore a collection of projects demonstrating my skills and passion for development, from web applications to problem-solving algorithms.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 mb-16 max-w-7xl mx-auto justify-center z-10">
        {["All", "Clone", "Management System", "Problem"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-md font-medium flex items-center transition-all duration-300 ${
              selectedCategory === category
                ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/40"
                : darkMode
                ? "bg-[#1A202C] text-gray-200 hover:bg-[#2D3748] hover:text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {getCategoryIcon(category)}
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full z-10">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg flex flex-col transition-transform duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:-translate-y-2 ${
              darkMode ? "bg-[#1A202C]" : "bg-white"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`text-base mb-5 leading-relaxed flex-grow ${
                darkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    darkMode
                      ? "bg-[#2D3748] text-gray-300"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

           <div className="flex flex-wrap gap-4 mt-auto">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        darkMode
          ? "bg-gray-700 text-gray-300 hover:bg-cyan-600 hover:text-white"
          : "bg-gray-300 text-gray-800 hover:bg-cyan-600 hover:text-white"
      }`}
    >
      <Github size={16} className="mr-2" /> GitHub
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        darkMode
          ? "bg-cyan-700 text-white hover:bg-white hover:text-black"
          : "bg-cyan-600 text-white hover:bg-black hover:text-white"
      }`}
    >
      <ArrowUpRight size={16} className="mr-2" /> Live Preview
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
