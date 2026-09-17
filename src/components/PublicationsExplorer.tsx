import React, { useState, useMemo } from 'react';
import { PUBLICATIONS, PROF_PROFILE } from '../data/profileData';
import { Publication } from '../types';
import { 
  Search, 
  Filter, 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Quote,
  Share2
} from 'lucide-react';

export const PublicationsExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year' | 'citations'>('year');
  const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);
  const [bibtexModalPub, setBibtexModalPub] = useState<Publication | null>(null);
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  // Categories list
  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'agritech', label: 'AgriTech & Environment' },
    { id: 'ml-timeseries', label: 'Time Series & ML' },
    { id: 'software-eng', label: 'Software Engineering' },
    { id: 'nlp-trust', label: 'Trustworthy AI & NLP' },
    { id: 'sports-performance', label: 'Sports Analytics' },
    { id: 'health-biostats', label: 'Health & Biostats' },
    { id: 'edtech', label: 'EdTech' },
  ];

  // Years list
  const years = ['all', '2026', '2025', '2024', '2023', '2022', 'Earlier'];

  // Filtered and sorted publications
  const filteredPubs = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      // Search term
      const matchesSearch = 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.venue.toLowerCase().includes(searchTerm.toLowerCase());

      // Category
      const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;

      // Year
      let matchesYear = true;
      if (selectedYear === 'Earlier') {
        matchesYear = pub.year < 2022;
      } else if (selectedYear !== 'all') {
        matchesYear = pub.year === parseInt(selectedYear, 10);
      }

      return matchesSearch && matchesCategory && matchesYear;
    }).sort((a, b) => {
      if (sortBy === 'citations') {
        return (b.citations || 0) - (a.citations || 0);
      }
      return b.year - a.year;
    });
  }, [searchTerm, selectedCategory, selectedYear, sortBy]);

  const handleCopyBibtex = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2200);
  };

  return (
    <section id="publications" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Peer-Reviewed Scholarship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif-title">
              Selected Publications & Scientific Dissemination
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Explore recent journal articles, conference proceedings, and books across machine learning, smart agriculture, systems architecture, and human performance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PROF_PROFILE.externalProfiles.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-xs font-bold text-slate-800 shadow-2xs transition-colors"
            >
              <span>Google Scholar (1,350+ Citations)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a
              href="https://doras.dcu.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-900 hover:bg-sky-950 text-white text-xs font-bold shadow-2xs transition-colors"
            >
              <span>DCU DORAS Archive</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
            </a>
          </div>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs mb-8 space-y-4">
          
          {/* Top Row: Search Input & Sort Selector */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search publications by keyword, author, model, or venue..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
              />
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 text-xs">
              <span className="font-semibold text-slate-500">Sort by:</span>
              <button
                onClick={() => setSortBy('year')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                  sortBy === 'year' 
                    ? 'bg-sky-900 text-white shadow-2xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Latest Year
              </button>
              <button
                onClick={() => setSortBy('citations')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                  sortBy === 'citations' 
                    ? 'bg-sky-900 text-white shadow-2xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Most Cited
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Domain:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-sky-900 text-white shadow-2xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Year Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-semibold text-slate-400 mr-1">Year:</span>
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2.5 py-0.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  selectedYear === yr
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {yr === 'all' ? 'All Years' : yr}
              </button>
            ))}
            {(searchTerm || selectedCategory !== 'all' || selectedYear !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedYear('all');
                }}
                className="text-xs text-sky-800 hover:underline font-semibold ml-2 cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>

        </div>

        {/* Results Counter */}
        <div className="mb-4 text-xs font-semibold text-slate-500 flex items-center justify-between">
          <span>Showing {filteredPubs.length} publications</span>
          <span>Author highlighted: <strong className="text-sky-950 font-bold">A. McCarren</strong></span>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPubs.map((pub) => {
            const isAbstractExpanded = expandedAbstractId === pub.id;
            return (
              <div 
                key={pub.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-sky-950 text-amber-300 font-code">
                      {pub.year}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-100">
                      {pub.categoryLabel}
                    </span>
                    {pub.highlight && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        Key Paper
                      </span>
                    )}
                  </div>

                  {pub.citations && (
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full" title="Google Scholar Citations">
                      {pub.citations} Citations
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug hover:text-sky-900 transition-colors">
                  {pub.title}
                </h3>

                {/* Authors */}
                <div className="text-xs sm:text-sm text-slate-600 mt-1.5 flex flex-wrap gap-x-1.5">
                  {pub.authors.map((author, i) => {
                    const isMcCarren = author.toLowerCase().includes('mccarren');
                    return (
                      <span key={i}>
                        <span className={isMcCarren ? 'font-bold text-sky-950 underline decoration-sky-400 underline-offset-2' : ''}>
                          {author}
                        </span>
                        {i < pub.authors.length - 1 && ', '}
                      </span>
                    );
                  })}
                </div>

                {/* Venue */}
                <div className="text-xs font-serif italic text-slate-700 mt-1">
                  {pub.venue}
                </div>

                {/* Collapsible Abstract */}
                {isAbstractExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/60 p-4 rounded-xl">
                    <strong className="text-slate-900 block font-semibold mb-1">Abstract:</strong>
                    {pub.abstract}
                  </div>
                )}

                {/* Action Bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setExpandedAbstractId(isAbstractExpanded ? null : pub.id)}
                      className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-sky-900 py-1 px-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <span>{isAbstractExpanded ? 'Hide Abstract' : 'View Abstract'}</span>
                      {isAbstractExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => setBibtexModalPub(pub)}
                      className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-sky-900 py-1 px-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <Quote className="w-3.5 h-3.5 text-sky-700" />
                      <span>Cite (BibTeX)</span>
                    </button>
                  </div>

                  {pub.doi && (
                    <div className="text-[11px] text-slate-500 font-code">
                      DOI: <span className="text-slate-700">{pub.doi}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

          {filteredPubs.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No publications matched your query</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Try clearing search terms or selecting 'All Domains' to view the full scholarship record.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedYear('all');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-sky-900 text-white text-xs font-semibold cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* BibTeX Modal */}
        {bibtexModalPub && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-sky-950 font-bold text-base">
                  <Quote className="w-5 h-5 text-amber-500" />
                  <span>BibTeX Citation</span>
                </div>
                <button
                  onClick={() => setBibtexModalPub(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-600 mb-3 line-clamp-1 font-medium">
                {bibtexModalPub.title}
              </p>

              <div className="relative">
                <pre className="p-4 rounded-xl bg-slate-950 text-sky-200 font-code text-xs overflow-x-auto max-h-60 leading-relaxed">
                  {bibtexModalPub.bibtex}
                </pre>
              </div>

              <div className="mt-5 flex items-center justify-end gap-3">
                <button
                  onClick={() => setBibtexModalPub(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => handleCopyBibtex(bibtexModalPub.bibtex)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-900 hover:bg-sky-950 text-white text-xs font-bold shadow-xs cursor-pointer"
                >
                  {copiedBibtex ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedBibtex ? 'Copied to Clipboard!' : 'Copy BibTeX'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
