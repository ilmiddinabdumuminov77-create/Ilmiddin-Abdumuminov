import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { BUSINESS_DATA, REVIEWS_DATA } from '../data/businessData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 relative bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Haqiqiy baho
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Mijozlarimiz nima deydi?
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Google xaritalaridagi haqiqiy foydalanuvchilar fikri va bahosi.
          </p>
        </div>

        {/* Real Google Rating Presentation Card */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Score Carrier */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <div className="text-6xl sm:text-7xl font-black text-white font-display mb-2 tabular-nums">
                {REVIEWS_DATA.averageRating}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 mb-3">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-5 h-5 fill-amber-400/50 text-amber-400" />
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                Google Xaritalar reytingi
              </div>
              <div className="text-xs text-neutral-400 mb-6">
                Jami {REVIEWS_DATA.totalReviews} ta tekshirilgan sharh
              </div>

              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                <span>Google'da tekshirish</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Authentic Quote & Verified Traits */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Mijoz sharhi</span>
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold text-white leading-snug italic mb-4">
                  “{REVIEWS_DATA.quote}”
                </blockquote>
                <div className="text-xs text-neutral-400">
                  Google Maps foydalanuvchi taqrizi asosida
                </div>
              </div>

              {/* Verified aspects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10">
                {REVIEWS_DATA.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2Icon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckCircle2Icon = () => (
  <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
