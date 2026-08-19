import React from 'react';
import { portfolioData } from '../data/portfolio';
import {
  IconGraduationCap,
  IconMapPin,
  IconCode,
  IconLayout,
  IconSparkles,
  IconTerminal,
  IconCheck
} from './Icons';

export const About = () => {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'layout':
        return <IconLayout className="w-6 h-6 text-cyan-400" />;
      case 'code':
        return <IconCode className="w-6 h-6 text-indigo-400" />;
      case 'sparkles':
        return <IconSparkles className="w-6 h-6 text-amber-400" />;
      default:
        return <IconTerminal className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <IconTerminal className="w-3.5 h-3.5" />
            <span>Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-brand">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            A snapshot of my background, technical mindset, and developer journey.
          </p>
        </div>

        {/* Dual Grid: Bio & Focus + Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Detailed Bio & Info Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Who I Am
              </h3>
              
              <div className="space-y-3.5 text-slate-300 text-base leading-relaxed">
                {portfolioData.about.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <IconGraduationCap className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">College</span>
                    <span className="text-sm font-semibold text-slate-200">{portfolioData.personal.college}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <IconMapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="text-sm font-semibold text-slate-200">{portfolioData.personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Focus & Career Goals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl border-l-4 border-l-indigo-500 space-y-2">
                <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                  What I'm Learning
                </h4>
                <p className="text-sm text-slate-300">
                  {portfolioData.about.currentFocus}
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl border-l-4 border-l-cyan-500 space-y-2">
                <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Career Goals
                </h4>
                <p className="text-sm text-slate-300">
                  {portfolioData.about.careerGoals}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-200 px-1 font-mono uppercase tracking-wider text-xs text-slate-400">
              Core Principles & Strengths
            </h3>

            {portfolioData.about.highlights.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl space-y-3 relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
