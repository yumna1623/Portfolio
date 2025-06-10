import { motion } from "framer-motion";
// import AboutMe from "../../assets/AboutMe.png";
import AboutMe from "../../assets/AboutMe.png";  // Vite-specific fix

const About = () => {
  return (
    <section
      id="about"
      className="relative z-0 min-h-screen w-full pt-28 flex flex-col
       md:flex-row items-center justify-between px-6 md:px-20 pb-16
       mb-0
             bg-gradient-to-b from-purple-100 via-white to-purple-100
             text-black
"
    >
      {/* Optional subtle lines overlay for some texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
      >
        <line x1="0" y1="0" x2="800" y2="600" stroke="#00ADB5" strokeWidth="1" />
        <line x1="0" y1="600" x2="800" y2="0" stroke="#00ADB5" strokeWidth="1" />
        <line x1="400" y1="0" x2="800" y2="600" stroke="#00ADB5" strokeWidth="0.5" />
        <line x1="0" y1="300" x2="800" y2="300" stroke="#00ADB5" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="600" stroke="#00ADB5" strokeWidth="0.5" />
      </svg>

      {/* Left side - Text */}
      <motion.div
        className="md:w-1/2 mb-10 md:mb-0 max-w-xl relative z-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          About Me
        </h2>
        <p className="text-md md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">
          I’m Yumna Nasir, a passionate 2nd-year Computer Science student at
          UBIT, University of Karachi (Batch 2024–2028). I have a deep love for
          learning new technologies, exploring cutting-edge fields like
          Artificial Intelligence and Machine Learning, and solving challenging
          problems. I am proficient in Java, C++, and JavaScript, and I bring
          strong teamwork and communication skills to every project I work on. I
          thrive in collaborative environments and am always eager to
          contribute, grow, and explore new domains within technology.
        </p>
      </motion.div>

      {/* Right side - Image */}
      <motion.div
        className="md:w-1/2 flex justify-center relative z-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-xl">
          {/* Neon glow background */}
          <div className="absolute inset-0 rounded-xl bg-[#00ADB5] opacity-25 blur-3xl -z-10 animate-pulse"></div>

          <img
            src={AboutMe}
            alt="About Yumna"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
