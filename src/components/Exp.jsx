"use client";

import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    logo: "https://instagram.fixc5-2.fna.fbcdn.net/v/t51.2885-19/440886074_2199204477110807_7308814222479620191_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41NDQuYzIifQ&_nc_ht=instagram.fixc5-2.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QHpQwZ_ylGV4N1vOlrfLPmq50y84ycGclnAycdP2mGP4pEXny8DEsM6Kz-UQedx0zWpmI2LawizpG009ItPSwxp&_nc_ohc=ejRDtd0rN5AQ7kNvwEa1N6E&_nc_gid=mf10dV7XCzDXXInI9gPOcA&edm=AIhb9MIBAAAA&ccb=7-5&oh=00_Afeh1fHbYsEQKd7A8KITSpHs63BDQ4FwWIIZjo2G9JeXZw&oe=690A64B4&_nc_sid=8aafe2",
    companyName: "Sqlico",
    startDate: "12-March-2024",
    endDate: "27-Feb-2025",
    position: "Internship - Mern Stack Developer",
    des: "Worked on full-stack web development using MongoDB, Express, React, and Node.js.",
  },
  {
    logo: "https://instagram.fixc5-1.fna.fbcdn.net/v/t51.2885-19/539232904_17978259815885976_5584934074194085231_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4zMjAuYzIifQ&_nc_ht=instagram.fixc5-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QH1b2s1ybWmkvqB4QkvtIHOEtk7no_1GePHTJcGtk4kBsljOeGGUJEIHKNgfwYIDwxP7ZQllUiYfIKfgUXlYW3d&_nc_ohc=C6l_SE_zmmsQ7kNvwF9md4N&_nc_gid=EQQ6_aSkS_9fkxnw2hhIvg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfcSeORL_7zDFLQgyEgnFX2sGDVdI1oknirUn47aPN4jtw&oe=690A8AE6&_nc_sid=7a9f4b",
    companyName: "Hartron Advance Skill Centre",
    startDate: "04-June-2025",
    endDate: "Present",
    position: "Cyber Security Web Development Associate",
    des: "Responsible for developing and maintaining secure web applications with a focus on Cyber Security.",
  },
];

export default function Exp() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        My Experience
      </motion.h1>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl flex flex-col gap-16">
        {data.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex w-full items-center ${isLeft ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className={`relative w-80 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-gray-700 shadow-[0_0_20px_rgba(6,182,212,0.2)] ${isLeft ? "text-left" : "text-right"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
              >
                {/* Timeline Connector */}
                <motion.div
                  className={`absolute top-1/2 ${isLeft ? "-right-8" : "-left-8"} w-6 h-6 bg-cyan-400 rounded-full border-4 border-gray-950 shadow-[0_0_10px_rgba(6,182,212,0.5)]`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                <motion.img
                  src={exp.logo}
                  alt={exp.companyName}
                  className="w-20 h-20 rounded-full object-cover mb-4 mx-auto"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                />

                <h3 className="text-xl font-bold mb-1">{exp.companyName}</h3>
                <p className="text-sm text-gray-400 mb-1">{exp.startDate} - {exp.endDate}</p>
                <p className="text-cyan-400 font-medium mb-2">{exp.position}</p>
                <p className="text-gray-300 text-sm">{exp.des}</p>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-cyan-400/30"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </section>
  );
}
