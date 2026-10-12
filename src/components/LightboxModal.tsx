import React, { useEffect } from 'react';
import { X, ZoomIn, ExternalLink } from 'lucide-react';
import { GalleryItem } from '../data/businessData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#12131a] rounded-2xl border border-white/15 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
              {item.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-sm font-medium text-white truncate max-w-xs sm:max-w-md">
              {item.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Image Viewer */}
        <div className="relative bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Modal Caption Footer */}
        <div className="p-4 sm:p-5 bg-[#0e0f14] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-300">
          <div>
            <span className="font-semibold text-white">Kafeavtomoyka:</span> {item.title}
          </div>
          <div className="text-neutral-400 flex items-center gap-2">
            <span>Sahibqiron Temur ko‘chasi 241A, Farg‘ona</span>
          </div>
        </div>
      </div>
    </div>
  );
};
