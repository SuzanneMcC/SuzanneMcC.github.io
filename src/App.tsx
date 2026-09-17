import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ResearchThemes } from './components/ResearchThemes';
import { PublicationsExplorer } from './components/PublicationsExplorer';
import { IndustryInnovation } from './components/IndustryInnovation';
import { TeachingSupervision } from './components/TeachingSupervision';
import { NewsMilestones } from './components/NewsMilestones';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveInquiryModal } from './components/InteractiveInquiryModal';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryCategory, setInquiryCategory] = useState<string>('General Inquiry');

  const handleOpenInquiry = (category: string = 'General Inquiry') => {
    setInquiryCategory(category);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Profile Hero & Overview */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* Academic & Professional Background */}
        <AboutSection />

        {/* Institutional & School of Computing Leadership */}
        <LeadershipSection />

        {/* Research Themes & SFI Consortia */}
        <ResearchThemes />

        {/* Peer-Reviewed Publications & Citation Engine */}
        <PublicationsExplorer />

        {/* Industry Translation, Spinouts & McR Agri Analytics */}
        <IndustryInnovation onOpenInquiry={handleOpenInquiry} />

        {/* Teaching Modules & PhD Supervision (CRT-AI) */}
        <TeachingSupervision onOpenInquiry={handleOpenInquiry} />

        {/* Recent Announcements & Milestones */}
        <NewsMilestones />

        {/* DCU Office & Communication Portal */}
        <ContactSection initialCategory={inquiryCategory} />
      </main>

      {/* Academic Footer */}
      <Footer />

      {/* Interactive Inquiries / PhD Application Modal */}
      <InteractiveInquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        defaultCategory={inquiryCategory}
      />
    </div>
  );
}
