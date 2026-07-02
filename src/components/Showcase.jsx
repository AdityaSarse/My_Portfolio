import React from 'react'
import { motion } from 'framer-motion'

export default function Showcase() {
  // Floating animation configs
  const floatAnim = (delay) => ({
    animate: {
      y: [0, -8, 0],
      rotate: [0, 1, 0]
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay
    }
  })

  return (
    <section className="w-full relative border-b border-border-main py-16 md:py-24 overflow-hidden">
      {/* Viewfinder Corners */}
      <div className="absolute inset-x-4 inset-y-4 pointer-events-none">
        <div className="viewfinder-corner-tl"></div>
        <div className="viewfinder-corner-tr"></div>
        <div className="viewfinder-corner-bl"></div>
        <div className="viewfinder-corner-br"></div>
      </div>

      {/* Showcase Content */}
      <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center gap-12 md:gap-16 my-8">
        
        {/* Line 1: Bold Vision [Phone Mockup] Visual Balance */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-3xl md:text-5xl font-semibold tracking-tight text-center">
          <span className="text-text-heading">Bold Vision</span>
          
          {/* Tilted Phone Mockup */}
          <motion.div 
            {...floatAnim(0)}
            className="w-14 h-24 md:w-20 md:h-32 rounded-xl bg-zinc-950 dark:bg-zinc-900 border border-zinc-700/50 p-1 shadow-lg transform rotate-12 flex-shrink-0"
          >
            {/* Inner screen content */}
            <div className="w-full h-full rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 overflow-hidden flex flex-col justify-between p-1.5 text-[5px] text-white">
              <div className="flex justify-between w-full">
                <span>9:41</span>
                <span>📶🔋</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm self-center flex items-center justify-center font-bold text-[8px]">
                🚀
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-full h-2 rounded bg-white/30"></div>
                ))}
              </div>
            </div>
          </motion.div>

          <span className="text-text-main/60 dark:text-text-main/50 font-medium">Visual Balance</span>
        </div>

        {/* Line 2: [Tablet Mockup] Detail in Every Line */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-3xl md:text-5xl font-semibold tracking-tight text-center">
          {/* Tilted Tablet Mockup */}
          <motion.div 
            {...floatAnim(0.5)}
            className="w-28 h-20 md:w-36 md:h-24 rounded-xl bg-zinc-900 dark:bg-zinc-800 border border-zinc-700/50 p-1.5 shadow-xl transform -rotate-6 flex-shrink-0"
          >
            {/* Inner screen content */}
            <div className="w-full h-full rounded bg-zinc-950 overflow-hidden p-2 text-white flex flex-col justify-between">
              <div className="flex items-center gap-1 border-b border-zinc-800 pb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <div className="w-12 h-1.5 rounded bg-zinc-800 ml-1"></div>
              </div>
              <div className="flex gap-2 items-center my-auto">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-indigo-500 flex-shrink-0 flex items-center justify-center font-bold text-[10px]">
                  UI
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="w-full h-1 bg-zinc-700 rounded"></div>
                  <div className="w-2/3 h-1 bg-zinc-700 rounded"></div>
                  <div className="w-1/2 h-1 bg-zinc-700 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <span className="text-text-heading">Detail in Every Line</span>
        </div>

        {/* Line 3: Create Without [Laptop/Tablet Mockup] Boundaries */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-3xl md:text-5xl font-semibold tracking-tight text-center">
          <span className="text-text-main/60 dark:text-text-main/50 font-medium">Create Without</span>

          {/* Tilted Laptop Screen Mockup */}
          <motion.div 
            {...floatAnim(1)}
            className="w-32 h-20 md:w-44 md:h-28 rounded-lg bg-zinc-950 dark:bg-zinc-900 border border-zinc-700/50 p-1 shadow-2xl transform rotate-6 flex-shrink-0"
          >
            {/* Screen */}
            <div className="w-full h-full rounded bg-zinc-900 overflow-hidden p-1.5 font-mono text-[4px] text-zinc-400 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-1 mb-1">
                <span className="text-zinc-600 font-sans">app.jsx</span>
                <span className="text-[3px] bg-purple-500/20 text-purple-400 px-1 rounded font-sans">HMR</span>
              </div>
              <div className="flex-1 overflow-hidden leading-[5px] text-[3.5px]">
                <p className="text-purple-400">import <span className="text-white">React</span> from <span className="text-green-400">'react'</span></p>
                <p className="text-purple-400">export default function <span className="text-blue-400">Portfolio</span>() &#123;</p>
                <p className="pl-2 text-zinc-500">return (</p>
                <p className="pl-4 text-yellow-400">&lt;<span className="text-blue-400">main</span> className=<span className="text-green-400">"grid"</span>&gt;</p>
                <p className="pl-6 text-zinc-300">&lt;<span className="text-blue-400">Card</span> title=<span className="text-green-400">"Modern Web"</span> /&gt;</p>
                <p className="pl-4 text-yellow-400">&lt;/<span className="text-blue-400">main</span>&gt;</p>
                <p className="pl-2 text-zinc-500">)</p>
                <p className="text-purple-400">&#125;</p>
              </div>
            </div>
          </motion.div>

          <span className="text-text-heading">Boundaries</span>
        </div>

      </div>

      {/* Section Divider Block with Label: Portfolio */}
      <div id="portfolio" className="w-full border-t border-border-main mt-8 flex justify-center">
        <div className="border-x border-b border-border-main px-8 py-3 font-semibold text-xs tracking-widest uppercase text-text-heading bg-bg-main">
          Portfolio
        </div>
      </div>
    </section>
  )
}
