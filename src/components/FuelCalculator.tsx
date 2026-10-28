import React, { useState } from 'react';
import { Gauge, Droplet, Truck, Clock, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { FuelGrade, SectorType } from '../types/fuel';

interface FuelCalculatorProps {
  onSelectDrop: (config: {
    volumeLitres: number;
    fuelGrade: FuelGrade;
    sector: SectorType;
  }) => void;
}

export const FuelCalculator: React.FC<FuelCalculatorProps> = ({ onSelectDrop }) => {
  const [litres, setLitres] = useState<number>(10000);
  const [grade, setGrade] = useState<FuelGrade>('diesel-50ppm');
  const [sector, setSector] = useState<SectorType>('fleets');

  // Approximate baseline wholesale pricing guide in ZAR per litre
  const baseRatePerLitre = {
    'diesel-50ppm': 21.85,
    'diesel-500ppm': 21.20,
    'ulp-95': 22.40,
    'lubricants': 45.00,
  }[grade];

  // Volume discount factor for bulk loads
  const discountFactor = litres >= 30000 ? 0.94 : litres >= 15000 ? 0.96 : litres >= 5000 ? 0.98 : 1.0;
  const effectiveRate = baseRatePerLitre * discountFactor;
  const estimatedTotal = litres * effectiveRate;

  // Calibrated flow rate: ~420 L/min for heavy depot rig, ~180 L/min for mobile bowser
  const pumpFlowRateLpm = litres <= 3000 ? 180 : 450;
  const dischargeMinutes = Math.max(5, Math.round(litres / pumpFlowRateLpm));

  // Determine vehicle dispatched
  const vehicleAssigned =
    litres <= 2500
      ? { name: '4x4 Bakkie Mobile Bowser', desc: 'Ideal for generators, tractors, and tight site access' }
      : litres <= 12000
      ? { name: 'Medium Rigid Tanker (6-Wheeler)', desc: 'Perfect for mid-size farm tanks & construction sites' }
      : { name: 'Heavy Tri-Axle Tanker Rig', desc: 'Direct Meyerton bulk drop for transport yards and mines' };

  const presets = [
    { label: '1,500L', value: 1500, note: 'Standby / Bowser' },
    { label: '5,000L', value: 5000, note: 'Farm / Construction' },
    { label: '10,000L', value: 10000, note: 'Fleet Yard Drop' },
    { label: '25,000L', value: 25000, note: 'High-Volume Depot' },
    { label: '38,000L', value: 38000, note: 'Full Tri-Axle Load' },
  ];

  const handleOrder = () => {
    onSelectDrop({
      volumeLitres: litres,
      fuelGrade: grade,
      sector: sector,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 border-b border-emerald-950/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            Fuel Flow &amp; Delivery Estimation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            Calculate your bulk drop and flow time.
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Configure your required fuel volume, grade, and application sector. See exact flow duration, matched delivery vehicle, and wholesale tier pricing.
          </p>
        </div>

        {/* Main Grid: Interactive Controls & Live Telemetry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-emerald-900/50 space-y-8">
            {/* 1. Volume Selector with Slider & Presets */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-200">
                  Required Volume (Litres)
                </label>
                <div className="flex items-baseline gap-1 font-mono text-2xl font-bold text-emerald-400 tabular-nums">
                  <span>{litres.toLocaleString()}</span>
                  <span className="text-xs font-sans text-slate-400">Litres</span>
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="38000"
                step="500"
                value={litres}
                onChange={(e) => setLitres(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />

              {/* Presets */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
                {presets.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setLitres(preset.value)}
                    className={`py-2 px-2.5 text-xs font-medium rounded-lg text-left transition-all border ${
                      litres === preset.value
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-300 shadow-sm'
                        : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="font-mono font-bold">{preset.label}</div>
                    <div className="text-[10px] text-slate-500 truncate">{preset.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Fuel Grade Selector */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-200">
                Product Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'diesel-50ppm', title: 'Diesel 50ppm', note: 'Ultra-low sulphur for modern engines' },
                  { id: 'diesel-500ppm', title: 'Diesel 500ppm', note: 'Heavy plant, agricultural & mining' },
                  { id: 'ulp-95', title: 'Unleaded Petrol 95', note: 'Commercial vehicle & equipment petrol' },
                  { id: 'lubricants', title: 'Engine & Hydraulic Oils', note: '15W-40, ISO 46/68, greases' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGrade(item.id as FuelGrade)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      grade === item.id
                        ? 'bg-emerald-950/60 border-emerald-500 text-white'
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{item.title}</span>
                      {grade === item.id && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <div className="text-[11px] text-slate-400">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Sector / Site Application */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-200">
                Application Sector
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'fleets', label: 'Transport Fleet Yard' },
                  { id: 'farming', label: 'Agricultural Farm' },
                  { id: 'mining', label: 'Mining / Quarry' },
                  { id: 'generators', label: 'Backup Generators' },
                  { id: 'construction', label: 'Civil Construction' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSector(s.id as SectorType)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                      sector === s.id
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-semibold'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Telemetry & Dispatch Summary */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950/40 p-6 sm:p-8 rounded-2xl border border-emerald-800/50 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-emerald-400" />
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-300">
                  Calculated Flow Profile
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Calibrated SANS 342</span>
            </div>

            {/* Flow & Time Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Est. Discharge Time</span>
                </div>
                <div className="text-xl font-bold font-mono text-white tabular-nums">
                  ~{dischargeMinutes} <span className="text-xs font-sans text-slate-400">mins</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Flow rate: {pumpFlowRateLpm} L/min
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mb-1">
                  <Droplet className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Product Purity</span>
                </div>
                <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums">
                  100%
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Density verified at Meyerton
                </div>
              </div>
            </div>

            {/* Matched Vehicle Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-800/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Truck className="w-4 h-4" />
                <span>Dedicated Vehicle Dispatched</span>
              </div>
              <div className="text-sm font-bold text-white">
                {vehicleAssigned.name}
              </div>
              <p className="text-xs text-slate-400">
                {vehicleAssigned.desc}
              </p>
            </div>

            {/* Estimated Wholesale Indicative Value */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-700/50 space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Indicative Wholesale Estimate</span>
                {discountFactor < 1 && (
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">
                    {Math.round((1 - discountFactor) * 100)}% Bulk Discount Applied
                  </span>
                )}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums">
                R {Math.round(estimatedTotal).toLocaleString()}
                <span className="text-xs font-sans text-slate-400 ml-1.5 font-normal">
                  (excl. transport zone / VAT)
                </span>
              </div>
              <div className="text-[11px] text-emerald-300">
                Based on ~R {effectiveRate.toFixed(2)}/L base wholesale rate. Formal binding quotes issued in minutes.
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleOrder}
              className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock in this Drop with Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center text-[11px] text-slate-400">
              Immediate WhatsApp or phone confirmation from our Meyerton office.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
