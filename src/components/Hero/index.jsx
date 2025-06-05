import doodles from "../../assets/doodles.png";
import Man from "../../assets/Man.png";

export default function Hero() {
  return (
    <section 
    id="home"
    className="min-h-screen w-full flex items-center justify-center mb-0 bg-[#222831] text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-20">
        {/* Left content */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hey, I'm <span className="text-[#00ADB5]">Yumna</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#00ADB5] tracking-wide mt-2">
            FRONTEND DEVELOPER
          </h2>
          <p className="text-md md:text-lg mt-6 leading-relaxed text-gray-300">
            {/* Add this after the last span if you want achievements */}
<div className="mt-4 flex flex-wrap gap-2">
  <span className="bg-[#00adb51a] text-[#00ADB5] px-3 py-1 rounded-full text-sm">
    Team Collaborator
  </span>
  <span className="bg-[#00adb51a] text-[#00ADB5] px-3 py-1 rounded-full text-sm">
    AI Enthusiast
  </span>
  <span className="bg-[#00adb51a] text-[#00ADB5] px-3 py-1 rounded-full text-sm">
    Problem Solver
  </span>
</div>
          </p>
          <a
            href="/path/to/your-cv.pdf"
            download
            className="inline-block border-2 border-[#00ADB5] text-[#00ADB5] 
            bg-transparent hover:bg-[#00ADB5] hover:text-[#222831] 
            font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition-all
            duration-300 mt-6"
          >
            Download CV
          </a>
        </div>

        {/* Right image */}
    <div className="relative flex justify-center items-center w-full max-w-lg">
  {/* Neon glow background */}
  <div className="absolute inset-0 rounded-full bg-[#00ADB5] opacity-20 blur-xl animate-pulse"></div>
  
  {/* Doodle background image */}
  <img
    src={doodles}
    alt="Decorative doodles"
    className="absolute w-full h-full object-contain opacity-50 -rotate-12"
    style={{ zIndex: 1 }}
  />

  {/* Photo with padded border */}
  <div className="relative p-2 rounded-full" style={{ zIndex: 2 }}>
    <div className="relative rounded-full border-4 border-[#00ADB5] p-2 shadow-lg">
      <div className="rounded-full overflow-hidden border-2 border-white">
        <img
          src={Man}
          alt="Yumna Nasir"
          className="w-70 h-86 object-cover"
        />
      </div>
    </div>
    <div className="absolute inset-0 rounded-full border-4 border-[#00ADB5] opacity-30 blur-md animate-pulse -z-10"></div>
  </div>
</div>

      </div>
    </section>
  );
}
