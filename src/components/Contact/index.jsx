import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="w-full flex flex-col items-center justify-center px-6 py-16 bg-white dark:bg-[#222831]"
    >
      <div className="max-w-xl w-full text-center">
        <h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          data-aos="fade-right"
        >
          Let's Connect
        </h2>
        <p
          className="text-gray-600 dark:text-gray-300 mb-10 text-base sm:text-lg"
          data-aos="fade-left"
        >
          Whether you want to discuss a project, collaborate, or just say hi — my inbox is open. Feel free to connect with me!
        </p>

        {/* Icon Row */}
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
            className="transform transition duration-300 hover:scale-110 hover:-rotate-3 text-gray-600 dark:text-gray-300 hover:text-[#0A66C2] text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yumna1623"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="transform transition duration-300 hover:scale-110 hover:rotate-3 text-gray-600 dark:text-gray-300 hover:text-white text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:yumnanasir1623@example.com"
            title="Email"
            className="transform transition duration-300 hover:scale-110 hover:-rotate-6 text-gray-600 dark:text-gray-300 hover:text-red-500 text-3xl"
          >
            <FaEnvelope />
          </a>
        </div>

        <footer
          className="border-t pt-4 text-sm text-gray-500 dark:text-gray-400 flex justify-center items-center gap-1"
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
