import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Journey() {
  const containerRef = useRef(null)
  
  // Setup timeline grow animation tied to scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })
  
  // Animates vertical line height from 0% to 100% as the section passes through viewport
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.8], ["0%", "100%"])

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
        damping: 25,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const pillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  }

  const timelineItems = [
    {
      year: '2026',
      title: 'UI/UX Designer Intern',
      company: 'Renu Sharma Foundation (EpochFolio)',
      duration: 'January 2026 – May 2026',
      location: 'Remote',
      description: 'Designed intuitive and responsive user interfaces with a strong focus on usability and accessibility. Created wireframes, user flows, high-fidelity mockups, and reusable design systems using Figma. Collaborated closely with developers and stakeholders to transform ideas into responsive digital products. Contributed to typography, visual hierarchy, branding, and overall user experience improvements.',
      skills: ['Figma', 'Framer', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design']
    },
    {
      year: 'Present',
      title: 'Full Stack Developer',
      company: 'Self-Employed',
      duration: 'Ongoing Development',
      location: 'Pune, India',
      description: 'Currently focused on developing full stack applications using React, Next.js, Node.js, Three.js, and modern backend technologies while actively seeking Frontend and Full Stack opportunities. Building modern web applications and continuously learning new technologies to build better digital products.',
      skills: ['React', 'Next.js', 'Three.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'GSAP']
    }
  ]

  return (
    <section id="journey" className="w-full flex flex-col bg-bg-card">
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
            JOURNEY
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-text-heading tracking-tight">
            My Professional Journey
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
            A snapshot of my growth as a designer and full stack developer through real-world experience and continuous learning.
          </p>
        </motion.div>
      </div>

      {/* Timeline Section Container */}
      <div className="w-full py-16 md:py-24 bg-bg-card flex justify-center px-6 relative border-b border-border-main">
        <div ref={containerRef} className="w-full max-w-2xl relative flex flex-col gap-12">
          
          {/* Centralized Growing Timeline Line */}
          <div className="absolute left-4 md:left-6 top-3 bottom-3 w-0.5 bg-border-main">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-text-heading origin-top"
            />
          </div>

          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative pl-10 md:pl-16">
              
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.15 }}
                className="absolute left-2.5 md:left-4.5 top-3.5 w-3.5 h-3.5 rounded-full bg-text-heading border-4 border-bg-card ring-2 ring-border-main z-10"
              />

              {/* Year Indicator */}
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block text-[10px] font-bold tracking-widest uppercase text-text-heading bg-bg-main border border-border-main px-3 py-1 mb-4 shadow-sm"
              >
                {item.year}
              </motion.span>

              {/* Experience Milestone Card */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                whileHover="hover"
                className="bg-bg-card border border-border-main rounded-[20px] p-6 md:p-8 flex flex-col gap-5 hover:shadow-md hover:border-text-heading/30 transition-all duration-300 cursor-default"
              >
                {/* Header */}
                <div className="flex flex-col gap-1.5 border-b border-dashed border-border-main pb-4">
                  <h3 className="text-xl md:text-2xl font-display font-extrabold text-text-heading">
                    {item.title}
                  </h3>
                  <span className="text-xs text-text-main font-semibold">
                    {item.company} • {item.location}
                  </span>
                  <span className="text-[10px] font-bold text-text-main/50 uppercase tracking-wider">
                    {item.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
                  {item.description}
                </p>

                {/* Skills/Tools pills */}
                <motion.div 
                  variants={containerVariants}
                  className="flex flex-wrap gap-2 mt-2 pt-4 border-t border-dashed border-border-main"
                >
                  {item.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={pillVariants}
                      whileHover={{ y: -2, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                      className="inline-flex items-center px-3 py-1.5 bg-bg-card hover:bg-zinc-50 dark:hover:bg-zinc-950/65 border border-border-main hover:border-text-heading rounded-full text-xs font-semibold text-text-heading cursor-pointer transition-colors duration-300 shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          ))}
          
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
