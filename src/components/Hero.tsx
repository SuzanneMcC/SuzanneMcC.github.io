import React from 'react';
import { PROF_PROFILE } from '../data/profileData';
import { 
  Building, 
  MapPin, 
  Mail, 
  BookOpen, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  Download,
  ArrowRight,
  TrendingUp,
  FlaskConical,
  GraduationCap
} from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section 
      id="overview" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Information Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Academic Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950 text-white shadow-xs border border-sky-800 text-xs font-semibold mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Dublin City University · Faculty of Engineering & Computing</span>
            </div>

            {/* Main Title & Degree */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-4">
              <span className="font-serif-title text-slate-900 block font-bold">Professor Andrew McCarren</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-normal text-sky-900 mt-1 block">
                Head of School of Computing, DCU
              </span>
            </h1>

            {/* High-level summary paragraph */}
            <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed mb-6 font-normal">
              Andrew McCarren is currently a Professor and Head of School in the School of Computing in the faculty of Engineering and Computing. Andrew is also a Principal Investigator in the Rinn AI Centre. His primary research interests are in the application of Data Analytics and Data Mining techniques in Fintech, Agriculture, Food, ED Tech, Health and Human Performance, and is currently the PI on a number of SFI and EI awarded projects. Andrew has extensive industry experience during his 20 years in the Agri, Electronic Engineering and Pharmaceutical industries, and continues to consult with many industry partners.
            </p>

            {/* Quick Affiliations Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <Building className="w-3.5 h-3.5 text-sky-700" />
                Head of School, DCU Computing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <FlaskConical className="w-3.5 h-3.5 text-indigo-600" />
                Insight SFI Centre
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                SFI VistaMilk Collaborator
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                SFI CRT-AI Supervisor
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                Director, McR Agri Analytics
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#publications"
                id="hero-publications-btn"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-sky-900 hover:bg-sky-950 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all w-full sm:w-auto"
              >
                <span>Explore Publications</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#research"
                id="hero-research-btn"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 px-5 py-3 rounded-xl shadow-2xs transition-all w-full sm:w-auto"
              >
                <FlaskConical className="w-4 h-4 text-sky-700" />
                <span>Research Themes</span>
              </a>

              <button
                onClick={() => onOpenInquiry('PhD Inquiries')}
                id="hero-phd-btn"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-sky-900 bg-sky-100 hover:bg-sky-200 px-5 py-3 rounded-xl transition-all w-full sm:w-auto cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-sky-800" />
                <span>PhD Opportunities</span>
              </button>
            </div>

            {/* Quick Institutional Location & Contact */}
            <div className="mt-8 pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>School of Computing, DCU Glasnevin Campus, Dublin 9, Ireland</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${PROF_PROFILE.email}`} className="text-sky-900 hover:underline font-semibold">
                  {PROF_PROFILE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Card / Visual Profile & Stat Overview */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 shadow-lg p-6 relative">
              {/* Top Irish University Seal & Avatar Frame */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-900 to-sky-700 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md ring-4 ring-sky-100">
                    <span className="tracking-tight">AMcC</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white" title="Active Head of School & Active SFI Lab">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-base">Prof Andrew McCarren</span>
                  <span className="text-xs text-slate-500 font-medium">BSc, PhD (DCU)</span>
                  <span className="text-xs text-sky-800 font-semibold mt-1">Head of School</span>
                  <span className="text-[11px] text-slate-500">School of Computing</span>
                </div>
              </div>

              {/* Research Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 my-5">
                {PROF_PROFILE.stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-sky-950 font-serif-title">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-500 leading-tight mt-1 line-clamp-1">
                      {stat.note}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Profiles Links */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                  Verified Academic Records
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PROF_PROFILE.externalProfiles.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-950 text-xs font-medium transition-colors border border-slate-200/60"
                  >
                    <span>Google Scholar</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href={PROF_PROFILE.externalProfiles.researchGate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-950 text-xs font-medium transition-colors border border-slate-200/60"
                  >
                    <span>ResearchGate</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href={PROF_PROFILE.externalProfiles.dcuProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-950 text-xs font-medium transition-colors border border-slate-200/60"
                  >
                    <span>DCU Staff Directory</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://dblp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-950 text-xs font-medium transition-colors border border-slate-200/60"
                  >
                    <span>DBLP Bibliography</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Instant Action */}
              <div className="mt-4 pt-3">
                <button
                  onClick={() => onOpenInquiry('General Inquiry')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-300" />
                  <span>Send Direct Inquiry to DCU Office</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
