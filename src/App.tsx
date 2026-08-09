import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { OfferingsSection } from './components/OfferingsSection';
import { ServicesSection } from './components/ServicesSection';
import { ParallaxShowcase } from './components/ParallaxShowcase';
import { ResearchSection } from './components/ResearchSection';
import { PodcastSection } from './components/PodcastSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

import { BookingModal } from './components/BookingModal';
import { StoryModal } from './components/StoryModal';
import { ResearchModal } from './components/ResearchModal';
import { ArticleModal } from './components/ArticleModal';

import { ResearchPaper, Article } from './types';
import { ARTICLES_DATA } from './data/content';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainAppContent() {
  const { language } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fef9ef] text-[#1d1c16] font-sans selection:bg-[#cdeace] selection:text-[#516a54]">
      {/* Top Navbar */}
      <Navbar
        onBookConsultation={() => setBookingOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <main id="top">
        <Hero
          onBookConsultation={() => setBookingOpen(true)}
          onExploreWork={() => handleNavigate('offerings')}
        />

        {/* Who Is Erica? About Section */}
        <AboutSection
          onLearnMoreStory={() => setStoryOpen(true)}
        />

        {/* Tiga Fondasi di Balik Setiap Brand (Expertise Section) */}
        <ExpertiseSection />

        {/* Penawaran Utama & Sesi Pembongkaran Mental Block */}
        <OfferingsSection
          onBookConsultation={() => setBookingOpen(true)}
        />

        {/* Layanan Saya & Signature Approach */}
        <ServicesSection
          onBookConsultation={() => setBookingOpen(true)}
        />

        {/* Text Parallax Content Scroll Section */}
        <ParallaxShowcase
          onBookConsultation={() => setBookingOpen(true)}
          onExploreWork={() => handleNavigate('research')}
        />

        {/* Featured Research Publications */}
        <ResearchSection
          onSelectPaper={(paper) => setSelectedPaper(paper)}
        />

        {/* Erica After Hours Podcast Section */}
        <PodcastSection />

        {/* Voices of Trust Testimonials */}
        <TestimonialsSection />

        {/* Knowledge Sharing Articles */}
        <ArticlesSection
          onSelectArticle={(article) => setSelectedArticle(article)}
          onViewAllArticles={() => setSelectedArticle(ARTICLES_DATA[language][0])}
        />

        {/* Bottom Hero Call to Action */}
        <CallToAction
          onBookCall={() => setBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onBookConsultation={() => setBookingOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <StoryModal
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
        onBookConsultation={() => setBookingOpen(true)}
      />

      <ResearchModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}

export default App;
