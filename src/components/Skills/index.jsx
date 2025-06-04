import React from "../../assets/React.png";
import C from "../../assets/C.png";
import css from "../../assets/css.png";
import Figma from "../../assets/Figma.png";
import next from "../../assets/next.png";
import node from "../../assets/node.png";
import JS from "../../assets/JS.png";
import express from "../../assets/express.png";

const Skills = () => {
  return (
<section className="w-full bg-[#222831] text-white py-22 flex flex-col items-center">
  <h2 className="text-2xl md:text-4xl font-bold mb-4">I'm currently looking to join a <span className="text-[#00ADB5]">cross-functional</span> team</h2>
  <p className="text-center text-sm md:text-lg mb-8 max-w-xl">
    that values improving people's lives through accessible design
  </p>

  {/* Top row: 5 icons */}
  <div className="flex justify-center gap-6 mb-8">
    <div className="w-16 h-16 bg-[#393E46] rounded-full flex items-center justify-center shadow-lg">
      <img src={React} alt="React" className="w-8 h-8" />
    </div>
    <div className="w-16 h-16 bg-[#393E46] rounded-full flex items-center justify-center shadow-lg">
      <img src={C} alt="c" className="w-8 h-8" />
    </div>
    <div className="w-16 h-16 bg-[#393E46] rounded-full flex items-center justify-center shadow-lg">
      <img src={JS} alt="C" js="w-8 h-8" />
    </div>
    
    <div className="w-16 h-16 bg-[#393E46] rounded-full flex items-center justify-center shadow-lg">
      <img src={node} alt="node" className="w-8 h-8" />
    </div>
  </div>

  {/* Bottom row: remaining icons */}
  <div className="flex flex-wrap justify-center gap-6">
    <div className="w-16 h-16 bg-[#393E46] rounded-full flex items-center justify-center shadow-lg">
      <img src={next} alt="next" className="w-8 h-8" />
    </div>
    <div className="w-16 h-16 bg-[#393E46] rounded-full flex items-center justify-center shadow-lg">
      <img src={css} alt="CSS3" className="w-8 h-8" />
    </div>

    <div className="w-16 h-16 bg-[#393E46] rounded-full flex items-center justify-center shadow-lg">
      <img src={Figma} alt="FIgma" className="w-8 h-8" />
    </div>
  </div>
</section>


  )
}

export default Skills
