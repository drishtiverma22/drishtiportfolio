"use client";

import { motion } from "framer-motion";

export default function HeroNeon() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-6 overflow-hidden">
      
      {/* Glow blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/30 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/30 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-cyan-400">Drishti Verma</span>
          </h1>

          <p className="text-xl text-gray-400">
            Web Developer · Cybersecurity Enthusiast
          </p>

          <p className="max-w-xl text-gray-500">
            I craft secure, high-performance web applications with a strong
            focus on clean design and security-first engineering.
          </p>

          <div className="flex gap-5 pt-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:scale-105 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-40" />
            <img
              src=""
              alt="Drishti Verma"
              className="relative w-72 h-72 rounded-full object-cover border border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
