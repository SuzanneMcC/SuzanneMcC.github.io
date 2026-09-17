import React, { useState } from 'react';
import { RESEARCH_THEMES } from '../data/profileData';
import { 
  Sprout, 
  TrendingUp, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  HeartPulse, 
  ArrowUpRight, 
  CheckCircle2,
  Layers,
  FlaskConical
} from 'lucide-react';

export const ResearchThemes: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>(RESEARCH_THEMES[0].id);

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Sprout,
    TrendingUp,
    Activity,
    Cpu,
    ShieldCheck,
    HeartPulse
  };

  const selectedTheme = RESEARCH_THEMES.find(t => t.id === selectedThemeId) || RESEARCH_THEMES[0];
  const SelectedIcon = iconMap[selectedTheme.iconName] || FlaskConical;

  return (
    <section id="research" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Research Portfolio & Scientific Themes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif-title">
            Computational Analytics Across Critical Real-World Domains
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Professor McCarren's laboratory investigates non-stationary time series, machine learning, and scalable systems across agricultural food systems, human physiology, software design, and digital health.
          </p>
        </div>

        {/* Pillar selector badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {RESEARCH_THEMES.map((theme) => {
            const Icon = iconMap[theme.iconName] || FlaskConical;
            const isSelected = selectedThemeId === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setSelectedThemeId(theme.id)}
                className={`p-3.5 rounded-xl text-left transition-all border flex flex-col items-start gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-950 text-white border-sky-900 shadow-md ring-2 ring-sky-900/30'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/90'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-sky-800 text-amber-300' : 'bg-white text-sky-900 border border-slate-200'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold tracking-tight line-clamp-2">
                  {theme.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Theme Deep Dive Display */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-900 text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
                  <SelectedIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                    Active Research Theme
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-serif-title">
                    {selectedTheme.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                {selectedTheme.fullDesc}
              </p>

              {/* Key Topics Tag Cloud */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2.5">
                  Core Topics & Methodologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTheme.keyTopics.map((topic, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Representative Paper Hook */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="text-[11px] font-bold uppercase text-sky-800 tracking-wider mb-1">
                  Representative Publication
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {selectedTheme.recentPaperRef}
                </div>
                <a
                  href="#publications"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-900 hover:text-sky-950 mt-2"
                >
                  <span>View in Publications Database</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Sidebar with Impact & Funding */}
            <div className="lg:col-span-4 space-y-5">
              {/* Impact Metric Box */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Real-World Impact</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                  {selectedTheme.impactMetric}
                </p>
              </div>

              {/* Funding & Consortia */}
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-900 mb-2.5">
                  <Layers className="w-4 h-4 text-sky-700" />
                  <span>Funding & SFI Consortia</span>
                </div>
                <ul className="space-y-1.5">
                  {selectedTheme.fundingPartners.map((partner, i) => (
                    <li key={i} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-700" />
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire on this theme button */}
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-900 hover:bg-sky-950 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Inquire About Collaboration</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
