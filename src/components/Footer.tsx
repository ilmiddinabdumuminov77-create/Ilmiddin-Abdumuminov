import React from 'react';
import { Phone, MapPin, Instagram, ExternalLink, ArrowUp } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] text-neutral-400 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-white font-extrabold text-xl font-display">
              <span className="text-2xl">🚗</span>
              <span className="tracking-wider uppercase">Kafeavtomoyka</span>
            </div>
            <p className="text-neutral-300 text-sm max-w-sm leading-relaxed">
              “Avtomoyka va kafe — bir joyda.” Mashinangiz yuqori sifatda yuvilayotganda qulay sharoitda dam oling.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-400/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_DATA.taplinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-amber-400 hover:border-amber-400/50 transition-all inline-flex items-center gap-1.5"
              >
                <span>Taplink menyu</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="/kafeavtomoyka-website.zip"
                download="kafeavtomoyka-website.zip"
                className="px-3.5 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300 hover:bg-amber-400 hover:text-black transition-all inline-flex items-center gap-1.5"
                title="Saytning to‘liq ZIP arxivini yuklab olish"
              >
                <span>📥 Saytni yuklab olish (.ZIP)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Bo‘limlar
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Bosh sahifa</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">Biz haqimizda</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Xizmatlar</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Menyu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Galereya</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">Sharhlar</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Bog‘lanish & Manzil
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-neutral-300">{BUSINESS_DATA.address}, Farg‘ona</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-neutral-200 hover:text-amber-400 transition-colors tabular-nums font-semibold">
                  {BUSINESS_DATA.phone}
                </a>
              </div>
              <div className="text-xs text-neutral-500 pt-1">
                Ish tartibi: Har kuni kechgacha (02:00 gacha)
              </div>
              <div className="text-xs text-neutral-500">
                O‘rtacha chek: 50 000 – 200 000 UZS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Kafeavtomoyka. Barcha huquqlar himoyalangan. Farg‘ona, O‘zbekiston.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Yuqoriga qaytish"
          >
            <span>Yuqoriga</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
