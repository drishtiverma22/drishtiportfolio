"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/yourusername" },
    { Icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
    { Icon: Instagram, href: "https://instagram.com/yourusername" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0
      bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-950/80
      backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_-10px_rgba(0,255,255,0.15)]">

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">

        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{
            scale: 1.3,
            color: "#38BDF8",
            textShadow: "0 0 10px #38BDF8, 0 0 25px #22D3EE",
          }}
          className="text-white font-extrabold text-2xl md:text-3xl tracking-tight font-mono cursor-pointer"
        >
          DV
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-slate-200 font-medium">
            {navItems.map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ y: -2, color: "#38BDF8" }}
                transition={{ duration: 0.2 }}
                className="relative after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-gradient-to-r
                after:from-cyan-400 after:to-blue-500
                after:transition-all hover:after:w-full"
              >
                <a href={item.href}>{item.name}</a>
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-6 ml-6 text-slate-300">
            {socialLinks.map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, -5, 0], x: [0, 2, -2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: idx * 0.2,
                }}
                whileHover={{
                  scale: 1.3,
                  color: "#38BDF8",
                  textShadow: "0 0 10px #38BDF8, 0 0 20px #22D3EE",
                }}
              >
                <Icon size={22} strokeWidth={2} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-6 py-6
          bg-slate-950/95 backdrop-blur-xl text-slate-200"
        >
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}

          <div className="flex gap-6 mt-4">
            {socialLinks.map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                animate={{ y: [0, -5, 0], x: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, delay: idx * 0.2 }}
                whileHover={{ scale: 1.3, color: "#38BDF8" }}
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>
        </motion.ul>
      )}
    </nav>
  );
}
