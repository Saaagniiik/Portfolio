import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { IconCode, IconLayout, IconTerminal, IconCpu, IconSparkles } from './Icons';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? portfolioData.skills.list
    : portfolioData.skills.list.filter(s => s.category === activeCategory);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'languages':
        return <IconTerminal className="w-4 h-4 text-amber-400" />;
      case 'frontend':
        return <IconLayout className="w-4 h-4 text-cyan-400" />;
      case 'tools':
        return <IconCpu className="w-4 h-4 text-purple-400" />;
      default:
        return <IconCode className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <IconCode className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-brand">Expertise</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Core technologies and tools I utilize for software engineering and modern web development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioData.skills.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {cat.id !== 'all' && getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-slate-800/90 border border-slate-700/60">
                      {getCategoryIcon(skill.category)}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.desc}
                </p>
              </div>

              {/* Bottom Category Tag */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500 uppercase">
                  #{skill.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
