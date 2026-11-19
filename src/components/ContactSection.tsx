import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState<'survey' | 'quote'>('survey');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-[#070d18] px-4 sm:px-6 lg:px-12 py-20 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl sm:rounded-[3rem] border border-white/10 bg-[#0a1222]/90 p-6 sm:p-10 lg:p-12 shadow-soft backdrop-blur-2xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact info & Reassurance (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
                  Get In Touch
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
                  Begin Your Premium Elevator Project.
                </h2>
                <p className="mt-3 text-sm text-[#d4c6b5] leading-relaxed">
                  Schedule an architectural site survey or receive a tailor-made quotation from our certified lift engineers.
                </p>
              </div>

              {/* Direct Reach Cards */}
              <div className="space-y-3 pt-2">
                <a
                  href="tel:9880868893"
                  className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 transition hover:border-brand-gold/50 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wider text-brand-gold font-bold">Direct Phone</p>
                    <p className="text-sm sm:text-base font-semibold text-white">+91 9880868893 / 9964868893</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919880868893?text=Hi%20Feather%20Elevators,%20I%20would%20like%20to%20consult%20about%20a%20home%20elevator."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 p-4 transition hover:bg-[#25D366]/15"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[0.65rem] uppercase tracking-wider text-[#25D366] font-bold">WhatsApp Priority Desk</p>
                      <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-white">Instant Chat & Brochure</p>
                  </div>
                </a>

                <a
                  href="mailto:panchzero@gmail.com"
                  className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 transition hover:border-brand-gold/50 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wider text-brand-gold font-bold">Official Email</p>
                    <p className="text-sm sm:text-base font-semibold text-white">panchzero@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wider text-brand-gold font-bold">Headquarters & Experience</p>
                    <p className="text-sm font-semibold text-white">Bangalore, Karnataka, India</p>
                    <p className="text-xs text-white/60">Serving Bangalore, Hyderabad, Chennai & South India</p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-2 flex items-center gap-3 text-xs text-white/70">
                <ShieldCheck className="h-4 w-4 text-brand-gold shrink-0" />
                <span>100% Free Consultation • No Obligation Site Survey</span>
              </div>
            </div>

            {/* Right Column: Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
              {/* Type Switcher */}
              <div className="flex rounded-2xl bg-white/5 p-1 border border-white/10 mb-6">
                <button
                  type="button"
                  onClick={() => setInquiryType('survey')}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    inquiryType === 'survey'
                      ? 'bg-brand-gold text-black shadow-gold font-bold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Book Free Site Survey
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('quote')}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                    inquiryType === 'quote'
                      ? 'bg-brand-gold text-black shadow-gold font-bold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Request Detailed Quote
                </button>
              </div>

              <form
                method="POST"
                action="https://formsubmit.co/nnakul934@gmail.com"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value={`New Feather Elevator Inquiry: ${inquiryType}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="Inquiry Type" value={inquiryType} />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="e.g. Vikram Singhania"
                      required
                      className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="Phone Number"
                      placeholder="e.g. 9880868893"
                      required
                      className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="e.g. name@example.com"
                      className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                      Project City / Location *
                    </label>
                    <input
                      type="text"
                      name="Project Location"
                      placeholder="e.g. Indiranagar, Bangalore"
                      required
                      className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                      Number of Floors
                    </label>
                    <select
                      name="Number of Floors"
                      className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition focus:border-brand-gold"
                    >
                      <option value="G+1 (2 Stops)" className="bg-[#121319]">G + 1 (2 Stops)</option>
                      <option value="G+2 (3 Stops)" className="bg-[#121319]">G + 2 (3 Stops)</option>
                      <option value="G+3 (4 Stops)" className="bg-[#121319]">G + 3 (4 Stops)</option>
                      <option value="G+4 (5 Stops)" className="bg-[#121319]">G + 4 (5 Stops)</option>
                      <option value="G+5+ (6+ Stops)" className="bg-[#121319]">G + 5+ (6+ Stops)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                      Building Status
                    </label>
                    <select
                      name="Building Status"
                      className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition focus:border-brand-gold"
                    >
                      <option value="Existing Constructed Home" className="bg-[#121319]">Existing Home (Retrofit)</option>
                      <option value="Under Construction Villa" className="bg-[#121319]">Under Construction</option>
                      <option value="Architectural Planning Stage" className="bg-[#121319]">Planning Stage</option>
                      <option value="Duplex / Penthouse" className="bg-[#121319]">Duplex Penthouse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                    Your Requirements & Space Dimensions
                  </label>
                  <textarea
                    name="Message"
                    rows={3}
                    placeholder="Tell us about your home elevator vision, preferred cabin finish, or shaft space available..."
                    className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-gradient-to-r from-[#ECC876] via-[#C4A664] to-[#A3823A] py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0b] shadow-gold transition hover:scale-[1.02] active:scale-98"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Inquiry</span>
                </button>

                <p className="text-center text-[0.68rem] text-white/50 pt-1">
                  🔒 We respect your privacy. No spam. A senior lift engineer will contact you within 2 business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
