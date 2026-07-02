import React from 'react'

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 border-b border-border-main bg-bg-card/85 backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg className="w-5.5 h-5.5 text-text-heading" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2v20M2 12h20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3 3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l3 3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-bold text-lg tracking-tight text-text-heading">Aditya Sarse</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        <button 
          onClick={() => scrollToSection('portfolio')} 
          className="text-sm font-semibold text-text-main hover:text-text-heading transition-colors cursor-pointer"
        >
          Portfolio
        </button>
        <button 
          onClick={() => scrollToSection('pricing')} 
          className="text-sm font-semibold text-text-main hover:text-text-heading transition-colors cursor-pointer"
        >
          Pricing
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="text-sm font-semibold text-text-main hover:text-text-heading transition-colors cursor-pointer"
        >
          Contact
        </button>
      </div>

      {/* CTA Button */}
      <div>
        <a 
          href="https://framer.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-text-heading text-bg-card px-5 py-3 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-text-heading/90 active:scale-95 transition-all cursor-pointer"
        >
          Use For Free
        </a>
      </div>
    </nav>
  )
}
