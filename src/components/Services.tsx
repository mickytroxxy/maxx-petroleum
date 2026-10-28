import React from 'react';
import { Fuel, Droplets, Truck, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/fuelData';

interface ServicesProps {
  onOpenQuoteModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const icons = {
    diesel: Fuel,
    lubricants: Droplets,
    'on-site': Truck,
    generators: Zap,
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-950 text-white border-b border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            What We Supply
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Our services
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            Direct wholesale petroleum products and on-site refuelling services designed to keep high-value transport fleets, mining machinery, and backup generators operational without interruption.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.id as keyof typeof icons] || Fuel;
            return (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-slate-900/60 border border-emerald-900/40 hover:border-emerald-600/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Unboxed editorial index instead of pill badge */}
                    <span className="text-xs font-mono text-emerald-400/80">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-medium">
                    {service.badgeText}
                  </span>
                  <button
                    onClick={onOpenQuoteModal}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>Request drop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
