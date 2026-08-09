import React, { useState } from 'react';
import { UI_TRANSLATIONS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBookConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookConsultation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].footer;
  const navT = UI_TRANSLATIONS[language].nav;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#181f21] text-[#fef9ef] relative scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-20 py-16 md:py-20 max-w-[1440px] mx-auto">
        {/* Column 1: Brand & Bio */}
        <div className="lg:col-span-1">
          <div className="font-serif text-2xl font-semibold text-[#fef9ef] tracking-widest mb-6">
            ERICA ADRIANA
          </div>
          <p className="text-[#e7e2d9] text-sm leading-relaxed mb-8 max-w-xs">
            {t.brandTagline}
          </p>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#fef9ef] hover:bg-[#cdeace] hover:text-[#08200f] transition-all"
              aria-label="LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#fef9ef] hover:bg-[#cdeace] hover:text-[#08200f] transition-all"
              aria-label="Instagram Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/6285813638787"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#fef9ef] hover:bg-[#25D366] hover:text-white transition-all"
              aria-label="WhatsApp Contact"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-[12px] font-semibold tracking-widest text-[#fef9ef] uppercase mb-6">
            {t.quickLinks}
          </h4>
          <ul className="space-y-3.5 text-sm text-[#e7e2d9]">
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-[#cdeace] transition-colors cursor-pointer"
              >
                {navT.about}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('speaking')}
                className="hover:text-[#cdeace] transition-colors cursor-pointer"
              >
                {navT.speaking}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('research')}
                className="hover:text-[#cdeace] transition-colors cursor-pointer"
              >
                {navT.research}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="hover:text-[#cdeace] transition-colors cursor-pointer"
              >
                {navT.services}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-[12px] font-semibold tracking-widest text-[#fef9ef] uppercase mb-6">
            {t.resources}
          </h4>
          <ul className="space-y-3.5 text-sm text-[#e7e2d9]">
            <li>
              <button
                onClick={() => onNavigate('podcast')}
                className="hover:text-[#cdeace] transition-colors cursor-pointer"
              >
                {navT.podcast}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('articles')}
                className="hover:text-[#cdeace] transition-colors cursor-pointer"
              >
                {navT.articles}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('research')}
                className="hover:text-[#cdeace] transition-colors cursor-pointer"
              >
                {navT.research}
              </button>
            </li>
            <li>
              <button
                onClick={onBookConsultation}
                className="hover:text-[#cdeace] transition-colors cursor-pointer"
              >
                {navT.bookConsultation}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Connect & Newsletter */}
        <div>
          <h4 className="text-[12px] font-semibold tracking-widest text-[#fef9ef] uppercase mb-6">
            {t.connect}
          </h4>
          <div className="space-y-3.5 text-sm text-[#e7e2d9] mb-8">
            <a
              href="https://wa.me/6285813638787"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[#cdeace] transition-colors"
            >
              <svg className="w-5 h-5 shrink-0 rounded-md" viewBox="0 0 256 256">
                <rect width="256" height="256" rx="56" fill="#25D366" />
                <path
                  fill="#FFFFFF"
                  d="M128 36c-50.8 0-92 41.2-92 92 0 16.3 4.2 31.6 11.6 45L36 220l48.3-12.7c12.9 7 27.6 11 43.7 11 50.8 0 92-41.2 92-92S178.8 36 128 36zm0 167.3c-14.2 0-27.6-3.8-39.2-10.6l-2.8-1.6-29.1 7.6 7.8-28.3-1.8-2.9c-7.4-11.7-11.4-25.5-11.4-40.1 0-41.6 33.8-75.4 75.4-75.4s75.4 33.8 75.4 75.4-33.8 75.9-75.4 75.9zm41.4-56.6c-2.3-1.1-13.5-6.6-15.5-7.4-2.1-.8-3.6-1.1-5.1 1.1-1.5 2.3-5.9 7.4-7.2 8.9-1.3 1.5-2.7 1.7-4.9.6-2.3-1.1-9.5-3.5-18.2-11.2-6.7-6-11.3-13.4-12.6-15.6-1.3-2.3-.1-3.5 1-4.6 1.1-1 2.3-2.7 3.4-4 1.1-1.3 1.5-2.3 2.3-3.8.8-1.5.4-2.8-.2-4-.6-1.1-5.1-12.4-7.1-17-1.9-4.5-3.8-3.9-5.1-3.9h-4.4c-1.5 0-3.9.6-6 2.8-2.1 2.3-7.9 7.7-7.9 18.8s8.1 21.8 9.3 23.4c1.2 1.5 15.9 24.3 38.6 34.1 5.4 2.3 9.6 3.7 12.8 4.7 5.4 1.7 10.4 1.5 14.3.9 4.4-.7 13.5-5.5 15.4-10.8 1.9-5.3 1.9-9.8 1.3-10.8-.5-1-2.1-1.5-4.4-2.7z"
                />
              </svg>
              <span>WhatsApp: 0858 1363 8787</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[#cdeace] transition-colors"
            >
              <svg className="w-5 h-5 shrink-0 rounded-md" viewBox="0 0 256 256">
                <defs>
                  <radialGradient id="igFooterGrad" cx="30%" cy="107%" r="130%" fx="30%" fy="107%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="10%" stopColor="#fdf497" />
                    <stop offset="50%" stopColor="#fd5949" />
                    <stop offset="68%" stopColor="#d6249f" />
                    <stop offset="100%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <rect width="256" height="256" rx="56" fill="url(#igFooterGrad)" />
                <path
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="18"
                  d="M172 48H84C64.1 48 48 64.1 48 84v88c0 19.9 16.1 36 36 36h88c19.9 0 36-16.1 36-36V84c0-19.9-16.1-36-36-36z"
                />
                <circle cx="128" cy="128" r="36" fill="none" stroke="#FFFFFF" strokeWidth="18" />
                <circle cx="178" cy="78" r="11" fill="#FFFFFF" />
              </svg>
              <span>Instagram: @erica.adriana</span>
            </a>
            <a
              href="tel:085813638787"
              className="flex items-center gap-3 hover:text-[#cdeace] transition-colors"
            >
              <span className="material-symbols-outlined text-lg shrink-0">call</span>
              <span>{t.phoneLabel}: 0858 1363 8787</span>
            </a>
            <a
              href="mailto:eadr.sermm@gmail.com"
              className="flex items-center gap-3 hover:text-[#cdeace] transition-colors"
            >
              <svg className="w-5 h-5 shrink-0 rounded-md" viewBox="0 0 256 256">
                <rect width="256" height="256" rx="56" fill="#FFFFFF" />
                <g transform="translate(32, 48)">
                  <path fill="#4285F4" d="M24 160V64l72 54L24 160z" />
                  <path fill="#34A853" d="M168 160V64l-72 54L168 160z" />
                  <path fill="#EA4335" d="M168 32v32L96 118L24 64V32c0-8.8 7.2-16 16-16h112c8.8 0 16 7.2 16 16z" />
                  <path fill="#FBBC04" d="M168 32v32L96 118V64l72-48c0 0 0 8.8 0 16z" />
                </g>
              </svg>
              <span>Email: eadr.sermm@gmail.com</span>
            </a>
          </div>

          <div>
            <h5 className="text-[11px] font-semibold tracking-widest text-[#e7e2d9] uppercase mb-3">
              {t.subscribeLabel}
            </h5>

            {subscribed ? (
              <div className="p-3 bg-[#cdeace]/20 border border-[#cdeace] text-[#cdeace] rounded-lg text-xs font-medium">
                {t.subscribedSuccess}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-white/30 pb-2">
                <input
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none focus:outline-none text-sm text-[#fef9ef] placeholder:text-white/40 w-full"
                />
                <button
                  type="submit"
                  className="text-[#fef9ef] hover:text-[#cdeace] transition-colors px-2 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Sub-footer */}
      <div className="border-t border-white/10 py-8 px-6 md:px-20 max-w-[1440px] mx-auto text-center">
        <p className="text-[#959c9f] text-[10px] font-semibold tracking-widest uppercase">
          {t.rights}
        </p>
      </div>
    </footer>
  );
};
