import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#0a192f] overflow-hidden">
      {/* Background Decorative Element: Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Radial Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-500/30 bg-cyan-500/10 rounded-full">
            {/* <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">
              // Securing the Digital Frontier
            </span> */}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Drishti Verma.</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-300 mb-8">
            Web Development Associate <span className="text-cyan-500">&</span> Cyber Security Student.
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            I bridge the gap between <span className="text-white">elegant user experiences</span> and 
            <span className="text-white"> robust security architectures.</span> Currently focused on building 
            scalable web applications that are hardened against modern threats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-[#0a192f] font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
              View My Work
            </button>
            <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-bold rounded-lg transition-all">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Terminal-style Mockup (Bottom Right) */}
      <div className="hidden lg:block absolute bottom-10 right-10 w-96 p-4 rounded-lg bg-[#112240] border border-slate-700 shadow-2xl opacity-40 hover:opacity-100 transition-opacity">
        <div className="flex gap-1.5 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-sm text-cyan-300">
          <p>$ nmap -sV drishti_verma_portfolio</p>
          <p className="text-slate-500">Scanning ports...</p>
          <p className="text-green-400">80/tcp OPEN (React)</p>
          <p className="text-green-400">443/tcp OPEN (Secure)</p>
          <p className="text-slate-500">$ _</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;