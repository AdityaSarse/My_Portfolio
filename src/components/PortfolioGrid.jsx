import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Eye, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectCard({ project, index, total }) {
  const cardRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Hook scroll progress of this specific card relative to viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  })

  // Scale down and fade covered cards to create deep 3D stacked deck of cards
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.65])

  // Custom sticky top offset so cards stack with a slight visual stagger/offset (e.g. 100px)
  const topOffset = 96 + index * 24

  return (
    <motion.div
      ref={cardRef}
      style={isMobile ? {} : {
        scale,
        opacity,
        position: 'sticky',
        top: `${topOffset}px`,
        zIndex: index + 1
      }}
      className="w-full grid grid-cols-1 md:grid-cols-2 border border-border-main rounded-3xl overflow-hidden group bg-bg-card shadow-sm hover:shadow-md transition-shadow duration-300 mb-8 md:mb-12 relative"
    >
      <Link
        to={`/project/${project.slug}`}
        className="relative overflow-hidden aspect-video md:aspect-auto md:h-[400px] border-b md:border-b-0 md:border-r border-border-main cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Dark glassmorphic hover overlay */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-bg-card text-text-heading w-12 h-12 rounded-none flex items-center justify-center border border-border-main shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Eye className="w-5 h-5" />
          </div>
        </div>
      </Link>

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
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link
              to={`/project/${project.slug}`}
              className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading hover:text-text-main transition-colors cursor-pointer"
            >
              View Details
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading hover:text-text-main transition-colors cursor-pointer"
              >
                Live Demo
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading hover:text-text-main transition-colors cursor-pointer"
              >
                Backend API
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
                GitHub
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 bg-bg-main border border-border-main rounded-full text-[10px] font-semibold text-text-heading tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioGrid() {
  const topProjects = projects.slice(0, 3)

  return (
    <div className="w-full flex flex-col bg-bg-card px-4 md:px-8 pt-4 md:pt-6 pb-16 md:pb-24 border-b border-border-main">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col">
        {topProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={topProjects.length}
          />
        ))}

        {/* See All Projects Button */}
        <div className="w-full flex justify-center mt-4 md:mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border border-border-main text-text-heading bg-bg-card hover:bg-bg-main px-8 py-4 rounded-none font-bold text-[10px] tracking-widest uppercase active:scale-[0.98] transition-all cursor-pointer shadow-sm"
          >
            See All Projects ({projects.length})
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
