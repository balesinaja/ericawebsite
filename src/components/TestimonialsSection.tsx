import React from 'react';
import { TESTIMONIALS_DATA, UI_TRANSLATIONS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const testimonials = TESTIMONIALS_DATA[language];
  const t = UI_TRANSLATIONS[language].testimonials;

  return (
    <section className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-[12px] font-semibold tracking-[0.2em] text-[#4b644e] mb-3 block uppercase">
          {t.tagline}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#181f21]">
          {t.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => {
          const isMiddleCard = index === 1;
          return (
            <div
              key={item.id}
              className={`p-8 md:p-12 rounded-3xl relative flex flex-col justify-between transition-all duration-300 ${
                isMiddleCard
                  ? 'bg-[#f2ede4] shadow-md border border-white/60'
                  : 'border border-[#c3c7c8]/50 bg-[#fef9ef]'
              }`}
            >
              {/* Quote icon background mark */}
              <span className="material-symbols-outlined text-6xl text-[#c3c7c8]/30 absolute top-8 right-8 select-none pointer-events-none">
                format_quote
              </span>

              <div>
                {/* 5 Rating Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(item.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined fill text-[#4b644e] text-xl"
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Quote body */}
                <p className="font-serif text-lg md:text-xl text-[#1d1c16] mb-10 leading-relaxed italic">
                  {item.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#c3c7c8]/50 bg-[#f8f3ea]">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-[#181f21] text-sm md:text-base">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-semibold text-[#434749] tracking-wider uppercase">
                    {item.title}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
