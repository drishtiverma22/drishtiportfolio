"use client";

import { motion } from "framer-motion";

/* ===== Animated Name Component ===== */
const AnimatedText = ({ text, highlightIndex }) => {
  return (
    <span className="inline-flex flex-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.07,
            duration: 0.4,
            ease: "easeOut",
          }}
          className={`inline-block ${
            index >= highlightIndex ? "text-cyan-400" : "text-white"
          }`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

/* ===== Hero Section ===== */
export default function HeroCyber() {
  return (
    <section className="min-h-screen bg-[#020617] text-white relative flex items-center px-6 overflow-hidden">

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* PHOTO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full blur-2xl bg-cyan-400/30 animate-pulse" />

            {/* Profile Image */}
            <img
              src="https://res.cloudinary.com/dkqnq6rom/image/upload/v1775311318/WhatsApp_Image_2026-04-04_at_7.29.48_PM_qurjwi.jpg" // 👈 add your image path here
              alt="Drishti Verma"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_#22d3ee]"
            />
          </div>
        </motion.div>

        {/* CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          {/* Animated Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <AnimatedText text="Drishti Verma" highlightIndex={8} />
          </h1>

          <p className="text-lg md:text-xl text-gray-400">
            Web Developer & Cybersecurity Enthusiast
          </p>

          <p className="text-gray-500 max-w-xl mx-auto md:mx-0">
            Designing secure, scalable digital systems where performance,
            aesthetics, and security converge.
          </p>

          <div className="flex justify-center md:justify-start gap-6 pt-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-md hover:shadow-[0_0_25px_#22d3ee] transition"
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
      </div>
    </section>
  );
}
