import React, { useState } from 'react';
import { Article } from '../types';
import { UI_TRANSLATIONS } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<string[]>([
    'Wawasan yang sangat mencerahkan tentang pemicu emosional! Sangat bermanfaat untuk strategi brand kami.',
  ]);

  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language].articles;

  if (!article) return null;

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([commentText, ...comments]);
      setCommentText('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#fef9ef] rounded-[2.5rem] max-w-3xl w-full p-8 md:p-12 relative shadow-2xl border border-white/60 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#f2ede4] text-[#181f21] transition-colors cursor-pointer"
          aria-label="Close article modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Article Metadata */}
        <div className="mb-6">
          <div className="flex items-center gap-3 text-xs font-semibold text-[#4b644e] tracking-widest uppercase mb-3">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#181f21] leading-tight mb-4">
            {article.title}
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#181f21] text-[#fef9ef] flex items-center justify-center font-serif text-xs font-bold">
              EA
            </div>
            <div className="text-xs">
              <div className="font-bold text-[#181f21]">Erica Adriana</div>
              <div className="text-[#434749]">Brand Strategist & Lecturer</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-[#f2ede4]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Paragraphs */}
        <div className="space-y-6 text-[#1d1c16] text-base leading-relaxed font-sans mb-12">
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Interactive Reader Comments */}
        <div className="bg-[#f8f3ea] p-6 rounded-2xl border border-[#c3c7c8]/30">
          <h4 className="font-serif text-lg font-semibold text-[#181f21] mb-4">
            {t.readerDiscussion}
          </h4>

          <form onSubmit={handleAddComment} className="flex gap-2 mb-6">
            <input
              type="text"
              required
              placeholder={t.placeholderComment}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full p-3 rounded-xl bg-[#fef9ef] border border-[#c3c7c8]/40 text-sm text-[#181f21] focus:outline-none focus:border-[#181f21]"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#181f21] text-[#fef9ef] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#4b644e] transition-colors shrink-0 cursor-pointer"
            >
              {t.postBtn}
            </button>
          </form>

          <div className="space-y-3">
            {comments.map((c, idx) => (
              <div key={idx} className="p-3.5 bg-[#fef9ef] rounded-xl text-xs text-[#434749] leading-relaxed">
                <span className="font-bold text-[#181f21] block mb-1">{t.communityReader}</span>
                "{c}"
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#c3c7c8]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-3.5 bg-[#181f21] text-[#fef9ef] text-xs font-semibold tracking-widest uppercase hover:bg-[#4b644e] transition-colors rounded-xl cursor-pointer"
          >
            {t.doneReading}
          </button>
        </div>
      </div>
    </div>
  );
};
