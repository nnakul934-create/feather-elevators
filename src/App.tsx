import { useState } from 'react';
import { motion } from 'framer-motion';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import ServicesSection, { type Service } from './components/ServicesSection';
import ElevatorCalculator from './components/ElevatorCalculator';
import TechComparison from './components/TechComparison';
import CabinVisualizer from './components/CabinVisualizer';
import ProjectsSection, { type Project } from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import AdminLoginModal from './components/AdminLoginModal';
import { Sparkles, Award, Shield, CheckCircle } from 'lucide-react';
import { sitePath } from './utils/sitePath';

const features = [
  {
    title: 'Safety First & ARD Backup',
    description:
      'Precision German safety gears, electronic overspeed governors, and standard Automatic Rescue Devices (ARD) guarantee passengers never get stranded during power cuts.',
    points: [
      '100% ARD Battery Auto-Rescue',
      'Infrared Light Curtain Door Sensors',
      'Emergency Handsfree Intercom Phone',
    ],
  },
  {
    title: 'Whisper-Quiet Acoustics',
    description:
      'Permanent-magnet synchronous gearless motors and hydraulic dampeners ensure sound levels remain below 45dB for peaceful living.',
    points: [
      'Under 45 dB Silent Ride',
      'Micro-vibration Damping Isolation',
      'Smooth S-Curve Acceleration & Deceleration',
    ],
  },
  {
    title: 'Bespoke Architectural Styling',
    description:
      'Sculptural glass cages, champagne gold hairline stainless steel, Italian marble flooring, and ambient cove illumination match your home aesthetic.',
    points: [
      'Champagne Gold & Titanium Noir',
      'Curved Laminated Safety Glass',
      'Italian Botticino / Nero Marquina Floors',
    ],
  },
  {
    title: '24/7 Concierge Service & Warranty',
    description:
      'White-glove aftercare, certified factory-trained technicians, rapid emergency response, and a 10-year structural guarantee.',
    points: [
      '2-Year Full Equipment Warranty',
      '10-Year Structural Guarantee',
      '24/7 Priority Emergency Helpline',
    ],
  },
];

const services: Service[] = [
  {
    title: 'MRL Gearless Home Lifts',
    category: 'Residential Luxury',
    description:
      'Whisper-quiet permanent-magnet gearless traction engineered for luxury duplexes and multi-level residences with zero civil machine rooms.',
    image: sitePath('residental.jpg'),
    badge: 'Most Popular',
    specs: ['0.4 - 1.0 m/s Speed', 'Zero Machine Room', 'Single Phase 220V', 'Up to G+6 Floors'],
  },
  {
    title: 'German Hydraulic Lifts',
    category: 'Ultra-Low Pit',
    description:
      'Whisper-quiet hydraulic powerpack systems with gravity descent safety. Requires only 100mm pit depth, making it the premier choice for retrofit bungalows.',
    image: sitePath('Hydraulic-lift.jpg'),
    badge: '100mm Low Pit',
    specs: ['100mm Pit Depth', 'Gravity Lowering', 'Compact Powerpack', 'Fits Stairwell Voids'],
  },
  {
    title: 'Panoramic Glass Capsules',
    category: 'Architectural Showpiece',
    description:
      'Floor-to-ceiling curved toughened glass cars that fill your villa with light and offer panoramic 360-degree views of your interior courtyard or atrium.',
    image: sitePath('costom.webp'),
    badge: 'Bespoke Luxury',
    specs: ['Curved Safety Glass', 'Frameless Glass Doors', 'Minimalist Steel Cage', 'Daylight Infusion'],
  },
  {
    title: 'Custom Villa Retrofit Lifts',
    category: 'Retrofit Engineering',
    description:
      'Custom engineered vertical mobility designed specifically for existing built homes without disrupting existing architectural foundations or structural beams.',
    image: sitePath('300.webp'),
    badge: 'Zero Demolition',
    specs: ['Tailor-made Shafts', 'Self-Supporting Structure', 'Rapid 7-Day Install', '10-Year Guarantee'],
  },
];

