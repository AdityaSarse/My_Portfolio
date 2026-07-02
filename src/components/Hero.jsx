import React from 'react'
import { motion } from 'framer-motion'
import adityaPhoto from '../assets/Photos/ChatGPT Image Jul 2, 2026, 01_36_49 PM (1).png'

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full border-b border-border-main py-20 flex flex-col items-center justify-center overflow-hidden bg-bg-card">
      {/* Background color glow behind the avatar */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 dark:opacity-20">
        <div className="absolute w-[450px] h-[450px] rounded-full bg-violet-400/40 blur-[80px] -translate-x-16 animate-pulse duration-4000"></div>
        <div className="absolute w-[450px] h-[450px] rounded-full bg-emerald-300/30 blur-[80px] translate-x-16 animate-pulse duration-6000"></div>
      </div>

      {/* Avatar masked in vertical capsule */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-48 h-60 md:w-56 md:h-68 rounded-[110px] overflow-hidden border border-border-main bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center shadow-lg mb-8"
      >
        <img 
          src={adityaPhoto} 
          alt="Aditya Sarse" 
          className="w-full h-full object-cover scale-105"
        />
      </motion.div>

      {/* Hero Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="z-10 text-center mb-8 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-text-heading mb-4">
          Hi, I'm Aditya Sarse
        </h1>
        
        {/* Simple text CTA button to About Me */}
        <button 
          onClick={scrollToAbout}
          className="inline-flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading border-b border-text-heading pb-1 hover:text-text-main hover:border-text-main transition-colors cursor-pointer"
        >
          About Me
        </button>
      </motion.div>

      {/* 3-Column Roles Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-4xl border-y border-border-main grid grid-cols-3 z-10 text-center bg-bg-main"
      >
        <div className="py-4.5 font-bold text-[10px] md:text-xs tracking-widest uppercase text-text-heading border-r border-border-main">
          Product Designer
        </div>
        <div className="py-4.5 font-bold text-[10px] md:text-xs tracking-widest uppercase text-text-heading border-r border-border-main">
          UI/UX Designer
        </div>
        <div className="py-4.5 font-bold text-[10px] md:text-xs tracking-widest uppercase text-text-heading">
          Framer Dev
        </div>
      </motion.div>

      {/* Dotted/Dashed Subtitle Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-4xl border-b border-dashed border-border-main z-10 text-center pb-8 pt-8 px-6 bg-bg-main"
      >
        <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-text-main font-medium">
          UI/UX Designer & Web Developer passionate about crafting clean, modern experiences using Figma & Framer.
        </p>
      </motion.div>
    </section>
  )
}
