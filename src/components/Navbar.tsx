import React, { useState, useEffect } from 'react';
import { PROF_PROFILE } from '../data/profileData';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ExternalLink, 
  Mail, 
  BookOpen, 
  Sparkles,
  Building2
} from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Research', href: '#research' },
    { label: 'Publications', href: '#publications' },
    { label: 'Industry & Spinouts', href: '#industry' },
    { label: 'Teaching & PhD', href: '#teaching' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3' 
          : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & DCU Institutional Identity */}
        <a 
          href="#overview" 
          className="flex items-center gap-3.5 group focus:outline-hidden focus:ring-2 focus:ring-sky-600 rounded-lg p-1"
          id="nav-brand-link"
        >
          <div className="w-10 h-10 rounded-lg bg-sky-950 text-white flex items-center justify-center font-bold text-lg tracking-tight shadow-xs border border-sky-800 transition-transform group-hover:scale-105">
            <span className="text-amber-400 font-serif">DCU</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-sky-900 transition-colors">
                Prof Andrew McCarren
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                PhD
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium hidden xs:block">
              Head of School of Computing · Dublin City University
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-item-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="text-xs font-semibold text-slate-600 hover:text-sky-900 px-2.5 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PROF_PROFILE.externalProfiles.scholar}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-scholar-btn"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
            title="View Google Scholar Profile"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-700" />
            <span>Scholar</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <button
            onClick={() => onOpenInquiry('General Inquiry')}
            id="nav-contact-btn"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-sky-900 hover:bg-sky-950 px-3.5 py-2 rounded-lg shadow-xs hover:shadow-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-sky-600 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-amber-300" />
            <span>Contact / Inquire</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenInquiry('General Inquiry')}
            className="p-2 text-sky-900 bg-sky-50 rounded-lg text-xs font-semibold"
            aria-label="Contact"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-sky-900 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 mt-2">
            <a
              href={PROF_PROFILE.externalProfiles.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 py-2.5 rounded-lg"
            >
              <BookOpen className="w-4 h-4 text-sky-700" />
              <span>Google Scholar (1,350+ Citations)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('General Inquiry');
              }}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-white bg-sky-900 hover:bg-sky-950 py-2.5 rounded-lg"
            >
              <Mail className="w-4 h-4 text-amber-300" />
              <span>Contact Professor McCarren</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
