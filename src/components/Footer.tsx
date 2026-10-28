import React from 'react';
import { Droplet, Phone, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/fuelData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-slate-950">
              <Droplet className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block">
                {COMPANY_DETAILS.name}
              </span>
              <span className="text-xs text-emerald-400 font-medium">
                {COMPANY_DETAILS.tagline} · Bulk Fuel &amp; Lubricant Logistics
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#fleet" className="hover:text-emerald-400 transition-colors">Fleet &amp; Tanks</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">Fuel Calculator</a>
            <a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Maxx</a>
            <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-800"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>{COMPANY_DETAILS.address}</span>
            <span aria-hidden="true">·</span>
            <a href={COMPANY_DETAILS.phones[0].tel} className="hover:text-emerald-400 transition-colors">
              {COMPANY_DETAILS.phones[0].number}
            </a>
            <span aria-hidden="true">·</span>
            <a href={COMPANY_DETAILS.phones[1].tel} className="hover:text-emerald-400 transition-colors">
              {COMPANY_DETAILS.phones[1].number}
            </a>
          </div>

          <div>
            &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. SANS 342 Certified.
          </div>
        </div>
      </div>
    </footer>
  );
};
