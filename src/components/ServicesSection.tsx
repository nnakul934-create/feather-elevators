import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export interface Service {
  title: string;
  category: string;
  description: string;
  image: string;
  badge: string;
  specs: string[];
}

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="relative px-4 sm:px-6 lg:px-12 py-20 sm:py-24 bg-[#0a0a0e] border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-brand-gold font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Elevator Models & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white font-bold">
            Luxury Elevator Solutions Crafted for Refined Residences.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#d6c0a7]">
            Every system is engineered with whisper-quiet drive mechanics, architectural glass finishes, and customizable cabin interiors designed to elevate home lifestyle and property value.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#121217] shadow-soft flex flex-col justify-between"
            >
              {/* Image banner with overlay */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/50 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex rounded-full border border-brand-gold/40 bg-black/70 px-3.5 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-brand-gold font-bold backdrop-blur-md">
                    {service.badge}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 sm:p-8 pt-2 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-brand-gold/80 font-semibold mb-1">
                    {service.category}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">{service.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#d4c6b5]">
                    {service.description}
                  </p>

                  {/* Quick specs chips */}
                  {service.specs && (
                    <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-white/10">
                      {service.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[0.68rem] text-white/80"
                        >
                          <Check className="h-3 w-3 text-brand-gold" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-white transition"
                  >
                    <span>Estimate Cost</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#contact"
                    className="rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-gold hover:text-black transition"
                  >
                    Request Survey
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
