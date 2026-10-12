/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickBookingModal } from './components/QuickBookingModal';
import { MobileQuickCall } from './components/MobileQuickCall';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f3f4f6] flex flex-col selection:bg-amber-500/20 selection:text-amber-300">
      {/* Sticky Top Navbar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <About onOpenBooking={() => setIsBookingOpen(true)} />
        <Services onOpenBooking={() => setIsBookingOpen(true)} />
        <MenuSection onOpenBooking={() => setIsBookingOpen(true)} />
        <Gallery />
        <Reviews />
        <CtaSection onOpenBooking={() => setIsBookingOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quick Booking Modal */}
      <QuickBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Mobile Floating Sticky CTA */}
      <MobileQuickCall onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}
