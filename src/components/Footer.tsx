import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Lock, FileDown } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { sitePath } from '../utils/sitePath';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#07070a] px-4 sm:px-6 lg:px-12 pt-16 pb-28 sm:pb-16 text-[#c9bca8]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (2 Cols on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo />
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-[#d4c5b3] font-light">
              Crafting bespoke luxury residential elevators with German engineering precision, whisper-quiet mobility, and sculptural glass aesthetics for private residences.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-gold">
              <ShieldCheck className="h-4 w-4" />
              <span>ISO 9001:2015 Certified • EN 81-41 Safety Standards</span>
            </div>
          </div>

          {/* Column 1: Elevator Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-bold">Solutions</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#services" className="hover:text-brand-gold transition">
                  MRL Gearless Home Lifts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition">
                  German Hydraulic Lifts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition">
                  Panoramic Glass Capsules
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition">
                  Zero-Pit Retrofit Elevators
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition">
                  Custom Villa Finishes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-bold">Explore</h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#calculator" className="hover:text-brand-gold transition flex items-center gap-1.5">
                  <span>Cost Estimator</span>
                  <span className="text-[0.6rem] bg-brand-gold/20 text-brand-gold px-1.5 py-0.2 rounded font-semibold">New</span>
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-brand-gold transition">
                  Technology Comparison
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-gold transition">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-gold transition">
                  Homeowner FAQ
                </a>
              </li>
              <li>
                <a href={sitePath('/quotation')} className="hover:text-brand-gold transition">
                  Client Quotation Portal
                </a>
              </li>
              <li>
                <a href={sitePath('/brochure.pdf')} target="_blank" rel="noreferrer" className="hover:text-brand-gold transition flex items-center gap-1">
                  <FileDown className="h-3 w-3" /> Download Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-bold">Contact</h4>
            <div className="space-y-2.5 text-xs text-white/70">
              <a href="tel:9880868893" className="flex items-center gap-2 hover:text-brand-gold transition">
                <Phone className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                <span>+91 9880868893</span>
              </a>
              <a href="tel:9964868893" className="flex items-center gap-2 hover:text-brand-gold transition">
                <Phone className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                <span>+91 9964868893</span>
              </a>
              <a href="mailto:panchzero@gmail.com" className="flex items-center gap-2 hover:text-brand-gold transition">
                <Mail className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                <span className="break-all">panchzero@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="h-3.5 w-3.5 text-brand-gold shrink-0 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Feather Elevators. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href={sitePath('/admin')} className="hover:text-brand-gold transition flex items-center gap-1">
              <Lock className="h-3 w-3" /> Staff Portal
            </a>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
