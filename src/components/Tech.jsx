import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiFramer,
  SiCplusplus,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

const Tech = () => {
  return (
    <section
      id="tech"
      className="bg-[#020617] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[5px] mb-3">
            Skills
          </p>

          <h2 className="text-5xl font-bold">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to design, build and deploy
            modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-[#112240] border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-[#0f172a] rounded-xl p-5 hover:bg-cyan-500/10 hover:scale-105 transition duration-300"
                  >
                    <div className="text-4xl text-cyan-400 mb-3">
                      {skill.icon}
                    </div>

                    <p className="text-sm text-slate-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tech;