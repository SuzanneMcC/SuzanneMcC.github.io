import React from 'react';
import { PROF_PROFILE } from '../data/profileData';
import { BookOpen, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Institutional Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white text-sky-950 flex items-center justify-center font-bold text-lg font-serif">
                DCU
              </div>
              <div>
                <span className="font-bold text-base text-white block">
                  Professor Andrew McCarren
                </span>
                <span className="text-xs text-slate-400">
                  Head of School of Computing · Dublin City University
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Faculty of Engineering & Computing, Dublin City University, Glasnevin, Dublin 9, D09 V209, Ireland. 
              Funded Investigator at the Insight SFI Research Centre for Data Analytics and VistaMilk.
            </p>

            <div className="text-xs text-slate-500 font-mono">
              Academic Email: <a href={`mailto:${PROF_PROFILE.email}`} className="text-sky-300 hover:underline">{PROF_PROFILE.email}</a>
            </div>
          </div>

          {/* Quick Academic Portals */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Institutional Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="https://www.dcu.ie/computing" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                  <span>DCU School of Computing</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.insight-centre.org" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                  <span>Insight SFI Research Centre</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.vistamilk.ie" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                  <span>SFI VistaMilk Research Centre</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://crt-ai.ie" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5">
                  <span>SFI CRT in Artificial Intelligence</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Research Indices */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Scholarship & Bibliographies
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <a 
                href={PROF_PROFILE.externalProfiles.scholar} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-between"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a 
                href={PROF_PROFILE.externalProfiles.researchGate} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-between"
              >
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a 
                href="https://doras.dcu.ie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-between"
              >
                <span>DCU DORAS</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a 
                href="https://dblp.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors flex items-center justify-between"
              >
                <span>DBLP</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Professor Andrew McCarren. Dublin City University (DCU). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
