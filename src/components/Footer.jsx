import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040813] text-slate-400 border-t border-slate-800/80 py-8 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center text-slate-950 font-bold">
              <Code2 className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <span className="text-lg font-bold text-white font-['Outfit']">SRIRAM R</span>
              <p className="text-xs text-slate-400">Full Stack Developer | Python, Django, React, PHP, MySQL</p>
            </div>
          </div>

          {/* Social Links & Scroll Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sriram-Ravisankar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#070D1D] hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sriram55"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#070D1D] hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-400/10 hover:bg-cyan-400 text-cyan-400 hover:text-slate-950 border border-cyan-500/30 transition-all ml-2 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} SRIRAM R. Portfolio.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about-skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#education-certs" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
