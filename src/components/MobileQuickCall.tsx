import React from 'react';
import { Phone, Navigation, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface MobileQuickCallProps {
  onOpenBooking: () => void;
}

export const MobileQuickCall: React.FC<MobileQuickCallProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e0f14]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call button */}
        <a
          href={`tel:${BUSINESS_DATA.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-400 text-black font-bold text-xs shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-black" />
          <span>Qo‘ng‘iroq qilish</span>
        </a>

        {/* Direction / Location */}
        <a
          href={BUSINESS_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 text-white font-medium text-xs border border-white/15 active:scale-95 transition-transform"
          aria-label="Xaritada yo‘nalish"
        >
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>Xarita</span>
        </a>

        {/* Online request */}
        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center p-2.5 rounded-xl bg-white/10 text-amber-400 border border-white/15 active:scale-95 transition-transform"
          aria-label="Navbatsiz yozilish"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
