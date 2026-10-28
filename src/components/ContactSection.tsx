import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, Clock, CheckCircle2, Navigation } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/fuelData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    volume: '5000',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      volume: '5000',
      location: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-950 text-white border-b border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            Direct Petroleum Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Get in touch
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            Call us for an immediate spot quote, scheduled fleet contract, or emergency on-site generator refuelling drop.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Direct Dispatch Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct details & Depot Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visit Us Card */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-emerald-900/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Visit us</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {COMPANY_DETAILS.address}
              </p>
              <div className="pt-2 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                <span>GPS: {COMPANY_DETAILS.depotCoordinates}</span>
              </div>
            </div>

            {/* Call Us Card */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-emerald-900/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Call us</h3>
              <div className="space-y-2">
                {COMPANY_DETAILS.phones.map((phone) => (
                  <div key={phone.number} className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">{phone.label}</div>
                      <a
                        href={phone.tel}
                        className="text-lg sm:text-xl font-bold font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        {phone.number}
                      </a>
                    </div>
                    <a
                      href={phone.tel}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/40 hover:bg-emerald-900"
                    >
                      Call
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-emerald-900/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  Operating Timetable
                </div>
                <div className="text-sm font-semibold text-white">
                  {COMPANY_DETAILS.hours}
                </div>
                <div className="text-xs text-slate-400">
                  Gauteng, Vaal Triangle, Heidelberg, Free State &amp; Mpumalanga
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(
                'Hello Maxx Petroleum, I would like to inquire about bulk fuel delivery.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60 hover:bg-emerald-900/80 transition-colors flex items-center justify-between text-emerald-300 text-sm font-semibold"
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Chat directly on WhatsApp with Meyerton Dispatch</span>
              </div>
              <span className="text-xs font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-md">
                Chat Now
              </span>
            </a>
          </div>

          {/* Right Column: Direct Quote & Delivery Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-emerald-900/50">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Delivery Request Dispatched
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span>. Our Meyerton logistics officer is reviewing your request for <span className="text-emerald-400 font-mono font-semibold">{Number(formData.volume).toLocaleString()} Litres</span> and will call <span className="text-white font-mono">{formData.phone}</span> shortly.
                </p>
                <div className="pt-4 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-800 text-slate-200 hover:text-white rounded-lg"
                  >
                    Send Another Request
                  </button>
                  <a
                    href={COMPANY_DETAILS.phones[0].tel}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-emerald-400 text-slate-950 hover:bg-emerald-300 rounded-lg"
                  >
                    Direct Phone Line
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Request an Official Bulk Rate Card &amp; Drop
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill in your details below for a same-day binding quote and delivery confirmation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Name / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johan van Zyl"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Mobile / WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 064 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Estimated Volume Required
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none text-white text-sm"
                    >
                      <option value="1500">1,500 Litres (Bowser drop / Standby)</option>
                      <option value="5000">5,000 Litres (Mid-sized tank)</option>
                      <option value="10000">10,000 Litres (Transport yard)</option>
                      <option value="20000">20,000 Litres (Bulk tank)</option>
                      <option value="38000">38,000 Litres (Full Tri-Axle rig)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Delivery Location / Town
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Meyerton, Heidelberg, Alberton"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Delivery Specifications / Fuel Grade Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify 50ppm or 500ppm diesel, generator access, preferred delivery time (e.g. 04:30 AM before trucks roll)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none text-white text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Delivery Request</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Direct inquiry to Maxx Petroleum dispatch. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
