import React, { useState } from 'react';
import { Phone, Menu, X, Droplet } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/fuelData';

interface NavbarProps {
  onOpenQuoteModal: (initialVolume?: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Fleet & Depot', href: '#fleet' },
    { label: 'Fuel Flow Calculator', href: '#calculator' },
    { label: 'Why Maxx', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a href="#" className="flex items-center gap-3 text-white tracking-tight shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-slate-950 shadow-md shadow-emerald-900/30 group-hover:bg-emerald-500 transition-colors">
            <Droplet className="w-6 h-6 fill-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {COMPANY_DETAILS.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
              Bulk Fuel Logistics
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Single-line, 1-2 words, clean text) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Direct Phone */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={COMPANY_DETAILS.phones[0].tel}
            className="flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors px-3 py-2 rounded-lg bg-emerald-950/50 border border-emerald-800/40"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{COMPANY_DETAILS.phones[0].number}</span>
          </a>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg shadow-sm whitespace-nowrap cursor-pointer"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 rounded-lg whitespace-nowrap sm:hidden"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-emerald-900/60 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-emerald-950/60 rounded-md hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={COMPANY_DETAILS.phones[0].tel}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_DETAILS.phones[0].number}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg text-center"
            >
              Request Bulk Fuel Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
