import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { COMPANY_DETAILS, HERO_IMAGE } from '../data/fuelData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const heroPhotos = [
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58_e15bd5ce.jpeg',
      title: 'Maxx Petroleum 45,000L Tanker Rig',
      caption: 'En route on Gauteng corridor with bulk diesel',
      tag: '45k Litre Fleet',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58__3__ceeb5b8f.jpeg',
      title: 'Maxx Petroleum Leadership & Fleet',
      caption: 'Owner-operated depot in Meyerton, Gauteng',
      tag: 'People You Trust',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_13.08.10_9b813414.jpeg',
      title: 'Heavy Plant Refuelling — Bell B40D',
      caption: 'Discharging straight into heavy mining haulers',
      tag: 'On-Site Machine Refuelling',
    },
    {
      src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.35_3b62b9b1.jpeg',
      title: 'Meyerton Depot Bulk Storage',
      caption: 'Multi-tank bulk terminal in Meyerton',
      tag: 'Depot Tanks',
    },
  ];

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const activePhoto = heroPhotos[activePhotoIdx];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-emerald-950/80">
      {/* Subtle background ambient fuel glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 -z-10 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker with dot separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              <span>{COMPANY_DETAILS.tagline}</span>
              <span aria-hidden="true" className="text-emerald-700">·</span>
              <span>Meyerton Bulk Depot</span>
              <span aria-hidden="true" className="text-emerald-700">·</span>
              <span>Gauteng & Beyond</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.08]">
              Reliable bulk fuel &amp; lubricant suppliers.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Diesel, petrol and lubricants delivered to your door — for transport fleets, commercial farms, mining operations, and critical generator sites across South Africa.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg shadow-lg shadow-emerald-500/20 flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <span>Request a quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_DETAILS.phones[0].tel}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-emerald-700/50 hover:border-emerald-500 active:scale-95 transition-all rounded-lg flex items-center gap-2.5 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_DETAILS.phones[0].number}</span>
              </a>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SANS 342 Clean Product</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Own Dedicated 45,000L Fleet</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>24/7 Emergency Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero photo display with interactive operational switcher */}
          <div className="lg:col-span-5 relative space-y-3">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800/40 shadow-2xl shadow-emerald-950/60 bg-slate-900 group">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Inset overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-700/40 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                    {activePhoto.tag}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {activePhoto.title}
                  </div>
                  <div className="text-xs text-slate-400">
                    {activePhoto.caption}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Depot Base</div>
                  <div className="text-sm font-bold text-emerald-300 font-mono tabular-nums">
                    Meyerton
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail switcher */}
            <div className="grid grid-cols-4 gap-2">
              {heroPhotos.map((photo, idx) => (
                <button
                  key={photo.title}
                  type="button"
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    activePhotoIdx === idx
                      ? 'border-emerald-400 ring-2 ring-emerald-500/30'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Column KPI proof strip below hero split - Updated to 45,000L */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              45,000<span className="text-emerald-400 font-sans text-xl">L</span>
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Max Tanker Drop
            </div>
            <div className="text-xs text-slate-500">From 1,000L bowsers to multi-axle rigs</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              50<span className="text-emerald-400 font-sans text-xl">ppm</span>
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Ultra-Low Sulphur
            </div>
            <div className="text-xs text-slate-500">Batch lab certified SANS 342</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              100<span className="text-emerald-400 font-sans text-xl">%</span>
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Privately Owned
            </div>
            <div className="text-xs text-slate-500">Our own trucks, our own tanks</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              04:00<span className="text-emerald-400 font-sans text-sm ml-1">AM</span>
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Yard Refuelling
            </div>
            <div className="text-xs text-slate-500">Roll at 05:00 with full tanks</div>
          </div>
        </div>
      </div>
    </section>
  );
};
