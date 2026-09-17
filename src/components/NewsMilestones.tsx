import React from 'react';
import { NEWS_ITEMS } from '../data/profileData';
import { 
  Bell, 
  Calendar, 
  Sparkles, 
  ArrowUpRight, 
  Tag,
  Newspaper
} from 'lucide-react';

export const NewsMilestones: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Updates & Announcements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif-title">
            Recent News & Academic Milestones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Latest publications, keynotes, grant awards, and departmental initiatives from the School of Computing and research labs.
          </p>
        </div>

        {/* Timeline / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-sky-900">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-900 transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <a
                  href="#publications"
                  className="inline-flex items-center gap-1 text-xs font-bold text-sky-900 hover:text-sky-950 transition-colors"
                >
                  <span>{item.linkText || 'Learn More'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
