import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/fuelData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-900 text-white border-b border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            What our clients say
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            From logistics fleets moving cross-border freight to intensive harvesting operations and critical generator standby, hear from operators who rely on Maxx.
          </p>
        </div>

        {/* Testimonials Grid (Strict anti-slop: subtle all-around hairline border, no thick left border) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="p-8 rounded-2xl bg-slate-950 border border-emerald-900/40 hover:border-emerald-600/50 transition-colors flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-emerald-400" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-700/50" />
                </div>

                <blockquote className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="pt-4 border-t border-slate-900">
                <div className="font-bold text-white text-sm">
                  {t.author}
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  {t.role}, <span className="text-slate-400">{t.company}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
