import React, { useState } from 'react';
import { MENU_CATEGORIES, BUSINESS_DATA } from '../data/businessData';
import { ExternalLink, Phone, Info } from 'lucide-react';

interface MenuSectionProps {
  onOpenBooking: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { key: 'all', label: 'Barchasi', icon: '✨' },
    { key: 'pizza', label: 'Pizza', icon: '🍕' },
    { key: 'burger', label: 'Gamburger', icon: '🍔' },
    { key: 'hotdog', label: 'Hot-dog', icon: '🌭' },
    { key: 'drinks', label: 'Ichimliklar', icon: '🥤' },
    { key: 'other', label: 'Boshqa taomlar', icon: '🍽️' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_CATEGORIES
    : MENU_CATEGORIES.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 relative bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Kafemiz taomlari
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Bizning menyu
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-6">
            Yangi tayyorlangan issiq pitsalar, to‘yimli burgerlar, qarsildoq hot-doglar va xushbo‘y ichimliklar sizni kutmoqda.
          </p>

          {/* Transparent Notice about Taplink official source */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-300 max-w-xl">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>To‘liq assortiment va amaldagi narxlar bilan rasmiy Taplink menyumizda tanishing.</span>
          </div>
        </div>

        {/* Interactive Filter Tabs (Functional buttons as per skill constitution) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/10 overflow-hidden flex flex-col group"
            >
              {/* Image Container with Fallback */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-transparent to-transparent opacity-80" />

                {/* Category Label */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
                  <span>{item.icon}</span>
                  <span>{item.categoryLabel}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <a
                    href={BUSINESS_DATA.taplinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Taplinkda ko‘rish</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-white/10 hover:bg-amber-400 hover:text-black border border-white/10 transition-all cursor-pointer"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Buyurtma</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Menu CTA to Taplink */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-amber-400/20 text-center max-w-3xl mx-auto bg-gradient-to-b from-amber-500/5 to-transparent">
          <div className="text-3xl mb-3">📋</div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Barcha taomlar va ichimliklar ro‘yxati
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto">
            Kafemizning to‘liq rasmiy menyusi, barcha pitsa va burger turlari hamda dolzarb narxlar Taplink sahifamizda joylashtirilgan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS_DATA.taplinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-xl shadow-amber-500/20 text-sm group"
            >
              <span>Batafsil menyuni ochish (Taplink)</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Telefon orqali buyurtma</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
