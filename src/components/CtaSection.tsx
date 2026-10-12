import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-24 relative bg-[#0e0f14] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 border border-amber-400/30 bg-gradient-to-br from-[#181a24] via-[#12131a] to-[#0a0b0f] shadow-2xl shadow-black/80 overflow-hidden text-center">
          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto text-balance">
            Mashinangizni bizga topshiring, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              va o‘zingizga vaqt ajrating.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Toza avtomobil va maroqli hordiq — barchasi bitta joyda. Biz har kuni tuni bilan soat 02:00 gacha xizmatingizdamiz.
          </p>

          {/* Phone Display and CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-xl shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 text-black" />
              <span>Hoziroq bog‘lanish</span>
            </a>

            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all tabular-nums hover:border-amber-400/50"
            >
              <span>📞 {BUSINESS_DATA.phone}</span>
            </a>
          </div>

          {/* Quiet trust line */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-400 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Avtomobilga 100% ehtiyotkorona munosabat</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Tezkor xizmat va yangi taomlar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
