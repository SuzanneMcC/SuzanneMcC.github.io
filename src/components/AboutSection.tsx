import React from 'react';
import { PROF_PROFILE } from '../data/profileData';
import { 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  Award, 
  Building, 
  CheckCircle2,
  Globe,
  Compass,
  Sprout
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic & Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif-title">
            Bridging Two Decades of Industrial Innovation with Academic Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Professor Andrew McCarren combines foundational computer science rigor with over twenty years of applied domain expertise across electronic systems, agricultural technology, and pharmaceutical data infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base leading-relaxed">
            <p>
              Holding both a <strong className="text-slate-900">Bachelor of Science (BSc)</strong> and a <strong className="text-slate-900">Doctor of Philosophy (PhD)</strong> from Dublin City University (DCU), Professor McCarren has dedicated his academic career to advancing applied machine learning, complex time series prediction, and modern software architectures.
            </p>

            <p>
              Before and alongside his tenure at DCU, Professor McCarren accrued more than 20 years of practical engineering experience in the electronics, agriculture, and pharmaceutical manufacturing sectors. This distinctive industrial background directly informs his research philosophy: algorithmic models must not merely function in curated benchmark datasets; they must withstand noisy field telemetry, non-stationary environmental shifts, and millisecond edge latencies.
            </p>

            <p>
              As <strong className="text-slate-900">Head of the School of Computing</strong> within DCU's Faculty of Engineering and Computing, he steers strategic educational programming, faculty recruitment, and institutional research policy. Under his leadership, the School maintains vital links with Dublin’s tech ecosystem, major Science Foundation Ireland (SFI) research centres, and global academic partners.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 text-sky-950 font-bold text-sm mb-1.5">
                  <GraduationCap className="w-4 h-4 text-sky-800" />
                  <span>Alma Mater & Education</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800">Dublin City University (DCU)</div>
                  <div>• Doctor of Philosophy (PhD) in Computing</div>
                  <div>• Bachelor of Science (BSc)</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 text-sky-950 font-bold text-sm mb-1.5">
                  <Briefcase className="w-4 h-4 text-sky-800" />
                  <span>Industrial Translation</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800">Founder & Director</div>
                  <div>• McR Agri Analytics Ltd</div>
                  <div>• 20+ years electronics, ag & pharma</div>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Affiliations & Impact Pillars */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Core Institutional Appointments
            </h3>

            {PROF_PROFILE.affiliations.map((aff, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-slate-50 hover:bg-sky-50/50 border border-slate-200/90 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-900/10 text-sky-900 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-900 group-hover:text-white transition-colors">
                  {index === 0 && <Building className="w-4 h-4" />}
                  {index === 1 && <Cpu className="w-4 h-4" />}
                  {index === 2 && <Sprout className="w-4 h-4" />}
                  {index === 3 && <GraduationCap className="w-4 h-4" />}
                  {index === 4 && <Award className="w-4 h-4" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-sky-950 transition-colors">
                      {aff.name}
                    </h4>
                  </div>
                  <p className="text-xs text-sky-900 font-medium mt-0.5">
                    {aff.role}
                  </p>
                </div>
              </div>
            ))}

            {/* International Fellowship Note */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-900 to-slate-900 text-white shadow-xs mt-2">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                <Globe className="w-3.5 h-3.5" />
                <span>International Academic Visiting Role</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Appointed Visiting Data Science Professor at Princess Nourah bint Abdulrahman University (PNU), delivering postgraduate statistical machine learning and advising on curriculum architecture.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
