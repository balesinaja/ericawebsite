import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onBookConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookConsultation }) => {
  const { language } = useLanguage();
  const data = SERVICES_DATA[language];

  return (
    <section id="programs" className="py-24 md:py-32 bg-[#f8f3ea] scroll-mt-20">
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        {/* Header & Signature Approach */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="text-[12px] font-semibold tracking-[0.2em] text-[#4b644e] mb-3 block uppercase">
              {data.tagline}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#181f21] mb-4">
              {data.title}
            </h2>
            <p className="text-base md:text-lg text-[#434749]">
              {data.intro}
            </p>
          </div>

          {/* Signature Approach Pillar Pill Badge */}
          <div className="bg-[#e8d3c0] p-6 rounded-2xl border border-[#d6bfab] shrink-0">
            <span className="text-[11px] font-semibold tracking-widest text-[#4b644e] uppercase block mb-3">
              {data.signatureApproach.title}
            </span>
            <div className="flex flex-wrap gap-2">
              {data.signatureApproach.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#fef9ef] text-[#181f21] text-xs font-semibold rounded-lg shadow-sm border border-[#d6bfab]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-[#fef9ef] p-8 rounded-[1.5rem] border border-[#e8d3c0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-[#4b644e] bg-[#4b644e]/10 px-3 py-1 rounded-full uppercase">
                    {service.category}
                  </span>
                  <span className="font-serif text-xl font-bold text-[#747879]">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#181f21] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[#434749] leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.tags && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-[#f8f3ea] text-[#181f21] px-3 py-1 rounded-md border border-[#e8d3c0] font-medium"
                      >
                        • {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={onBookConsultation}
                className="w-full py-3 bg-[#181f21] text-[#fef9ef] hover:bg-[#4b644e] transition-colors text-xs font-semibold tracking-wider uppercase rounded-xl cursor-pointer flex items-center justify-center gap-2 mt-4"
              >
                Pilih Layanan Ini
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
