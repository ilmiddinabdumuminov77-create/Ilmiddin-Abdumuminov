import React from 'react';
import { ABOUT_CARDS } from '../data/businessData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#0b0c0e]">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Afzalliklarimiz
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Nega Kafeavtomoyka?
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Biz avtomoyka va kafeni birlashtirib, mijozlarga vaqtni behuda yo‘qotmasdan, unumli va qulay dam olish imkoniyatini taqdim etamiz.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ABOUT_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className="glass-panel glass-panel-hover p-7 rounded-2xl border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/0 via-amber-400/40 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon box */}
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 transition-all">
                  {card.icon}
                </div>

                <div className="text-xs text-neutral-500 font-medium mb-1 uppercase tracking-wider">
                  0{idx + 1}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-amber-400/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{card.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Concept Banner (Avtomobil yuvilayotgan paytda — siz dam oling) */}
        <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2 block">
                Vaqtingizni tejash formulasi
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Ko‘chada yoki changda kutish davri tugadi!
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                Bizda siz mashinangiz yuvilishi jarayonida bemalol xushbo‘y kofe ichishingiz, issiq pizza yoki burger yeb, bepul Wi-Fi orqali ishlaringizni hal qilishingiz mumkin.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Oynaviy zal orqali jarayonni kuzatish
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Issiq va yangi taomlar
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Oila va do‘stlar bilan tashrif
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch lg:items-end">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20 text-sm"
              >
                <span>Navbatsiz yozilish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-sm"
              >
                <span>Kafemiz menyusini ko‘rish</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
