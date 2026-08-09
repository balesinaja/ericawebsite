import React from 'react';
import { RESEARCH_DATA, UI_TRANSLATIONS } from '../data/content';
import { ResearchPaper } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ResearchSectionProps {
  onSelectPaper: (paper: ResearchPaper) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onSelectPaper }) => {
  const { language } = useLanguage();
  const papers = RESEARCH_DATA[language];
  const t = UI_TRANSLATIONS[language].research;

  return (
    <section id="research" className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto overflow-hidden scroll-mt-20">
      <div className="text-center mb-16 md:mb-20">
        <span className="text-[12px] font-semibold tracking-[0.3em] text-[#4b644e] mb-3 block uppercase">
          {t.tagline}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#181f21]">
          {t.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {papers.map((paper) => (
          <div key={paper.id} className="group flex flex-col justify-between">
            <div>
              <div 
                onClick={() => onSelectPaper(paper)}
                className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-[#f2ede4] cursor-pointer shadow-md"
              >
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#181f21]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#fef9ef] text-[#181f21] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
                    {t.viewPaper}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-semibold text-[#4b644e] tracking-widest uppercase block mb-2">
                {paper.category} • {paper.date}
              </span>

              <h3 className="font-serif text-2xl font-medium mb-3 leading-snug text-[#181f21] group-hover:text-[#4b644e] transition-colors">
                {paper.title}
              </h3>

              <p className="text-sm text-[#434749] mb-6 leading-relaxed">
                {paper.subtitle}
              </p>
            </div>

            <button
              onClick={() => onSelectPaper(paper)}
              className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#181f21] border-b border-[#181f21]/20 hover:border-[#181f21] transition-all inline-flex items-center gap-2 self-start pb-1 cursor-pointer"
            >
              {t.readPublication}
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
