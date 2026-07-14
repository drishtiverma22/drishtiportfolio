import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio built with React, Tailwind CSS and Framer Motion featuring smooth animations and interactive UI.",
    image: "/images/portfolio.png",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Study Visa Consultancy",
    description:
      "A complete consultancy website with dynamic routing, responsive pages, contact forms and modern UI.",
    image: "/images/visa.png",
    tech: ["React", "React Router", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "ChronoElite",
    description:
      "Luxury watch e-commerce website featuring premium UI, Swiper slider and responsive design.",
    image: "/images/watch.png",
    tech: ["React", "Tailwind CSS", "Swiper"],
    github: "#",
    live: "#",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a192f] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] mb-3">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in
            Web Development, UI/UX and Cyber Security.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white hover:text-cyan-400"
                  >
                    <Github size={20} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-white"
                  >
                    <ExternalLink size={20} />
                    Live
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;