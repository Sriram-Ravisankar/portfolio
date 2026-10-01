import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, ArrowDown, CheckCircle2, Activity } from 'lucide-react';

export default function ArchitectureModal({ projectId, onClose }) {
  useEffect(() => {
    if (!projectId) return;

    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, onClose]);

  if (!projectId) return null;

  const architectureData = {
    messnet: {
      title: 'Smart Hostel Mess Management System',
      subtitle: 'System Architecture Overview',
      badge: 'Django + Twilio Architecture',
      flow: [
        { label: 'Student / Admin', icon: '👤', sub: 'Web Client / Mobile Interface' },
        { label: 'Django Application', icon: '🐍', sub: 'URL Router & View Handlers' },
        { label: 'Django Middleware + RBAC', icon: '🛡️', sub: 'Role Authorization & Protected Routes' },
        { label: 'Business Logic + JSON API', icon: '⚡', sub: 'Per-Day Deduction Engine & REST Endpoints' },
        { label: 'Database', icon: '🗄️', sub: 'SQLite / MySQL ORM Models' },
        { label: 'Twilio WhatsApp API', icon: '💬', sub: 'Real-Time Notification Dispatcher' },
      ],
      keyComponents: [
        'Authentication & Authorization',
        'Role-Based Access Control',
        'Automated Billing',
        'JSON API',
        'Dashboard Updates',
        'Twilio WhatsApp Notifications',
        'Database-driven Operations',
      ],
      metrics: [
        { label: '10 Modules', val: 'Full Coverage' },
        { label: '2 User Roles', val: 'Student & Admin' },
        { label: 'Twilio API', val: 'WhatsApp Alerts' },
        { label: 'Render Hosting', val: 'Gunicorn + WhiteNoise' },
      ],
    },
    vehicle: {
      title: 'Vehicle Service Management System',
      subtitle: 'System Architecture Overview',
      badge: 'React + PHP REST API Architecture',
      flow: [
        { label: 'React Frontend', icon: '⚛️', sub: 'Single Page Component UI' },
        { label: 'PHP REST APIs', icon: '🔌', sub: '25 Custom Endpoints (CRUD)' },
        { label: 'JWT Authentication', icon: '🔑', sub: 'Token Verification & Sessions' },
        { label: 'RBAC + Permissions', icon: '🛡️', sub: '3 Roles & 20+ Granular Permissions' },
        { label: 'MySQL Database', icon: '🗄️', sub: 'Relational Schema & Inventory Logs' },
      ],
      apiOperations: ['GET', 'POST', 'PUT', 'DELETE'],
      keyComponents: [
        'Customer & Vehicle Management',
        'Service & Job Cards',
        'Inventory Management',
        'Billing & Invoicing',
        'Reports & Analytics',
        'Role-specific Dashboards',
      ],
      metrics: [
        { label: '10 Modules', val: 'Core System' },
        { label: '25 APIs', val: 'RESTful Endpoints' },
        { label: '4 Roles', val: 'RBAC Security' },
        { label: '20+ Permissions', val: 'Granular Access' },
      ],
    },
  };

  const data = architectureData[projectId];
  if (!data) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070D1D]/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0B1528] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#070D1D] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            aria-label="Close architecture modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              {data.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] tracking-tight">
              {data.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-400 font-mono mt-1">
              {data.subtitle}
            </p>
          </div>

          {/* Architecture Flow Diagram (Vertical Flow Cards) */}
          <div className="mb-8 bg-[#070D1D]/90 p-5 rounded-2xl border border-slate-800">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" /> System Flow Diagram
            </h4>

            <div className="space-y-2">
              {data.flow.map((node, index) => (
                <React.Fragment key={index}>
                  <div className="bg-[#0B1528] border border-slate-700/80 hover:border-cyan-500/40 rounded-xl p-3 flex items-center justify-between text-left transition-colors shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{node.icon}</span>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-white font-mono block">
                          {node.label}
                        </span>
                        <span className="text-[11px] text-slate-400 font-sans block">
                          {node.sub}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      Step {index + 1}
                    </span>
                  </div>

                  {index < data.flow.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* API Operations (If Available) */}
          {data.apiOperations && (
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                API Operations
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.apiOperations.map((op) => (
                  <span
                    key={op}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#070D1D] text-cyan-300 border border-slate-800"
                  >
                    {op}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Components Checklist */}
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Components
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {data.keyComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#070D1D]/60 border border-slate-800 text-xs text-slate-300 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Metrics Summary Pills */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Project Metrics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {data.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#070D1D] p-3 rounded-xl border border-slate-800 text-center"
                >
                  <span className="text-xs font-bold font-mono text-cyan-400 block truncate">
                    {m.label}
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {m.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
