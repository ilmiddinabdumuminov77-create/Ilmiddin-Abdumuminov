import React from 'react';
import { SERVICES, BUSINESS_DATA } from '../data/businessData';
import { Phone, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#0e0f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Professional daraja
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Bizning xizmatlarimiz
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Avtomobilingizni tozalashdan tortib, kafemizdagi shirin va to‘yimli taomlargacha — barchasi eng yuqori sifat standartlarida.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className={`glass-panel glass-panel-hover p-8 rounded-2xl border border-white/10 flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 transition-all">
                    {srv.icon}
                  </div>
                  <span className="text-sm font-bold font-mono text-neutral-500 tabular-nums group-hover:text-amber-400 transition-colors">
                    {srv.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Sub features list */}
                <ul className="space-y-2.5 mb-6 border-t border-white/5 pt-4">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action row */}
              <div className="pt-2">
                {srv.id === 'booking' ? (
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/20"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Qo‘ng‘iroq qilish</span>
                    </a>
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
                    >
                      <span>Online so‘rov yuborish</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    <span>Xizmatga yozilish</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
