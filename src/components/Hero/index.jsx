import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../../context/ThemeContext";

import doodles from "../../assets/doodles.png";
import Man from "../../assets/Man.png";

export default function Hero() {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100, mirror: true });
    AOS.refresh();
  }, []);

  return (
    <section
      id="home"
      className={`relative transition-colors duration-500 mb-0 min-h-screen w-full flex items-center justify-center overflow-hidden
        ${
          darkMode
            ? "bg-[#0F172A] text-white"
            : "bg-gradient-to-b from-cyan-100 via-white to-purple-100"
        }`}
    >
      {!darkMode && (
        <svg
          className="absolute w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 600"
        >
          <line x1="0" y1="1" x2="100" y2="600" stroke="#00ADB5" strokeWidth="1" />
          <line x1="0" y1="600" x2="800" y2="0" stroke="#00ADB5" strokeWidth="1" />
          <line x1="400" y1="0" x2="800" y2="600" stroke="#00ADB5" strokeWidth="0.5" />
          <line x1="0" y1="300" x2="800" y2="300" stroke="#00ADB5" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="600" stroke="#00ADB5" strokeWidth="0.5" />
        </svg>
      )}

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-20 relative z-10">
        {/* Left content */}
        <div
          className="flex-1 max-w-xl text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hey, I'm <span className="text-[#00ADB5]">Yumna</span>
          </h1>
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#00ADB5] tracking-wide mt-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            FRONTEND DEVELOPER
          </h2>

          <p
            className="text-md md:text-lg mt-6 leading-relaxed"
            style={{ color: darkMode ? "#D1D5DB" : "#4B5563" }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            I'm passionate about clean UI and building interactive experiences.
          </p>

          <div
            className="mt-4 flex flex-wrap gap-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {["Team Collaborator", "AI Enthusiast", "Problem Solver"].map(
              tag => (
                <span
                  key={tag}
                  className="bg-[#00adb51a] text-[#00ADB5] px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <a
            href="/path/to/your-cv.pdf"
            download
            data-aos="fade-up"
            data-aos-delay="700"
            className={`inline-block border-2 border-[#00ADB5] font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition-all duration-300 mt-6 ml-4
              ${
                darkMode
                  ? "bg-[#00ADB5] text-black hover:bg-transparent hover:text-[#00ADB5] dark:hover:bg-[#393E46] dark:hover:text-white"
                  : "bg-[#00ADB5] text-black hover:bg-transparent hover:text-[#00ADB5]"
              }`}
          >
            Download CV
          </a>
        </div>

        {/* Right image with background */}
        <div
          className="relative flex justify-center items-center w-full 
           max-w-[350px] h-[350px]
           sm:hidden md:block rounded-full overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="absolute inset-0 rounded-full bg-[#00ADB5] opacity-20 blur-xl animate-pulse -z-10"></div>
          <img
            src={doodles}
            alt="Decorative doodles"
            className="absolute w-full h-full object-contain opacity-50 -rotate-12"
            style={{ zIndex: 1 }}
          />
          <div className="relative p-2 rounded-full z-10">
            <div className="relative rounded-full border-4 border-[#00ADB5] p-2 shadow-lg">
              <div className="rounded-full overflow-hidden border-2 border-white dark:border-[#393E46]">
                <img
                  src={Man}
                  alt="Man"
                  className="object-cover 
                  
                  rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
