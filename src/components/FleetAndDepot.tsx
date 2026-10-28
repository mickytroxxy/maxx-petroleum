import React, { useState } from 'react';
import { Truck, Database, Droplets, CheckCircle2, ArrowRight, ShieldCheck, Check, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { REAL_PHOTOS, GalleryPhoto } from '../data/fuelData';

interface FleetAndDepotProps {
  onOpenQuoteModal: () => void;
}

export const FleetAndDepot: React.FC<FleetAndDepotProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'fleet' | 'depot' | 'bowsers' | 'quality'>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = activeTab === 'all'
    ? REAL_PHOTOS
    : REAL_PHOTOS.filter((photo) => photo.category === activeTab);

  const currentIdx = lightboxPhoto 
    ? filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id)
    : -1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIdx > 0) {
      setLightboxPhoto(filteredPhotos[currentIdx - 1]);
    } else {
      setLightboxPhoto(filteredPhotos[filteredPhotos.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIdx < filteredPhotos.length - 1) {
      setLightboxPhoto(filteredPhotos[currentIdx + 1]);
    } else {
      setLightboxPhoto(filteredPhotos[0]);
    }
  };

  return (
    <section id="fleet" className="py-20 sm:py-28 bg-slate-900 text-white border-b border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Meyerton Depot &amp; Private Fleet
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
              Our own trucks. Our own tanks.
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              We run our own vehicles and keep bulk stock on site in Meyerton — so your fuel doesn't depend on someone else's timetable. Explore our operational equipment and terminal facilities below.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-emerald-900/40 overflow-x-auto shrink-0">
            {[
              { id: 'all', label: `All Facilities (${REAL_PHOTOS.length})` },
              { id: 'fleet', label: 'Road Tankers' },
              { id: 'depot', label: 'Bulk Storage Tanks' },
              { id: 'bowsers', label: 'Site Bowsers' },
              { id: 'quality', label: 'Lab & Metering' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="group rounded-2xl bg-slate-950 border border-emerald-900/40 overflow-hidden hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-emerald-950/40"
            >
              <div>
                {/* Visual Asset Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Badge top-left */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-950/85 px-2.5 py-1 rounded-md backdrop-blur-sm border border-emerald-800/40">
                      {photo.badge}
                    </span>
                  </div>

                  {/* Expand icon bottom-right */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-700 text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                {/* Photo Content */}
                <div className="p-5 space-y-2">
                  <div className="text-[11px] font-medium text-emerald-400">
                    {photo.subtitle}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-4 pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-900">
                <span>Maxx Meyerton Asset</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                  View photo <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Banner for Guaranteed Delivery */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-950 to-emerald-950/50 border border-emerald-800/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Direct From The Yard
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Every drop is loaded from our own tanks and driven by our own team.
            </div>
            <p className="text-xs text-slate-300 max-w-xl">
              Zero dependency on external tanker brokers. When you order from Maxx Petroleum, you receive clean certified fuel loaded straight from our Meyerton depot.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg whitespace-nowrap cursor-pointer shrink-0"
          >
            Schedule Delivery Drop
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-emerald-800/60 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation buttons */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image viewport */}
            <div className="relative aspect-video max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Image Details */}
            <div className="p-6 space-y-3 bg-slate-950">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  {lightboxPhoto.badge} · {lightboxPhoto.subtitle}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {currentIdx + 1} of {filteredPhotos.length}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {lightboxPhoto.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lightboxPhoto.description}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Located at No. 150 Springbok St, Meyerton
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setLightboxPhoto(null);
                    onOpenQuoteModal();
                  }}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-lg cursor-pointer"
                >
                  Inquire For Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
