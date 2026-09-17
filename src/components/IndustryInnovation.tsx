import React from 'react';
import { 
  Building, 
  Sprout, 
  TrendingUp, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface IndustryProps {
  onOpenInquiry: (category?: string) => void;
}

export const IndustryInnovation: React.FC<IndustryProps> = ({ onOpenInquiry }) => {
  return (
    <section id="industry" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5" />
            <span>Commercial Translation & Spin-outs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif-title">
            Industry Spin-Outs & Two Decades of Engineering Practice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Professor McCarren actively converts research breakthroughs into high-value enterprise software, leading university spin-outs and partnering with Enterprise Ireland.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* McR Agri Analytics Feature Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold tracking-wider uppercase">
                  Commercial Enterprise
                </span>
                <span className="text-xs text-slate-300 font-mono">Founded 2016</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-white tracking-tight mb-3">
                McR Agri Analytics Ltd
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                Directorship of an advanced data analytics and software development venture dedicated to optimizing agricultural productivity, pasture forecasting, and livestock metrics. McR Agri Analytics packages sophisticated predictive modeling into intuitive decision engines for farm operators and ag-tech enterprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-emerald-400 font-bold text-xs uppercase mb-1">
                    Telemetry Ingestion
                  </div>
                  <div className="text-xs text-slate-200">
                    Multivariate weather, soil probe, and satellite telemetry integration.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-emerald-400 font-bold text-xs uppercase mb-1">
                    Grass Yield Models
                  </div>
                  <div className="text-xs text-slate-200">
                    High-resolution dry matter growth forecasting for rotation planning.
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry('Industry Partnership')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                <span>Inquire on Commercial Collaboration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Industrial Experience Track Record */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    20+ Years Cross-Industry Background
                  </h4>
                  <p className="text-xs text-slate-500">
                    Electronics · Agriculture · Pharmaceutical Systems
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prior to focusing primarily on academic leadership, Professor McCarren held extensive industry engineering positions developing automated measurement instruments, industrial control logic, and pharmaceutical compliance databases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    Enterprise Ireland Partnership
                  </h4>
                  <p className="text-xs text-slate-500">
                    Commercialization & Technology Transfer
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Principal Investigator on numerous Enterprise Ireland Innovation Partnerships and Commercialisation Feasibility projects, bridging university IP with Irish indigenous SMEs and multinational tech companies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200/80 text-xs text-slate-700 flex items-center justify-between">
              <span className="font-medium">
                Seeking industrial co-supervision or R&D partnerships?
              </span>
              <button
                onClick={() => onOpenInquiry('Industry Partnership')}
                className="text-sky-900 font-bold hover:underline shrink-0 ml-2 cursor-pointer"
              >
                Contact Lab →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
