"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroGlass() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6">
      
      {/* Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-5xl w-full grid md:grid-cols-2 gap-10 
        bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
      >

        {/* Left Content */}
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hello, I’m{" "}
            <span className="text-cyan-400">Drishti Verma</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            Web Developer & Cybersecurity Enthusiast
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I build secure, scalable, and visually refined web experiences,
            blending modern frontend engineering with a security-first mindset.
          </p>

          <div className="flex gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-2 rounded-lg bg-cyan-500/90 text-black font-semibold"
            >
              Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-2 rounded-lg border border-white/20 text-white"
            >
              Contact
            </motion.a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="flex justify-center items-center"
        >
          <div className="p-2 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600">
            <img
              src="https://res.cloudinary.com/dkqnq6rom/image/upload/v1767863137/WhatsApp_Image_2026-01-04_at_12.05.56_PM_zit07d.jpg"
              alt="Drishti Verma"
              className="w-64 h-64 rounded-full object-cover border-4 border-black"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
