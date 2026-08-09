import React from 'react';
import { OFFERINGS_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface OfferingsSectionProps {
  onBookConsultation: () => void;
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({ onBookConsultation }) => {
  const { language } = useLanguage();
  const data = OFFERINGS_DATA[language];

  return (
    <section id="offerings" className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-[12px] font-semibold tracking-[0.2em] text-[#4b644e] mb-3 block uppercase">
          {data.tagline}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#181f21]">
          {data.title}
        </h2>
      </div>

      {/* Personal Brand & Business Brand Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Personal Brand Card */}
        <div className="bg-[#f8f3ea] p-8 md:p-12 rounded-[2rem] border border-[#e8d3c0] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#4b644e]/10 text-[#4b644e] text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Core Pathway 01
            </div>
            <h3 className="font-serif text-3xl font-medium text-[#181f21] mb-6">
              {data.personalBrand.title}
            </h3>
            <p className="text-base text-[#434749] leading-relaxed mb-8">
              {data.personalBrand.description}
            </p>
          </div>
          <button
            onClick={onBookConsultation}
            className="self-start px-6 py-3 bg-[#181f21] text-[#fef9ef] text-xs font-semibold tracking-wider uppercase hover:bg-[#4b644e] transition-colors rounded-xl cursor-pointer flex items-center gap-2"
          >
            Konsultasi Personal Brand
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Business Brand Card */}
        <div className="bg-[#181f21] text-[#fef9ef] p-8 md:p-12 rounded-[2rem] border border-[#2d373a] shadow-xl flex flex-col justify-between">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#4b644e] text-[#fef9ef] text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Core Pathway 02
            </div>
            <h3 className="font-serif text-3xl font-medium text-[#fef9ef] mb-6">
              {data.businessBrand.title}
            </h3>
            <p className="text-base text-[#fef9ef]/80 leading-relaxed mb-8">
              {data.businessBrand.description}
            </p>
          </div>
          <button
            onClick={onBookConsultation}
            className="self-start px-6 py-3 bg-[#4b644e] text-[#fef9ef] text-xs font-semibold tracking-wider uppercase hover:bg-[#cdeace] hover:text-[#181f21] transition-colors rounded-xl cursor-pointer flex items-center gap-2"
          >
            Konsultasi Business Brand
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Unifying Philosophy Banner */}
      <div className="bg-[#e8d3c0] p-8 md:p-10 rounded-[2rem] border border-[#d6bfab] mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-widest text-[#4b644e] uppercase block mb-2">
              FOUNDATIONAL PHILOSOPHY
            </span>
            <h4 className="font-serif text-2xl font-medium text-[#181f21] mb-3">
              {data.philosophy.title}
            </h4>
            <p className="text-base text-[#434749] leading-relaxed">
              {data.philosophy.description}
            </p>
          </div>
          <button
            onClick={onBookConsultation}
            className="px-8 py-4 bg-[#181f21] text-[#fef9ef] hover:bg-[#4b644e] transition-colors text-xs font-semibold tracking-wider uppercase rounded-xl cursor-pointer whitespace-nowrap shadow-lg"
          >
            Sesi Pembongkaran Mental Block
          </button>
        </div>
      </div>

      {/* Consultation Process (Apa yang Anda Dapatkan) */}
      <div>
        <div className="max-w-2xl mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-medium text-[#181f21] mb-3">
            {data.processTitle}
          </h3>
          <p className="text-base text-[#434749]">
            {data.processSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.processSteps.map((step) => (
            <div key={step.id} className="bg-[#f8f3ea] p-8 rounded-[1.5rem] border border-[#e8d3c0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-2xl font-bold text-[#4b644e]">
                    {step.stepNumber}
                  </span>
                  <span className="material-symbols-outlined text-3xl text-[#4b644e]">
                    {step.icon}
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-medium text-[#181f21] mb-6">
                  {step.title}
                </h4>
                <ul className="space-y-3">
                  {step.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-[#434749] flex items-start gap-2.5 leading-snug">
                      <span className="material-symbols-outlined text-[#4b644e] text-base mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
