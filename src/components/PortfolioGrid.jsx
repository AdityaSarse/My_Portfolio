import React from 'react'
import { motion } from 'framer-motion'
import { Eye, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Silent Grid',
    description: 'A minimal grid layout that puts your work first. Clean typography and smooth navigation make it ideal for designers and photographers.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    link: '#',
    showEye: false
  },
  {
    id: 2,
    title: 'Neon Thread',
    description: 'A bold, colorful website concept with sharp typography and a futuristic vibe. Eye-catching design that stays clear and usable.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
    link: '#',
    showEye: true
  },
  {
    id: 3,
    title: 'Urban Light',
    description: 'A clean, modern blog theme designed for writers, journalists, and storytellers. High readability and clean layout focus on the content.',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    link: '#',
    showEye: false
  },
  {
    id: 4,
    title: 'Echo View',
    description: 'A minimal portfolio template for architects and designers. Large image grids and elegant details highlight the projects beautifully.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    link: '#',
    showEye: false
  },
  {
    id: 5,
    title: 'Forma OS',
    description: 'A dark operating system concept with smooth glassmorphism and clean controls. Futuristic style and interactive layout for high-end feel.',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    link: '#',
    showEye: false
  },
  {
    id: 6,
    title: 'Edge Frame',
    description: 'A bold photography theme with strict layouts and dark style. Full-screen image sliders and clean grid lines focus on the photos.',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    link: '#',
    showEye: false
  }
]

export default function PortfolioGrid() {
  return (
    <div className="w-full flex flex-col bg-bg-card">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 border-b border-border-main group hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-colors duration-300"
        >
          {/* Left Column: Image Container */}
          <div className="relative overflow-hidden aspect-video md:aspect-auto md:h-[400px] border-b md:border-b-0 md:border-r border-border-main">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Dark glassmorphic hover overlay */}
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-bg-card text-text-heading w-12 h-12 rounded-none flex items-center justify-center border border-border-main shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <Eye className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right Column: Case Details */}
          <div className="p-8 md:p-14 flex flex-col justify-between items-start text-left relative min-h-[300px]">
            {project.showEye && (
              <div className="mb-6 text-text-heading border border-border-main p-2 bg-bg-main w-fit">
                <Eye className="w-4.5 h-4.5" />
              </div>
            )}
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3.5 mb-4">
                <h3 className="text-3xl font-display font-extrabold text-text-heading group-hover:text-text-main transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-[10px] font-bold border border-border-main px-2 py-0.5 tracking-wider rounded-none text-text-main bg-bg-main">
                  {project.year}
                </span>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-text-main font-medium max-w-md">
                {project.description}
              </p>
            </div>

            <div className="w-full flex justify-between items-center border-t border-border-main pt-6 mt-8">
              <a
                href={project.link}
                className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading hover:text-text-main transition-colors"
              >
                View Case Study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[9px] font-bold text-text-main/40 uppercase tracking-widest">
                Design & Code
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
