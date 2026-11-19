import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import { useMemo, useState } from 'react';
import { ArrowLeft, FileDown, ShieldCheck, CheckCircle2, Sparkles, Building, User, IndianRupee, Layers } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import { sitePath } from '../utils/sitePath';

export default function AdminQuote() {
  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [passengers, setPassengers] = useState('6');
  const [amount, setAmount] = useState('');
  const [floors, setFloors] = useState('3');
  const [stops, setStops] = useState('3');
  const [carEnclosure, setCarEnclosure] = useState('Stainless Steel Hairline / Titanium Gold Finish');
  const [carDoor, setCarDoor] = useState('Automatic Center Opening Glass/SS Door');
  const [landingDoor, setLandingDoor] = useState('Full Vision Toughened Glass Door');
  const [landingFrame, setLandingFrame] = useState('Narrow Jamb Brushed SS Frame');
  const [firstStage, setFirstStage] = useState('30% Advance on Confirmation');
  const [secondStage, setSecondStage] = useState('50% on Material Dispatch');
  const [thirdStage, setThirdStage] = useState('20% on Handover & Commissioning');
  const [powerSupply, setPowerSupply] = useState('415V-440V, 3 Phase');
  const [cabin, setCabin] = useState('Luxury Designer Cabin with LED Starlight Coving');
  const [frames, setFrames] = useState('High Tensile Mild Steel Structural Frame');
  const [lopCop, setLopCop] = useState('Capacitive Touch Button Glass Panel (White Backlit)');
  const [liftType, setLiftType] = useState('MRL');

  const capacity = useMemo(() => {
    return Number(passengers || 0) * 68;
  }, [passengers]);

  const quotationNumber = `FE-${phone || '0000'}`;

  const convertToIndianWords = (num: number) => {
    if (!num || Number.isNaN(num)) return '';

    const ones = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
      'Seventeen', 'Eighteen', 'Nineteen',
    ];

    const tens = [
      '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',
    ];

    const numToWords = (n: number): string => {
      if (n < 20) return ones[n];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ` ${ones[n % 10]}` : '');
      if (n < 1000) return `${ones[Math.floor(n / 100)]} Hundred ` + (n % 100 ? numToWords(n % 100) : '');
      if (n < 100000) return `${numToWords(Math.floor(n / 1000))} Thousand ` + (n % 1000 ? numToWords(n % 1000) : '');
      if (n < 10000000) return `${numToWords(Math.floor(n / 100000))} Lakh ` + (n % 100000 ? numToWords(n % 100000) : '');
      return `${numToWords(Math.floor(n / 10000000))} Crore ` + (n % 10000000 ? numToWords(n % 10000000) : '');
    };

    return `${numToWords(num)} Rupees Only`;
  };

  const amountWords = amount ? convertToIndianWords(Number(amount)) : '';

  const inputClass =
    'w-full p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm outline-none transition focus:border-brand-gold focus:ring-1 focus:ring-brand-gold';

  const labelClass = 'block text-xs uppercase tracking-wider text-brand-gold/90 mb-1.5 font-medium';

  // Quick Preset Helper
  const applyPreset = (type: 'villa-mrl' | 'hydraulic') => {
    if (type === 'villa-mrl') {
      setPassengers('6');
      setFloors('3');
      setStops('3');
      setLiftType('MRL');
      setPowerSupply('415V-440V, 3 Phase');
      setCarEnclosure('Champagne Gold Hairline SS + Mirror Accent');
      setCarDoor('Automatic 2-Panel Center Opening Glass Door');
      setAmount('1350000');
    } else {
      setPassengers('4');
      setFloors('2');
      setStops('2');
      setLiftType('MRL');
      setPowerSupply('215V-240V, Single Phase');
      setCarEnclosure('Panoramic Ultra-Clear Toughened Glass');
      setCarDoor('Telescopic Glass Frameless Automatic Door');
      setAmount('1180000');
    }
  };

  const generateQuotation = async () => {
    try {
      const response = await fetch(sitePath('/quotation.docx'));
      const content = await response.arrayBuffer();

      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      const totalAmount = Number(amount || 0);

      doc.render({
        change1: customer,
        change2: date,
        change3: location,
        change4: phone,
        change5: passengers,
        change6: capacity,
        change7: floors,
        change8: stops,
        change9: carEnclosure,
        change10: carDoor,
        change11: landingDoor,
        change12: landingFrame,
        change13: powerSupply,
        change14: totalAmount.toLocaleString('en-IN'),
        change15: amountWords,
        change17: firstStage,
        change18: secondStage,
        change19: thirdStage,
        change20: cabin,
        change21: frames,
        change22: lopCop,
        change23: liftType,
      });

      const blob = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });

      saveAs(blob, `${quotationNumber}.docx`);
    } catch (error) {
      console.error(error);
      alert('Quotation generation failed. Please ensure quotation.docx template is accessible.');
    }
  };

  return (
    <div className="min-h-screen bg-[#070e1b] text-white p-4 sm:p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <a
            href={sitePath('/')}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:border-brand-gold hover:text-brand-gold transition w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Site</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
              Engineering Admin Console
            </span>
          </div>
        </div>

        {/* Dashboard Box */}
        <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">
                Commercial Generator
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-bold mt-1">
                Feather Elevator Quotation Builder
              </h1>
              <p className="text-xs sm:text-sm text-white/60 mt-1">
                Produce executive client quotations with automated Indian Rupee currency words and technical specs.
              </p>
            </div>

            {/* Quotation Badge */}
            <div className="rounded-2xl bg-black/40 border border-brand-gold/30 p-4 shrink-0 text-center sm:text-right">
              <p className="text-[0.65rem] uppercase tracking-wider text-white/50">Quotation Reference</p>
              <p className="text-xl font-mono font-bold text-brand-gold mt-0.5">{quotationNumber}</p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="py-4 flex flex-wrap items-center gap-3">
            <span className="text-xs text-white/50 flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-brand-gold" /> Quick Presets:
            </span>
            <button
              type="button"
              onClick={() => applyPreset('villa-mrl')}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/50 text-xs font-medium text-white transition"
            >
              Standard Villa MRL (6-Pax, G+2)
            </button>
            <button
              type="button"
              onClick={() => applyPreset('hydraulic')}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/50 text-xs font-medium text-white transition"
            >
              Glass Panoramic (4-Pax, G+1)
            </button>
          </div>

          {/* Form Sections */}
          <div className="space-y-8 pt-4">
            {/* Section 1: Customer & Site Details */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white pb-3 border-b border-white/10 flex items-center gap-2 mb-4">
                <User className="h-4 w-4 text-brand-gold" /> 1. Client & Site Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className={labelClass}>Customer Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Vikram Singhania"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    type="text"
                    placeholder="e.g. 9880868893"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Project Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Bangalore"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Quotation Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Elevator Technical Parameters */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white pb-3 border-b border-white/10 flex items-center gap-2 mb-4">
                <Building className="h-4 w-4 text-brand-gold" /> 2. Configuration & Drive Mechanics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className={labelClass}>Passengers Count</label>
                  <input
                    type="number"
                    placeholder="e.g. 6"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Floors Count</label>
                  <input
                    type="number"
                    placeholder="e.g. 3"
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Stops Count</label>
                  <input
                    type="number"
                    placeholder="e.g. 3"
                    value={stops}
                    onChange={(e) => setStops(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Drive Type</label>
                  <select
                    value={liftType}
                    onChange={(e) => setLiftType(e.target.value)}
                    className={inputClass}
                  >
                    <option value="MRL" className="bg-[#121319]">MRL (Machine Room Less)</option>
                    <option value="MR" className="bg-[#121319]">MR (Machine Room)</option>
                    <option value="Hydraulic" className="bg-[#121319]">Hydraulic</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className={labelClass}>Power Supply</label>
                  <select
                    value={powerSupply}
                    onChange={(e) => setPowerSupply(e.target.value)}
                    className={inputClass}
                  >
                    <option value="415V-440V, 3 Phase" className="bg-[#121319]">415V-440V, 3 Phase</option>
                    <option value="215V-240V, Single Phase" className="bg-[#121319]">215V-240V, Single Phase</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Operating Panels (LOP & COP)</label>
                  <input
                    type="text"
                    value={lopCop}
                    onChange={(e) => setLopCop(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Cabin Finishes & Enclosures */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white pb-3 border-b border-white/10 flex items-center gap-2 mb-4">
                <Layers className="h-4 w-4 text-brand-gold" /> 3. Cabin & Landing Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Car Enclosure Design</label>
                  <input
                    type="text"
                    value={carEnclosure}
                    onChange={(e) => setCarEnclosure(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Car Door Specification</label>
                  <input
                    type="text"
                    value={carDoor}
                    onChange={(e) => setCarDoor(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Landing Door Specification</label>
                  <input
                    type="text"
                    value={landingDoor}
                    onChange={(e) => setLandingDoor(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Landing Frame Specification</label>
                  <input
                    type="text"
                    value={landingFrame}
                    onChange={(e) => setLandingFrame(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Cabin Interior Detailing</label>
                  <input
                    type="text"
                    value={cabin}
                    onChange={(e) => setCabin(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Structural Guide Frames</label>
                  <input
                    type="text"
                    value={frames}
                    onChange={(e) => setFrames(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Commercials & Milestones */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white pb-3 border-b border-white/10 flex items-center gap-2 mb-4">
                <IndianRupee className="h-4 w-4 text-brand-gold" /> 4. Commercials & Payment Terms
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className={labelClass}>Total Amount (₹ INR) *</label>
                  <input
                    type="number"
                    placeholder="e.g. 1350000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>First Stage Payment</label>
                  <input
                    type="text"
                    value={firstStage}
                    onChange={(e) => setFirstStage(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-1">
                  <label className={labelClass}>Second Stage Payment</label>
                  <input
                    type="text"
                    value={secondStage}
                    onChange={(e) => setSecondStage(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Third Stage Payment</label>
                  <input
                    type="text"
                    value={thirdStage}
                    onChange={(e) => setThirdStage(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Computed Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
              <span className="text-xs uppercase tracking-wider text-white/50">Capacity (Engineered)</span>
              <p className="text-2xl font-serif font-bold text-brand-gold mt-1">
                {capacity} kg <span className="text-sm font-normal text-white/60">({passengers} Persons)</span>
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
              <span className="text-xs uppercase tracking-wider text-white/50">Amount in Words</span>
              <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                {amountWords || 'Enter total amount to preview Indian currency in words'}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={generateQuotation}
              className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-[#ECC876] via-[#C4A664] to-[#A3823A] py-5 text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-[#0a0a0b] shadow-gold transition hover:scale-[1.01] active:scale-98"
            >
              <FileDown className="h-5 w-5" />
              <span>Generate Official Quotation (.DOCX)</span>
            </button>
            <p className="text-center text-xs text-white/40 mt-2">
              Populates all placeholder variables into `/quotation.docx` and prompts download as `{quotationNumber}.docx`.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
