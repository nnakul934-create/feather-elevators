import { useState, type KeyboardEvent, type MouseEvent } from 'react';
import { X, Phone, Mail } from 'lucide-react';

type BrandLogoProps = {
  compact?: boolean;
  href?: string;
  zoomable?: boolean;
};

export default function BrandLogo({ compact = false, href, zoomable = false }: BrandLogoProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const logoSrc = '/logo.png';

  const handleLogoClick = (event: MouseEvent<HTMLImageElement>) => {
    if (!zoomable) return;
    event.preventDefault();
    setIsZoomed(true);
  };

  const handleLogoKeyDown = (event: KeyboardEvent<HTMLImageElement>) => {
    if (!zoomable) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsZoomed(true);
    }
  };

  const closeZoom = () => setIsZoomed(false);

  const logoContent = (
    <div
      className={`relative flex items-center justify-center rounded-full border border-brand-gold/40 bg-gradient-to-br from-[#FFF9F0] via-[#F5E9D8] to-[#E3CDAF] shadow-glow transition-transform duration-300 hover:scale-105 ${
        compact ? 'h-11 w-11 sm:h-12 sm:w-12 p-1.5' : 'h-16 w-16 sm:h-20 sm:w-20 p-2.5'
      }`}
    >
      <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-md animate-pulse" />
      <img
        src={logoSrc}
        alt="Feather Elevators Logo"
        className={`relative h-full w-full rounded-full object-cover shadow-sm ${zoomable ? 'cursor-pointer' : ''}`}
        onClick={handleLogoClick}
        onKeyDown={handleLogoKeyDown}
        role={zoomable ? 'button' : undefined}
        tabIndex={zoomable ? 0 : undefined}
      />
    </div>
  );

  return (
    <>
      <div className={`flex items-center ${compact ? 'gap-3' : 'gap-4 sm:gap-5'}`}>
        {href ? (
          <a href={href} className="inline-flex focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-full">
            {logoContent}
          </a>
        ) : (
          logoContent
        )}

        <div className={compact ? 'flex flex-col' : 'space-y-0.5 sm:space-y-1'}>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold uppercase tracking-[0.24em] text-white text-base sm:text-lg">
              FEATHER
            </span>
            <span className="font-display font-light uppercase tracking-[0.24em] text-brand-gold text-base sm:text-lg">
              ELEVATORS
            </span>
          </div>
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.28em] text-brand-cream/70">
            Luxury Residential Lifts
          </p>
        </div>
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Logo preview"
          onClick={closeZoom}
        >
          <div
            className="relative flex flex-col items-center justify-center max-h-[90vh] max-w-xl w-full rounded-3xl bg-[#121216] border border-white/10 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeZoom}
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={logoSrc}
              alt="Feather Elevators"
              className="max-h-[50vh] w-auto rounded-2xl object-contain mb-6 shadow-glow"
            />

            <div className="w-full text-center space-y-2 border-t border-white/10 pt-4">
              <h3 className="font-serif text-xl text-white">Feather Elevators</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">Excellence in Motion</p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-white/80 pt-2">
                <a href="tel:9880868893" className="flex items-center gap-1.5 hover:text-brand-gold">
                  <Phone className="h-3.5 w-3.5 text-brand-gold" /> +91 9880868893
                </a>
                <a href="mailto:panchzero@gmail.com" className="flex items-center gap-1.5 hover:text-brand-gold">
                  <Mail className="h-3.5 w-3.5 text-brand-gold" /> panchzero@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
