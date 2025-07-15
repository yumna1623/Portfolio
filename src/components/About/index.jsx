import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Lightbulb, Layers } from "lucide-react";

const About = () => {
  const containerRef = useRef(null);
  const { darkMode } = useTheme();

  const [description, setDescription] = useState("");
  const [descIndex, setDescIndex] = useState(0);
  const [visible, setVisible] = useState(false); // 👈 visibility state

  const descText =
    "I am particularly interested in product-facing positions where I can help make an organization wide impact.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // 👈 reveal section
          setDescription("");
          setDescIndex(0);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (descIndex < descText.length && visible) {
      timeout = setTimeout(() => {
        setDescription((prev) => prev + descText.charAt(descIndex));
        setDescIndex((prev) => prev + 1);
      }, 30);
    }
    return () => clearTimeout(timeout);
  }, [descIndex, visible]);

  return (
    <div
      ref={containerRef}
      className={`mb-0 min-h-screen w-full px-4 sm:px-8 flex items-center justify-center transition-colors duration-500 font-[system-ui,-apple-system,BlinkMacSystemFont] ${
        darkMode ? "bg-black text-white" : "bg-[#FBFBFB] text-gray-800"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto flex flex-col items-center text-center transform transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Gradient Heading */}
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Yumna's Intro */}
        <p
          className={`text-base sm:text-lg md:text-xl max-w-3xl mb-8 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Hi! I'm Yumna Nasir, a passionate{" "}
          Computer Science student at UBIT (Batch 2024–2028). I
          love exploring new technologies, attending tech events, and
          participating in workshops that expand my knowledge. With a diverse
          skill set in UX/UI design,{" "}
          junior full-stack development,
          operational architecture,{" "}
          systems design, sales, and{" "}
          cross-functional team management, I thrive on solving
          problems and creating meaningful digital experiences.
        </p>

       

        {/* Two Cards Horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Card 1 */}
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-left border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb
                className="text-yellow-400 dark:text-yellow-300"
                size={24}
              />
              <h3 className="text-xl font-semibold">
                Softskills that pay the bills
              </h3>
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              In addition to my design and technical expertise—I also have
              strong leadership, time management, and multitasking skills—honed
              through my experience as a business owner / managing partner.
              Outside of work, I enjoy staying active through sports such as
              cricket and gyming.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-left border border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Layers className="text-blue-500 dark:text-blue-300" size={24} />
              <h3 className="text-xl font-semibold">Research and planning</h3>
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              One of my favorite aspects of creating is planning the
              architecture of a project. From Design Systems to Brand Strategy—I
              enjoy working with the many touch points of user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
