import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-0 min-h-screen w-full pt-28 flex flex-col
       md:flex-row items-center justify-between px-6 md:px-20 pb-16
       mb-0 bg-gradient-to-b from-purple-50 via-white to-purple-200
       text-black overflow-hidden"
    >
      {/* Gradient line pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ADB510_0%,transparent_50%)]"></div>
      </div>

      {/* Diagonal gradient lines animation */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#00ADB510_25%,transparent_25%,transparent_75%,#00ADB510_75%,#00ADB510),linear-gradient(-45deg,#00ADB510_25%,transparent_25%,transparent_75%,#00ADB510_75%,#00ADB510)] bg-[size:20px_20px] animate-[moveDiagonal_100s_linear_infinite]"></div>
      </div>

      {/* Left side - Text */}
      <motion.div
        className="md:w-1/2 mb-10 md:mb-0 max-w-xl relative z-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-400">
          About Me
        </h2>
        <p className="text-md md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">
          I'm Yumna Nasir, a passionate 2nd-year Computer Science student at
          UBIT, University of Karachi (Batch 2024–2028). I have a deep love for
          learning new technologies, exploring cutting-edge fields like
          Artificial Intelligence and Machine Learning, and solving challenging
          problems. I am proficient in Java, C++, and JavaScript, and I bring
          strong teamwork and communication skills to every project I work on. I
          thrive in collaborative environments and am always eager to
          contribute, grow, and explore new domains within technology.
        </p>
      </motion.div>

      {/* Right side - Placeholder for Image */}
      <motion.div
        className="md:w-1/2 flex justify-center relative z-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-200 to-teal-200 flex items-center justify-center">
          <span className="text-4xl text-purple-600">👩‍💻</span>
        </div>
      </motion.div>

      {/* Add this to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes moveDiagonal {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
        }
      `}</style>
    </section>
  );
};

export default About;