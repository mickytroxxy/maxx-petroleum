import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Droplet, Phone, MessageSquare, Send } from 'lucide-react';
import { FuelGrade, SectorType, QuoteRequest } from '../types/fuel';
import { COMPANY_DETAILS } from '../data/fuelData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConfig?: {
    volumeLitres?: number;
    fuelGrade?: FuelGrade;
    sector?: SectorType;
  } | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialConfig,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    location: '',
    fuelGrade: 'diesel-50ppm',
    volumeLitres: 10000,
    sector: 'fleets',
    urgency: 'routine',
    notes: '',
  });

  useEffect(() => {
    if (initialConfig) {
      setFormData((prev) => ({
        ...prev,
        volumeLitres: initialConfig.volumeLitres ?? prev.volumeLitres,
        fuelGrade: initialConfig.fuelGrade ?? prev.fuelGrade,
        sector: initialConfig.sector ?? prev.sector,
      }));
    }
  }, [initialConfig, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Maxx Petroleum,\nI would like to request an official quote for:\n- Grade: ${formData.fuelGrade.toUpperCase()}\n- Volume: ${formData.volumeLitres.toLocaleString()} Litres\n- Sector: ${formData.sector}\n- Location: ${formData.location || 'Gauteng area'}\n- Contact: ${formData.fullName} (${formData.phone})`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-slate-900 border border-emerald-800/60 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Quote Request Confirmed
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              We received your request for{' '}
              <span className="font-semibold text-emerald-400 font-mono">
                {formData.volumeLitres.toLocaleString()}L of{' '}
                {formData.fuelGrade.replace('-', ' ').toUpperCase()}
              </span>
              . Our Meyerton logistics team will call{' '}
              <span className="font-semibold text-white font-mono">{formData.phone}</span>{' '}
              with formal pricing within 15 minutes.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">
              <Droplet className="w-3.5 h-3.5" />
              <span>Bulk Fuel Dispatch</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Request a Fuel Delivery Quote
            </h3>
            <p className="text-xs text-slate-400 mt-1 mb-6">
              Meyerton depot wholesale drops, on-site bowsers, or scheduled transport fleet refuelling.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Deon Botha"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Company / Farm Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DP Logistics"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 064 361 3945"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Delivery Location / Yard *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meyerton / Germiston / Vaal"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Fuel Grade
                  </label>
                  <select
                    value={formData.fuelGrade}
                    onChange={(e) =>
                      setFormData({ ...formData, fuelGrade: e.target.value as FuelGrade })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="diesel-50ppm">Diesel 50ppm (Clean low-sulphur)</option>
                    <option value="diesel-500ppm">Diesel 500ppm (Plant &amp; Ag)</option>
                    <option value="ulp-95">Unleaded Petrol 95</option>
                    <option value="lubricants">Industrial Lubricants &amp; Oils</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Volume in Litres
                  </label>
                  <input
                    type="number"
                    min="500"
                    max="100000"
                    step="500"
                    value={formData.volumeLitres}
                    onChange={(e) =>
                      setFormData({ ...formData, volumeLitres: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm font-mono focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Urgency / Drop Window
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'routine', label: 'Routine (Scheduled)' },
                    { id: 'urgent_24h', label: 'Next Day (24 hrs)' },
                    { id: 'emergency', label: 'Emergency (Same Day)' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, urgency: u.id as QuoteRequest['urgency'] })
                      }
                      className={`py-2 px-2 text-[11px] font-medium rounded-lg border text-center transition-all ${
                        formData.urgency === u.id
                          ? 'bg-emerald-950 border-emerald-400 text-emerald-300'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit for Quote</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-800/40 flex items-center gap-2 shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
