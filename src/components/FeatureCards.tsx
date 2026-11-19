import { motion } from 'framer-motion';
import { ShieldCheck, Award, Sparkles, Clock, CheckCircle } from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
  points?: string[];
}

interface FeatureCardsProps {
  items: FeatureItem[];
}

const icons = [ShieldCheck, Award, Sparkles, Clock];

export default function FeatureCards({ items }: FeatureCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item, index) => {
        const IconComponent = icons[index % icons.length];
        return (
          <motion.article
            key={item.title}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 sm:p-8 backdrop-blur-xl shadow-soft hover:border-brand-gold/40 transition-all duration-300"
          >
            {/* Top Icon Badge */}
            <div className="mb-6 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-brand-gold/15 border border-brand-gold/30 text-brand-gold transition duration-300 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-black">
              <IconComponent className="h-7 w-7 transition-colors" />
            </div>

            <h3 className="text-xl sm:text-2xl font-serif tracking-tight text-white font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#dad1c8]">
              {item.description}
            </p>

            {item.points && (
              <ul className="mt-4 space-y-1.5 pt-4 border-t border-white/5 text-xs text-white/70">
                {item.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-brand-gold shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}
