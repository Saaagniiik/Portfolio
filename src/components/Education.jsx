import React from 'react';
import { portfolioData } from '../data/portfolio';
import {
  IconGraduationCap,
  IconMapPin,
  IconCalendar,
  IconCheckCircle
} from './Icons';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-wider uppercase mb-3">
            <IconGraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-brand">Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            My formal engineering education and foundational computer science learning.
          </p>
        </div>

        {/* Timeline / Card Design */}
        <div className="max-w-4xl mx-auto">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden transition-all duration-300"
            >
              {/* Decorative Accent Line */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 to-cyan-400" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-indigo-400 font-semibold mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                    <IconCalendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-xs">
                    <IconMapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Focus Areas
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                      <IconCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
