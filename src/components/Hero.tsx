import React from 'react';
import { Phone, MapPin, Star, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with Ambient Overlay Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_carwash_cafe_1790825338888.jpg"
          alt="Kafeavtomoyka binosi va kafesi"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay to guarantee 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/80 to-[#0b0c0e]/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Unboxed Brand Sub-Kicker (Zero-Pill Discipline) */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="uppercase tracking-widest">Farg‘onadagi 2-in-1 Premium Majmua</span>
          <span aria-hidden="true" className="text-neutral-500">·</span>
          <span className="text-neutral-300 font-medium">Avtomoyka + Kafe</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto text-balance">
          Avtomobilingiz yuviladi. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
            Siz esa dam olasiz.
          </span>
        </h1>

        {/* Value Proposition Subtext */}
        <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {BUSINESS_DATA.subTagline}
        </p>

        {/* 2 Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Phone className="w-5 h-5 text-black group-hover:rotate-12 transition-transform" />
            <span>📞 Buyurtma berish</span>
          </a>

          <a
            href={BUSINESS_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-amber-400/50 rounded-xl transition-all backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>📍 Manzilni ko‘rish</span>
          </a>
        </div>

        {/* Claim-to-Proof Adjacency: Key Real Business Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          {/* Rating */}
          <div className="glass-panel p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-base font-bold text-white tabular-nums">{BUSINESS_DATA.googleRating}</span>
              <span className="text-xs text-neutral-400">/ 5.0</span>
            </div>
            <div className="text-xs text-neutral-400">Google reyting ({BUSINESS_DATA.reviewsCount} ta sharh)</div>
          </div>

          {/* Working Hours */}
          <div className="glass-panel p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-base font-bold text-white">02:00 gacha</span>
            </div>
            <div className="text-xs text-neutral-400">Har kuni kechgacha ochiq</div>
          </div>

          {/* Price */}
          <div className="glass-panel p-4 rounded-xl border border-white/10">
            <div className="text-base font-bold text-white mb-1 tabular-nums">
              50k – 200k <span className="text-xs font-normal text-neutral-400">UZS</span>
            </div>
            <div className="text-xs text-neutral-400">Qulay va hamyonbop narxlar</div>
          </div>

          {/* Location */}
          <div className="glass-panel p-4 rounded-xl border border-white/10">
            <div className="text-base font-bold text-white mb-1 truncate">
              Farg‘ona shahar
            </div>
            <div className="text-xs text-neutral-400 truncate">Temur ko‘chasi 241A</div>
          </div>
        </div>
      </div>
    </section>
  );
};
