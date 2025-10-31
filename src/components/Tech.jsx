"use client";

import React from "react";
import { motion } from "framer-motion";

const techList = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Docker",
  "GitHub",
  "Postman",
];

export default function Tech() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">

      {/* Accent Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_70%)] h-full w-full"></div>
        <div className="bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.15),transparent_70%)] h-full w-full"></div>
      </div>

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        My Tech Stack
      </motion.h1>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {techList.map((tech, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 rounded-xl flex items-center justify-center font-bold text-lg cursor-pointer
                       bg-sky-400 text-gray-900 shadow-lg"
            whileHover={{
              scale: 1.15,
              rotate: 5,
              boxShadow: "0 0 25px rgba(14,165,233,0.6), 0 0 40px rgba(56,189,248,0.5)",
            }}
            animate={{
              y: [0, -5, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3 + index * 0.1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
