import { useState } from 'react';
import { ArrowLeft, Download, FileText, Search, Phone, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import { sitePath } from '../utils/sitePath';

export default function GetQuotation() {
  const [query, setQuery] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.trim();

    if (!cleanQuery) {
      setFeedback('Please enter your name, phone number, or quotation reference.');
      return;
    }

    setFeedback(`Preparing download for reference "${cleanQuery}"...`);

    // Attempt PDF download
    const link = document.createElement('a');
    link.href = sitePath(`/quotations/${cleanQuery}.pdf`);
    link.download = `${cleanQuery}.pdf`;
    link.click();

    setTimeout(() => {
      setFeedback(
        `If the download did not start automatically, please verify that your reference matches "${cleanQuery}" or contact our support desk directly.`
      );
    }, 1500);
  };

  return (
    <div
      className="min-h-screen text-white flex flex-col justify-between p-4 sm:p-8 md:p-12 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('${sitePath('background.jpg')}')`,
      }}
    >
      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-[#08070a]/85 backdrop-blur-md" />

      {/* Top Header */}
      <div className="relative z-10 mx-auto max-w-5xl w-full flex items-center justify-between pb-8">
        <a
          href={sitePath('/')}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:border-brand-gold hover:text-brand-gold hover:bg-white/15 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </a>

        <BrandLogo compact />
      </div>

      {/* Main Card */}
      <div className="relative z-10 mx-auto max-w-xl w-full my-auto">
        <div className="rounded-3xl sm:rounded-[2.5rem] border border-brand-gold/30 bg-[#121319]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 border border-brand-gold/30 text-brand-gold">
              <FileText className="h-7 w-7" />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">
              Client Quotation Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-white font-bold mt-2">
              Retrieve Your Proposal
            </h1>
            <p className="text-xs sm:text-sm text-[#d4c6b5] mt-2">
              Enter your Customer Name, Phone Number, or Reference ID issued by our engineering team to download your custom quotation.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleDownload} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Name or Reference (e.g. FE-nakul, qwerty)"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setFeedback(null);
                }}
                className="w-full rounded-2xl border border-white/15 bg-black/50 px-5 py-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold pl-11"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-gold" />
            </div>

            {feedback && (
              <p className="text-xs text-brand-gold text-center bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20">
                {feedback}
              </p>
            )}

            <button
              type="submit"
              className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-gradient-to-r from-[#ECC876] via-[#C4A664] to-[#A3823A] py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0b] shadow-gold transition hover:scale-[1.02] active:scale-98"
            >
              <Download className="h-4 w-4" />
              <span>Download Quotation (PDF)</span>
            </button>
          </form>

          {/* Fallback Brochure download */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-4">
            <p className="text-xs text-white/60">
              Don't have a custom quotation ID yet?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={sitePath('/brochure.pdf')}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold text-brand-cream hover:border-brand-gold hover:text-brand-gold hover:bg-white/10 transition"
              >
                <Download className="h-4 w-4 text-brand-gold" />
                <span>Standard Brochure (PDF)</span>
              </a>

              <a
                href="https://wa.me/919880868893?text=Hi%20Feather%20Elevators,%20I%20would%20like%20to%20request%20a%20new%20formal%20quotation."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 px-4 py-3 text-xs font-semibold text-[#25D366] hover:bg-[#25D366]/30 transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Request on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer support */}
      <div className="relative z-10 mx-auto max-w-5xl w-full pt-8 text-center text-xs text-white/50 flex flex-wrap items-center justify-center gap-4">
        <span>Need assistance? Call: <a href="tel:9880868893" className="text-brand-gold font-semibold">+91 9880868893</a></span>
        <span>•</span>
        <span>Feather Elevators Support Desk</span>
      </div>
    </div>
  );
}
