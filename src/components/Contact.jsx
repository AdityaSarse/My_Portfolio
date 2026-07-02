import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }
  }

  return (
    <div className="w-full flex flex-col bg-bg-card">

      {/* Section Divider Block with Label: Contact */}
      <div id="contact" className="w-full border-b border-border-main flex justify-center bg-bg-main">
        <div className="border-x border-b border-border-main px-8 py-3 font-bold text-[10px] tracking-widest uppercase text-text-heading bg-bg-card translate-y-[1px]">
          Contact
        </div>
      </div>

      {/* Contact Form Details */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-border-main">
        {/* Left Column: Contact details */}
        <div className="p-8 md:p-14 text-left flex flex-col justify-between border-b md:border-b-0 md:border-r border-border-main bg-zinc-50/50 dark:bg-zinc-950/20">
          <div>
            <h3 className="text-3xl font-display font-extrabold text-text-heading mb-4">
              Let's create something bold together.
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-text-main font-medium max-w-sm mb-10">
              Have a project in mind, want to collaborate, or just talk design and development? Drop me a message.
            </p>
          </div>
          
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-bg-main rounded-none border border-border-main">
                <Mail className="w-4.5 h-4.5 text-text-heading" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold text-text-main/50 tracking-wider">Email</p>
                <a href="mailto:adityasarse362@gmail.com" className="text-sm font-bold text-text-heading hover:text-text-main transition-colors">
                  adityasarse362@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-bg-main rounded-none border border-border-main">
                <MapPin className="w-4.5 h-4.5 text-text-heading" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold text-text-main/50 tracking-wider">Location</p>
                <p className="text-sm font-bold text-text-heading">
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="p-8 md:p-14 text-left bg-bg-card">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto md:mx-0">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-text-heading">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-border-main bg-bg-main/30 px-4 py-3 rounded-none text-sm text-text-heading placeholder-text-main/40 focus:outline-none focus:border-text-heading transition-colors font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-text-heading">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Email Here"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-border-main bg-bg-main/30 px-4 py-3 rounded-none text-sm text-text-heading placeholder-text-main/40 focus:outline-none focus:border-text-heading transition-colors font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-text-heading">
                Message
              </label>
              <textarea
                id="message"
                required
                rows="5"
                placeholder="What’s in you mind?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-border-main bg-bg-main/30 px-4 py-3 rounded-none text-sm text-text-heading placeholder-text-main/40 focus:outline-none focus:border-text-heading transition-colors resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              className="bg-text-heading text-bg-card py-4 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-text-heading/90 active:scale-[0.98] transition-all cursor-pointer"
            >
              {submitted ? 'MESSAGE SENT!' : 'SEND'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer link list grids */}
      <footer className="w-full grid grid-cols-1 md:grid-cols-12 p-8 md:p-14 gap-12 md:gap-8 text-left bg-bg-main/30 border-t border-border-main">
        {/* Left Column: Brand & Socials (Col Span 5) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5.5 h-5.5 text-text-heading" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2v20M2 12h20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3 3M2 12l-3 3M2 12l3-3M22 12l-3-3M22 12l3 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-lg tracking-tight text-text-heading">Aditya Sarse</span>
          </div>
          <p className="text-xs md:text-sm text-text-main leading-relaxed max-w-sm font-medium">
            Full Stack Developer passionate about building modern, interactive, and scalable web experiences using React, Next.js, Three.js, and Node.js.
          </p>
          {/* Social Row */}
          <div className="flex items-center gap-4.5 mt-2">
            <a 
              href="https://github.com/AdityaSarse" 
              target="_blank" 
              rel="noreferrer" 
              className="text-text-main hover:text-text-heading transition-colors"
              title="GitHub"
            >
              <motion.div whileHover={{ y: -2.5, scale: 1.05 }} transition={{ type: 'spring', stiffness: 450, damping: 15 }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </motion.div>
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-sarse-60222a312/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-text-main hover:text-text-heading transition-colors"
              title="LinkedIn"
            >
              <motion.div whileHover={{ y: -2.5, scale: 1.05 }} transition={{ type: 'spring', stiffness: 450, damping: 15 }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.div>
            </a>
            <a 
              href="mailto:adityasarse362@gmail.com" 
              className="text-text-main hover:text-text-heading transition-colors"
              title="Email"
            >
              <motion.div whileHover={{ y: -2.5, scale: 1.05 }} transition={{ type: 'spring', stiffness: 450, damping: 15 }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </motion.div>
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="text-text-main hover:text-text-heading transition-colors"
              title="Resume"
            >
              <motion.div whileHover={{ y: -2.5, scale: 1.05 }} transition={{ type: 'spring', stiffness: 450, damping: 15 }}>
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
        </div>

        {/* Middle Column: Navigation (Col Span 3) */}
        <div className="flex flex-col gap-4.5 md:col-span-3">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-text-heading border-b border-border-main pb-2 w-fit pr-4">Navigation</h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-text-main">
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-text-heading transition-colors text-left cursor-pointer w-fit"
            >
              Home
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-text-heading transition-colors text-left cursor-pointer w-fit"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-text-heading transition-colors text-left cursor-pointer w-fit"
            >
              Skills
            </button>
            <button 
              onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-text-heading transition-colors text-left cursor-pointer w-fit"
            >
              Experience
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-text-heading transition-colors text-left cursor-pointer w-fit"
            >
              About Me
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="hover:text-text-heading transition-colors text-left cursor-pointer w-fit"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Right Column: Let's Connect (Col Span 4) */}
        <div className="flex flex-col gap-4.5 md:col-span-4">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-text-heading border-b border-border-main pb-2 w-fit pr-4">Let's Connect</h4>
          <div className="flex flex-col gap-3.5 text-xs text-text-main font-semibold">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="text-text-heading">Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:adityasarse362@gmail.com" className="text-text-heading hover:text-text-main transition-colors">
                adityasarse362@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5">💼</span>
              <span className="text-text-heading leading-relaxed">Open to Frontend & Full Stack Opportunities</span>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-text-heading text-bg-card font-bold uppercase tracking-widest text-[9px] px-5 py-3 mt-2 hover:bg-text-heading/90 active:scale-[0.98] transition-all cursor-pointer w-fit flex items-center gap-1 shadow-sm"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      </footer>

      {/* Copyright Signature */}
      <div className="w-full border-t border-border-main py-6 px-8 md:px-14 bg-bg-main/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-text-main/50 uppercase tracking-widest">
        <span>© 2026 Aditya Sarse. All Rights Reserved.</span>
        <span>Designed & Developed by Aditya Sarse.</span>
      </div>
    </div>
  )
}
