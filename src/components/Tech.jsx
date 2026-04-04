"use client";
import { motion } from "framer-motion";
import {
  ReactLogo,
  Code,
  Server,
  Database,
  Linux,
  Git,
  Cpu,
  Box,
  Cloud,
  Shield,
} from "lucide-react";

// Tech Stack with icons
const techStack = [
  {
    title: "Frontend Engineering",
    items: [
      { name: "React", icon: <ReactLogo size={20} /> },
      { name: "Next.js", icon: <Code size={20} /> },
      { name: "TypeScript", icon: <Code size={20} /> },
      { name: "Tailwind CSS", icon: <Code size={20} /> },
      { name: "Framer Motion", icon: <Cpu size={20} /> },
      { name: "HTML5", icon: <Box size={20} /> },
      { name: "CSS3", icon: <Box size={20} /> },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", icon: <Server size={20} /> },
      { name: "Express", icon: <Server size={20} /> },
      { name: "REST APIs", icon: <Cloud size={20} /> },
      { name: "GraphQL", icon: <Cloud size={20} /> },
      { name: "MongoDB", icon: <Database size={20} /> },
      { name: "PostgreSQL", icon: <Database size={20} /> },
    ],
  },
  {
    title: "Cybersecurity & Networking",
    items: [
      { name: "Linux", icon: <Linux size={20} /> },
      { name: "Burp Suite", icon: <Shield size={20} /> },
      { name: "Nmap", icon: <Shield size={20} /> },
      { name: "Wireshark", icon: <Shield size={20} /> },
      { name: "Ethical Hacking", icon: <Shield size={20} /> },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git & GitHub", icon: <Git size={20} /> },
      { name: "Docker", icon: <Box size={20} /> },
      { name: "Vercel", icon: <Cloud size={20} /> },
      { name: "Firebase", icon: <Cloud size={20} /> },
      { name: "Postman", icon: <Code size={20} /> },
    ],
  },
];

export default function TechStackCyber() {
  return (
    <section
      id="tech"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
        >
          My <span className="text-cyan-400">Tech Stack</span>
        </motion.h2>

        {/* Tech Sections */}
        {techStack.map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.15,
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            className="relative"
          >
            {/* Section Heading */}
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-400/20 pb-2">
              {section.title}
            </h3>

            {/* Tech Items */}
            <div className="flex flex-wrap gap-4">
              {section.items.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(34,211,238,0.1)",
                    color: "#22d3ee",
                    textShadow: "0 0 6px #22d3ee, 0 0 12px #22d3ee",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center gap-2 px-4 py-2 border border-cyan-400/20 rounded-full bg-[#111111] cursor-pointer hover:border-cyan-400 transition"
                >
                  <span>{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
