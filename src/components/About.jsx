import React, { useState } from 'react'
import { motion } from 'framer-motion'
import adityaPhoto from '../assets/Photos/ChatGPT Image Jul 2, 2026, 01_36_49 PM (1).png'

export default function About() {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left - box.width / 2
    const y = e.clientY - box.top - box.height / 2
    
    // Rotate max 8 degrees
    setRotateX(-y / (box.height / 2) * 8)
    setRotateY(x / (box.width / 2) * 8)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="w-full flex flex-col border-b border-border-main bg-bg-card">
      {/* Profile/Text Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column: Image with tilt and floating animations */}
        <div className="border-b md:border-b-0 md:border-r border-border-main p-8 md:p-14 flex items-center justify-center bg-bg-main">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm"
          >
            {/* Floating Container */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full aspect-square"
            >
              {/* Tilt Container */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateX, rotateY }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                className="w-full h-full border border-border-main bg-bg-card p-3 shadow-md rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={adityaPhoto} 
                  alt="Aditya Sarse" 
                  className="w-full h-full object-cover object-center rounded-xl shadow-inner transition-transform duration-200"
                  style={{ transform: 'translateZ(20px)' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Bio */}
        <div className="p-8 md:p-14 flex flex-col justify-center items-start text-left bg-bg-card">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md flex flex-col gap-6"
          >
            <p className="text-xl md:text-2xl font-display font-extrabold leading-tight text-text-heading">
              Hi, I'm Aditya Sarse — a Full Stack Developer passionate about building modern web experiences.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
              I'm a Full Stack Developer based in Pune, India, passionate about building fast, scalable, and interactive web applications. I enjoy transforming ideas into polished digital experiences using React, Next.js, Node.js, Three.js, and modern backend technologies.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
              Beyond development, I love exploring UI/UX design, creating smooth animations, and continuously learning new technologies that help me build better products.
            </p>

            {/* Currently Section */}
            <div className="flex flex-col gap-1 border-l-2 border-border-main pl-4 py-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-text-heading flex items-center gap-1.5">
                🚀 Currently
              </span>
              <span className="text-xs text-text-main font-semibold">
                Open to Frontend & Full Stack Opportunities
              </span>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="/resume.pdf"
                download
                className="bg-text-heading text-bg-card px-6 py-3.5 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-text-heading/90 active:scale-95 transition-all inline-block text-center cursor-pointer"
              >
                Download Resume
              </a>
              <button 
                onClick={scrollToContact}
                className="border border-border-main text-text-heading bg-bg-card hover:bg-bg-main px-6 py-3.5 rounded-none font-bold text-[10px] tracking-widest uppercase active:scale-95 transition-all cursor-pointer"
              >
                Let's Connect
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-5 mt-2 pl-1">
              <a 
                href="https://github.com/AdityaSarse" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-main hover:text-text-heading transition-colors"
                title="GitHub"
              >
                <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </motion.div>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-text-main hover:text-text-heading transition-colors"
                title="LinkedIn"
              >
                <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </motion.div>
              </a>
              <a 
                href="mailto:aditya@example.com" 
                className="text-text-main hover:text-text-heading transition-colors"
                title="Email"
              >
                <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </motion.div>
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="text-text-main hover:text-text-heading transition-colors"
                title="Resume"
              >
                <motion.div whileHover={{ y: -3, scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3-Column Stats Grid */}
      <div className="border-t border-border-main grid grid-cols-3 w-full text-center bg-bg-main">
        <div className="py-10 border-r border-border-main flex flex-col gap-1.5 px-2">
          <span className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-text-heading">10+</span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-text-main">Projects Built</span>
        </div>
        <div className="py-10 border-r border-border-main flex flex-col gap-1.5 px-2">
          <span className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-text-heading">15+</span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-text-main">Technologies</span>
        </div>
        <div className="py-10 flex flex-col gap-1.5 px-2 justify-center items-center">
          <span className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-text-heading">Always</span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-text-main">Learning</span>
        </div>
      </div>
    </section>
  )
}
