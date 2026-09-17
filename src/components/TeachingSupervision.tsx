import React from 'react';
import { TEACHING_MODULES } from '../data/profileData';
import { 
  GraduationCap, 
  BookOpen, 
  Globe2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Users,
  FileCheck
} from 'lucide-react';

interface TeachingProps {
  onOpenInquiry: (category?: string) => void;
}

export const TeachingSupervision: React.FC<TeachingProps> = ({ onOpenInquiry }) => {
  return (
    <section id="teaching" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education & Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif-title">
            Teaching Excellence & PhD Supervision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering advanced analytics, machine learning, and time series courses at DCU, supervising SFI CRT-AI doctoral cohorts, and advising global educational initiatives.
          </p>
        </div>

        {/* Top Grid: Taught Modules */}
        <div className="mb-16">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Current & Recent Taught Modules
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEACHING_MODULES.map((mod, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-sky-950 text-amber-300 text-xs font-bold font-code">
                      {mod.code}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {mod.level}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {mod.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center justify-between">
                  <span>{mod.institution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PhD Supervision & Prospective Students Feature Box */}
        <div className="bg-white rounded-3xl border border-sky-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Doctoral Supervision via SFI CRT-AI</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-serif-title">
                Prospective PhD Students & Postdoctoral Researchers
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Professor McCarren supervises doctoral candidates funded through the <strong className="text-slate-900">SFI Centre for Research Training in Artificial Intelligence (CRT-AI)</strong>, the <strong className="text-slate-900">Insight SFI Centre for Data Analytics</strong>, and institutional DCU scholarships.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Research Themes:</strong> Time series deep learning, precision AgriTech (pasture & livestock modeling), sports biomechanics & load metrics, trustworthy NLP, and microservice architectures.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ideal Background:</strong> First-Class or Upper Second Honours (or MSc) in Computer Science, Data Science, Statistics, Electronic Engineering, or related quantitative field.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Funding:</strong> Fully funded SFI PhD stipends (€22,000–€25,000/yr tax-free), full tuition coverage, and international research conference travel allowance.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col items-center">
                <FileCheck className="w-10 h-10 text-sky-800 mb-3" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  How to Express Interest
                </h4>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  Send your academic CV, transcripts, and a brief (1-page) statement of research interests.
                </p>
                <button
                  onClick={() => onOpenInquiry('PhD Supervision')}
                  id="teaching-apply-phd-btn"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-900 hover:bg-sky-950 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <span>Inquire for PhD / Postdoc</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
