import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  const bgColor = darkMode ? "#000000" : "#ffffff";
  const textColor = darkMode ? "#ffffff" : "#1F2937";
  const subTextColor = darkMode ? "#D1D5DB" : "#4B5563";
  const iconColor = darkMode ? "#D1D5DB" : "#4B5563";
  const borderColor = darkMode ? "#4B5563" : "#E5E7EB";

  return (
    <motion.section
      id="contact"
      className="w-full flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden transition-colors duration-500 ease-in-out"
      style={{
        backgroundColor: bgColor,
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
      }}
    >
      {/* 💫 Gradient Overlay - more visible now */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-pink-300 to-green-300 opacity-40 z-0" />

      {/* 🧊 Glass Layer - softens based on mode */}
      <div
        className={`absolute inset-0 backdrop-blur-md z-0 ${
          darkMode ? "bg-white/5" : "bg-white/10"
        }`}
      />

      {/* 🌟 Content */}
      <div className="relative z-10 max-w-xl w-full text-center">
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: textColor }}
          data-aos="fade-right"
        >
          Let's Connect
        </h2>

        <p
          className="mb-10 text-base sm:text-lg"
          style={{ color: subTextColor }}
          data-aos="fade-left"
        >
          Whether you want to discuss a project, collaborate, or just say hi — my inbox is open.
          Feel free to connect with me!
        </p>

        {/* 🔗 Social Icons */}
        <div
          className="flex justify-center gap-8 mb-12"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <a
            href="https://www.linkedin.com/in/yumna-nasir-494a70244/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="transition transform hover:scale-110 hover:-rotate-3 text-3xl"
            style={{ color: iconColor }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yumna1623"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="transition transform hover:scale-110 hover:rotate-3 text-3xl"
            style={{ color: iconColor }}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:yumnanasir1623@example.com"
            title="Email"
            className="transition transform hover:scale-110 hover:-rotate-6 text-3xl"
            style={{ color: iconColor }}
          >
            <FaEnvelope />
          </a>
        </div>

        {/* 👣 Footer */}
        <footer
          className="border-t pt-4 text-sm flex justify-center items-center gap-1"
          style={{ color: subTextColor, borderColor: borderColor }}
          data-aos="fade-up"
        >
          <span>Designed with</span>
          <FaHeart className="text-red-500 animate-pulse" />
          <span>by Yumna</span>
        </footer>
      </div>
    </motion.section>
  );
};

export default Contact;
