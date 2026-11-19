import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MapPin, X, ArrowUpRight, Sparkles, Building, Layers } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  subtitle: string;
  location: string;
  floors: string;
  model: string;
  image: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Luxury Villas', 'Duplex Penthouses', 'Hydraulic Lifts', 'Panoramic Glass'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || p.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="relative border-t border-white/10 bg-[#0c0d12] px-4 sm:px-6 lg:px-12 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-brand-gold font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Real Installations Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white font-bold">
              Architectural Installations & Projects.
            </h2>
            <p className="text-sm sm:text-base text-[#d1c1af]">
              Explore our recent residential elevator commissions in high-end villas, bungalows, and penthouse residences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                  selectedCategory === cat
                    ? 'bg-brand-gold text-black shadow-gold font-bold'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title + index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              onClick={() => setActiveModalProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-[#14151b] shadow-soft flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14151b] via-[#14151b]/40 to-transparent" />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-xs font-bold text-black uppercase tracking-wider shadow-gold">
                    <Eye className="h-3.5 w-3.5" />
                    View Details
                  </span>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="inline-flex rounded-full bg-black/60 border border-brand-gold/30 px-3 py-1 text-[0.65rem] uppercase tracking-wider text-brand-gold font-semibold backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 pt-2">
                <p className="text-xs text-brand-gold flex items-center gap-1 font-medium mb-1">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-bold">{project.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-[#dad0c5] line-clamp-2">{project.subtitle}</p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <Building className="h-3.5 w-3.5 text-brand-gold" />
                    {project.floors}
                  </span>
                  <span className="text-brand-gold font-medium">{project.model}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-brand-gold/30 bg-[#121319] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition backdrop-blur-md border border-white/20"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-72 sm:h-96 w-full">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${activeModalProject.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                    {activeModalProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/70">
                    <MapPin className="h-3.5 w-3.5 text-brand-gold" />
                    {activeModalProject.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-white font-bold">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-[#dad0c5] leading-relaxed">{activeModalProject.subtitle}</p>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
                  <div className="rounded-2xl bg-white/5 p-3">
                    <span className="text-white/60">Configuration</span>
                    <p className="text-sm font-semibold text-white mt-0.5">{activeModalProject.floors}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3">
                    <span className="text-white/60">Drive System</span>
                    <p className="text-sm font-semibold text-brand-gold mt-0.5">{activeModalProject.model}</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    onClick={() => setActiveModalProject(null)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-brand-gold py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-gold"
                  >
                    <span>Request Similar Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://wa.me/919880868893?text=Hi%20Feather%20Elevators,%20I%20am%20interested%20in%20a%20similar%20project%20like%20${activeModalProject.title}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                  >
                    WhatsApp Inquire
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
