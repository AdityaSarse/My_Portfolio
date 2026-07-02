import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'What services do you offer?',
    answer: 'I offer a wide range of services including Product Design, UI/UX Design, Framer Development, Framer Conversion, Creative Direction, and Branding & Identity.'
  },
  {
    question: 'What is your design process?',
    answer: 'My process starts with understanding your goals, followed by research and wireframing. Then I create high-fidelity design concepts and build/develop them into responsive digital products with smooth transitions.'
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines vary depending on scope. A simple landing page takes about 1-2 weeks, while a more complex web app or multi-page site can take 4-6 weeks.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'I offer flexible pricing based on scope. You can select either our Basic monthly plan for simple pages or the Advanced plan for full-scale product design. Custom quotes are also available.'
  },
  {
    question: 'Do you offer support after project completion?',
    answer: 'Yes, I offer support after launch to resolve any issues and implement updates. The Advanced plan includes priority 24/7 support.'
  },
  {
    question: 'Can you convert Figma designs to React?',
    answer: 'Yes, I can convert Figma designs to clean, modular React components styled with Tailwind CSS, maintaining pixel perfection and adding interactive animations.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full flex flex-col border-b border-border-main bg-bg-card">
      {/* Section Header */}
      <div className="w-full border-b border-border-main py-4 text-center bg-bg-main">
        <h2 className="font-bold text-[10px] tracking-widest uppercase text-text-heading">
          FAQ
        </h2>
      </div>

      {/* Accordion List */}
      <div className="w-full flex flex-col">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="border-b border-border-main last:border-b-0 w-full">
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 md:px-12 flex justify-between items-center text-left hover:bg-zinc-50/50 dark:hover:bg-zinc-950/20 transition-all cursor-pointer group"
              >
                <span className="text-base md:text-lg font-display font-extrabold text-text-heading group-hover:text-text-main transition-colors">
                  {item.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 border border-border-main flex items-center justify-center text-text-heading bg-bg-main">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-12 md:pb-8 text-sm md:text-base leading-relaxed text-text-main font-medium max-w-2xl">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
