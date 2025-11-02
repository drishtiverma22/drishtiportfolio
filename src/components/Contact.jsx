"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  User,
  Send,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ContactData = [
    {
      Name: "Name",
      placeHolder: "Enter your name",
      type: "text",
      icon: User,
      keyName: "name",
    },
    {
      Name: "Email",
      placeHolder: "Enter your email",
      type: "email",
      icon: Mail,
      keyName: "email",
    },
    {
      Name: "Mobile",
      placeHolder: "Enter your mobile number",
      type: "tel",
      icon: Phone,
      keyName: "mobile",
    },
    {
      Name: "Message",
      placeHolder: "Write your message...",
      type: "textarea",
      icon: MessageCircle,
      keyName: "message",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setData({ name: "", email: "", mobile: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200 },
    },
    exit: { opacity: 0, scale: 0.8, y: -50 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 px-6 py-16 overflow-hidden">
      {/* Rotating Glow Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      >
        <div className="bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.25),transparent_70%)] h-full w-full"></div>
        <div className="bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent_70%)] h-full w-full"></div>
      </motion.div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Side - Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-extrabold leading-tight"
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-md"
          >
            Have a project or idea you'd like to discuss? Reach out — I’d love
            to collaborate and create something exceptional together.
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="space-y-5">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "dishuverma2005@gmail.com",
                color: "text-cyan-400",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 90340 97350",
                color: "text-blue-400",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Kaithal, India",
                color: "text-purple-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(6,182,212,0.5)",
                  boxShadow: "0 0 20px rgba(6,182,212,0.2)",
                }}
                className="flex items-center gap-4 p-4 bg-gray-800/40 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-all duration-300"
              >
                <div className="p-3 bg-gray-900/40 rounded-xl">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-5 pt-4">
            {[ 
              { icon: Github, href: "#", color: "hover:text-gray-300" },
              { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
              { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 ${social.color} transition-all duration-300`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Form */}
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center justify-center bg-gray-800/40 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/30 text-center shadow-lg shadow-cyan-500/10"
            >
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <Send className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-300">
                Thanks for reaching out! I’ll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 space-y-6 shadow-xl shadow-cyan-500/5"
            >
              {ContactData.map((field) => (
                <motion.div key={field.keyName} variants={itemVariants}>
                  <label
                    htmlFor={field.keyName}
                    className="text-gray-200 font-medium flex items-center gap-2 mb-2"
                  >
                    <field.icon className="w-4 h-4 text-cyan-400" />
                    {field.Name}
                  </label>

                  {field.type === "textarea" ? (
                    <motion.textarea
                      whileFocus={{
                        borderColor: "rgba(6,182,212,0.6)",
                        scale: 1.02,
                      }}
                      name={field.keyName}
                      value={data[field.keyName]}
                      onChange={handleChange}
                      placeholder={field.placeHolder}
                      rows="4"
                      required
                      className="w-full bg-gray-900/40 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 resize-none"
                    />
                  ) : (
                    <motion.input
                      whileFocus={{
                        borderColor: "rgba(6,182,212,0.6)",
                        scale: 1.02,
                      }}
                      type={field.type}
                      name={field.keyName}
                      value={data[field.keyName]}
                      onChange={handleChange}
                      placeholder={field.placeHolder}
                      required
                      className="w-full bg-gray-900/40 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(6,182,212,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
