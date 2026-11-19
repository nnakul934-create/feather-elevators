import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, FileDown, ArrowRight, MessageCircle, ShieldCheck, Sparkles, Calculator } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { sitePath } from '../utils/sitePath';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Models', href: '#services' },
  { label: 'Estimator', href: '#calculator', badge: 'New' },
  { label: 'Gallery', href: '#projects' },
  { label: 'Comparison', href: '#specs' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080707]/90 backdrop-blur-xl border-b border-brand-gold/15 py-3 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="group">
            <BrandLogo compact />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.22em] text-[#d6c9b8] transition-colors duration-200 hover:text-brand-gold py-1"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 rounded-full bg-brand-gold/20 px-1.5 py-0.5 text-[0.6rem] font-semibold text-brand-gold tracking-normal">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9880868893"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium tracking-wider text-brand-cream transition hover:border-brand-gold hover:text-brand-gold hover:bg-white/10"
              title="Call Feather Elevators"
            >
              <Phone className="h-3.5 w-3.5 text-brand-gold" />
              <span>+91 9880868893</span>
            </a>

            <a
              href={sitePath('/brochure.pdf')}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold transition hover:bg-brand-gold hover:text-black"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Brochure</span>
            </a>

            <a
              href="#contact"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#ECC876] via-[#C4A664] to-[#A3823A] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0a0a0b] shadow-gold transition hover:scale-105 active:scale-95"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Right Quick Action & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:9880868893"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold"
              aria-label="Call Now"
            >
              <Phone className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="rounded-full bg-brand-gold px-3.5 py-2 text-[0.7rem] font-bold uppercase tracking-wider text-black sm:text-xs sm:px-4"
            >
              Quote
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 active:scale-95"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Top decorative line */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" /> Navigation
                </span>
                <span className="text-xs text-white/50 tracking-wider">Feather Luxury Lifts</span>
              </div>

              {/* Navigation Links */}
              <div className="grid gap-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-5 py-3.5 text-base font-serif tracking-wider text-white transition hover:bg-brand-gold/15 hover:text-brand-gold border border-white/5"
                  >
                    <span className="flex items-center gap-3">
                      {link.label === 'Estimator' && <Calculator className="h-4 w-4 text-brand-gold" />}
                      {link.label}
                    </span>
                    {link.badge ? (
                      <span className="rounded-full bg-brand-gold/20 px-2.5 py-0.5 text-xs text-brand-gold">
                        {link.badge}
                      </span>
                    ) : (
                      <ArrowRight className="h-4 w-4 text-white/30" />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Mobile Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-white/10 mt-6">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:9880868893"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/15 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition"
                >
                  <Phone className="h-4 w-4 text-brand-gold" />
                  Call Us
                </a>

                <a
                  href="https://wa.me/919880868893?text=Hi%20Feather%20Elevators,%20I%20am%20interested%20in%20a%20residential%20elevator%20for%20my%20home."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#25D366] hover:bg-[#25D366]/30 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <a
                href={sitePath('/brochure.pdf')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-white/5 border border-brand-gold/30 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold hover:bg-brand-gold hover:text-black transition"
              >
                <FileDown className="h-4 w-4" />
                Download Brochure (PDF)
              </a>

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-[#ECC876] via-[#C4A664] to-[#A3823A] py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-gold"
              >
                Request Free Site Survey
              </a>

              <div className="flex items-center justify-center gap-2 pt-2 text-[0.7rem] text-white/40">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                <span>German Precision • ISO 9001:2015 Certified</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
