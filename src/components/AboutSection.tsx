import React from 'react';
import { ABOUT_DATA } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onLearnMoreStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreStory }) => {
  const { language } = useLanguage();
  const data = ABOUT_DATA[language];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Image Column with Stat Overlay */}
        <div className="relative">
          <div className="w-full h-[480px] md:h-[580px] rounded-[1.5rem] overflow-hidden shadow-xl bg-[#f2ede4]">
            <img
              src={data.portraitImage}
              alt="Erica Adriana"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Glass Stat Overlay Card */}
          <div className="absolute -right-2 md:-right-8 -bottom-6 md:-bottom-8 glass px-6 md:px-8 py-6 md:py-7 rounded-[1.5rem] shadow-xl border border-white/50 max-w-[95%] sm:max-w-none">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="p-2">
                  <div className="font-serif text-2xl md:text-3xl font-medium text-[#181f21]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-[11px] font-semibold tracking-wider text-[#434749] uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Bio Column */}
        <div className="mt-12 md:mt-0">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-[#4b644e] mb-4 block uppercase">
            {data.tagline}
          </span>

          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6 leading-tight text-[#181f21] whitespace-pre-line">
            {data.headline}
          </h2>

          <div className="space-y-4 text-base md:text-lg text-[#434749] mb-8 leading-relaxed">
            <p>{data.bioParagraph1}</p>
            {data.bioParagraph2 && <p>{data.bioParagraph2}</p>}
            {data.bioParagraph3 && <p className="text-sm md:text-base text-[#181f21] font-medium bg-[#f8f3ea] p-4 rounded-xl border-l-4 border-[#4b644e]">{data.bioParagraph3}</p>}
          </div>

          <blockquote className="text-base md:text-xl font-serif text-[#181f21] mb-10 italic border-l-2 border-[#4b644e] pl-6 leading-relaxed">
            "{data.quote}"
          </blockquote>

          <button
            onClick={onLearnMoreStory}
            className="px-8 py-4 bg-[#181f21] text-[#fef9ef] hover:bg-[#4b644e] transition-all text-[12px] font-semibold tracking-[0.1em] uppercase cursor-pointer rounded-xl shadow-lg"
          >
            {data.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

