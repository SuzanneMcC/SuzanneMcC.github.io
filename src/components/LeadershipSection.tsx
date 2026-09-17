import React, { useState } from 'react';
import { LEADERSHIP_ROLES } from '../data/profileData';
import { 
  Building2, 
  GraduationCap, 
  Cpu, 
  Globe2, 
  Briefcase, 
  CheckCircle, 
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Users
} from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const roleIcons = [
    Building2,
    GraduationCap,
    Cpu,
    Globe2,
    Briefcase
  ];

  return (
    <section id="leadership" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Academic & Institutional Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif-title">
            Directing the School of Computing & National Research Initiatives
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Leading Ireland's premier computational faculty, fostering cutting-edge degree programs, high-impact enterprise research, and national AI training cohorts.
          </p>
        </div>

        {/* Interactive Leadership Tabs & Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation list */}
          <div className="lg:col-span-5 space-y-2.5">
            {LEADERSHIP_ROLES.map((role, idx) => {
              const Icon = roleIcons[idx] || Building2;
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-3.5 border cursor-pointer ${
                    isSelected
                      ? 'bg-white border-sky-600 shadow-md ring-1 ring-sky-600/20'
                      : 'bg-white/80 hover:bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-sky-900 text-amber-400' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${
                        isSelected ? 'bg-sky-100 text-sky-900' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {role.period}
                      </span>
                    </div>
                    <h3 className={`text-sm font-bold mt-1 tracking-tight truncate ${
                      isSelected ? 'text-sky-950' : 'text-slate-900'
                    }`}>
                      {role.role}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                      {role.organization}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 self-center transition-transform ${
                    isSelected ? 'text-sky-800 translate-x-1' : 'text-slate-300'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Content Card */}
          <div className="lg:col-span-7">
            {(() => {
              const current = LEADERSHIP_ROLES[activeIdx];
              const CurrentIcon = roleIcons[activeIdx] || Building2;
              return (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-start justify-between border-b border-slate-100 pb-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-950 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                        <CurrentIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                          {current.period}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-serif-title mt-0.5">
                          {current.role}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600 mt-1">
                          {current.organization}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                      Mandate & Scope
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                      Key Highlights & Strategic Impact
                    </h4>
                    <ul className="space-y-3">
                      {current.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Institutional context note */}
                  {activeIdx === 0 && (
                    <div className="mt-8 p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-slate-700 space-y-1.5">
                      <div className="font-bold text-sky-950 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>About DCU School of Computing</span>
                      </div>
                      <p className="leading-relaxed">
                        Hosting over 1,200 undergraduate, postgraduate, and PhD candidates, the School of Computing at Dublin City University is renowned for pioneering Ireland's first degree in Computer Applications and maintains world-class lab spaces on DCU's Glasnevin Campus.
                      </p>
                    </div>
                  )}

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
};
