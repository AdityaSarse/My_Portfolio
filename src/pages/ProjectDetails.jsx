import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, ArrowRight, Layers, Sparkles, Info } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const projectIndex = projects.findIndex(p => p.slug === slug || (slug === 'spotify-clone' && p.slug === 'soundwave'))
  const project = projects[projectIndex]
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // 404 state
  if (!project) {
    return (
      <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-8xl font-display font-extrabold text-text-heading">404</span>
          <h1 className="text-2xl font-display font-extrabold text-text-heading">
            Project Not Found
          </h1>
          <p className="text-sm text-text-main font-medium max-w-sm">
            The project you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-text-heading text-bg-card px-6 py-3.5 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-text-heading/90 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </motion.div>
      </section>
    )
  }

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
          Back to Projects
        </Link>
        <span className="text-[9px] font-bold tracking-widest uppercase text-text-main/40">
          {String(projectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </motion.div>

      {/* ─── Hero Image ─── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full border-b border-border-main bg-bg-main p-4 md:p-8 relative"
      >
        {/* Viewfinder Corners */}
        <div className="absolute inset-6 md:inset-10 pointer-events-none">
          <div className="viewfinder-corner-tl"></div>
          <div className="viewfinder-corner-tr"></div>
          <div className="viewfinder-corner-bl"></div>
          <div className="viewfinder-corner-br"></div>
        </div>

        <div className="w-full aspect-video overflow-hidden border border-border-main rounded-2xl bg-bg-card">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* ─── Project Header ─── */}
      <div className="w-full border-b border-border-main px-6 md:px-14 py-12 md:py-16 bg-bg-card">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl flex flex-col gap-5"
        >
          {/* Category & Year */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/50">
              {project.category}
            </span>
            <span className="text-[10px] font-bold border border-border-main px-2 py-0.5 tracking-wider rounded-none text-text-main bg-bg-main">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-text-heading leading-tight">
              {project.title}
            </h1>
            {project.subtitle && (
              <span className="text-sm md:text-base font-semibold text-text-main/70">
                {project.subtitle}
              </span>
            )}
          </div>

          {/* Long Description */}
          <p className="text-sm md:text-base leading-relaxed text-text-main font-medium max-w-2xl">
            {project.longDescription}
          </p>
        </motion.div>
      </div>

      {/* ─── Project Details Grid ─── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-border-main">
        {/* Left: Overview Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 md:p-14 border-b md:border-b-0 md:border-r border-border-main bg-bg-main/30 flex flex-col gap-8"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-text-heading">
            Overview
          </span>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5 border-l-2 border-border-main pl-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/50">Role</span>
              <span className="text-sm font-bold text-text-heading">{project.role}</span>
            </div>
            <div className="flex flex-col gap-1.5 border-l-2 border-border-main pl-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/50">Duration</span>
              <span className="text-sm font-bold text-text-heading">{project.duration}</span>
            </div>
            <div className="flex flex-col gap-1.5 border-l-2 border-border-main pl-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/50">Category</span>
              <span className="text-sm font-bold text-text-heading">{project.category}</span>
            </div>
            <div className="flex flex-col gap-1.5 border-l-2 border-border-main pl-4">
              <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/50">Year</span>
              <span className="text-sm font-bold text-text-heading">{project.year}</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 md:p-14 bg-bg-card flex flex-col gap-8"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-text-heading">
            Tech Stack
          </span>

          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.05, type: 'spring', stiffness: 260, damping: 25 }}
                className="inline-flex items-center px-4 py-2.5 bg-bg-card hover:bg-zinc-50 dark:hover:bg-zinc-950/60 border border-border-main hover:border-text-heading rounded-full text-xs font-semibold text-text-heading cursor-default transition-colors duration-300 shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── Technical Highlight / Note Callout ─── */}
      {(project.technicalHighlight || project.note) && (
        <div className="w-full border-b border-border-main bg-bg-main/40 px-6 md:px-14 py-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {project.technicalHighlight && (
              <div className="flex items-start gap-4 p-5 border border-border-main bg-bg-card rounded-xl shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-text-heading text-bg-card flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-text-heading">
                    Technical Highlight
                  </span>
                  <p className="text-xs md:text-sm text-text-main font-medium leading-relaxed">
                    {project.technicalHighlight}
                  </p>
                </div>
              </div>
            )}
            {project.note && (
              <div className="flex items-start gap-4 p-5 border border-border-main bg-bg-card rounded-xl shadow-sm">
                <div className="w-9 h-9 rounded-lg border border-border-main bg-bg-main text-text-heading flex items-center justify-center flex-shrink-0">
                  <Info className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-text-main/70">
                    Project Note
                  </span>
                  <p className="text-xs md:text-sm text-text-main font-medium leading-relaxed">
                    {project.note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── Key Features ─── */}
      <div className="w-full border-b border-border-main bg-bg-card">
        {/* Section Label */}
        <div className="w-full border-b border-border-main flex justify-center bg-bg-main">
          <div className="border-x border-b border-border-main px-8 py-3 font-bold text-[10px] tracking-widest uppercase text-text-heading bg-bg-card translate-y-[1px]">
            Key Features
          </div>
        </div>

        {/* Features List */}
        <div className="w-full max-w-3xl mx-auto px-6 md:px-14 py-12 md:py-16 flex flex-col gap-0">
          {project.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, type: 'spring', stiffness: 260, damping: 25 }}
              className="flex items-start gap-5 py-5 border-b border-dashed border-border-main last:border-b-0 group"
            >
              {/* Number */}
              <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-border-main bg-bg-main text-text-heading font-display font-extrabold text-xs group-hover:bg-text-heading group-hover:text-bg-card group-hover:border-text-heading transition-all duration-300">
                {String(idx + 1).padStart(2, '0')}
              </span>
              {/* Feature text */}
              <p className="text-sm md:text-base leading-relaxed text-text-main font-medium pt-1.5">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Detailed Tech Stack & Architecture ─── */}
      {project.detailedTechStack && project.detailedTechStack.length > 0 && (
        <div className="w-full border-b border-border-main bg-bg-card">
          {/* Section Label */}
          <div className="w-full border-b border-border-main flex justify-center bg-bg-main">
            <div className="border-x border-b border-border-main px-8 py-3 font-bold text-[10px] tracking-widest uppercase text-text-heading bg-bg-card translate-y-[1px] flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              Detailed Tech Stack & Architecture
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 md:px-14 py-12 md:py-16">
            <div className="border border-border-main rounded-2xl overflow-hidden divide-y divide-border-main bg-bg-main/30 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-bg-main font-bold text-[10px] tracking-widest uppercase text-text-heading">
                <span>Architecture Layer</span>
                <span className="md:col-span-2">Technologies & Libraries</span>
              </div>
              {project.detailedTechStack.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 hover:bg-bg-card transition-colors duration-200 gap-2 md:gap-4 items-baseline"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-text-heading flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-heading/60"></span>
                    {item.layer}
                  </span>
                  <span className="md:col-span-2 text-xs md:text-sm text-text-main font-medium">
                    {item.technologies}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── CTA Links ─── */}
      <div className="w-full border-b border-border-main px-6 md:px-14 py-10 md:py-14 bg-bg-main/30 flex flex-col md:flex-row items-center justify-center gap-4">
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-text-heading text-bg-card px-8 py-4 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-text-heading/90 transition-all cursor-pointer shadow-sm"
          >
            View Live
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        )}
        {project.backendUrl && (
          <motion.a
            href={project.backendUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 border border-border-main text-text-heading bg-bg-card hover:bg-bg-main px-8 py-4 rounded-none font-bold text-[10px] tracking-widest uppercase transition-all cursor-pointer shadow-sm"
          >
            Backend API
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        )}
        {project.sourceUrl && (
          <motion.a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 border border-border-main text-text-heading bg-bg-card hover:bg-bg-main px-8 py-4 rounded-none font-bold text-[10px] tracking-widest uppercase transition-all cursor-pointer shadow-sm"
          >
            Source Code
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        )}
      </div>

      {/* ─── Previous / Next Navigation ─── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-border-main">
        {/* Previous Project */}
        <div className={`border-b md:border-b-0 md:border-r border-border-main ${prevProject ? '' : ''}`}>
          {prevProject ? (
            <Link
              to={`/project/${prevProject.slug}`}
              className="group flex flex-col gap-4 p-6 md:p-10 hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-all duration-300 h-full"
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-text-main/50 group-hover:text-text-heading transition-colors">
                <ArrowLeft className="w-3 h-3" />
                Previous Project
              </span>
              <div className="flex items-center gap-4">
                <div className="w-16 h-12 rounded-lg overflow-hidden border border-border-main flex-shrink-0">
                  <img
                    src={prevProject.image}
                    alt={prevProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg font-display font-extrabold text-text-heading group-hover:text-text-main transition-colors">
                    {prevProject.title}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/40">
                    {prevProject.category}
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div className="p-6 md:p-10 flex items-center justify-center h-full">
              <span className="text-[10px] font-bold tracking-widest uppercase text-text-main/30">
                First Project
              </span>
            </div>
          )}
        </div>

        {/* Next Project */}
        <div>
          {nextProject ? (
            <Link
              to={`/project/${nextProject.slug}`}
              className="group flex flex-col gap-4 p-6 md:p-10 hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-all duration-300 h-full items-end text-right"
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-text-main/50 group-hover:text-text-heading transition-colors">
                Next Project
                <ArrowRight className="w-3 h-3" />
              </span>
              <div className="flex items-center gap-4 flex-row-reverse">
                <div className="w-16 h-12 rounded-lg overflow-hidden border border-border-main flex-shrink-0">
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg font-display font-extrabold text-text-heading group-hover:text-text-main transition-colors">
                    {nextProject.title}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-text-main/40">
                    {nextProject.category}
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div className="p-6 md:p-10 flex items-center justify-center h-full">
              <span className="text-[10px] font-bold tracking-widest uppercase text-text-main/30">
                Last Project
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ─── Copyright Bar ─── */}
      <div className="w-full py-6 px-8 md:px-14 bg-bg-main/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-text-main/50 uppercase tracking-widest">
        <span>© 2026 Aditya Sarse. All Rights Reserved.</span>
        <span>Designed & Developed by Aditya Sarse.</span>
      </div>
    </>
  )
}
