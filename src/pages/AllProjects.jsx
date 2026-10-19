import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 25
    }
  }
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group flex flex-col border border-border-main rounded-2xl overflow-hidden bg-bg-card hover:shadow-md transition-shadow duration-300"
    >
      {/* Image */}
      <Link
        to={`/project/${project.slug}`}
        className="relative overflow-hidden aspect-video border-b border-border-main"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-bg-card text-text-heading w-10 h-10 rounded-none flex items-center justify-center border border-border-main shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        {/* Index badge */}
        <div className="absolute top-3 left-3 bg-bg-card/85 backdrop-blur-sm border border-border-main px-2.5 py-1 text-[9px] font-bold tracking-widest text-text-heading">
          {String(index + 1).padStart(2, '0')}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 md:p-7 flex flex-col gap-3 flex-1">
        {/* Category & Year */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/50">
            {project.category}
          </span>
          <span className="text-[9px] font-bold border border-border-main px-2 py-0.5 tracking-wider text-text-main bg-bg-main">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-display font-extrabold text-text-heading group-hover:text-text-main transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-text-main font-medium line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-1 bg-bg-main border border-border-main rounded-full text-[10px] font-semibold text-text-heading"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4 mt-1 border-t border-dashed border-border-main">
          <Link
            to={`/project/${project.slug}`}
            className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading hover:text-text-main transition-colors"
          >
            View Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-main/70 hover:text-text-heading transition-colors"
            >
              Live Demo
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.backendUrl && (
            <a
              href={project.backendUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-main/70 hover:text-text-heading transition-colors"
            >
              Backend API
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-main/70 hover:text-text-heading transition-colors"
            >
              GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* ─── Back Navigation Bar ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full border-b border-border-main px-6 md:px-14 py-4 bg-bg-main flex items-center justify-between"
      >
        <Link
          to="/"
          state={{ scrollTo: 'portfolio' }}
          className="inline-flex items-center gap-2 font-bold text-[10px] tracking-widest uppercase text-text-heading hover:text-text-main transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
        <span className="text-[9px] font-bold tracking-widest uppercase text-text-main/40">
          {projects.length} Projects
        </span>
      </motion.div>

      {/* ─── Section Header ─── */}
      <div className="w-full border-b border-border-main py-16 md:py-20 text-center bg-bg-main px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto flex flex-col gap-3"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-text-heading">
            ALL PROJECTS
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-text-heading tracking-tight">
            Featured Work
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
            A curated collection of projects showcasing my skills in frontend development, full stack engineering, and creative problem solving.
          </p>
        </motion.div>
      </div>

      {/* ─── Projects Grid ─── */}
      <div className="w-full bg-bg-card px-4 md:px-8 py-12 md:py-16 border-b border-border-main">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* ─── CTA Section ─── */}
      <div className="w-full border-b border-border-main px-6 md:px-14 py-14 md:py-20 bg-bg-main/30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto flex flex-col items-center gap-5"
        >
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-text-heading tracking-tight">
            Interested in working together?
          </h2>
          <p className="text-sm text-text-main font-medium leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            to="/"
            state={{ scrollTo: 'contact' }}
            className="inline-flex items-center gap-2 bg-text-heading text-bg-card px-7 py-3.5 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-text-heading/90 active:scale-95 transition-all mt-2"
          >
            Let's Connect
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>

      {/* ─── Copyright Bar ─── */}
      <div className="w-full py-6 px-8 md:px-14 bg-bg-main/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-text-main/50 uppercase tracking-widest">
        <span>© 2026 Aditya Sarse. All Rights Reserved.</span>
        <span>Designed & Developed by Aditya Sarse.</span>
      </div>
    </>
  )
}
