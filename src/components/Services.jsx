import React from 'react'
import { motion } from 'framer-motion'

// Custom minimalist monochrome SVG icons for category headers
const LayoutIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
)

const ServerIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
)

const DatabaseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
)

const SparklesIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
  </svg>
)

// Custom minimalist monochrome SVG icons for technologies
const FigmaIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 9h3.5A3.5 3.5 0 1 1 12 12.5V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
  </svg>
)

const ReactIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const NextjsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M18 12L12 6v6m4 4l-4.5-4.5" />
  </svg>
)

const TsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 9h4M10 9v6M14 11c0-1 1-2 2-2s2 1 2 2v2c0 1-1 2-2 2s-2-1-2-2" />
  </svg>
)

const JsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 14.5c0 1 1 1.5 2 1.5s2-.5 2-1.5V9M15 14.5c0 1 1 1.5 2 1.5s2-.5 2-1.5v-1c0-1-1-1.5-2-1.5s-2 .5-2 1.5" />
  </svg>
)

const TailwindIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 12c2-3 4.5-5 8.5-5s3.5 2.5 3.5 5-2.5 5-8.5 5-3.5-2.5-3.5-5zm-12 5c2-3 4.5-5 8.5-5s3.5 2.5 3.5 5-2.5 5-8.5 5-3.5-2.5-3.5-5z" />
  </svg>
)

const FramerIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M12 2v20M3 12h18" />
  </svg>
)

const ThreeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

const NodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zM12 22V11M2 7.5L12 13l10-5.5" />
  </svg>
)

const MongoIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c0 0 7 4 7 10c0 4.5-3.5 8-7 10c-3.5-2-7-5.5-7-10c0-6 7-10 7-10z" />
    <path d="M12 2v20" />
  </svg>
)

const PostgresIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2s-3 4-3 10 1.5 7.5 3 10z" />
    <path d="M12 2A10 10 0 0 0 2 12c0 2 1.5 3 3 3h4" />
  </svg>
)

const RedisIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 8l9-4 9 4-9 4-9-4zm0 8l9-4 9 4-9 4-9-4z" />
    <path d="M12 12v6" />
  </svg>
)

const FastapiIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const VercelIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
)

const ApiIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const GitIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <path d="M6 9v6" />
  </svg>
)

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const KeyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
)

const TerminalIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
)

const CodeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

// Data mappings for clean monochrome styles
const techData = {
  'React': { name: 'React', icon: ReactIcon },
  'Next.js': { name: 'Next.js', icon: NextjsIcon },
  'TypeScript': { name: 'TypeScript', icon: TsIcon },
  'JavaScript': { name: 'JavaScript', icon: JsIcon },
  'Tailwind CSS': { name: 'Tailwind CSS', icon: TailwindIcon },
  'Framer Motion': { name: 'Framer Motion', icon: FramerIcon },
  'Three.js': { name: 'Three.js', icon: ThreeIcon },
  'React Three Fiber': { name: 'React Three Fiber', icon: ThreeIcon },
  'GSAP': { name: 'GSAP', icon: SparklesIcon },
  'Node.js': { name: 'Node.js', icon: NodeIcon },
  'Express.js': { name: 'Express.js', icon: TerminalIcon },
  'MongoDB': { name: 'MongoDB', icon: MongoIcon },
  'PostgreSQL': { name: 'PostgreSQL', icon: PostgresIcon },
  'Redis': { name: 'Redis', icon: RedisIcon },
  'FastAPI': { name: 'FastAPI', icon: FastapiIcon },
  'Git': { name: 'Git', icon: GitIcon },
  'GitHub': { name: 'GitHub', icon: GithubIcon },
  'Figma': { name: 'Figma', icon: FigmaIcon },
  'Vercel': { name: 'Vercel', icon: VercelIcon },
  'REST APIs': { name: 'REST APIs', icon: ApiIcon },
  'JWT Authentication': { name: 'JWT Authentication', icon: ShieldIcon },
  'OAuth 2.0': { name: 'OAuth 2.0', icon: KeyIcon },
  'SQL': { name: 'SQL', icon: DatabaseIcon },
  'Framer': { name: 'Framer', icon: FramerIcon }
}

const marqueeTechs = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 
  'Framer Motion', 'Three.js', 'React Three Fiber', 'GSAP', 'Node.js', 
  'Express.js', 'MongoDB', 'PostgreSQL', 'Redis', 'FastAPI', 
  'Git', 'GitHub', 'Figma', 'Vercel', 'REST APIs'
]

