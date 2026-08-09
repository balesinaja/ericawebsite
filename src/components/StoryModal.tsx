import React from 'react';
import { ABOUT_DATA, UI_TRANSLATIONS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  const { language } = useLanguage();
  const about = ABOUT_DATA[language];
  const t = UI_TRANSLATIONS[language].storyModal;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#fef9ef] rounded-[2.5rem] max-w-3xl w-full p-8 md:p-12 relative shadow-2xl border border-white/60 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full hover:bg-[#f2ede4] text-[#181f21] transition-colors cursor-pointer"
          aria-label="Close story modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8 border-b border-[#c3c7c8]/30 pb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 border-2 border-[#4b644e]/30 shadow-lg bg-[#f2ede4]">
            <img
              src={about.portraitImage}
              alt="Erica Adriana"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#4b644e] uppercase block mb-1">
              {t.tagline}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-[#181f21] mb-2">
              Erica Adriana, S.E., M.M.
            </h3>
            <p className="text-sm font-medium text-[#434749]">
              {t.authorTitle}
            </p>
          </div>
        </div>

        <div className="space-y-6 text-[#1d1c16] text-base leading-relaxed font-sans">
          <p>{t.bioP1}</p>

          <div className="bg-[#f8f3ea] p-6 rounded-2xl border-l-4 border-[#4b644e] my-6">
            <h4 className="font-serif text-lg font-medium text-[#181f21] mb-2">
              {t.academicMilestones}
            </h4>
            <ul className="space-y-2 text-sm text-[#434749]">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4b644e] text-base">school</span>
                {t.degrees}
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4b644e] text-base">nature_people</span>
                {t.papers}
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4b644e] text-base">groups</span>
                {t.mentored}
              </li>
            </ul>
          </div>

          <p>{t.bioP2}</p>

          <blockquote className="font-serif text-xl italic text-[#181f21] bg-[#f2ede4] p-6 rounded-2xl text-center">
            {t.quote}
          </blockquote>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#c3c7c8]/30">
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="w-full sm:w-auto px-8 py-4 bg-[#181f21] text-[#fef9ef] text-xs font-semibold tracking-widest uppercase hover:bg-[#4b644e] transition-colors rounded-xl cursor-pointer"
          >
            {t.bookBtn}
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-4 border border-[#181f21] text-[#181f21] text-xs font-semibold tracking-widest uppercase hover:bg-[#f2ede4] transition-colors rounded-xl cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
