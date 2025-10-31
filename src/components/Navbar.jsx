"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Instagram } from "lucide-react";

export default function Navbar() {
  const socialLinks = [
    { icon: <Github size={22} />, href: "https://github.com/" },
    { icon: <Linkedin size={22} />, href: "https://linkedin.com/" },
    { icon: <Instagram size={22} />, href: "https://instagram.com/" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 backdrop-blur-md shadow-lg border-b border-cyan-500/30 flex justify-between items-center px-10 py-4 z-50"
    >
      {/* Left: Logo */}
      <motion.h1
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 12px #06b6d4",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-2xl font-bold text-cyan-400 cursor-pointer"
      >
        DV
      </motion.h1>

      {/* Right side: Resume Button + Social Icons */}
      <div className="flex items-center gap-6">
        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{
            scale: 1.07,
            background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
            boxShadow: "0 0 15px #3b82f6aa",
            color: "#fff",
            borderColor: "transparent",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-300 rounded-md cursor-pointer font-medium bg-transparent hover:text-white transition-all duration-200"
        >
          <Download size={18} />
          Download Resume
        </motion.a>

        {/* Social Icons */}
        <div className="flex gap-5">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                color: "#06b6d4",
                textShadow: "0px 0px 10px #06b6d4",
                rotate: 5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-300 hover:text-cyan-400 transition-all"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
