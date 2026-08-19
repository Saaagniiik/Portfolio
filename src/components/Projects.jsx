import React from 'react';
import { portfolioData } from '../data/portfolio';
import {
  IconGithub,
  IconExternalLink,
  IconLayers,
  IconArrowUpRight,
  IconCheck
} from './Icons';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <IconLayers className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="gradient-brand">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            A showcase of web applications, component interfaces, and algorithms I have built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolioData.projects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="glass-card glass-card-hover rounded-2xl flex flex-col justify-between overflow-hidden group border border-slate-800 transition-all duration-300"
            >
              {/* Card Top Preview Bar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 font-medium">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium mt-1">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <ul className="mt-4 space-y-1.5">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                          <IconCheck className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/90 hover:bg-slate-700/90 hover:text-white border border-slate-700/80 transition-colors"
                >
                  <IconGithub className="w-4 h-4" />
                  <span>Repository</span>
                </a>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target={project.liveDemo.startsWith('#') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <span>Live Demo</span>
                    <IconArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-14 text-center">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-medium transition-all shadow-sm group"
          >
            <IconGithub className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span>Explore all repositories on GitHub</span>
            <IconArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};
