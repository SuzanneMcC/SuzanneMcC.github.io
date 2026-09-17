import React, { useState } from 'react';
import { PROF_PROFILE } from '../data/profileData';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Building2,
  Calendar
} from 'lucide-react';

interface ContactProps {
  initialCategory?: string;
}

export const ContactSection: React.FC<ContactProps> = ({ initialCategory = 'General Inquiry' }) => {
  const [inquiryType, setInquiryType] = useState<string>(initialCategory);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const inquiryTypes = [
    'PhD / Postdoc Inquiries',
    'Research Collaboration (SFI / Horizon)',
    'Industry R&D & Spin-out (AgriTech)',
    'DCU School of Computing Matters',
    'Keynote / Guest Lecture',
    'General Inquiry'
  ];

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType}] From ${senderName || 'Colleague'} - ${institution || 'Academic/Industry'}`);
    const bodyText = encodeURIComponent(
`Dear Professor McCarren,

Name: ${senderName || 'N/A'}
Organization/University: ${institution || 'N/A'}
Email: ${senderEmail || 'N/A'}
Topic: ${inquiryType}

Message:
${message || '(Please review my inquiry details)'}

Best regards,
${senderName || 'Sender'}`
    );

    window.location.href = `mailto:${PROF_PROFILE.email}?subject=${subject}&body=${bodyText}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  const handleCopyDraft = () => {
    const text = `To: ${PROF_PROFILE.email}
Subject: [${inquiryType}] From ${senderName || 'Colleague'} - ${institution || 'Academic/Industry'}

Dear Professor McCarren,

Name: ${senderName || 'N/A'}
Organization/University: ${institution || 'N/A'}
Email: ${senderEmail || 'N/A'}
Topic: ${inquiryType}

Message:
${message}

Best regards,
${senderName || 'Sender'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Campus Office & Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif-title">
            Contact & Academic Inquiries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out for research collaborations, doctoral supervision, enterprise partnerships, or matters relating to the School of Computing at Dublin City University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office & Institutional Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Office Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-800" />
                <span>DCU Glasnevin Campus Location</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">
                      School of Computing (L1 McNulty Building)
                    </strong>
                    <span>Faculty of Engineering and Computing</span><br />
                    <span>Dublin City University, Glasnevin Campus</span><br />
                    <span className="text-slate-500">Dublin 9, D09 V209, Ireland</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block">Primary Academic Email:</span>
                    <a href={`mailto:${PROF_PROFILE.email}`} className="text-sky-900 hover:underline font-bold">
                      {PROF_PROFILE.email}
                    </a>
                    <span className="text-xs text-slate-500 block mt-1">Direct Correspondence:</span>
                    <a href={`mailto:${PROF_PROFILE.alternateEmail}`} className="text-slate-700 hover:underline text-xs">
                      {PROF_PROFILE.alternateEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block">School Office Phone:</span>
                    <span className="font-semibold text-slate-800">{PROF_PROFILE.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block">Office Consultation:</span>
                    <span className="text-xs text-slate-700">By appointment (contact executive assistant or email).</span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="https://maps.google.com/?q=Dublin+City+University+Glasnevin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-sky-800" />
                  <span>Open Campus in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Quick SFI Note */}
            <div className="p-5 rounded-2xl bg-sky-900 text-white shadow-xs text-xs space-y-2">
              <span className="font-bold text-amber-300 uppercase tracking-wider block">
                Research Center Affiliations
              </span>
              <p className="text-slate-200 leading-relaxed">
                For research specifically routed through Science Foundation Ireland (SFI), please reference the <strong>Insight SFI Centre for Data Analytics</strong> or <strong>SFI VistaMilk</strong> in your subject header.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Interactive Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg font-serif-title">
                    Compose an Academic Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Generates a formatted academic request ready for one-click transmission.
                  </p>
                </div>
                <MessageSquare className="w-6 h-6 text-sky-800" />
              </div>

              <form onSubmit={handleComposeEmail} className="space-y-4">
                
                {/* Inquiry Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nature of Inquiry
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white"
                  >
                    {inquiryTypes.map((type, i) => (
                      <option key={i} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Prof. / Student Name"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Institution / Company
                    </label>
                    <input
                      type="text"
                      placeholder="University, Institute or Firm"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@university.edu or name@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white"
                  />
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message / Research Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your proposed research topic, background, question, or meeting request..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white leading-relaxed"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                    <span>{copied ? 'Draft Copied!' : 'Copy Formatted Draft'}</span>
                  </button>

                  <button
                    type="submit"
                    id="contact-submit-inquiry-btn"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-900 hover:bg-sky-950 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Send via Email Client</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium text-center">
                    Your default mail client has been launched with the formatted draft.
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
