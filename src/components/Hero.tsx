import { motion } from 'framer-motion';
import { ArrowDown, Calculator, ShieldCheck, Sparkles, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

const contentContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function LiftDoors() {
  return (
    <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
      {/* Top Elevator Floor Indicator during door opening */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        className="absolute top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-brand-gold/40 bg-black/90 px-4 py-1.5 shadow-glow"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[0.68rem] uppercase font-mono tracking-widest text-brand-gold">
          LOBBY • FLOOR 01 • FEATHER ELEVATORS
        </span>
      </motion.div>

      {/* Left Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-101%' }}
        transition={{ duration: 1.2, delay: 0.45, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#111215] via-[#1a1c22] to-[#14161a] border-r-2 border-brand-gold/30 shadow-[10px_0_30px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(196,166,100,0.04)_50%,transparent_100%)]" />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-40 w-1 bg-brand-gold/30 rounded-full" />
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '101%' }}
        transition={{ duration: 1.2, delay: 0.45, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111215] via-[#1a1c22] to-[#14161a] border-l-2 border-brand-gold/30 shadow-[-10px_0_30px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(196,166,100,0.04)_50%,transparent_100%)]" />
        <div className="absolute left-6 top-1/2 -translate-y-1/2 h-40 w-1 bg-brand-gold/30 rounded-full" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-cover bg-center pt-24 pb-16 sm:pt-28 sm:pb-20"
      style={{ backgroundImage: "url('/Web%203.webp')" }}
    >
      <LiftDoors />

      {/* Gradient Vignette & Mood Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-[#080707] z-10" />
      <div className="absolute inset-0 bg-radial-gradient from-brand-gold/10 via-transparent to-black/60 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={contentContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Top Brand Emblem Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-black/60 px-4 py-1.5 backdrop-blur-md shadow-glow"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-gold animate-spin-slow" />
            <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.26em] text-brand-gold">
              Architectural Residential Elevators • German Precision
            </span>
          </motion.div>

          {/* Logo Presentation */}
          <motion.div variants={fadeInUp} className="mb-4">
            <BrandLogo />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif uppercase tracking-[0.16em] text-white leading-tight drop-shadow-2xl font-bold"
          >
            Quiet Elegance.{' '}
            <span className="gold-text-gradient block sm:inline">Effortless Motion.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#e0d6c9] font-light"
          >
            Crafting luxury home lifts for private residences, villas, and duplexes.
            Whisper-quiet hydraulics, seamless glass panoramic shafts, and bespoke Italian interiors.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href="#calculator"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#ECC876] via-[#C4A664] to-[#A3823A] px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0b] shadow-gold transition hover:scale-105 active:scale-95"
            >
              <Calculator className="h-4 w-4" />
              <span>Calculate Lift Price</span>
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:border-brand-gold hover:text-brand-gold hover:bg-white/15"
            >
              <span>Book Site Survey</span>
              <ChevronRight className="h-4 w-4" />
            </a>

            <a
              href="/quotation"
              className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border border-brand-gold/30 bg-black/40 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold transition hover:bg-brand-gold/10"
            >
              <FileText className="h-4 w-4" />
              <span>Client Portal</span>
            </a>
          </motion.div>

          {/* Quick Pillars Grid (Mobile friendly 2x2 or 4-col) */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full"
          >
            {[
              { title: 'Zero Pit / 100mm', desc: 'No digging required' },
              { title: 'Whisper-Quiet <45dB', desc: 'Serene home acoustics' },
              { title: '100% ARD Safety', desc: 'Automatic power backup' },
              { title: 'Single Phase 220V', desc: 'Runs on standard power' },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-4 text-left backdrop-blur-md"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">{pillar.title}</h4>
                  <p className="text-[0.65rem] sm:text-xs text-[#b8ab9a] mt-0.5">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/50 hover:text-brand-gold transition"
        aria-label="Scroll down"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.25em]">Explore</span>
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.a>
    </section>
  );
}
