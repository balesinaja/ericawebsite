import React from 'react';
import { UI_TRANSLATIONS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface CallToActionProps {
  onBookCall: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onBookCall }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].cta;

  return (
    <section className="py-32 md:py-40 relative bg-[#fef9ef] overflow-hidden border-t border-[#c3c7c8]/30">
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto relative z-10 text-center">
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-semibold mb-8 leading-[1.05] text-[#181f21]">
          {t.titleLine1} <br />
          <span className="italic text-stroke text-[#181f21]">
            {t.titleLine2}
          </span>
        </h2>

        <p className="text-base md:text-lg text-[#434749] max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.description}
        </p>

        {/* Calendar Availability Summary Card */}
        <div className="max-w-xl mx-auto mb-10 p-6 bg-[#f8f3ea] border border-[#e8d3c0] rounded-2xl text-left shadow-sm">
          <div className="flex items-center justify-between mb-3 border-b border-[#c3c7c8]/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4b644e] text-2xl">calendar_month</span>
              <h4 className="font-serif text-lg font-medium text-[#181f21]">Jadwal Konsultasi Terbuka</h4>
            </div>
            <span className="text-[10px] font-bold tracking-wider bg-[#25D366]/20 text-[#1ebd59] px-2.5 py-1 rounded-full uppercase">
              Slot Tersedia
            </span>
          </div>

          <p className="text-xs text-[#434749] leading-relaxed mb-4">
            Pilih tanggal & sesi waktu melalui kalender interaktif untuk berkonsultasi langsung mengenai strategi Personal Brand maupun Business Brand Anda.
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs mb-4">
            <div className="bg-[#fef9ef] p-2.5 rounded-xl border border-[#c3c7c8]/30 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#4b644e]">schedule</span>
              <span>09:00 - 16:30 WIB</span>
            </div>
            <div className="bg-[#fef9ef] p-2.5 rounded-xl border border-[#c3c7c8]/30 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#4b644e]">support_agent</span>
              <span>Privat 1-on-1 Sesi</span>
            </div>
          </div>

          <button
            onClick={onBookCall}
            className="w-full py-3 bg-[#4b644e] hover:bg-[#181f21] text-[#fef9ef] text-xs font-semibold tracking-wider uppercase transition-colors rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>Pilih Tanggal di Kalender Konsultasi</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 flex-wrap">
          <button
            onClick={onBookCall}
            className="px-8 md:px-10 py-4 bg-[#181f21] text-[#fef9ef] text-[12px] font-semibold tracking-[0.1em] uppercase hover:scale-105 transition-all duration-300 shadow-xl rounded-2xl cursor-pointer"
          >
            {t.bookCall}
          </button>

          {/* WhatsApp button with uploaded WhatsApp app icon */}
          <a
            href="https://wa.me/6285813638787"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-white text-[12px] font-bold tracking-[0.05em] uppercase rounded-2xl hover:scale-105 transition-all shadow-md cursor-pointer border border-[#1ebd59]"
          >
            <svg className="w-6 h-6 shrink-0 shadow-sm rounded-lg" viewBox="0 0 256 256">
              <rect width="256" height="256" rx="56" fill="#25D366" />
              <path
                fill="#FFFFFF"
                d="M128 36c-50.8 0-92 41.2-92 92 0 16.3 4.2 31.6 11.6 45L36 220l48.3-12.7c12.9 7 27.6 11 43.7 11 50.8 0 92-41.2 92-92S178.8 36 128 36zm0 167.3c-14.2 0-27.6-3.8-39.2-10.6l-2.8-1.6-29.1 7.6 7.8-28.3-1.8-2.9c-7.4-11.7-11.4-25.5-11.4-40.1 0-41.6 33.8-75.4 75.4-75.4s75.4 33.8 75.4 75.4-33.8 75.9-75.4 75.9zm41.4-56.6c-2.3-1.1-13.5-6.6-15.5-7.4-2.1-.8-3.6-1.1-5.1 1.1-1.5 2.3-5.9 7.4-7.2 8.9-1.3 1.5-2.7 1.7-4.9.6-2.3-1.1-9.5-3.5-18.2-11.2-6.7-6-11.3-13.4-12.6-15.6-1.3-2.3-.1-3.5 1-4.6 1.1-1 2.3-2.7 3.4-4 1.1-1.3 1.5-2.3 2.3-3.8.8-1.5.4-2.8-.2-4-.6-1.1-5.1-12.4-7.1-17-1.9-4.5-3.8-3.9-5.1-3.9h-4.4c-1.5 0-3.9.6-6 2.8-2.1 2.3-7.9 7.7-7.9 18.8s8.1 21.8 9.3 23.4c1.2 1.5 15.9 24.3 38.6 34.1 5.4 2.3 9.6 3.7 12.8 4.7 5.4 1.7 10.4 1.5 14.3.9 4.4-.7 13.5-5.5 15.4-10.8 1.9-5.3 1.9-9.8 1.3-10.8-.5-1-2.1-1.5-4.4-2.7z"
              />
            </svg>
            <span>{t.waChat}</span>
          </a>

          {/* Instagram button with uploaded Instagram app icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-[12px] font-bold tracking-[0.05em] uppercase rounded-2xl hover:scale-105 transition-all shadow-md cursor-pointer border border-white/20"
          >
            <svg className="w-6 h-6 shrink-0 shadow-sm" viewBox="0 0 256 256">
              <defs>
                <radialGradient id="igAppGrad" cx="30%" cy="107%" r="130%" fx="30%" fy="107%">
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="10%" stopColor="#fdf497" />
                  <stop offset="50%" stopColor="#fd5949" />
                  <stop offset="68%" stopColor="#d6249f" />
                  <stop offset="100%" stopColor="#285AEB" />
                </radialGradient>
              </defs>
              <rect width="256" height="256" rx="56" fill="url(#igAppGrad)" />
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="18"
                d="M172 48H84C64.1 48 48 64.1 48 84v88c0 19.9 16.1 36 36 36h88c19.9 0 36-16.1 36-36V84c0-19.9-16.1-36-36-36z"
              />
              <circle cx="128" cy="128" r="36" fill="none" stroke="#FFFFFF" strokeWidth="18" />
              <circle cx="178" cy="78" r="11" fill="#FFFFFF" />
            </svg>
            <span>Instagram</span>
          </a>

          {/* Email button with uploaded Gmail app icon */}
          <a
            href="mailto:eadr.sermm@gmail.com"
            className="flex items-center gap-3 px-6 py-3.5 bg-white text-[#181f21] text-[12px] font-bold tracking-[0.05em] uppercase rounded-2xl hover:scale-105 transition-all shadow-md cursor-pointer border border-[#c3c7c8]/60 hover:border-[#181f21]"
          >
            <svg className="w-6 h-6 shrink-0 shadow-sm" viewBox="0 0 256 256">
              <rect width="256" height="256" rx="56" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
              <g transform="translate(32, 48)">
                <path fill="#4285F4" d="M24 160V64l72 54L24 160z" />
                <path fill="#34A853" d="M168 160V64l-72 54L168 160z" />
                <path fill="#EA4335" d="M168 32v32L96 118L24 64V32c0-8.8 7.2-16 16-16h112c8.8 0 16 7.2 16 16z" />
                <path fill="#FBBC04" d="M168 32v32L96 118V64l72-48c0 0 0 8.8 0 16z" />
              </g>
            </svg>
            <span>eadr.sermm@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#cdeace]/20 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
};
