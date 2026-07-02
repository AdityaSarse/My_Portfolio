import React from 'react'
import { motion } from 'framer-motion'
import { Eye, ArrowUpRight } from 'lucide-react'

// Import project images
import p1 from '../assets/Photos/p1.png'
import p2 from '../assets/Photos/p2.png'
import p3 from '../assets/Photos/p3.png'
import p4 from '../assets/Photos/p4.png'

const projects = [
  {
    id: 1,
    title: 'NOIRE',
    category: 'Modern Fashion E-Commerce',
    year: '2025',
    description: 'A premium fashion e-commerce experience focused on elegant design, responsive layouts, seamless product browsing, and a refined shopping experience.',
    techStack: 'Next.js • React • Tailwind CSS • TypeScript',
    liveUrl: 'https://noire-psi.vercel.app',
    sourceUrl: 'https://github.com/AdityaSarse/Noire',
    image: p1
  },
  {
    id: 2,
    title: 'Spotify Clone',
    category: 'Full Stack Music Streaming Platform',
    year: '2026',
    description: 'A Spotify-inspired music streaming platform featuring secure authentication, playlist management, and a responsive user interface.',
    techStack: 'React • Node.js • Express.js • MongoDB',
    liveUrl: 'https://noire-spotifyclone-nine-nu.vercel.app',
    sourceUrl: 'https://github.com/AdityaSarse/BackendLearning/tree/main/Spotify',
    image: p2
  },
  {
    id: 3,
    title: 'VeriMed AI',
    category: 'AI Research Assistant',
    year: '2026',
    description: 'An AI-powered medical research assistant that retrieves, ranks, and summarizes medical research papers using BM25, FastAPI, PostgreSQL, and AI models.',
    techStack: 'Python • FastAPI • PostgreSQL • BM25 • AI APIs',
    liveUrl: null,
    sourceUrl: 'https://github.com/AdityaSarse/Vermid_Reaserch_Agent',
    image: p3
  },
  {
    id: 4,
    title: 'Banking Transaction System',
    category: 'Secure Full Stack Banking Application',
    year: '2026',
    description: 'A secure banking application with authentication, account management, transaction history, REST APIs, and scalable backend architecture.',
    techStack: 'Node.js • Express.js • MongoDB • JWT Authentication',
    liveUrl: null,
    sourceUrl: 'https://github.com/AdityaSarse/BankTransaction',
    image: p4
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
            <div className="flex-1 flex flex-col justify-center w-full">
              {/* Category */}
              <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/50 mb-1.5">
                {project.category}
              </span>
              
              {/* Title & Year */}
              <div className="flex items-center gap-3.5 mb-4">
                <h3 className="text-3xl font-display font-extrabold text-text-heading group-hover:text-text-main transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-[10px] font-bold border border-border-main px-2 py-0.5 tracking-wider rounded-none text-text-main bg-bg-main">
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-text-main font-medium max-w-md">
                {project.description}
              </p>
            </div>

            {/* Bottom Actions & Tech Stack */}
            <div className="w-full flex flex-wrap justify-between items-center border-t border-border-main pt-6 mt-8 gap-4">
              <div className="flex items-center gap-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading hover:text-text-main transition-colors cursor-pointer"
                  >
                    View Live
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading hover:text-text-main transition-colors cursor-pointer"
                  >
                    Source Code
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <span className="text-[9px] font-bold text-text-main/40 uppercase tracking-widest">
                {project.techStack}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
