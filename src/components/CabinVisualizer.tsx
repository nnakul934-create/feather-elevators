import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { sitePath } from '../utils/sitePath';

const cabinThemes = [
  {
    id: 'gold',
    name: 'The Imperial Gold',
    category: 'Signature Luxury',
    image: sitePath('600.jpg'),
    description:
      'Brushed champagne gold stainless steel with warm perimeter illumination and mirror-finish accents.',
    specifications: {
      walls: 'Hairline Champagne Gold PVD Stainless Steel',
      ceiling: 'Laser-cut geometric pattern with indirect ambient LED',
      floor: 'Imported Italian Botticino Marble',
      handrail: 'Ergonomic round brass anodized rail',
      panel: 'Capacitive black glass touch COP with floor indicator',
    },
  },
  {
    id: 'glass',
    name: 'The Crystal Panorama',
    category: 'Architectural Glass',
    image: sitePath('e200.webp'),
    description:
      'Curved and flat laminated safety glass creating an airy, light-filled focal point inside your residence.',
    specifications: {
      walls: '10+10 mm Toughened & Laminated Ultra-Clear Glass',
      ceiling: 'Ultra-thin circular starlight LED panel',
      floor: 'White Statuario Marble inlay',
      handrail: 'Floating stainless steel rail with hidden bracket',
      panel: 'Slimline column glass COP with white OLED display',
    },
  },
  {
    id: 'noir',
    name: 'The Modern Noir',
    category: 'Contemporary Minimalist',
    image: sitePath('500.jpg'),
    description:
      'Deep titanium black with moody atmospheric lighting, designed for contemporary architectural duplexes.',
    specifications: {
      walls: 'Matte Black Titanium Hairline with Charcoal Mirrors',
      ceiling: 'Black powder-coated frame with warm 3000K downlights',
      floor: 'Nero Marquina Quartz with golden veins',
      handrail: 'Matte black architectural tubular bar',
      panel: 'Minimalist integrated push buttons with gold backlit rings',
    },
  },
  {
    id: 'bespoke',
    name: 'The Villa Heritage',
    category: 'Bespoke Custom',
    image: sitePath('residental.jpg'),
    description:
      'Rich natural Burmese teak wood veneer harmonized with warm bronze detailing and soft fabric textures.',
    specifications: {
      walls: 'Natural Teak & Walnut fluted panels with brass trim',
      ceiling: 'Cove-lit acoustic wood-slat design',
      floor: 'Custom parquet hardwood or natural stone',
      handrail: 'Hand-stitched leather wrapped handrail',
      panel: 'Vintage bronze finish faceplate with chime speaker',
    },
  },
];

export default function CabinVisualizer() {
  const [selectedCabin, setSelectedCabin] = useState(cabinThemes[0]);

  return (
    <section className="relative px-4 sm:px-6 lg:px-12 py-20 bg-[#09080b] border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-brand-gold font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interior Aesthetics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
            Curated Cabin Collections
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#d1c2af]">
            Every Feather elevator cabin is an architectural gallery piece designed to seamlessly complement your interior decor.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {cabinThemes.map((cabin) => (
            <button
              key={cabin.id}
              onClick={() => setSelectedCabin(cabin)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCabin.id === cabin.id
                  ? 'bg-gradient-to-r from-[#ECC876] to-[#C4A664] text-black shadow-gold scale-105 font-bold'
                  : 'border border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
              }`}
            >
              {cabin.name}
            </button>
          ))}
        </div>

        {/* Visualizer Display Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCabin.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl border border-white/15 bg-white/[0.02] p-6 sm:p-10 backdrop-blur-2xl shadow-soft"
          >
            {/* Image Preview (7 Cols) */}
            <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl">
              <div
                className="h-[340px] sm:h-[450px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${selectedCabin.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-center justify-between">
                <div>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-brand-gold font-bold">
                    {selectedCabin.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">{selectedCabin.name}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-black/60 border border-brand-gold/40 flex items-center justify-center text-brand-gold backdrop-blur-md">
                  <Eye className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Specifications Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">
                  Architectural Specifications
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
                  {selectedCabin.name}
                </h3>
                <p className="text-sm text-[#d0c2af] mt-2 leading-relaxed">{selectedCabin.description}</p>
              </div>

              {/* Spec list */}
              <div className="space-y-3.5 border-t border-b border-white/10 py-5 text-xs">
                {Object.entries(selectedCabin.specifications).map(([key, val]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2">
                    <span className="text-white/60 capitalize font-medium">{key}:</span>
                    <span className="text-white font-semibold sm:text-right">{val}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-[#ECC876] via-[#C4A664] to-[#A3823A] py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0a0a0b] shadow-gold hover:scale-[1.02] active:scale-98 transition"
                >
                  <span>Request Finish Samples</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
