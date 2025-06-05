const Skills = () => {
  const devIcons = [
    { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Express.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MySQL (DBMS)", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ];

  return (
    <section className="w-full bg-[#222831] text-white py-10  mb-0 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        I'm currently looking to join a{" "}
        <span className="text-[#00ADB5]">cross-functional</span> team
      </h2>
      <p className="text-center text-sm md:text-lg mb-8 max-w-xl">
        that values improving people's lives through accessible design
      </p>

      {/* Icons Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl">
        {devIcons.map((icon) => (
          <div
            key={icon.name}
            className="w-16 h-16 bg-[#393E46] rounded-full flex items-center justify-center shadow-lg transition duration-300 hover:scale-110 hover:shadow-[0_0_15px_#00ADB5]"
            title={icon.name}
          >
            <img src={icon.url} alt={icon.name} className="w-8 h-8" />
          </div>
        ))} 
      </div>
    </section>
  );
};

export default Skills;
