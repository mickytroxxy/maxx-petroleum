/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FuelCalculator } from './components/FuelCalculator';
import { Services } from './components/Services';
import { FleetAndDepot } from './components/FleetAndDepot';
import { WhyMaxx } from './components/WhyMaxx';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FuelGrade, SectorType } from './types/fuel';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalInitialConfig, setModalInitialConfig] = useState<{
    volumeLitres?: number;
    fuelGrade?: FuelGrade;
    sector?: SectorType;
  } | null>(null);

  const handleOpenQuoteModal = (initialVolume?: number) => {
    if (initialVolume) {
      setModalInitialConfig({ volumeLitres: initialVolume });
    } else {
      setModalInitialConfig(null);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCalculatorSelect = (config: {
    volumeLitres: number;
    fuelGrade: FuelGrade;
    sector: SectorType;
  }) => {
    setModalInitialConfig(config);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {/* Hero Section with Emerald Green Heavy Tanker */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Interactive Fuel Flow & Bulk Delivery Calculator */}
        <FuelCalculator onSelectDrop={handleCalculatorSelect} />

        {/* Core Services: Bulk Diesel, Lubricants, On-Site Drops */}
        <Services onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Fleet & Meyerton Yard Infrastructure Showcase */}
        <FleetAndDepot onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Why Maxx - Quality, Punctuality, Local Direct Control */}
        <WhyMaxx />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact Section, Location & Direct Dispatch */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Bulk Delivery Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialConfig={modalInitialConfig}
      />
    </div>
  );
}
