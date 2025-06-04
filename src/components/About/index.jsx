import AboutMe from "../../assets/AboutMe.png";

const About = () => {
  return (
    <section
  id="about"
  className="relative z-0 min-h-screen pt-28 flex flex-col 
  md:flex-row items-center justify-between px-6 md:px-20 bg-[#eeeeee] text-[#222831] pb-12"
>
      {/* Left side - Text */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-md md:text-lg leading-relaxed text-gray-700">
          I’m Yumna Nasir, a passionate 2nd-year Computer Science student at
          UBIT, University of Karachi (Batch 2024–2028). I have a deep love for
          learning new technologies, exploring cutting-edge fields like
          Artificial Intelligence and Machine Learning, and solving challenging
          problems. I am proficient in Java, C++, and JavaScript, and I bring
          strong teamwork and communication skills to every project I work on. I
          thrive in collaborative environments and am always eager to
          contribute, grow, and explore new domains within technology.
        </p>
      </div>

      {/* Right side - Image */}
<div className="md:w-1/2 flex justify-center">
  <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg">
    {/* Neon glow background */}
    <div className="absolute inset-0 rounded-lg bg-[#00ADB5] opacity-40 blur-3xl -z-10"></div>

    <img
      src={AboutMe}
      alt="About Yumna"
      className="w-full h-full object-cover"
    />
  </div>
</div>



    </section>
  );
};

export default About;
