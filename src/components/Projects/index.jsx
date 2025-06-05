import kababjeesImage from "../../assets/kababjees.png";
import apple from "../../assets/apple.png";
import taskManager from "../../assets/taskmanager.png";
import DSA from "../../assets/DSA.png";

const Projects = () => {
  const projects = [
    {
      name: "Kababjees Website Clone",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "A responsive restaurant website inspired by Kababjees using Bootstrap for layout and styling.",
      github: "https://github.com/your-username/kababjees-clone",
      live: "https://kababjees-clone-demo.com",
      image: kababjeesImage,
    },
    {
      name: "Apple Website Clone",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description:
        "A clone of Apple’s official website featuring smooth transitions, product sections, and responsiveness.",
      github: "https://github.com/your-username/apple-clone",
      live: "https://apple-clone-demo.com",
      image: apple,
    },
    {
      name: "Task Manager App",
      tags: ["React", "JavaScript", "Tailwind", "Bootstrap", "Firebase"],
      description:
        "A web app to manage tasks with CRUD operations. Used Firebase for authentication and data storage.",
      github: "https://github.com/your-username/task-manager",
      live: "https://task-manager-demo.com",
      image: taskManager,
    },
    {
      name: "Route Finder",
      tags: ["C++", "DSA", "Graphs", "Shortest Path", "Dijkstra Algorithm"],
      description:
        "A console-based program in C++ to find shortest paths between locations using graph algorithms like Dijkstra.",
      github: "https://github.com/your-username/route-finder",
      live: "https://your-route-finder-link.com",
      image: DSA,
    },
    {
      name: "Hospital Management System",
      tags: ["JAVA", "JavaFX", "SceneBuilder", "File Handling"],
      description:
        "A JavaFX-based hospital management system allowing patient and doctor management with file-based storage.",
      github: "https://github.com/your-username/hospital-management",
      live: "https://your-project-live-link.com",
      image: kababjeesImage, // replaced { kababjeesImage } with kababjeesImage
    },
  ];

  return (
    <section className="bg-[#0F172A] text-white py-20 px-4 md:px-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Projects
      </h2>
      <div className="grid gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ willChange: "transform, box-shadow" }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center md:items-start md:justify-between gap-10 
            bg-[#1E293B] p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out 
            transform hover:scale-[1.02] hover:shadow-2xl hover:bg-[#273549] hover:ring-1 hover:ring-cyan-400`}
          >
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#334155] px-3 py-1 text-sm rounded-full transition duration-300 ease-in-out hover:shadow-[0_0_10px_#38bdf8] hover:bg-[#38bdf8] hover:text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm md:text-base mb-6">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F97316] hover:bg-[#38bdf8] hover:text-black text-white px-5 py-2 rounded-md text-sm font-semibold transition duration-300 ease-in-out"
                >
                  View Github
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:bg-white hover:text-black px-5 py-2 rounded-md text-sm font-semibold transition duration-300 ease-in-out"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="flex-shrink-0">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className="w-[320px] rounded-md border border-gray-700 transition duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
