"use client";

import { motion } from "framer-motion";

export default function HeroCyber() {
  return (
    <section className="min-h-screen bg-[#020617] text-white relative flex items-center justify-center px-6">
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Drishti <span className="text-cyan-400">Verma</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400">
          Web Developer & Cybersecurity Enthusiast
        </p>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Designing secure, scalable digital systems where performance,
          aesthetics, and security converge.
        </p>

        <div className="flex justify-center gap-6 pt-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-md hover:shadow-[0_0_20px_#22d3ee] transition"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-cyan-400/40 rounded-md hover:bg-cyan-400/10 transition"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
