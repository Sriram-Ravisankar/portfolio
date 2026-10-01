import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowUpRight, Send } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About & Skills', href: '#about-skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education & Certs', href: '#education-certs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070D1D]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-white font-['Outfit'] font-bold text-lg tracking-wide">
              Portfolio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/90 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href} 
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-slate-800/60 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/60 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Send className="w-3.5 h-3.5 text-cyan-400" /> Hire Me
            </a>
            <a
              href="/Sriram_R_Fullstack_developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl shadow-md shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
            >
              Resume <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1528] border-b border-slate-800 px-4 pt-4 pb-6 mt-2 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:bg-slate-800/70 rounded-xl hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded-xl shadow-md inline-block"
              >
                Hire Me
              </a>
              <a
                href="/Sriram_R_Fullstack_developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-slate-950 bg-cyan-400 rounded-xl shadow-md inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
