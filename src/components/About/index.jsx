import { motion } from "framer-motion";
import AboutMe from "../../assets/AboutMe.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-0 min-h-screen w-full pt-28 flex flex-col
       md:flex-row items-center justify-between px-6 md:px-20 pb-16
       bg-gradient-to-r from-black via-[#0c1c1c] to-[#00ADB5]
       text-white"
    >
      {/* Left side - Text */}
      <motion.div
        className="md:w-1/2 mb-10 md:mb-0 max-w-xl relative z-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#00ADB5]">
          About Me
        </h2>
        <p className="text-md md:text-lg leading-relaxed text-gray-300 whitespace-pre-line">
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
          {/* Teal Glow */}
          <div className="absolute inset-0 rounded-xl bg-[#00ADB5] opacity-20 blur-3xl -z-10 animate-pulse"></div>

          <img
            src={AboutMe}
            alt="About Yumna"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 rounded-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
