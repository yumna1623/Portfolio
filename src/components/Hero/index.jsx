import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../context/ThemeContext";

export default function Hero() {
  const { darkMode } = useTheme();
  const [typedText, setTypedText] = useState("");
  const fullText = "const Yumna = ( name, passion ) => ...";

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100, mirror: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    let charIndex = 0;
    let interval;

    const type = () => {
      setTypedText("");
      charIndex = 0;

      interval = setInterval(() => {
        if (charIndex <= fullText.length) {
          setTypedText(fullText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(interval);
          setTimeout(type, 3000);
        }
      }, 60);
    };

    type();
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen w-full flex items-center mb-0 justify-center overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none ${
          darkMode
            ? "bg-gradient-to-br from-[#3a0ca3]/20 via-[#4361ee]/20 to-[#ff006e]/30"
            : "bg-gradient-to-br from-[#3a0ca3]/40 via-[#4361ee]/10 to-[#ff006e]/40"
        }`}
      ></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 text-left z-10 py-10">
        {/* Animated code line */}
        <p className="pt-4 text-xs sm:text-sm md:text-base text-[#1877F2] font-mono mb-4 mt-10">
          {typedText}
          <span className="inline-block animate-blink text-[#1877F2]">|</span>
        </p>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Yumna
        </h1>

        <h2
          className={`text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-snug ${
            darkMode ? "text-white" : "text-black/80"
          }`}
        >
          I design and build <br />
          meaningful experiences.
        </h2>

        <p
          className={`text-xs sm:text-sm md:text-base mt-6 max-w-2xl leading-relaxed font-mono ${
            darkMode ? "text-white/80" : "text-black/60"
          }`}
        >
          I am a digital polymath — a constantly evolving digital creator driven
          by a passion for lifelong learning and the desire to leave a lasting
          impact.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-[#00ADB5] text-black px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:opacity-90 transition text-sm sm:text-base"
          >
            Contact Me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#333333] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition text-sm sm:text-base"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
