import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const devIcons = [
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Express.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  const { darkMode, setDarkMode } = useTheme();

  const textColor = darkMode ? "#D1D5DB" : "#1F2937";
  const iconBg = darkMode ? "rgba(0, 173, 181, 0.1)" : "rgba(0, 173, 181, 0.15)";
  const iconShadow = darkMode ? "rgba(0, 173, 181, 0.7)" : "rgba(0, 173, 181, 0.5)";

  return (
    <section
      id="skills"
      className={`mb-0 min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden 
      transition-colors duration-500 ease-in-out font-[system-ui,-apple-system,BlinkMacSystemFont] ${
        darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-[#f0f4ff] via-[#ffffff] to-[#ecf5ff] text-black"
      }`}
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

     

      <motion.div
        className="relative z-10 w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug"
          style={{ color: textColor }}
          variants={itemVariants}
        >
          I'm looking to join a{" "}
          <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent font-extrabold">
            cross-functional
          </span>{" "}
          team
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-sm sm:text-base md:text-lg max-w-xl"
          style={{ color: textColor }}
          variants={itemVariants}
        >
          that values improving people’s lives through accessible and inclusive design.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
          variants={containerVariants}
        >
          {devIcons.map(({ name, url }) => (
            <motion.div
              key={name}
              className="rounded-xl flex items-center justify-center cursor-pointer shadow-md transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: `0 0 15px 3px ${iconShadow}` }}
              style={{
                backgroundColor: iconBg,
                boxShadow: `0 4px 6px ${darkMode ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.1)"}`,
              }}
              title={name}
            >
              <img
                src={url}
                alt={`${name} icon`}
                className="w-8 h-8 sm:w-12 sm:h-12"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 text-[#00ADB5]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
