import React from 'react';
import { portfolioData } from '../data/portfolio';
import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconChevronUp
} from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center font-bold text-white text-xs">
                {portfolioData.personal.initials}
              </div>
              <span className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                {portfolioData.personal.name}
              </span>
            </a>
            <p className="text-xs text-slate-400 font-mono">
              {portfolioData.personal.primaryRole} • Patiala, Punjab, India
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <IconGithub className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0a66c2] hover:border-indigo-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <IconLinkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
              aria-label="Send Email"
            >
              <IconMail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-slate-400">
              Built with <span className="text-cyan-400">React</span> & <span className="text-teal-400">Tailwind CSS</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <IconChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
