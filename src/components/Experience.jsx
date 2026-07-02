import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  // Stagger animation configurations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const highlightContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
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

  return (
    <section id="experience" className="w-full flex flex-col bg-bg-card">
      {/* Section Header */}
      <div className="w-full border-b border-border-main py-16 md:py-20 text-center bg-bg-main px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto flex flex-col gap-3"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-text-heading">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-text-heading tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
            My journey of collaborating on real-world products and continuously growing as a Full Stack Developer.
          </p>
        </motion.div>
      </div>

      {/* Two-column layout grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 border-b border-border-main bg-bg-card">
        {/* Left Column: Timeline Indicator and Company Details (Span 4) */}
        <div className="md:col-span-5 p-8 md:p-14 border-b md:border-b-0 md:border-r border-border-main bg-bg-main/20 flex flex-col justify-start">
          <div className="flex gap-6 md:gap-8 items-start relative pl-6 py-2">
            {/* Timeline line marker */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 flex flex-col items-center">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full bg-border-main"
              />
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                className="absolute top-3 w-3 h-3 rounded-full bg-text-heading border-4 border-bg-card ring-2 ring-border-main"
              />
            </div>

            {/* Company metadata */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-text-main/50">
                Company
              </span>
              <h4 className="text-xl md:text-2xl font-display font-extrabold text-text-heading leading-tight">
                Renu Sharma Foundation
              </h4>
              <span className="text-xs text-text-main font-semibold">
                EpochFolio • Remote
              </span>
              <span className="text-[10px] font-bold text-text-heading bg-bg-card border border-border-main px-3 py-1.5 w-fit rounded-none mt-1 shadow-sm">
                January 2026 – May 2026
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Experience Card & Highlights (Span 7) */}
        <div className="md:col-span-7 p-8 md:p-14 flex flex-col gap-6 justify-center">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover="hover"
            className="w-full bg-bg-card border border-border-main rounded-3xl p-8 md:p-12 flex flex-col gap-6 hover:shadow-md hover:border-text-heading/30 transition-all duration-300"
          >
            {/* Role title header */}
            <div className="flex flex-col gap-1.5 border-b border-dashed border-border-main pb-5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-text-main/50">
                Internship Position
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-text-heading leading-tight">
                UI/UX Designer Intern
              </h3>
            </div>

            {/* Bullet achievements lists */}
            <ul className="flex flex-col gap-4 text-sm md:text-base text-text-main font-medium leading-relaxed">
              <li className="flex gap-3 items-start">
                <span className="text-text-heading font-bold mt-1 text-xs">•</span>
                <span>Designed intuitive and responsive user interfaces focused on usability and accessibility.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-text-heading font-bold mt-1 text-xs">•</span>
                <span>Created wireframes, user flows, high-fidelity mockups, and reusable design systems using Figma.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-text-heading font-bold mt-1 text-xs">•</span>
                <span>Collaborated closely with developers and stakeholders to transform ideas into responsive digital products.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-text-heading font-bold mt-1 text-xs">•</span>
                <span>Contributed to typography, visual hierarchy, branding, and overall user experience improvements.</span>
              </li>
            </ul>

            {/* Skills Pills Staggered Container */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-4 border-t border-dashed border-border-main pt-6"
            >
              {['Figma', 'Framer', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design'].map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                  className="inline-flex items-center px-3.5 py-2 bg-bg-card hover:bg-zinc-50 dark:hover:bg-zinc-950/60 border border-border-main hover:border-text-heading rounded-full text-xs font-semibold text-text-heading cursor-pointer transition-colors duration-300 shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Mini Cards Grid */}
          <motion.div 
            variants={highlightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full"
          >
            {[
              { emoji: "🎨", text: "Designed responsive UI for real-world products" },
              { emoji: "🤝", text: "Collaborated with developers and stakeholders" },
              { emoji: "📐", text: "Built reusable design systems" },
              { emoji: "🚀", text: "Improved usability through iterative design" }
            ].map((hl, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -3, boxShadow: '0 8px 24px -10px rgba(0,0,0,0.05)' }}
                className="bg-bg-card border border-border-main p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 cursor-default hover:border-text-heading/30"
              >
                <span className="text-2xl mt-0.5">{hl.emoji}</span>
                <p className="text-xs md:text-sm font-semibold text-text-heading leading-relaxed">
                  {hl.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section Divider Block with Label: About Me */}
      <div className="w-full border-t border-border-main flex justify-center bg-bg-main">
        <div className="border-x border-b border-border-main px-8 py-3 font-bold text-[10px] tracking-widest uppercase text-text-heading bg-bg-card translate-y-[1px]">
          ABOUT ME
        </div>
      </div>
    </section>
  )
}
