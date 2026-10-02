import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const email = 'sriramravisankar77@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus('sending');

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error(`Submission failed: ${response.status}`);
    }

    setFormStatus('success');
    form.reset();

    setTimeout(() => {
      setFormStatus('idle');
    }, 5000);

  } catch (error) {
    console.error('Netlify Form Error:', error);
    setFormStatus('error');
  }
};

  return (
    <section id="contact" className="py-16 bg-[#070D1D] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1528] border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Let's Discuss Full Stack Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Available for Full Stack Developer roles, backend API projects, and frontend developments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Cards Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B1528] border border-slate-800 p-8 rounded-3xl space-y-5 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-['Outfit']">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out directly via email, or connect with me on LinkedIn and GitHub.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#070D1D] border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email Address</span>
                    <a href={`mailto:${email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block max-w-[200px] sm:max-w-[220px]">
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#070D1D] border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Location</span>
                  <span className="text-sm font-semibold text-white">Kallakurichi, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Social Channels - Logo Only Even Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://linkedin.com/in/sriram55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-2xl bg-[#070D1D] hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all group shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="https://github.com/Sriram-Ravisankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-2xl bg-[#070D1D] hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all group shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Right */}
          <div className="lg:col-span-7">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-[#0B1528] border border-slate-800 p-8 rounded-3xl space-y-5 shadow-2xl"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <h3 className="text-2xl font-bold text-white mb-2 font-['Outfit']">
                Send a Direct Message
              </h3>

              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#070D1D] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#070D1D] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  Message / Opportunity Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Share details about full stack developer openings, projects, or collaborations..."
                  className="w-full px-4 py-3 rounded-xl bg-[#070D1D] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-3.5 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
              >
                {formStatus === 'sending' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" /> Send Message
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm text-center font-medium font-mono">
                  ✓ Message sent successfully! Sriram will respond soon
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm text-center font-medium font-mono">
                  ✕ Submission error. Please email sriramravisankar77@gmail.com directly.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
