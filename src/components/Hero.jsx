import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin,
  IconExternalLink,
  IconCode,
  IconSparkles,
  IconArrowUpRight
} from './Icons';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioData.personal.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows & Mesh Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Availability & Location Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.availability}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 text-xs sm:text-sm backdrop-blur-md">
            <IconMapPin className="w-3.5 h-3.5 text-indigo-400" />
            <span>{portfolioData.personal.location}</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 mb-6">
          <h2 className="text-sm sm:text-base md:text-lg font-mono text-indigo-400 font-semibold tracking-wider uppercase">
            Welcome to my portfolio
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="gradient-brand">{portfolioData.personal.name}</span>
          </h1>
          
          {/* Animated Role Switcher */}
          <div className="h-10 sm:h-12 flex items-center justify-center">
            <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-slate-200 flex items-center gap-2">
              <span className="text-slate-400">I am a</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 transition-all duration-300 font-heading">
                {roles[roleIndex]}
              </span>
            </div>
          </div>
        </div>

        {/* Short Bio Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Undergraduate student at <span className="text-indigo-300 font-medium">{portfolioData.personal.college}</span> passionate about crafting responsive, user-centric web interfaces with <span className="text-cyan-300 font-medium">React</span> and <span className="text-teal-300 font-medium">Tailwind CSS</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
          >
            <span>View Projects</span>
            <IconArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={portfolioData.personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 shadow-md backdrop-blur-sm hover:-translate-y-0.5"
          >
            <span>View Resume</span>
            <IconExternalLink className="w-4 h-4 text-indigo-400" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-indigo-300 bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-500/30 hover:border-indigo-500/60 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <span>Contact Me</span>
            <IconMail className="w-4 h-4" />
          </a>
        </div>

        {/* Social Links & Quick Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-slate-800/60 text-slate-400">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-mono text-slate-500">Connect:</span>
            
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800 transition-all"
              aria-label="GitHub Profile"
            >
              <IconGithub className="w-5 h-5" />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#0a66c2] hover:border-indigo-500/40 hover:bg-slate-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <IconLinkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-slate-800 transition-all"
              aria-label="Send Email"
            >
              <IconMail className="w-5 h-5" />
            </a>
          </div>

          <div className="hidden sm:block w-px h-6 bg-slate-800" />

          {/* Quick tech stack tags */}
          <div className="flex items-center gap-2 flex-wrap justify-center text-xs font-mono text-slate-400">
            <span className="text-slate-500">Stack:</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-cyan-300">React</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-teal-300">Tailwind</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-yellow-300">JavaScript</span>
            <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-indigo-300">C++</span>
          </div>
        </div>

      </div>
    </section>
  );
};
