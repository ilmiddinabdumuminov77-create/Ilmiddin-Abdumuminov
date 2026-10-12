import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/businessData';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'Barchasi' },
    { key: 'carwash', label: 'Avtomoyka' },
    { key: 'cafe', label: 'Kafe' },
    { key: 'food', label: 'Taomlar' },
    { key: 'pizza', label: 'Pizza' },
    { key: 'burger', label: 'Burger' },
    { key: 'hotdog', label: 'Hot-dog' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'food') {
      return ['pizza', 'burger', 'hotdog'].includes(item.category);
    }
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-20 lg:py-28 relative bg-[#0e0f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Suratlar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Kafeavtomoyka atmosferasi
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Bizning avtomoyka sharoitlari, kafemiz interyeri va mazali taomlarimiz bilan tanishing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-md shadow-amber-500/20 scale-[1.02]'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Responsive Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Hover Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                  {item.categoryLabel}
                </span>
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-base font-bold pr-2">{item.title}</h3>
                  <div className="p-2 rounded-lg bg-white/20 text-white shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-12 text-neutral-400 text-sm">
            Ushbu bo‘lim bo‘yicha rasmlar tez orada qo‘shiladi.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </section>
  );
};
