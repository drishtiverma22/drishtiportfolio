"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-10 md:px-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      
      {/* Accent Glow Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.2),transparent_70%)] h-full w-full"></div>
        <div className="bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_70%)] h-full w-full"></div>
      </motion.div>

      {/* Left Section - Text */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.3 } },
        }}
        className="w-full md:w-1/2 flex flex-col items-start gap-6"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{
            scale: 1.03,
            textShadow: "0px 0px 25px rgba(6,182,212,0.7)",
          }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Drishti Verma
          </span>
        </motion.h1>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-2xl md:text-3xl font-semibold text-cyan-400"
        >
          Web Developer & Cybersecurity Enthusiast
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-lg md:text-xl text-gray-300 max-w-md"
        >
          I specialize in crafting modern, high-performance web applications and 
          have a deep interest in cybersecurity — ensuring every digital experience 
          is not only engaging but also secure.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="flex gap-4 mt-4"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
              boxShadow: "0 0 25px rgba(59,130,246,0.5)",
              color: "#fff",
              textShadow: "0px 0px 8px rgba(255,255,255,0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 border border-cyan-400 text-cyan-300 rounded-md font-medium transition-all duration-200"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              boxShadow: "0 0 25px rgba(139,92,246,0.5)",
              color: "#fff",
              textShadow: "0px 0px 8px rgba(255,255,255,0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 border border-purple-500 text-purple-300 rounded-md font-medium transition-all duration-200"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <motion.img
          src="https://res.cloudinary.com/dkqnq6rom/image/upload/v1767863137/WhatsApp_Image_2026-01-04_at_12.05.56_PM_zit07d.jpg"
          alt="Drishti Verma"
          className="rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] border-4 border-cyan-400/30 w-64 h-64 md:w-80 md:h-80 object-cover"
          animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        />
      </motion.div>
    </section>
  );
}
