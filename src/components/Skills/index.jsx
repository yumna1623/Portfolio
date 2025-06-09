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
  const { darkMode, setDarkMode } = useTheme(); // ✅ destructure setDarkMode

  const bgColor = darkMode ? "#0F172A" : "#ffffff";
  const textColor = darkMode ? "#D1D5DB" : "#1F2937";
  const iconBg = darkMode ? "rgba(0, 173, 181, 0.1)" : "rgba(0, 173, 181, 0.15)";
  const iconShadow = darkMode ? "rgba(0, 173, 181, 0.7)" : "rgba(0, 173, 181, 0.5)";

  return (
    <section
      id="skills"
      className="transition-colors
     bg-gradient-to-b from-cyan-100 via-white to-purple-100

      duration-500 min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="mb-6 px-4 py-2 rounded-md font-semibold"
        style={{
          backgroundColor: darkMode ? "#00ADB5" : "#1F2937",
          color: darkMode ? "#0F172A" : "#ffffff",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      {/* Background effects */}
      <div className="absolute inset-0 animate-gradient blur-3xl opacity-25 z-0" style={{ backgroundColor: bgColor }}></div>
      <div className="absolute inset-0 z-0" style={{ backgroundColor: bgColor }}></div>

      <motion.div
        className="relative z-10 w-full max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          style={{ color: textColor }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug"
          variants={itemVariants}
        >
          I'm looking to Join a{" "}
          <span className="text-[#00ADB5] underline underline-offset-4 decoration-[#00ADB5]/60">
            cross-functional
          </span>{" "}
          team
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          style={{ color: textColor }}
          className="text-sm sm:text-base md:text-lg max-w-xl"
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
