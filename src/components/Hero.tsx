import React from 'react';
import { HERO_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { TextReveal } from './ui/cascade-text';

interface HeroProps {
  onBookConsultation: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookConsultation, onExploreWork }) => {
  const { language } = useLanguage();
  const data = HERO_DATA[language];

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-12 pb-20 px-6 md:px-20 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-12 gap-10 md:gap-8 w-full relative z-10 items-center">
        {/* Left Content Column */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-[#4b644e] mb-4 uppercase block">
            {data.subtitle}
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] font-semibold mb-4 leading-[0.98] text-[#181f21] flex flex-wrap items-baseline gap-x-4">
            <TextReveal 
              text={data.name} 
              as="span" 
              className="font-serif font-semibold text-[#181f21]" 
              hoverColor="#4b644e"
              duration={300}
              staggerDelay={35}
            />
            <TextReveal 
              text={data.surname} 
              as="span" 
              className="font-serif font-semibold italic text-stroke text-[#181f21]" 
              hoverColor="#4b644e"
              duration={300}
              staggerDelay={35}
            />
          </h1>

          <h2 className="font-serif text-2xl md:text-4xl italic text-[#4b644e] font-normal mb-6 leading-tight">
            "{data.headline}"
          </h2>
          
          <p className="text-base md:text-lg text-[#434749] max-w-xl mb-10 leading-relaxed">
            {data.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <button
              onClick={onBookConsultation}
              className="px-8 md:px-10 py-4 md:py-5 bg-[#181f21] text-[#fef9ef] text-[12px] font-semibold tracking-[0.1em] uppercase hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-xl cursor-pointer"
            >
              {data.ctaPrimary}
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <button
              onClick={onExploreWork}
              className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#434749] hover:text-[#181f21] flex items-center gap-2 group transition-colors cursor-pointer py-2"
            >
              {data.ctaSecondary}
              <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">
                arrow_downward
              </span>
            </button>
          </div>
        </div>

        {/* Right Portrait Column */}
        <div className="md:col-span-5 relative mt-8 md:mt-0">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-[#f8f3ea]">
            <img
              src={data.portraitImage}
              alt="Erica Adriana - Brand Strategist"
              className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
            />
          </div>

          {/* Floating Glass Quote Box */}
          <div className="absolute -bottom-8 -left-6 md:-left-10 glass p-6 md:p-8 rounded-2xl max-w-[260px] md:max-w-[280px] z-20 shadow-xl border border-white/40 hidden sm:block animate-in fade-in zoom-in duration-500">
            <span className="material-symbols-outlined fill text-[#4b644e] text-3xl mb-3 block">
              format_quote
            </span>
            <p className="text-sm md:text-base italic text-[#1d1c16] leading-relaxed font-serif">
              "{data.quote}"
            </p>
            <p className="text-[11px] font-semibold text-[#4b644e] mt-3 tracking-widest uppercase">
              — {data.quoteAuthor}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#cdeace]/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
};
