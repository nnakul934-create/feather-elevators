import { Phone, MessageCircle, Calculator, FileDown } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-[#0c0d11]/95 backdrop-blur-xl border-t border-brand-gold/20 py-2.5 px-3 sm:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.6)] pb-safe">
      <div className="grid grid-cols-4 gap-1.5 items-center">
        {/* Call Now */}
        <a
          href="tel:9880868893"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white/5 active:bg-white/10 text-white transition text-center"
        >
          <Phone className="h-4 w-4 text-brand-gold mb-1" />
          <span className="text-[0.65rem] font-semibold tracking-wider">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919880868893?text=Hi%20Feather%20Elevators,%20I%20am%20inquiring%20about%20a%20luxury%20home%20elevator."
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366]/15 active:bg-[#25D366]/25 text-[#25D366] transition text-center border border-[#25D366]/20"
        >
          <MessageCircle className="h-4 w-4 mb-1" />
          <span className="text-[0.65rem] font-semibold tracking-wider">WhatsApp</span>
        </a>

        {/* Cost Estimator */}
        <a
          href="#calculator"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-brand-gold/15 active:bg-brand-gold/25 text-brand-gold transition text-center border border-brand-gold/30"
        >
          <Calculator className="h-4 w-4 mb-1" />
          <span className="text-[0.65rem] font-semibold tracking-wider">Estimate</span>
        </a>

        {/* Brochure */}
        <a
          href="/brochure.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white/5 active:bg-white/10 text-white/90 transition text-center"
        >
          <FileDown className="h-4 w-4 text-brand-gold mb-1" />
          <span className="text-[0.65rem] font-semibold tracking-wider">Brochure</span>
        </a>
      </div>
    </div>
  );
}
