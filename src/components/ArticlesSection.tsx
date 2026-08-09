import React from 'react';
import { ARTICLES_DATA, UI_TRANSLATIONS } from '../data/content';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
  onViewAllArticles: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  onSelectArticle,
  onViewAllArticles,
}) => {
  const { language } = useLanguage();
  const articles = ARTICLES_DATA[language];
  const t = UI_TRANSLATIONS[language].articles;

  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const sideArticles = articles.filter((a) => a.id !== featuredArticle.id);

  return (
    <section id="articles" className="py-24 md:py-32 bg-[#f8f3ea] scroll-mt-20">
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-[12px] font-semibold tracking-[0.2em] text-[#4b644e] mb-3 block uppercase">
              {t.tagline}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#181f21]">
              {t.title}
            </h2>
          </div>

          <button
            onClick={onViewAllArticles}
            className="px-6 py-3 border border-[#181f21] text-[#181f21] font-sans text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-[#181f21] hover:text-[#fef9ef] transition-all cursor-pointer"
          >
            {t.viewAll}
          </button>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Large Featured Article */}
          <article
            onClick={() => onSelectArticle(featuredArticle)}
            className="group cursor-pointer bg-[#fef9ef] p-6 md:p-8 rounded-3xl border border-white/80 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-[280px] md:h-[380px] rounded-2xl overflow-hidden mb-8 bg-[#f2ede4]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-5 left-5 px-4 py-1.5 glass rounded-full text-[11px] font-semibold tracking-wider text-[#181f21] uppercase">
                {featuredArticle.category}
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#434749] text-[11px] font-semibold tracking-widest uppercase mb-4">
              <span>{featuredArticle.date}</span>
              <span className="w-1 h-1 bg-[#747879] rounded-full" />
              <span>{featuredArticle.readTime}</span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-[#181f21] group-hover:text-[#4b644e] transition-colors leading-snug">
              {featuredArticle.title}
            </h3>

            <p className="text-sm text-[#434749] leading-relaxed line-clamp-2">
              {featuredArticle.excerpt}
            </p>
          </article>

          {/* Side Articles List */}
          <div className="flex flex-col gap-6 md:gap-8">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="flex flex-col sm:flex-row gap-6 p-5 rounded-2xl bg-[#fef9ef] border border-white/60 shadow-sm hover:shadow-md transition-all cursor-pointer group items-center sm:items-start"
              >
                <div className="w-full sm:w-40 h-36 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-[#f2ede4]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="text-[11px] font-semibold text-[#4b644e] tracking-widest uppercase mb-1.5">
                    {article.date}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#181f21] group-hover:text-[#4b644e] transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#434749] mt-2 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
