import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, CheckCircle2, FileText, Database, Server, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const resumeUrl = '/Sriram_R_Fullstack_developer_Resume.pdf';

  // Typewriter effect state
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const roles = [
    'Full Stack Developer',
    'Python & Django Developer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 120);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(400);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-14 flex items-center justify-center overflow-hidden bg-[#070D1D]">

      {/* Background Mesh Glow */}
      <div className="absolute inset-0 hero-gradient-deepblue pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Typewriter, Bio & Action CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Full-Stack Developer Roles</span>
            </div>

            {/* Main Greeting Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.08]">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Sriram R</span>
            </h1>

            {/* Typewriter Dynamic Subtitle */}
            <div className="h-10 sm:h-12 flex items-center justify-start my-1">
              <span className="text-xl sm:text-3xl font-bold font-mono text-cyan-400 tracking-wide typing-cursor">
                {displayText}
              </span>
            </div>

            {/* Subtitle Bio - Focused on Backend + Frontend */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              <strong className="text-cyan-400 font-semibold">Turning ideas into solutions</strong> through clean code, thoughtful design, and continuous learning.
            </p>

            {/* Tech Badges Row */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono bg-[#0B1528] text-slate-300 border border-slate-800">
                <Server className="w-3.5 h-3.5 text-emerald-400" /> Python Django
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono bg-[#0B1528] text-slate-300 border border-slate-800">
                <Database className="w-3.5 h-3.5 text-amber-400" /> MySQL / SQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono bg-[#0B1528] text-slate-300 border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-purple-400" /> REST APIs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono bg-[#0B1528] text-slate-300 border border-slate-800">
                <span className="text-cyan-400 font-bold">&lt;/&gt;</span> React.js
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Projects <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-2xl bg-[#0B1528] hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" /> Contact Candidate
              </a>
            </div>

            {/* Social & Resume Icon Bar */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://github.com/Sriram-Ravisankar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#0B1528] hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all shadow-md"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sriram55"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#0B1528] hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-[#0B1528] hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all shadow-md"
                title="Download Resume PDF"
              >
                <FileText className="w-5 h-5 text-cyan-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Code IDE Window (Python Django Server Widget) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-[#0B1528] border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-[#070D1D] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-wide">
                  views.py — Python Django Server
                </span>
              </div>

              {/* Code Content Editor */}
              <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2 bg-[#050B17] overflow-x-auto">
                <p className="text-slate-500"># Django REST Framework API View</p>
                <p>
                  <span className="text-pink-400">from</span> django.http <span className="text-pink-400">import</span> JsonResponse
                </p>
                <p>
                  <span className="text-pink-400">from</span> rest_framework.decorators <span className="text-pink-400">import</span> api_view
                </p>
                <br />
                <p className="text-cyan-400">@api_view(['GET'])</p>
                <p>
                  <span className="text-pink-400">def</span> <span className="text-yellow-300">get_profile</span>(request):
                </p>
                <div className="pl-4 space-y-1">
                  <p>
                    <span className="text-pink-400">return</span> JsonResponse(&#123;
                  </p>
                  <div className="pl-4 space-y-1 text-slate-300">
                    <p><span className="text-sky-300">"name"</span>: <span className="text-emerald-300">"Sriram R"</span>,</p>
                    <p><span className="text-sky-300">"role"</span>: <span className="text-emerald-300">"Full Stack Developer"</span>,</p>
                    <p><span className="text-sky-300">"backend"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"Django"</span>, <span className="text-emerald-300">"REST API"</span>],</p>
                    <p><span className="text-sky-300">"frontend"</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"JS ES6+"</span>, <span className="text-emerald-300">"Tailwind"</span>],</p>
                    <p><span className="text-sky-300">"database"</span>: [<span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"SQL"</span>],</p>
                  </div>
                  <p>&#125;)</p>
                </div>
              </div>

              {/* Window Status Bar */}
              <div className="px-6 py-3.5 bg-[#070D1D] border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Clean Architecture
                </span>
                {/* <span className="flex items-center gap-1.5 text-cyan-400">
                  <CheckCircle2 className="w-4 h-4" /> 100% Production Ready
                </span> */}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
