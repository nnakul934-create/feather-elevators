import { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, ArrowRight, ShieldCheck, Zap, Layers, Sparkles, Building2, Users, Compass } from 'lucide-react';

interface ElevatorCalculatorProps {
  onSelectEstimate?: (estimateDetails: string) => void;
}

export default function ElevatorCalculator({ onSelectEstimate }: ElevatorCalculatorProps) {
  const formId = useId();
  const [floors, setFloors] = useState<number>(3); // G+2
  const [passengers, setPassengers] = useState<number>(4); // 4 persons
  const [driveType, setDriveType] = useState<'hydraulic' | 'traction' | 'panoramic'>('traction');
  const [finish, setFinish] = useState<'gold' | 'glass' | 'noir' | 'wood'>('gold');

  // Pricing formula base calculations
  const calculateEstimate = () => {
    let basePrice = 8.5; // Lakhs base

    // Floor additions
    basePrice += (floors - 2) * 1.25;

    // Capacity multiplier
    if (passengers === 6) basePrice += 1.4;
    else if (passengers === 8) basePrice += 2.2;

    // Drive mechanism
    if (driveType === 'hydraulic') basePrice += 1.8;
    else if (driveType === 'panoramic') basePrice += 3.2;

    // Finish
    if (finish === 'gold') basePrice += 0.8;
    else if (finish === 'glass') basePrice += 1.6;
    else if (finish === 'wood') basePrice += 1.1;

    const minPrice = Math.round(basePrice * 10) / 10;
    const maxPrice = Math.round((basePrice + 1.8) * 10) / 10;

    return { minPrice, maxPrice };
  };

  const { minPrice, maxPrice } = calculateEstimate();

  const handleApplyEstimate = () => {
    const summary = `${floors} Floors (G+${floors - 1}), ${passengers} Passengers, ${
      driveType === 'hydraulic' ? 'Hydraulic' : driveType === 'panoramic' ? 'Panoramic Glass' : 'MRL Traction'
    }, ${finish.toUpperCase()} Finish (Est: ₹${minPrice}L - ₹${maxPrice}L)`;

    if (onSelectEstimate) {
      onSelectEstimate(summary);
    }

    // Scroll to contact form
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill message
      const messageInput = document.querySelector('textarea[name="Message"]') as HTMLTextAreaElement;
      if (messageInput) {
        messageInput.value = `I configured an elevator with: ${summary}. Please provide a formal quotation and schedule a site inspection.`;
      }
    }
  };

  return (
    <section id="calculator" className="relative px-4 sm:px-6 lg:px-12 py-20 bg-[#0a0a0f] border-t border-white/10">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-brand-gold font-semibold mb-4">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
            Customize Your Elevator & Estimate Budget
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#d0c4b5]">
            Configure your villa elevator parameters below for instant ballpark pricing, architectural dimensions, and power requirements.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Number of Floors */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-semibold uppercase tracking-wider text-brand-gold flex items-center gap-2">
                  <Building2 className="h-4 w-4" /> 1. Number of Floors (Stops)
                </label>
                <span className="text-xs font-mono text-white/70">
                  {floors} Stops (G + {floors - 1})
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 sm:gap-3">
                {[2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFloors(num)}
                    className={`py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                      floors === num
                        ? 'bg-gradient-to-r from-[#ECC876] to-[#C4A664] text-black shadow-gold scale-[1.02]'
                        : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    G + {num - 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Passenger Capacity */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-semibold uppercase tracking-wider text-brand-gold flex items-center gap-2">
                  <Users className="h-4 w-4" /> 2. Passenger Capacity
                </label>
                <span className="text-xs font-mono text-white/70">
                  {passengers === 4 ? '300 kg' : passengers === 6 ? '408 kg' : '544 kg'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  { count: 4, label: '3-4 Persons', weight: '300 kg', sub: 'Compact' },
                  { count: 6, label: '5-6 Persons', weight: '408 kg', sub: 'Standard' },
                  { count: 8, label: '7-8 Persons', weight: '544 kg', sub: 'Spacious' },
                ].map((item) => (
                  <button
                    key={item.count}
                    type="button"
                    onClick={() => setPassengers(item.count)}
                    className={`p-3.5 rounded-2xl text-left transition-all border ${
                      passengers === item.count
                        ? 'border-brand-gold bg-brand-gold/15 text-white shadow-soft'
                        : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold text-white">{item.label}</p>
                    <p className="text-[0.65rem] sm:text-xs text-brand-gold/90 mt-0.5">{item.weight}</p>
                    <p className="text-[0.6rem] text-white/50">{item.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Drive Mechanism */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl">
              <label className="text-sm font-semibold uppercase tracking-wider text-brand-gold flex items-center gap-2 mb-4">
                <Zap className="h-4 w-4" /> 3. Drive Mechanism
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'traction' as const,
                    name: 'MRL Gearless',
                    tag: 'Most Popular',
                    desc: 'High speed, energy-saving, silent permanent-magnet motor.',
                  },
                  {
                    id: 'hydraulic' as const,
                    name: 'German Hydraulic',
                    tag: 'Zero Pit / 100mm',
                    desc: 'Whisper-quiet, smooth start/stop, perfect for retrofit homes.',
                  },
                  {
                    id: 'panoramic' as const,
                    name: 'Glass Panoramic',
                    tag: 'Ultra Luxury',
                    desc: 'Curved frameless toughened glass for scenic atrium villas.',
                  },
                ].map((mech) => (
                  <button
                    key={mech.id}
                    type="button"
                    onClick={() => setDriveType(mech.id)}
                    className={`p-4 rounded-2xl text-left transition-all border relative flex flex-col justify-between ${
                      driveType === mech.id
                        ? 'border-brand-gold bg-brand-gold/15 shadow-glow'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <span className="inline-block text-[0.6rem] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-brand-gold font-semibold mb-2">
                        {mech.tag}
                      </span>
                      <h4 className="text-sm font-serif font-bold text-white">{mech.name}</h4>
                      <p className="text-xs text-white/70 mt-1 leading-relaxed">{mech.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Cabin Aesthetic Finish */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl">
              <label className="text-sm font-semibold uppercase tracking-wider text-brand-gold flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4" /> 4. Cabin Interior Aesthetic
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'gold' as const, name: 'Champagne Gold', code: '#C4A664' },
                  { id: 'glass' as const, name: 'Full Clear Glass', code: '#8AC4D0' },
                  { id: 'noir' as const, name: 'Architectural Noir', code: '#2D3142' },
                  { id: 'wood' as const, name: 'Italian Teak Wood', code: '#9B5034' },
                ].map((cab) => (
                  <button
                    key={cab.id}
                    type="button"
                    onClick={() => setFinish(cab.id)}
                    className={`p-3 rounded-2xl text-center border transition-all ${
                      finish === cab.id
                        ? 'border-brand-gold bg-brand-gold/20'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div
                      className="h-6 w-6 rounded-full mx-auto mb-2 border border-white/20 shadow-sm"
                      style={{ backgroundColor: cab.code }}
                    />
                    <p className="text-xs font-medium text-white">{cab.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Architectural Output Card (5 Cols Sticky) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl border-2 border-brand-gold/30 bg-gradient-to-b from-[#18181f] to-[#0f0f13] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">
                  Configured Estimate
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                  Indicative Price
                </span>
              </div>

              {/* Price Range Display */}
              <div className="my-6">
                <p className="text-xs uppercase tracking-widest text-white/60">Estimated Investment</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
                    ₹{minPrice} - ₹{maxPrice}
                  </span>
                  <span className="text-lg font-serif text-brand-gold font-semibold">Lakhs*</span>
                </div>
                <p className="text-[0.7rem] text-white/50 mt-1">
                  *Ex-works estimate including equipment, safety systems & installation. Subject to civil site review.
                </p>
              </div>

              {/* Specifications Summary List */}
              <div className="space-y-3 py-4 border-t border-b border-white/10 text-xs">
                <div className="flex justify-between py-1">
                  <span className="text-white/60">Configuration:</span>
                  <span className="font-semibold text-white">G + {floors - 1} Floors ({floors} Stops)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/60">Capacity:</span>
                  <span className="font-semibold text-white">{passengers} Passengers ({passengers * 68} kg)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/60">Technology:</span>
                  <span className="font-semibold text-brand-gold uppercase">{driveType}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/60">Min Pit Required:</span>
                  <span className="font-semibold text-white">
                    {driveType === 'hydraulic' ? '100 mm (Ultra Low)' : '250 - 300 mm'}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/60">Min Overhead Headroom:</span>
                  <span className="font-semibold text-white">2500 - 2700 mm</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/60">Power Supply:</span>
                  <span className="font-semibold text-white">Single Phase 220V or 3-Phase 415V</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-white/60">Safety:</span>
                  <span className="font-semibold text-emerald-400">100% ARD Auto Rescue Device Included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={handleApplyEstimate}
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-[#ECC876] via-[#C4A664] to-[#A3823A] py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0b] shadow-gold transition hover:scale-102 active:scale-98"
                >
                  <span>Book Free Site Inspection</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={`https://wa.me/919880868893?text=Hi%20Feather%20Elevators,%20I%20used%20your%20cost%20estimator:%20${floors}%20Floors,%20${passengers}%20Passengers,%20${driveType}%20drive.%20Estimated%20₹${minPrice}L-₹${maxPrice}L.%20Please%20contact%20me.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl border border-white/15 bg-white/5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition"
                >
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-[0.7rem] text-white/50">
                <ShieldCheck className="h-4 w-4 text-brand-gold" />
                <span>Includes 10-Year Structural Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
