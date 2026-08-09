import React, { useState } from 'react';
import { PODCAST_DATA, UI_TRANSLATIONS } from '../data/content';
import { PodcastEpisode } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const PodcastSection: React.FC = () => {
  const { language } = useLanguage();
  const episodes = PODCAST_DATA[language];
  const t = UI_TRANSLATIONS[language].podcast;

  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(35);

  const handlePlayClick = (ep?: PodcastEpisode) => {
    const selected = ep || episodes[0];
    if (activeEpisode?.id === selected.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveEpisode(selected);
      setIsPlaying(true);
      setPlaybackProgress(10);
    }
  };

  return (
    <section id="podcast" className="py-24 md:py-32 bg-[#181f21] text-[#fef9ef] relative overflow-hidden scroll-mt-20">
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="md:col-span-7 relative">
            {/* Watermark text */}
            <div className="absolute -top-16 -left-12 text-[120px] md:text-[180px] font-serif font-bold text-white/[0.03] select-none pointer-events-none hidden sm:block">
              PODCAST
            </div>

            <span className="text-[12px] font-semibold tracking-[0.4em] text-[#cdeace] mb-6 block uppercase">
              {t.tagline}
            </span>

            <h2 className="font-serif text-5xl md:text-7xl lg:text-[80px] font-semibold mb-6 leading-none tracking-tight">
              {t.title1} <br />
              <span className="italic font-normal">{t.title2}</span>
            </h2>

            <p className="text-lg md:text-xl text-[#e7e2d9] mb-10 max-w-md leading-relaxed">
              {t.description}
            </p>

            {/* Platform pills */}
            <div className="space-y-4">
              <p className="text-[11px] font-semibold tracking-widest text-[#cdeace] uppercase">
                {t.listenOn}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-[#cdeace] text-[#08200f] rounded-full text-xs font-semibold hover:scale-105 transition-transform"
                >
                  <span className="material-symbols-outlined text-lg">podcasts</span>
                  Spotify
                </a>

                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 border border-white/20 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">play_circle</span>
                  YouTube
                </a>

                <a 
                  href="https://apple.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 border border-white/20 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">radio</span>
                  Apple Podcasts
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cover Image & Episode Quick Player */}
          <div className="md:col-span-5 relative group">
            <div className="aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-700 shadow-2xl bg-[#2d3436]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEzWpYjmuoiodT_5K2sOhfrPW2RFGQeyViaJI6NSRNAkCjoiFb0fLY-g6iJpf7w8p0cbSlEsSLTG5SkrvKgGTLayxONo23by4ms1bdAtNTBLCXyisNifGy_gTFn1DbvuN-HAC0A_uJ98bN72A-0mYDJfqr1hahaZrb062NiXJMtLVSM0I9ZL2Jd2vvqvmwntzPErkYwb60mCOQgnGx5PUHSRx1GV-IBATsZ6SVrTcBAHWHo5QlRNRu43QpxjGTYx8Bukssy6T4NSyJ"
                alt="Erica After Hours Podcast Cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Play Button Trigger */}
            <button
              onClick={() => handlePlayClick()}
              className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 w-28 h-28 md:w-36 md:h-36 bg-[#4b644e] hover:bg-[#516a54] text-[#fef9ef] rounded-full flex items-center justify-center shadow-2xl cursor-pointer group/btn transition-transform hover:scale-105"
              aria-label="Play podcast sample"
            >
              <span className="material-symbols-outlined fill text-4xl md:text-5xl group-hover/btn:scale-110 transition-transform">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
          </div>
        </div>

        {/* Podcast Episode List & Built-in Player Drawer */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <h3 className="text-xs font-semibold tracking-widest text-[#cdeace] uppercase mb-6">
            {t.featuredEpisodes}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {episodes.map((ep) => {
              const isThisActive = activeEpisode?.id === ep.id;
              return (
                <div
                  key={ep.id}
                  onClick={() => handlePlayClick(ep)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isThisActive
                      ? 'bg-[#2d3436] border-[#cdeace]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs text-[#cdeace] font-semibold tracking-wider uppercase mb-2">
                    <span>{t.episode} {ep.episodeNumber}</span>
                    <span>{ep.duration}</span>
                  </div>

                  <h4 className="font-serif text-lg font-medium text-[#fef9ef] mb-3 line-clamp-2">
                    {ep.title}
                  </h4>

                  <p className="text-xs text-[#959c9f] leading-relaxed line-clamp-2 mb-4">
                    {ep.summary}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#cdeace]">
                    <span className="material-symbols-outlined text-sm">
                      {isThisActive && isPlaying ? 'pause_circle' : 'play_circle'}
                    </span>
                    {isThisActive && isPlaying ? t.nowPlaying : t.listenEpisode}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Audio Control Bar */}
          {activeEpisode && (
            <div className="mt-8 bg-[#2d3436] p-4 md:p-6 rounded-2xl border border-[#cdeace]/40 flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom duration-300">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-[#cdeace] text-[#08200f] rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined fill text-2xl">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <div>
                  <span className="text-[10px] font-semibold text-[#cdeace] uppercase tracking-wider block">
                    {t.episode} {activeEpisode.episodeNumber} • {activeEpisode.duration}
                  </span>
                  <h5 className="font-serif text-sm font-medium text-white line-clamp-1">
                    {activeEpisode.title}
                  </h5>
                </div>
              </div>

              {/* Progress Slider simulation */}
              <div className="w-full md:w-1/3 flex items-center gap-3">
                <span className="text-[10px] text-[#959c9f]">02:14</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={playbackProgress}
                  onChange={(e) => setPlaybackProgress(Number(e.target.value))}
                  className="w-full h-1 bg-white/20 accent-[#cdeace] rounded-lg cursor-pointer"
                />
                <span className="text-[10px] text-[#959c9f]">{activeEpisode.duration}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Blur Accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#cdeace]/10 blur-[150px] pointer-events-none" />
    </section>
  );
};
