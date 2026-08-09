import React from 'react';
import { TextParallaxContent } from './ui/text-parallax-content-scroll';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface ParallaxShowcaseProps {
  onBookConsultation: () => void;
  onExploreWork: () => void;
}

export const ParallaxShowcase: React.FC<ParallaxShowcaseProps> = ({
  onBookConsultation,
  onExploreWork,
}) => {
  const { language } = useLanguage();

  const isIndonesian = language === 'id';

  const showcaseItems = isIndonesian
    ? [
        {
          imgUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop',
          subheading: 'EMOTIONAL BRANDING',
          heading: 'Membuat Brand Berbicara Kepada Hati',
          title: 'Resonansi & Narasi Strategis',
          desc1: 'Pendekatan branding berbasis empati dan kepribadian yang membangun daya tarik otentik serta hubungan emosional jangka panjang.',
          desc2: 'Mengubah transaksi pasif menjadi pengalaman berkesan yang membentuk persepsi positif konsumen.',
          cta: 'Konsultasi Brand',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2564&auto=format&fit=crop',
          subheading: 'PSIKOLOGI KONSUMEN',
          heading: 'Memahami Perilaku & Motif Pembelian',
          title: 'Wawasan Perilaku Konsumen',
          desc1: 'Menganalisis proses mental, bias kognitif, dan pendorong psikologis yang memengaruhi pilihan serta loyalitas merek.',
          desc2: 'Menjawab tantangan pasar dengan pemahaman mendalam tentang lanskap persepsi audiens sasaran Anda.',
          cta: 'Eksplorasi Riset',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2416&auto=format&fit=crop',
          subheading: 'STRATEGI & PEMASARAN',
          heading: 'Landasan Akademik untuk Eksekusi Industri',
          title: 'Solusi Riset Berdampak Tinggi',
          desc1: 'Menghubungkan teori akademik dengan strategi pemasaran praktis yang adaptif dan terukur untuk pertumbuhan berkelanjutan.',
          desc2: 'Membimbing akademisi, inovator, dan pemimpin bisnis melangkah lebih jauh dengan kejelasan strategi.',
          cta: 'Jadwalkan Diskusi',
        },
      ]
    : [
        {
          imgUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop',
          subheading: 'EMOTIONAL BRANDING',
          heading: 'Crafting Brands That Speak to the Heart',
          title: 'Strategic Narrative & Resonance',
          desc1: 'Empathy-driven branding frameworks that cultivate authentic positioning and meaningful long-term customer relationships.',
          desc2: 'Transforming passive transactions into memorable experiences that elevate perceived brand value.',
          cta: 'Brand Consultation',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2564&auto=format&fit=crop',
          subheading: 'CONSUMER PSYCHOLOGY',
          heading: 'Decoding Behavior & Decision Drivers',
          title: 'Consumer Behavioral Insights',
          desc1: 'Analyzing cognitive processes, subconscious triggers, and psychological dynamics shaping choices and brand devotion.',
          desc2: 'Navigating modern market challenges with empirical understanding of target audience perception.',
          cta: 'Explore Research',
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2416&auto=format&fit=crop',
          subheading: 'STRATEGY & MARKETING',
          heading: 'Academic Rigor Meets Industry Execution',
          title: 'High-Impact Strategic Solutions',
          desc1: 'Bridging higher education research with pragmatic marketing execution engineered for sustainable market presence.',
          desc2: 'Empowering business leaders, researchers, and creators with clear directional strategies.',
          cta: 'Schedule Session',
        },
      ];

  return (
    <section id="parallax-showcase" className="bg-[#fef9ef] py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 mb-8 text-center">
        <span className="text-[12px] font-semibold tracking-[0.25em] text-[#4b644e] mb-3 block uppercase">
          {isIndonesian ? 'PILAR UTAMA' : 'CORE PILLARS'}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#181f21]">
          {isIndonesian ? 'Filosofi & Metodologi Kerja' : 'Philosophy & Strategic Methodology'}
        </h2>
      </div>

      {showcaseItems.map((item, idx) => (
        <TextParallaxContent
          key={idx}
          imgUrl={item.imgUrl}
          subheading={item.subheading}
          heading={item.heading}
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <h3 className="col-span-1 text-2xl md:text-3xl font-serif font-bold md:col-span-4 text-[#181f21]">
              {item.title}
            </h3>
            <div className="col-span-1 md:col-span-8">
              <p className="mb-4 text-lg md:text-xl text-[#434749] leading-relaxed">
                {item.desc1}
              </p>
              <p className="mb-8 text-lg md:text-xl text-[#434749] leading-relaxed">
                {item.desc2}
              </p>
              <button
                onClick={idx === 1 ? onExploreWork : onBookConsultation}
                className="inline-flex items-center gap-2 rounded-full bg-[#181f21] px-8 py-3.5 text-sm md:text-base font-semibold tracking-wider text-[#fef9ef] transition-all duration-300 hover:bg-[#4b644e] hover:scale-105 cursor-pointer shadow-lg"
              >
                {item.cta} <ArrowUpRight className="inline w-5 h-5" />
              </button>
            </div>
          </div>
        </TextParallaxContent>
      ))}
    </section>
  );
};
