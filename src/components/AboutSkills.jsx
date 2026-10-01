import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Server, Layout, Database, Wrench, CheckCircle2, Cpu, Cloud, Terminal, Sparkles } from 'lucide-react';

export default function AboutSkills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      skills: ['Python', 'JavaScript', 'PHP'],
    },
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      skills: ['React', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      skills: ['Django', 'REST APIs', 'JWT', 'Authentication & Authorization', 'Middleware', 'RBAC'],
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5 text-amber-400" />,
      skills: ['MySQL', 'SQL', 'Database Design', 'Queries', 'Joins'],
    },
    {
      title: 'Development',
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      skills: ['OOP', 'CRUD', 'API Integration', 'Debugging', 'SDLC'],
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-5 h-5 text-pink-400" />,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
    },
    {
      title: 'Cloud',
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      skills: ['AWS (Learning)'],
    },
    {
      title: 'AI Tools',
      icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
      skills: ['ChatGPT', 'GitHub Copilot'],
    },
  ];

  return (
    <section id="about-skills" className="py-16 bg-[#070D1D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1528] border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <User className="w-3.5 h-3.5" /> Technical Skills & Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            About Me & Technical Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A comprehensive overview of my tech stack, frameworks, backend architecture, and development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Profile Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="deep-blue-card p-8 rounded-3xl space-y-5 border border-slate-800">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3 font-['Outfit']">
                <span className="w-2.5 h-7 bg-cyan-400 rounded-full inline-block"></span>
                Profile Summary
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I'm an <strong className="text-cyan-400 font-semibold">entry-level Full Stack Developer</strong> who enjoys turning ideas into practical software and exploring how technology can solve everyday problems. I like building applications from the ground up and learning through hands-on development.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My projects have given me experience across <strong className="text-cyan-400 font-semibold">frontend and backend development</strong>, from creating responsive interfaces and APIs to working with databases, authentication, application logic, and real-world business workflows.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I enjoy <strong className="text-cyan-400 font-semibold">solving technical challenges</strong>, debugging issues, testing my work, and continuously exploring new technologies. I'm looking forward to growing as a developer while contributing to meaningful software projects.
              </p>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-md transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-200 font-semibold text-xs transition-colors"
                >
                  Explore Projects
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skill Matrix Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="deep-blue-card p-5 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {category.icon}
                    </div>
                    <h4 className="text-base font-bold text-white font-['Outfit']">
                      {category.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-[#070D1D] text-cyan-300 border border-slate-800"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
