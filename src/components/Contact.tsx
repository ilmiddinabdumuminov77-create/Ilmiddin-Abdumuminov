import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, ExternalLink, Copy, Check, Navigation } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.addressFull);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Manzil va aloqa
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Bizni toping
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Biz Farg‘ona shahrida, Sahibqiron Temur ko‘chasida qulay joylashganmiz. Har kuni soat 02:00 gacha sizni kutamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Details Info Card */}
          <div className="lg:col-span-5 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Manzil
                  </div>
                  <div className="text-white font-bold text-base sm:text-lg leading-snug mb-1">
                    {BUSINESS_DATA.address}
                  </div>
                  <div className="text-neutral-400 text-xs sm:text-sm">
                    150100, Farg‘ona, O‘zbekiston
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Manzil nusxalandi!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Manzilni nusxalash</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Telefon raqam
                  </div>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="text-white hover:text-amber-400 transition-colors font-bold text-lg sm:text-xl tabular-nums block"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                  <span className="text-xs text-neutral-400">Qo‘ng‘iroqlar tuni bilan qabul qilinadi</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Ish vaqti
                  </div>
                  <div className="text-white font-bold text-base sm:text-lg">
                    {BUSINESS_DATA.hours}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {BUSINESS_DATA.hoursDetail}
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    Instagram
                  </div>
                  <a
                    href={BUSINESS_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-400 transition-colors font-bold text-base sm:text-lg inline-flex items-center gap-1.5"
                  >
                    <span>{BUSINESS_DATA.instagramHandle}</span>
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                  </a>
                  <div className="text-xs text-neutral-400">
                    Yangi postlar va video lavhalar
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Route Button */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20 text-sm group"
              >
                <Navigation className="w-4 h-4" />
                <span>Yo‘nalishni olish (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Presentation */}
          <div className="lg:col-span-7 glass-panel rounded-3xl border border-white/10 overflow-hidden relative min-h-[380px] lg:min-h-full flex flex-col">
            {/* Visual map preview / card frame */}
            <div className="relative flex-1 bg-gradient-to-b from-[#151722] to-[#0c0d12] p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
              {/* Map grid pattern simulation */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Hozir ochiq (02:00 gacha)</span>
                </div>

                <a
                  href={BUSINESS_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black/60 border border-white/10 text-neutral-300 hover:text-white transition-colors"
                  aria-label="Instagram sahifasi"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Center Map Destination Beacon */}
              <div className="relative z-10 my-auto text-center py-8">
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 animate-ping absolute inset-0" />
                  <div className="w-14 h-14 rounded-full bg-amber-400 text-black flex items-center justify-center text-2xl font-black shadow-xl shadow-amber-400/40 relative z-10">
                    🚗
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  Kafeavtomoyka Majmuasi
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto mb-6">
                  {BUSINESS_DATA.addressFull}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={BUSINESS_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-md"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Google Maps xaritada ochish</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{BUSINESS_DATA.phone}</span>
                  </a>
                </div>
              </div>

              {/* Bottom Quick Coordinates */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs text-neutral-400">
                <div>Orientir: Sahibqiron Temur ko‘chasi bo‘ylab</div>
                <div className="tabular-nums">Farg‘ona, UZ · 40.3842° N, 71.7843° E</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