const projects: Project[] = [
  {
    title: 'The Sky Villa',
    category: 'Luxury Villas',
    subtitle: 'Private hydraulic elevator in 4-storey Sadashivanagar bungalow with Italian Botticino marble.',
    location: 'Sadashivanagar, Bangalore',
    floors: 'G + 3 Floors',
    model: 'Hydraulic Whisper',
    image: sitePath('600.jpg'),
  },
  {
    title: 'Architectural Glass Duplex',
    category: 'Duplex Penthouses',
    subtitle: 'Minimalist curved glass car with integrated linear architectural cove illumination.',
    location: 'Indiranagar, Bangalore',
    floors: 'G + 2 Floors',
    model: 'Panoramic Capsule',
    image: sitePath('e200.webp'),
  },
  {
    title: 'Heritage Courtyard Retrofit',
    category: 'Hydraulic Lifts',
    subtitle: 'Low-pit elevator installed inside an open staircase eye without foundation excavation.',
    location: 'Jubilee Hills, Hyderabad',
    floors: 'G + 2 Floors',
    model: 'Low-Pit MRL',
    image: sitePath('300.webp'),
  },
  {
    title: 'The Obsidian Penthouse',
    category: 'Duplex Penthouses',
    subtitle: 'Contemporary titanium black hairline cabin with golden backlit capacitive COP.',
    location: 'Whitefield, Bangalore',
    floors: 'Duplex Penthouse',
    model: 'Gearless MRL',
    image: sitePath('500.jpg'),
  },
  {
    title: 'Palm Beach Residence',
    category: 'Panoramic Glass',
    subtitle: 'Circular glass shaft overlooking manicured garden with soft hydraulic descent.',
    location: 'Chennai ECR Villa',
    floors: 'G + 1 Floor',
    model: 'Panoramic Glass',
    image: sitePath('400.png'),
  },
  {
    title: 'The Continental Villa',
    category: 'Luxury Villas',
    subtitle: 'Champagne gold stainless steel cabin with indirect starlight ceiling and leather handrails.',
    location: 'Koramangala, Bangalore',
    floors: 'G + 3 Floors',
    model: 'MRL Luxury',
    image: sitePath('costom.webp'),
  },
];

function App() {
  const [selectedEstimate, setSelectedEstimate] = useState<string>('');

  return (
    <div className="min-h-screen bg-[#080707] text-[#f4efe6] selection:bg-brand-gold selection:text-[#111]">
      {/* Top Glass Navigation */}
      <NavBar />

      <main>
        {/* Cinematic Hero */}
        <Hero />

        {/* Brand Philosophy & About Section */}
        <section
          id="about"
          className="relative border-t border-white/10 bg-gradient-to-b from-[#071326]/90 via-[#0a0a0f] to-[#08070a] py-20 px-4 sm:px-6 md:px-12"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center"
            >
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Why Choose Feather Elevators</span>
                </div>

                <h2 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white font-bold">
                  Your home deserves a vertical transit experience that feels like a private luxury suite.
                </h2>

                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#d6c9b8]">
                  Feather Elevators combines German precision engineering, whisper-quiet motion, and a bespoke concierge service model crafted exclusively for private villas, bungalows, and luxury duplexes.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-gold" />
                    <span>500+ Homes Elevated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-gold" />
                    <span>Zero Civil Demolition Options</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 shadow-soft backdrop-blur-xl relative group hover:border-brand-gold/40 transition duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl" />
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">
                  Design Philosophy
                </p>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#f2ece3] font-light">
                  "Every elevator we craft is conceived as an organic chapter of the home's architecture — minimal, sculptural, silent, and engineered for multigenerational comfort."
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span>German Drive Standards</span>
                  <span className="text-brand-gold font-semibold">ISO 9001:2015</span>
                </div>
              </div>
            </motion.div>

            {/* Feature Cards Grid */}
            <FeatureCards items={features} />
          </div>
        </section>

        {/* Interactive Elevator Cost Calculator (NEW FEATURE!) */}
        <ElevatorCalculator onSelectEstimate={(est) => setSelectedEstimate(est)} />

        {/* Elevator Models / Services Bento Grid */}
        <ServicesSection services={services} />

        {/* Interactive Engineering Technology Comparison (NEW FEATURE!) */}
        <TechComparison />

        {/* Interactive Cabin Collections & Visualizer (NEW FEATURE!) */}
        <CabinVisualizer />

        {/* Filterable Project Gallery with Lightbox Modal */}
        <ProjectsSection projects={projects} />

        {/* Verified Homeowner Reviews & Social Proof (NEW FEATURE!) */}
        <TestimonialsSection />

        {/* Interactive Homeowner FAQ Accordion (NEW FEATURE!) */}
        <FaqSection />

        {/* High Converting Contact Section */}
        <ContactSection />
      </main>

      {/* Comprehensive Luxury Footer */}
      <Footer />

      {/* Bottom Sticky Action Dock for Mobile Devices (CRUCIAL FOR MOBILE!) */}
      <MobileBottomBar />

      {/* Modern Admin Modal (Replaces old ugly prompt) */}
      <AdminLoginModal />
    </div>
  );
}

export default App;
