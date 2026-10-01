import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export default function EducationCertifications() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      score: '76%',
      institution: 'Bharathiar University',
      location: 'Coimbatore',
      duration: '2024 – 2026',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      score: '77%',
      institution: 'Jamal Mohamed College',
      location: 'Tiruchirappalli',
      duration: '2021 – 2024',
    },
  ];

  const certifications = [
        {
      title: 'Google Professional Cloud Architect: Cloud Storage for Large-Scale Data',
      issuer: 'Infosys Springboard',
      date: 'Jul 1, 2026',
      type: 'Certification',
      verifyUrl: 'https://verify.onwingspan.com',
    },
    {
      title: 'Python Programming & Software Design for Absolute Beginners',
      issuer: 'Udemy',
      date: 'Apr 25, 2024',
      type: 'Certification',
      verifyUrl: 'https://ude.my/UC-dd14721f-2767-42e1-a703-0406406fd091',
    },

        {
      title: 'Instagram Clone Web Development (7-Day Bootcamp)',
      issuer: 'DevTown & Google Developer Student Clubs',
      date: 'Bootcamp',
      type: 'Workshop',
      verifyUrl: 'https://cert.devtown.in/verify/Zv29xr',
    },
    {
      title: 'Amazon Clone Web Development (7-Day Bootcamp)',
      issuer: 'DevTown & Google Developer Student Clubs',
      date: 'Bootcamp',
      type: 'Workshop',
      verifyUrl: 'https://cert.devtown.in/verify/1U1sao',
    },
  ];

  return (
    <section id="education-certs" className="py-16 bg-[#070D1D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1528] border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Background & Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Education, Certifications & Workshops
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            My formal academic degrees, certifications, and hands-on bootcamps.
          </p>
        </div>

        {/* BLOCK 1: Education (Horizontal 2-Column Layout) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Outfit']">
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#0B1528] p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      Score: {item.score}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {item.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white font-['Outfit'] mb-1">
                    {item.degree}
                  </h4>

                  <p className="text-sm font-semibold text-slate-300">
                    {item.institution}
                  </p>
                </div>

                <p className="text-xs text-slate-400 flex items-center gap-1 mt-4 pt-3 border-t border-slate-800/80">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {item.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BLOCK 2: Certifications & Workshops (Horizontal Grid Layout) */}
        <div className="space-y-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Outfit']">
              Certifications & Workshops
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#0B1528] p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span
                      className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${
                        item.type === 'Workshop'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-2">
                    {item.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-800/80">
                  <p className="text-xs font-semibold text-cyan-400 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Issued by {item.issuer}
                  </p>

                  {item.verifyUrl && (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-mono underline decoration-cyan-500/40 underline-offset-2 shrink-0"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