const cards = [
  {
    title: 'Frontend Development',
    icon: LayoutIcon,
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend Development',
    icon: ServerIcon,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'OAuth 2.0', 'FastAPI']
  },
  {
    title: 'Database & Storage',
    icon: DatabaseIcon,
    skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Redis']
  },
  {
    title: 'Creative Development',
    icon: SparklesIcon,
    skills: ['Three.js', 'React Three Fiber', 'GSAP', 'Framer']
  }
]

// Animated tech pill for Marquee
function TechPill({ name }) {
  const tech = techData[name] || { name, icon: CodeIcon }
  const Icon = tech.icon

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card hover:bg-zinc-50 dark:hover:bg-zinc-950/60 border border-border-main hover:border-text-heading rounded-full text-xs font-semibold text-text-heading cursor-pointer transition-colors duration-300 shadow-sm">
      {Icon && <Icon className="w-3.5 h-3.5 text-text-heading" />}
      <span>{tech.name}</span>
    </div>
  )
}

// Child tech pill animation details
const pillVariants = {
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

// Tech pill for Cards
function CardTechPill({ name }) {
  const tech = techData[name] || { name, icon: CodeIcon }
  const Icon = tech.icon

  return (
    <motion.div
      variants={pillVariants}
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
      className="inline-flex items-center gap-2 px-3.5 py-2 bg-bg-card hover:bg-zinc-50 dark:hover:bg-zinc-950/60 border border-border-main hover:border-text-heading rounded-full text-xs font-semibold text-text-heading cursor-pointer transition-colors duration-300 shadow-sm"
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-text-heading" />}
      <span>{tech.name}</span>
    </motion.div>
  )
}

export default function Services() {
  // Animating viewport enter configurations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 240, 
        damping: 22,
        staggerChildren: 0.05, 
        delayChildren: 0.12
      }
    }
  }

  return (
    <section id="services" className="w-full flex flex-col border-b border-border-main bg-bg-card">
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
            TECH STACK
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-text-heading tracking-tight">
            Technologies I Use
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-text-main font-medium">
            A collection of modern technologies I use to build fast, scalable, and immersive web applications.
          </p>
        </motion.div>
      </div>

      {/* Top Animated Tech Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full overflow-hidden relative py-8 border-b border-border-main bg-bg-main/30 flex"
      >
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-4 pr-4">
            {marqueeTechs.map((tech, idx) => (
              <TechPill key={idx} name={tech} />
            ))}
          </div>
          <div className="flex gap-4 pr-4" aria-hidden="true">
            {marqueeTechs.map((tech, idx) => (
              <TechPill key={`dup-${idx}`} name={tech} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Skill Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-2 w-full"
      >
        {cards.map((card, idx) => {
          const CategoryIcon = card.icon
          const isRight = idx % 2 !== 0
          const isBottom = idx >= 2

          return (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover="hover"
              className={`p-8 md:p-14 flex flex-col items-start text-left gap-6 hover:bg-zinc-50/30 dark:hover:bg-zinc-950/10 cursor-default transition-all duration-300
                border-border-main
                ${isBottom ? 'border-b-0' : 'border-b'}
                ${isRight ? '' : 'md:border-r'}
                hover:border-text-heading/30
              `}
            >
              {/* Card Header (Icon & Title) */}
              <div className="flex items-center gap-4">
                <motion.div 
                  variants={{
                    initial: { rotate: 0 },
                    hover: { rotate: 8 }
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="p-3 bg-bg-main border border-border-main text-text-heading rounded-xl"
                >
                  <CategoryIcon className="w-6 h-6 stroke-[1.75]" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-text-heading">
                  {card.title}
                </h3>
              </div>

              {/* Tech Pills Container */}
              <div className="flex flex-wrap gap-2.5 mt-2">
                {card.skills.map((skill) => (
                  <CardTechPill key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Section Divider Block with Label: Journey */}
      <div className="w-full border-t border-border-main flex justify-center bg-bg-main">
        <div className="border-x border-b border-border-main px-8 py-3 font-bold text-[10px] tracking-widest uppercase text-text-heading bg-bg-card translate-y-[1px]">
          JOURNEY
        </div>
      </div>
    </section>
  )
}
