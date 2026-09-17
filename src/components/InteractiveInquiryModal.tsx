import React, { useState, useEffect } from 'react';
import { PROF_PROFILE } from '../data/profileData';
import { Mail, Send, Copy, Check, X, Building2, User, Sparkles } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const InteractiveInquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'General Inquiry'
}) => {
  const [inquiryType, setInquiryType] = useState(defaultCategory);
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultCategory) {
      setInquiryType(defaultCategory);
    }
  }, [defaultCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${inquiryType}] Inbound Inquiry from ${name || 'Colleague'} (${org || 'Institution'})`);
    const body = encodeURIComponent(
`Dear Professor McCarren,

Name: ${name || 'N/A'}
Institution/Affiliation: ${org || 'N/A'}
Contact Email: ${email || 'N/A'}
Inquiry Topic: ${inquiryType}

Details:
${message}

Best regards,
${name || 'Sender'}`
    );

    window.location.href = `mailto:${PROF_PROFILE.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  const handleCopy = () => {
    const text = `To: ${PROF_PROFILE.email}
Subject: [${inquiryType}] Inbound Inquiry from ${name || 'Colleague'} (${org || 'Institution'})

Dear Professor McCarren,

Name: ${name || 'N/A'}
Institution/Affiliation: ${org || 'N/A'}
Contact Email: ${email || 'N/A'}
Inquiry Topic: ${inquiryType}

Details:
${message}

Best regards,
${name || 'Sender'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">
              Dublin City University
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-serif-title">
              Inquire with Prof. Andrew McCarren
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Head of School of Computing · DCU
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 mt-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Purpose of Contact
            </label>
            <select
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-sky-600 focus:outline-hidden"
            >
              <option value="PhD Supervision">PhD / Postdoctoral Supervision (CRT-AI)</option>
              <option value="Research Collaboration">Academic Research Collaboration (SFI/EU)</option>
              <option value="Industry Partnership">Industry Partnership & AgTech Spin-out</option>
              <option value="School of Computing">DCU School of Computing Matters</option>
              <option value="Keynote / Talk">Keynote Address / Guest Lecture</option>
              <option value="General Inquiry">General Academic Inquiry</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Dr. / Prof. / Student"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-sky-600 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Institution
              </label>
              <input
                type="text"
                placeholder="University or Company"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-sky-600 focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="your.email@institution.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-sky-600 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Message / Research Outline
            </label>
            <textarea
              rows={3}
              required
              placeholder="Provide a brief summary of your background, proposal, or question..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-sky-600 focus:outline-hidden"
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-900 hover:bg-sky-950 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-amber-300" />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
