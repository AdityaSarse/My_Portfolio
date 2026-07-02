import React from 'react'
import { motion } from 'framer-motion'
import { Box, Code2, Monitor, RefreshCw, PenTool, Sparkles } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Product Design',
    description: 'I design simple, user-friendly digital products that look clean and feel good to use.',
    icon: Box
  },
  {
    id: 2,
    title: 'Framer Development',
    description: 'I build fast, smooth Framer websites with clean motion and custom interactions.',
    icon: Code2
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'I create simple, beautiful experiences that feel natural and easy to use.',
    icon: Monitor
  },
  {
    id: 4,
    title: 'Framer Conversion',
    description: 'I turn designs into responsive websites in Framer or Webflow with smooth animation.',
    icon: RefreshCw
  },
  {
    id: 5,
    title: 'Creative Direction',
    description: 'I help brands shape their visual style through clear layout, design, and direction.',
    icon: PenTool
  },
  {
    id: 6,
    title: 'Branding & Identity',
    description: 'I design logos and visual identities that look consistent across all platforms.',
    icon: Sparkles
  }
]

export default function Services() {
  return (
    <section id="services" className="w-full flex flex-col border-b border-border-main bg-bg-card">
      {/* Section Header */}
      <div className="w-full border-b border-border-main py-4 text-center bg-bg-main">
        <h2 className="font-bold text-[10px] tracking-widest uppercase text-text-heading">
          Services
        </h2>
      </div>

      {/* Services Grid (2 Columns, divided by border-dashed) */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => {
          const IconComponent = service.icon
          const isRight = index % 2 !== 0
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`p-8 md:p-14 flex flex-col items-start text-left gap-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-all duration-300
                border-b border-dashed border-border-main
                ${isRight ? '' : 'md:border-r'}
              `}
            >
              <div className="p-3 bg-bg-main text-text-heading rounded-none w-fit border border-border-main">
                <IconComponent className="w-5.5 h-5.5 stroke-[1.75]" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-text-heading mt-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Showcase / Canvas Preview Window with Crop Corners */}
      <div className="w-full border-b border-border-main py-16 px-6 bg-bg-main flex items-center justify-center">
        <div className="w-full max-w-3xl aspect-[16/9] border border-border-main relative p-8 bg-bg-card shadow-sm">
          {/* Viewfinder Corners */}
          <div className="viewfinder-corner-tl"></div>
          <div className="viewfinder-corner-tr"></div>
          <div className="viewfinder-corner-bl"></div>
          <div className="viewfinder-corner-br"></div>

          {/* Interactive UI Sandbox Canvas inside Viewfinder */}
          <div className="w-full h-full bg-zinc-950 rounded border border-zinc-800 p-4 font-mono text-xs text-zinc-400 flex flex-col justify-between overflow-hidden shadow-inner relative group">
            {/* Glowing orb background effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-violet-500/10 blur-[50px] group-hover:bg-violet-500/20 transition-all duration-500"></div>

            {/* Header window control panel */}
            <div className="flex justify-between items-center border-b border-zinc-800/80 pb-2.5 z-10">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[9px] text-zinc-600">motion_engine.js</span>
            </div>

            {/* Component Sandbox Demonstration */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 py-4 z-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-14 h-14 border border-dashed border-violet-500/30 rounded-full flex items-center justify-center"
              >
                <div className="w-8 h-8 border border-zinc-700 bg-zinc-900 flex items-center justify-center text-sm shadow-md">
                  ✨
                </div>
              </motion.div>

              <div className="text-center">
                <p className="text-zinc-200 font-semibold text-xs tracking-wider uppercase">Framer Motion Active</p>
                <p className="text-[9px] text-zinc-600 mt-1">Simulating canvas coordinates & grid connections</p>
              </div>

              {/* Connecting Nodes (visual animation) */}
              <div className="flex gap-4 items-center mt-1">
                <div className="px-2 py-0.5 rounded-sm bg-zinc-900 border border-zinc-800 text-[8px] text-zinc-500">
                  Figma Node
                </div>
                <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-emerald-500"></div>
                <div className="px-2 py-0.5 rounded-sm bg-zinc-900 border border-zinc-800 text-[8px] text-zinc-500">
                  React Code
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] text-zinc-600 border-t border-zinc-900 pt-2 z-10">
              <span>status: active</span>
              <span>latency: 2ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider Block with Label: Testimonials */}
      <div className="w-full border-t border-border-main flex justify-center bg-bg-main">
        <div className="border-x border-b border-border-main px-8 py-3 font-bold text-[10px] tracking-widest uppercase text-text-heading bg-bg-card translate-y-[1px]">
          Testimonial
        </div>
      </div>
    </section>
  )
}
