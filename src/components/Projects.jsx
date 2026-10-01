import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Layers, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ArchitectureModal from './ArchitectureModal';

export default function Projects() {
  // Selected project for System Architecture modal
  const [modalProjectId, setModalProjectId] = useState(null);

  const projects = [
    {
      id: 'messnet',
      title: 'Smart Hostel Mess Management System',
      tagline: 'Automated Billing & student operations with Django',
      badge: 'Full Stack',
      period: 'Aug 2025 – Oct 2025',
      description:
        'A Django-based hostel management application for student and admin operations, featuring RBAC, automated leave-based billing, dashboard updates, and WhatsApp notifications.',

      tags: ['Python', 'Django', 'JavaScript', 'Twilio API', 'SQLite', 'Tailwind CSS'],
      liveUrl: 'https://messnet.onrender.com/',
      githubUrl: 'https://github.com/Sriram-Ravisankar/Smart_Hostel_Mess_Management_System',
    },
    {
      id: 'vehicle',
      title: 'Vehicle Service Management System',
      tagline: 'Service, inventory & billing platform with React + PHP',
      badge: 'Full Stack',
      period: 'Jan 2026 – Mar 2026',
      description:
        'A full-stack vehicle service management system featuring 10 core modules covering inventory, billing, GST calculations, customer tracking, mechanic job allocation, and role-specific analytics dashboards.',
   
      tags: ['React', 'PHP', 'MySQL', 'JWT', 'REST API'],
      liveUrl: 'https://github.com/Sriram-Ravisankar/Vehicle_Service_Management_System',
      githubUrl: 'https://github.com/Sriram-Ravisankar/Vehicle_Service_Management_System',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#070D1D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1528] border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5" /> Developed Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Featured Full Stack Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Real-world database-driven applications built with Python, Django, React, PHP, and MySQL.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#0B1528] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl relative"
            >
              <div>
                {/* Top Card Bar: Full Stack Badge Left, Period Right */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {project.badge}
                  </span>

                  <span className="text-xs font-mono text-slate-500">{project.period}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-['Outfit'] tracking-tight">
                  {project.title}
                </h3>

                {/* Tagline / Subtitle in Cyan */}
                <p className="text-cyan-400 font-semibold text-xs sm:text-sm mb-4 font-mono leading-snug">
                  {project.tagline}
                </p>

                {/* Short Paragraph Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#070D1D] text-cyan-300 font-mono text-xs px-3 py-1 rounded-lg border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Overview Modal Trigger Button */}
                <div className="mb-6 border-t border-slate-800/80 pt-4">
                  <button
                    onClick={() => setModalProjectId(project.id)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-[#070D1D]/70 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 text-xs font-semibold font-mono transition-all cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                      System Architecture Overview
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-cyan-400 font-mono">
                      View Diagram <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> Code Repo
                </a>

                <a
                  href={project.liveUrl}
                  target={project.liveUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold inline-flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 transition-all hover:scale-102"
                >
                  Live Demo <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Reusable Architecture Diagram Modal */}
      {modalProjectId && (
        <ArchitectureModal
          projectId={modalProjectId}
          onClose={() => setModalProjectId(null)}
        />
      )}
    </section>
  );
}
