import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/content';
import { TextReveal } from './ui/cascade-text';

interface NavbarProps {
  onBookConsultation: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookConsultation, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = UI_TRANSLATIONS[language].nav;

  const navLinks = [
    { label: t.about, href: 'about' },
    { label: t.expertise, href: 'expertise' },
    { label: t.offerings, href: 'offerings' },
    { label: t.services, href: 'programs' },
    { label: t.research, href: 'research' },
    { label: t.podcast, href: 'podcast' },
    { label: t.articles, href: 'articles' },
    { label: t.contact, href: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header className="bg-[#fef9ef]/90 backdrop-blur-xl sticky top-0 z-50 border-b border-[#c3c7c8]/30 transition-all duration-300">
      <nav className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-[1440px] mx-auto gap-4">
        {/* Brand Name */}
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'top')}
          className="shrink-0 flex items-center"
        >
          <TextReveal 
            text="ERICA ADRIANA" 
            as="span" 
            className="font-serif text-xl md:text-2xl font-semibold tracking-[0.15em] text-[#181f21]" 
            hoverColor="#4b644e"
            duration={250}
            staggerDelay={20}
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[12px] font-semibold tracking-[0.08em] uppercase transition-colors duration-300 text-[#434749] hover:text-[#181f21]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Language Switcher & CTA */}
        <div className="flex items-center gap-4">
          {/* Language Switcher Pill */}
          <div className="flex items-center bg-[#f2ede4] rounded-full p-1 border border-[#c3c7c8]/40 text-[11px] font-bold tracking-wider">
            <button
              onClick={() => setLanguage('id')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'id'
                  ? 'bg-[#181f21] text-[#fef9ef] shadow-sm'
                  : 'text-[#747879] hover:text-[#181f21]'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#181f21] text-[#fef9ef] shadow-sm'
                  : 'text-[#747879] hover:text-[#181f21]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden sm:block">
            <button
              onClick={onBookConsultation}
              className="px-5 py-2.5 border border-[#181f21] text-[#181f21] font-sans text-[11px] md:text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-[#181f21] hover:text-[#fef9ef] transition-all duration-300 cursor-pointer rounded-sm shrink-0 whitespace-nowrap"
            >
              {t.bookConsultation}
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#181f21] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fef9ef] border-b border-[#c3c7c8]/30 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold tracking-[0.1em] uppercase text-[#434749] hover:text-[#181f21] py-1 border-b border-[#f2ede4]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookConsultation();
            }}
            className="w-full mt-4 py-3 bg-[#181f21] text-[#fef9ef] text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[#4b644e] transition-colors rounded-lg"
          >
            {t.bookConsultation}
          </button>
        </div>
      )}
    </header>
  );
};
