import React from 'react';
import { ShieldCheck, Clock, MapPin } from 'lucide-react';
import { WHY_US_PILLARS } from '../data/fuelData';

export const WhyMaxx: React.FC = () => {
  const icons = [ShieldCheck, Clock, MapPin];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-950 text-white border-b border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            Why Maxx Petroleum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Fuel you can count on, from people you can trust.
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            In transport and production, fuel isn't just an expense — it's the lifeline of your business. We treat your delivery schedule as non-negotiable.
          </p>
        </div>

        {/* 3 Pillars Grid with Authentic Operational Verification Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-slate-900/60 border border-emerald-900/40 hover:border-emerald-600/50 transition-all flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                {/* Authentic verification photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                      Operational Proof
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {pillar.title}
                    </h3>
                    <div className="text-xs text-emerald-400 font-medium mb-3">
                      {pillar.subtitle}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                      {pillar.metric}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {pillar.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Standard Compliance Matrix */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-900 border border-emerald-900/40">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-slate-300">
            <div>
              <div className="text-emerald-400 font-bold uppercase tracking-wider mb-1">
                Fuel Specification
              </div>
              <div className="font-semibold text-white text-sm mb-1">SANS 342 Automotive Diesel</div>
              <p className="text-slate-400 text-[11px]">Clean flash point, low particulate matter, zero adulteration.</p>
            </div>
            <div>
              <div className="text-emerald-400 font-bold uppercase tracking-wider mb-1">
                Metering Audit
              </div>
              <div className="font-semibold text-white text-sm mb-1">Weights &amp; Measures</div>
              <p className="text-slate-400 text-[11px]">Calibrated flow meters with physical and digital printouts on discharge.</p>
            </div>
            <div>
              <div className="text-emerald-400 font-bold uppercase tracking-wider mb-1">
                Transport Safety
              </div>
              <div className="font-semibold text-white text-sm mb-1">Hazchem &amp; SABS Certified</div>
              <p className="text-slate-400 text-[11px]">Full dangerous goods compliance, spill kits, and licensed professional drivers.</p>
            </div>
            <div>
              <div className="text-emerald-400 font-bold uppercase tracking-wider mb-1">
                Storage Integrity
              </div>
              <div className="font-semibold text-white text-sm mb-1">Dedicated Grade Tanks</div>
              <p className="text-slate-400 text-[11px]">50ppm and 500ppm segregated tanks; no cross-contamination risk.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
