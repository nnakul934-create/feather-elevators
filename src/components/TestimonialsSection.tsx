import { motion } from 'framer-motion';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram & Radhika Singhania',
    location: 'Sadashivanagar, Bangalore',
    villaType: '4-Storey Contemporary Villa',
    model: 'Panoramic Glass Hydraulic',
    rating: 5,
    quote:
      'We wanted an elevator that looked like a piece of sculptural art in our central atrium. Feather Elevators delivered beyond our expectations. The ride is whisper-silent and our elderly parents move comfortably without taking stairs.',
  },
  {
    name: 'Dr. Arvind Menon',
    location: 'Indiranagar, Bangalore',
    villaType: 'Bungalow Retrofit (G+2)',
    model: 'Low-Pit MRL Traction Lift',
    rating: 5,
    quote:
      'We had zero pit depth available and other vendors said civil digging was unavoidable. Feather engineered an ultra-low 100mm pit solution that required no foundation tampering. The champagne gold finish matches our Italian marble beautifully.',
  },
  {
    name: 'Meera Krishnan',
    location: 'Whitefield, Bangalore',
    villaType: 'Luxury Duplex Penthouse',
    model: 'Modern Noir Custom Lift',
    rating: 5,
    quote:
      'From site survey to final commissioning, the Feather team was punctual, courteous, and obsessive about clean work. The Automatic Rescue Device gives us total peace of mind during monsoon power cuts.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-12 py-20 bg-[#08070b] border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-3">
            Client Experiences
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
            Trusted by Discerning Homeowners
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#d1c2af]">
            See why architects, interior designers, and luxury residence owners across South India choose Feather Elevators.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between relative group hover:border-brand-gold/40 transition-all duration-300"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-brand-gold/30 group-hover:text-brand-gold/60 transition" />
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base leading-relaxed text-[#ddd2c4] italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info footer */}
              <div className="pt-4 border-t border-white/10 space-y-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-serif font-bold text-white text-base">{item.name}</h4>
                  <span title="Verified Homeowner">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  </span>
                </div>
                <p className="text-xs text-brand-gold flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[0.65rem] text-white/60">
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                    {item.villaType}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                    {item.model}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
