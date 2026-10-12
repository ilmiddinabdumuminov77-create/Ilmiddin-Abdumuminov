import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, Clock, Car, Coffee, Send } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({ isOpen, onClose }) => {
  const [serviceType, setServiceType] = useState('wash_and_cafe');
  const [phone, setPhone] = useState('');
  const [carInfo, setCarInfo] = useState('');
  const [preferredTime, setPreferredTime] = useState('hozir');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#12131a] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <span>🚗 + ☕ Kafeavtomoyka</span>
            </div>
            <h3 id="modal-title" className="text-2xl font-black text-white tracking-tight mb-2">
              Navbatsiz yozilish / Buyurtma
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Ma'lumotlaringizni qoldiring yoki to‘g‘ridan-to‘g‘ri administratorga qo‘ng‘iroq qiling.
            </p>

            {/* Direct Quick Call Option */}
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="flex items-center justify-between p-3.5 mb-6 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-300 hover:bg-amber-400/20 transition-all text-xs sm:text-sm font-semibold group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-black flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-bold">Tezkor bog‘lanish (Click-to-call)</div>
                  <div className="text-neutral-400 text-xs tabular-nums">{BUSINESS_DATA.phone}</div>
                </div>
              </div>
              <span className="text-amber-400 text-xs font-bold group-hover:translate-x-0.5 transition-transform">
                Qo‘ng‘iroq &rarr;
              </span>
            </a>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  Xizmat turini tanlang:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType('wash_and_cafe')}
                    className={`p-3 rounded-xl text-xs font-semibold border text-left flex items-center gap-2 transition-all ${
                      serviceType === 'wash_and_cafe'
                        ? 'bg-amber-400/15 border-amber-400 text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <span>🚗☕</span>
                    <span>Yuvish + Kafe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('car_wash')}
                    className={`p-3 rounded-xl text-xs font-semibold border text-left flex items-center gap-2 transition-all ${
                      serviceType === 'car_wash'
                        ? 'bg-amber-400/15 border-amber-400 text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <span>🚘</span>
                    <span>Avtomoyka</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('cafe_order')}
                    className={`p-3 rounded-xl text-xs font-semibold border text-left flex items-center gap-2 transition-all ${
                      serviceType === 'cafe_order'
                        ? 'bg-amber-400/15 border-amber-400 text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <span>🍕</span>
                    <span>Kafe taomlari</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType('detailing')}
                    className={`p-3 rounded-xl text-xs font-semibold border text-left flex items-center gap-2 transition-all ${
                      serviceType === 'detailing'
                        ? 'bg-amber-400/15 border-amber-400 text-white'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    <span>🧽</span>
                    <span>Salon tozalash</span>
                  </button>
                </div>
              </div>

              {/* Phone number */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Telefon raqamingiz *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+998 90 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-neutral-500 tabular-nums"
                />
              </div>

              {/* Car model or remarks */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Avtomobil rusumi yoki izoh (ixtiyoriy)
                </label>
                <input
                  type="text"
                  placeholder="Masalan: Cobalt, Malibu yoki Pizza buyurtmasi"
                  value={carInfo}
                  onChange={(e) => setCarInfo(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 placeholder:text-neutral-500"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Tashrif vaqti:
                </label>
                <div className="flex gap-2">
                  {[
                    { key: 'hozir', label: 'Hozir boraman' },
                    { key: '30min', label: '30 daqiqada' },
                    { key: '1hour', label: '1 soat ichida' }
                  ].map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setPreferredTime(t.key)}
                      className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                        preferredTime === t.key
                          ? 'bg-amber-400 text-black border-amber-400 font-bold'
                          : 'bg-white/5 text-neutral-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20 text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>So‘rovni tasdiqlash</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white">So‘rovingiz qabul qilindi!</h3>
            <p className="text-neutral-300 text-sm max-w-sm mx-auto leading-relaxed">
              Xodimlarimiz tez orada siz bilan bog‘lanishadi. Kutishni istamasangiz, hoziroq qo‘ng‘iroq qilishingiz mumkin:
            </p>
            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black bg-amber-400 hover:bg-amber-300 transition-all text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Qo‘ng‘iroq qilish ({BUSINESS_DATA.phone})</span>
              </a>
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
