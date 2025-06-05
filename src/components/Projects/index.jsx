const Projects = () => {
  const projects = [
    {
      name: "Kababjees Website Clone",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "A responsive restaurant website inspired by Kababjees using Bootstrap for layout and styling.",
      github: "https://github.com/your-username/kababjees-clone",
      live: "https://kababjees-clone-demo.com",
    },
    {
      name: "Apple Website Clone",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "A clone of Apple’s official website featuring smooth transitions, product sections, and responsiveness.",
      github: "https://github.com/your-username/apple-clone",
      live: "https://apple-clone-demo.com",
    },
    {
      name: "Task Manager App",
      tags: ["React", "JavaScript", "Tailwind", "Bootstrap", "Firebase"],
      description:
        "A web app to manage tasks with CRUD operations. Used Firebase for authentication and data storage.",
      github: "https://github.com/your-username/task-manager",
      live: "https://task-manager-demo.com",
    },
    {
      name: "Route Finder",
      tags: ["C++", "DSA", "Graphs", "Dijkstra"],
      description:
        "Console-based program in C++ for finding shortest paths using graph algorithms like Dijkstra.",
      github: "https://github.com/your-username/route-finder",
      live: "https://your-route-finder-link.com",
    },
    {
      name: "Hospital Management System",
      tags: ["Java", "JavaFX", "SceneBuilder", "File Handling"],
      description:
        "JavaFX-based system allowing patient and doctor management with file-based storage.",
      github: "https://github.com/your-username/hospital-management",
      live: "https://your-project-live-link.com",
    },
  ];

  return (
    <section className="bg-[#0F172A] text-white py-20 px-4 md:px-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1E293B] p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out 
            hover:scale-[1.02] hover:shadow-2xl hover:bg-[#273549] hover:ring-1 hover:ring-cyan-400"
          >
            <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-[#334155] px-3 py-1 text-sm rounded-full transition duration-300 ease-in-out hover:shadow-[0_0_10px_#38bdf8] hover:bg-[#38bdf8] hover:text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm mb-6">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316] hover:bg-[#38bdf8] hover:text-black text-white px-4 py-2 rounded-md text-sm font-semibold transition duration-300"
              >
                View GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white hover:bg-white hover:text-black px-4 py-2 rounded-md text-sm font-semibold transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
