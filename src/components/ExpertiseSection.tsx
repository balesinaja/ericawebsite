import React from 'react';
import { FOUNDATIONS_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

export const ExpertiseSection: React.FC = () => {
  const { language } = useLanguage();
  const data = FOUNDATIONS_DATA[language];

  return (
    <section id="expertise" className="py-24 md:py-32 bg-[#f8f3ea] scroll-mt-20">
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-[#4b644e] mb-3 block uppercase">
            {data.tagline}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#181f21] mb-4">
            {data.title}
          </h2>
          <p className="text-base md:text-lg text-[#434749]">
            {data.subhead}
          </p>
        </div>

        {/* 3 Column Foundations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#e8d3c0] p-8 md:p-10 rounded-[2rem] hover:bg-[#181f21] transition-all duration-500 flex flex-col justify-between group shadow-md hover:shadow-2xl border border-[#d6bfab]"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#4b644e]/10 group-hover:bg-[#4b644e] flex items-center justify-center mb-6 transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl text-[#4b644e] group-hover:text-[#fef9ef] transition-colors">
                    {pillar.icon}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium mb-6 text-[#181f21] group-hover:text-[#fef9ef] transition-colors duration-300">
                  {pillar.title}
                </h3>

                <ul className="space-y-3">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-[#434749] group-hover:text-[#fef9ef]/90 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4b644e] group-hover:bg-[#cdeace]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#d6bfab]/60 group-hover:border-[#384346] flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-widest text-[#4b644e] group-hover:text-[#cdeace] uppercase">
                  DISCIPLINE PILLAR
                </span>
                <span className="material-symbols-outlined text-sm text-[#747879] group-hover:text-[#fef9ef] group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

