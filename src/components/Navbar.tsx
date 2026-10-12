import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Biz haqimizda', href: '#about' },
    { label: 'Xizmatlar', href: '#services' },
    { label: 'Menyu', href: '#menu' },
    { label: 'Galereya', href: '#gallery' },
    { label: 'Sharhlar', href: '#reviews' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e0f14]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Zone: 🚗 KAFEAVTOMOYKA */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group text-white tracking-tight font-extrabold text-lg sm:text-xl font-display"
          >
            <span className="text-2xl transition-transform duration-300 group-hover:scale-110">🚗</span>
            <span className="tracking-wider uppercase text-white font-black group-hover:text-amber-400 transition-colors">
              Kafeavtomoyka
            </span>
          </a>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-amber-400 px-3 py-2 rounded-lg transition-colors border border-white/10 hover:border-amber-400/40 bg-white/5"
              title="To‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="tabular-nums">{BUSINESS_DATA.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Buyurtma berish</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              aria-label="Telefon orqali bog‘lanish"
              className="p-2 text-amber-400 bg-white/5 border border-white/10 rounded-lg"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
              className="p-2 text-neutral-300 hover:text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#12131a] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-200 hover:text-amber-400 hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-neutral-200 bg-white/5 border border-white/15 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center"
            >
              📞 Buyurtma berish / Navbatga yozilish
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
