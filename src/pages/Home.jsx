import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import PortfolioGrid from '../components/PortfolioGrid'
import Services from '../components/Services'
import Journey from '../components/Journey'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      // Clear state to prevent re-scroll on re-renders
      window.history.replaceState({}, '')
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <Showcase />
      <PortfolioGrid />
      <Services />
      <Journey />
      <About />
      <Contact />
    </>
  )
}
