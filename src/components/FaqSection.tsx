import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

const faqs = [
  {
    question: 'Can a Feather Elevator be installed in an existing constructed house?',
    answer:
      'Yes, absolutely. Over 60% of our residential installations are retrofit projects in completed villas and duplexes. We specialize in low-pit (only 100mm to 200mm) and zero-machine-room elevators that fit within staircase eyes, courtyards, or external glass shafts without major structural alterations.',
  },
  {
    question: 'What happens during a sudden power outage? Can anyone get trapped?',
    answer:
      'Never. All Feather Elevators come equipped with an automatic ARD (Automatic Rescue Device) and battery backup. During a blackout, the elevator automatically moves smoothly to the nearest floor, unlocks the doors, and illuminates the cabin so passengers exit completely safely and stress-free.',
  },
  {
    question: 'What electrical supply is needed (Single Phase vs 3-Phase)?',
    answer:
      'Our gearless MRL and residential hydraulic systems are engineered to operate on standard domestic Single Phase (220V - 230V AC) electricity, drawing no more power than a standard household air conditioner. Three-phase (415V) is also supported for heavy-duty or higher-speed configurations.',
  },
  {
    question: 'How much civil shaft dimensions and pit depth are required?',
    answer:
      'For our compact 3-4 person model, we require as little as 1000mm width x 1100mm depth of internal shaft space. Pit depth can be as minimal as 100mm (or a small 2-inch ramp if zero pit is available). Headroom on the top floor requires only 2400mm to 2600mm.',
  },
  {
    question: 'How quiet is the elevator ride?',
    answer:
      'Feather Elevators live up to their name: our permanent-magnet gearless drives and silent hydraulic powerpacks operate under 45 decibels — quieter than a whisper in a library. Your family will never be disturbed, even when operating late at night.',
  },
  {
    question: 'What is the manufacturing timeline and warranty coverage?',
    answer:
      'Custom manufacturing takes 4 to 6 weeks, with on-site mechanical installation taking approximately 7 to 10 days. All systems come with a comprehensive 2-year full system warranty, a 10-year structural guarantee, and complimentary 1-year 24/7 preventive maintenance.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative px-4 sm:px-6 lg:px-12 py-20 bg-[#070b14] border-t border-white/10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-brand-gold font-semibold mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#d1c2af]">
            Everything you need to know about planning, safety, and installing a luxury home lift.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-brand-gold/40 bg-white/[0.05] shadow-soft'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 border-brand-gold bg-brand-gold text-black'
                        : 'border-white/15 bg-white/5 text-white/70'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm leading-relaxed text-[#d6c7b5] border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Have more questions card */}
        <div className="mt-12 rounded-3xl border border-brand-gold/25 bg-gradient-to-r from-brand-gold/10 via-white/5 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-serif font-bold text-white">Have a unique site challenge or floor plan?</h4>
            <p className="text-xs sm:text-sm text-[#d4c6b5] mt-1">
              Our architectural elevator consultants offer free on-site feasibility assessments.
            </p>
          </div>
          <a
            href="tel:9880868893"
            className="flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-gold shrink-0 hover:scale-105 transition"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Speak With Engineer</span>
          </a>
        </div>
      </div>
    </section>
  );
}
