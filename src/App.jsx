import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070D1D] text-slate-100 font-['Inter',sans-serif] overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
