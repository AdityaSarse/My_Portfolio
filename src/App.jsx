import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import PortfolioGrid from './components/PortfolioGrid'
import Services from './components/Services'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="w-full max-w-[1120px] mx-auto min-h-screen bg-bg-card border-x border-border-main flex flex-col relative shadow-sm">
      {/* Subtle dashed helper lines for premium look */}
      <div className="absolute left-1/4 top-0 bottom-0 border-l border-dashed border-border-main/15 pointer-events-none hidden md:block"></div>
      <div className="absolute right-1/4 top-0 bottom-0 border-r border-dashed border-border-main/15 pointer-events-none hidden md:block"></div>

      <Navbar />
      <Hero />
      <Showcase />
      <PortfolioGrid />
      <Services />
      <Experience />
      <About />
      <Contact />
    </div>
  )
}

export default App
