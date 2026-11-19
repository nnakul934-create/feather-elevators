import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Zap, Volume2, ArrowUpDown, Hammer, Award } from 'lucide-react';

const technologies = [
  {
    id: 'mrl',
    name: 'MRL Gearless Traction',
    tagline: 'High Speed & Maximum Energy Efficiency',
    idealFor: 'Duplexes, Triplexes & Villas up to G+6',
    speed: '0.4 m/s - 1.0 m/s',
    pitDepth: '250 mm - 350 mm',
    headroom: '2600 mm',
    power: 'Single Phase (220V) or 3-Phase',
    machineRoom: 'None Required (MRL)',
    noiseLevel: '< 45 dB (Whisper Quiet)',
    annualEnergy: 'Very Low (Permanent Magnet Motor)',
    features: [
      'German Permanent Magnet Gearless Motor',
      'Regenerative drive saves up to 40% energy',
      'Smoothest acceleration and deceleration curve',
      '100% ARD Automatic Rescue System',
    ],
    recommended: true,
  },
  {
    id: 'hydraulic',
    name: 'German Hydraulic Lift',
    tagline: 'Ultra-Low Pit & Gentle Gliding Motion',
    idealFor: 'Existing Homes with Civil Restrictions',
    speed: '0.3 m/s - 0.5 m/s',
    pitDepth: '100 mm - 150 mm (Lowest Pit)',
    headroom: '2400 mm (Lowest Overhead)',
    power: '3-Phase (415V) or Single Phase (Powerpack)',
    machineRoom: 'Small Cabinet under stairs or remote',
    noiseLevel: '< 48 dB (Quiet Powerpack)',
    annualEnergy: 'Zero standby power',
    features: [
      'Installs with almost zero floor digging (100mm)',
      'Gravity descent in case of power failure (cannot get stuck)',
      'Compact footprint for tight interior spaces',
      'Heavy duty load tolerance',
    ],
    recommended: false,
  },
  {
    id: 'panoramic',
    name: 'Panoramic Glass Capsule',
    tagline: 'Architectural Showpiece with 360° Light',
    idealFor: 'Luxury Courtyards, Staircase Eyes & Skylights',
    speed: '0.4 m/s',
    pitDepth: '200 mm - 300 mm',
    headroom: '2700 mm',
    power: 'Single Phase or 3-Phase',
    machineRoom: 'None Required',
    noiseLevel: '< 45 dB',
    annualEnergy: 'Low LED & efficient motor',
    features: [
      'Laminated curved toughened safety glass',
      'Floods your home interior with natural light',
      'Frameless glass doors with soft-close sensors',
      'Custom architectural steel skeleton',
    ],
    recommended: false,
  },
];

export default function TechComparison() {
  const [activeTab, setActiveTab] = useState<'mrl' | 'hydraulic' | 'panoramic'>('mrl');

  return (
    <section id="specs" className="relative px-4 sm:px-6 lg:px-12 py-20 bg-[#070b14] border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-3">
            Engineering Precision
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
            Compare Elevator Technologies
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#d1c2af]">
            Understand which elevator mechanism best matches your villa's architectural layout, civil constraints, and aesthetic goals.
          </p>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex md:hidden rounded-2xl bg-white/5 p-1 border border-white/10 mb-8">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(tech.id as any)}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition ${
                activeTab === tech.id
                  ? 'bg-brand-gold text-black shadow-gold font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {tech.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const isSelected = activeTab === tech.id;
            return (
              <motion.div
                key={tech.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between ${
                  tech.recommended
                    ? 'border-brand-gold bg-gradient-to-b from-[#181a24] to-[#111219] shadow-soft relative'
                    : 'border-white/10 bg-white/[0.03] backdrop-blur-xl'
                } ${!isSelected ? 'hidden md:flex' : 'flex'}`}
              >
                {tech.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ECC876] to-[#C4A664] px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-black shadow-gold">
                    ★ Most Recommended
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">{tech.name}</h3>
                    <p className="text-xs text-brand-gold mt-1 font-medium">{tech.tagline}</p>
                    <p className="text-xs text-white/60 mt-2 bg-white/5 rounded-xl p-2.5 border border-white/5">
                      <strong className="text-white/80">Best for:</strong> {tech.idealFor}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-3 py-4 border-t border-white/10 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 flex items-center gap-1.5">
                        <ArrowUpDown className="h-3.5 w-3.5 text-brand-gold" /> Speed
                      </span>
                      <span className="font-semibold text-white">{tech.speed}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/60 flex items-center gap-1.5">
                        <Hammer className="h-3.5 w-3.5 text-brand-gold" /> Pit Depth
                      </span>
                      <span className="font-semibold text-white">{tech.pitDepth}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/60 flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-brand-gold" /> Power Requirement
                      </span>
                      <span className="font-semibold text-white">{tech.power}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-white/60 flex items-center gap-1.5">
                        <Volume2 className="h-3.5 w-3.5 text-brand-gold" /> Acoustics
                      </span>
                      <span className="font-semibold text-white">{tech.noiseLevel}</span>
                    </div>
                  </div>

                  {/* Bullet features */}
                  <div className="mt-5 space-y-2.5 pt-4 border-t border-white/10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-cream/80">
                      Standard Inclusions
                    </p>
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#cfc2b2]">
                        <Check className="h-3.5 w-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    className={`flex items-center justify-center gap-2 w-full rounded-2xl py-3.5 text-xs font-bold uppercase tracking-wider transition ${
                      tech.recommended
                        ? 'bg-gradient-to-r from-[#ECC876] to-[#C4A664] text-black shadow-gold hover:scale-[1.02]'
                        : 'border border-white/15 bg-white/5 text-white hover:border-brand-gold hover:text-brand-gold'
                    }`}
                  >
                    Inquire For This System
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
