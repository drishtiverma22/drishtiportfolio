"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    title: "Frontend Engineering",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Cybersecurity & Networking",
    items: ["Linux", "Burp Suite", "Nmap", "Wireshark", "OWASP Top 10"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git & GitHub", "Docker", "Vercel", "Firebase", "Postman"],
  },
];

export default function TechStackCyber() {
  return (
    <section
      id="tech"
      className="relative bg-[#020617] text-white py-24 px-6"
    >
      {/* Grid overlay (same as Hero) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-14"
        >
          Tech <span className="text-cyan-400">Stack</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {techStack.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-cyan-400/20 rounded-xl p-6 bg-[#020617]/80 hover:shadow-[0_0_25px_#22d3ee30] transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {section.title}
              </h3>
              <ul className="flex flex-wrap gap-3 text-sm text-gray-300">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 border border-cyan-400/30 rounded-md bg-cyan-400/5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
