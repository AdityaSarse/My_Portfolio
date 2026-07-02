import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import adityaPhoto from '../assets/Photos/ChatGPT Image Jul 2, 2026, 01_36_49 PM (1).png'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('frontend')

  const tabs = [
    {
      id: 'frontend',
      label: 'Frontend',
      content: 'Building responsive interfaces using React, Next.js, Tailwind CSS and Framer Motion.'
    },
    {
      id: 'backend',
      label: 'Backend',
      content: 'Creating scalable REST APIs with Node.js, Express, MongoDB and PostgreSQL.'
    },
    {
      id: 'creative',
      label: 'Creative Dev',
      content: 'Crafting immersive experiences using Three.js, GSAP and React Three Fiber.'
    }
  ]

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

      {/* Hero Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="z-10 text-center mb-8 px-6 max-w-3xl flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-text-heading mb-6 leading-tight">
          Full Stack Developer crafting modern web experiences.
        </h1>
        
        <p className="text-sm md:text-base leading-relaxed max-w-2xl text-text-main font-medium mb-6">
          I'm a Full Stack Developer from Pune who loves building fast, interactive and visually stunning web experiences using React, Next.js, Three.js, GSAP and modern backend technologies.
        </p>
        
        {/* Simple text CTA button to About Me */}
        <button 
          onClick={scrollToAbout}
          className="inline-flex items-center gap-1.5 font-bold text-[10px] tracking-widest uppercase text-text-heading border-b border-text-heading pb-1 hover:text-text-main hover:border-text-main transition-colors cursor-pointer"
        >
          About Me
        </button>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-4xl border-y border-border-main grid grid-cols-3 z-10 text-center bg-bg-main"
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4.5 font-bold text-[10px] md:text-xs tracking-widest uppercase cursor-pointer transition-all duration-300
              ${activeTab === tab.id 
                ? 'bg-text-heading text-bg-card' 
                : 'text-text-heading hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50'
              }
              ${idx < 2 ? 'border-r border-border-main' : ''}
            `}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Dotted/Dashed Subtitle Section (Tab Content) */}
      <div className="w-full max-w-4xl border-b border-dashed border-border-main z-10 text-center pb-8 pt-8 px-6 bg-bg-main flex items-center justify-center min-h-[110px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-text-main font-medium"
          >
            {tabs.find((t) => t.id === activeTab)?.content}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}

