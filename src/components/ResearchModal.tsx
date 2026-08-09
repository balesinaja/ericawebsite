import React, { useState } from 'react';
import { ResearchPaper } from '../types';
import { UI_TRANSLATIONS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface ResearchModalProps {
  paper: ResearchPaper | null;
  onClose: () => void;
}

export const ResearchModal: React.FC<ResearchModalProps> = ({ paper, onClose }) => {
  const [copiedCitation, setCopiedCitation] = useState(false);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].research;

  if (!paper) return null;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(paper.citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#fef9ef] rounded-[2.5rem] max-w-2xl w-full p-8 md:p-10 relative shadow-2xl border border-white/60 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#f2ede4] text-[#181f21] transition-colors cursor-pointer"
          aria-label="Close research modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-semibold text-[#4b644e] tracking-widest uppercase block mb-2">
            {paper.category} • {paper.date}
          </span>
          <h3 className="font-serif text-3xl font-semibold text-[#181f21] leading-tight mb-2">
            {paper.title}
          </h3>
          <p className="text-sm text-[#434749] italic">{paper.subtitle}</p>
        </div>

        <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-[#f2ede4]">
          <img
            src={paper.image}
            alt={paper.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-[#181f21] uppercase mb-2">
              {t.abstract}
            </h4>
            <p className="text-sm text-[#434749] leading-relaxed bg-[#f8f3ea] p-5 rounded-2xl">
              {paper.abstract}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-[#181f21] uppercase mb-2">
              {t.keyFindings}
            </h4>
            <ul className="space-y-2">
              {paper.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="text-sm text-[#434749] flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#4b644e] text-lg shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Citation Box */}
          <div className="bg-[#f2ede4] p-5 rounded-2xl border border-[#c3c7c8]/40">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-semibold text-[#181f21] uppercase tracking-wider">
                {t.citationLabel}
              </span>
              <button
                onClick={handleCopyCitation}
                className="text-xs text-[#4b644e] hover:text-[#181f21] font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  {copiedCitation ? 'check' : 'content_copy'}
                </span>
                {copiedCitation ? t.copied : t.copyCitation}
              </button>
            </div>
            <p className="text-xs text-[#434749] font-mono leading-relaxed select-all">
              {paper.citation}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#c3c7c8]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-3.5 bg-[#181f21] text-[#fef9ef] text-xs font-semibold tracking-widest uppercase hover:bg-[#4b644e] transition-colors rounded-xl cursor-pointer"
          >
            {t.closeViewer}
          </button>
        </div>
      </div>
    </div>
  );
};
