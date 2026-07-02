import React from 'react'
import { motion } from 'framer-motion'
import adityaPhoto from '../assets/Photos/ChatGPT Image Jul 2, 2026, 01_36_49 PM (1).png'

export default function About() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="w-full flex flex-col border-b border-border-main bg-bg-card">
      {/* Section Header Divider */}
      <div className="w-full border-b border-border-main py-4 text-center bg-bg-main">
        <h2 className="font-bold text-[10px] tracking-widest uppercase text-text-heading">
          About Me
        </h2>
      </div>

      {/* Profile/Text Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column: Image with borders */}
        <div className="border-b md:border-b-0 md:border-r border-border-main p-8 md:p-14 flex items-center justify-center bg-bg-main">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm aspect-square border border-border-main bg-bg-card p-2 shadow-sm overflow-hidden"
          >
            <img 
              src={adityaPhoto} 
              alt="Aditya Sarse" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
            />
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
              Hi, I’m Aditya Sarse — a creative developer based in India.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
              I build beautiful things for the web, with features from React, Tailwind, and Framer. I share ideas on design, product, and creative business.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-text-heading text-bg-card px-6 py-3.5 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-text-heading/90 active:scale-95 transition-all w-fit cursor-pointer"
            >
              Get IN Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* 3-Column Stats Grid */}
      <div className="border-t border-border-main grid grid-cols-3 w-full text-center bg-bg-main">
        <div className="py-10 border-r border-border-main flex flex-col gap-1.5">
          <span className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-text-heading">7+</span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-text-main">Years Of Experience</span>
        </div>
        <div className="py-10 border-r border-border-main flex flex-col gap-1.5">
          <span className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-text-heading">20+</span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-text-main">Happy Clients</span>
        </div>
        <div className="py-10 flex flex-col gap-1.5">
          <span className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-text-heading">75+</span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-text-main">Completed Projects</span>
        </div>
      </div>
    </section>
  )
}
