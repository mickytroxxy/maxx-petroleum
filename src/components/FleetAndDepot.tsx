import React, { useState } from 'react';
import { Truck, Database, Fuel, Gauge, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { FLEET_ITEMS } from '../data/fuelData';
import { FleetItem } from '../types/fuel';

interface FleetAndDepotProps {
  onOpenQuoteModal: () => void;
}

export const FleetAndDepot: React.FC<FleetAndDepotProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'fleet' | 'depot' | 'bowsers' | 'metering'>('all');
  const [selectedItem, setSelectedItem] = useState<FleetItem | null>(null);

  const filteredItems = activeTab === 'all' 
    ? FLEET_ITEMS 
    : FLEET_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-slate-900 text-white border-b border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Fleet &amp; Meyerton Depot
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              Our own trucks. Our own tanks.
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              We run our own vehicles and keep bulk stock on site in Meyerton — so your fuel doesn't depend on someone else's timetable or refinery delays.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional Button Controls compliant with constitution) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-emerald-900/40 overflow-x-auto shrink-0">
            {[
              { id: 'all', label: 'All Operations' },
              { id: 'fleet', label: 'Road Tankers' },
              { id: 'depot', label: 'Depot & Storage' },
              { id: 'bowsers', label: 'Site Bowsers' },
              { id: 'metering', label: 'Digital Metering' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-slate-950 border border-emerald-900/40 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Asset Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-slate-950/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-emerald-800/40">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technical Specifications */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {item.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-2 text-xs text-slate-300 font-mono"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-900 mt-4">
                <span className="text-xs text-slate-400 font-medium">
                  Meyerton Depot Verified
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  <span>Inspect asset specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Banner for Depot Reliability */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-slate-950 to-emerald-950/40 border border-emerald-800/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Guaranteed Tanker Availability
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Need fuel delivered before the morning shift starts?
            </div>
            <p className="text-xs text-slate-300 max-w-xl">
              We stage our delivery schedule around your fleet operations. Regular yard drops scheduled as early as 04:00 AM.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg whitespace-nowrap cursor-pointer shrink-0"
          >
            Schedule Yard Delivery
          </button>
        </div>
      </div>

      {/* Asset Spec Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-800/60 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-900"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                {selectedItem.subtitle}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedItem.description}
              </p>
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Operating Specifications
                </div>
                <ul className="space-y-1.5">
                  {selectedItem.specs.map((s) => (
                    <li key={s} className="text-xs text-slate-300 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenQuoteModal();
                  }}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-lg"
                >
                  Request This Rig
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
