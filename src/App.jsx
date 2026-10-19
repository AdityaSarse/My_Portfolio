import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full max-w-[1120px] mx-auto min-h-screen bg-bg-card border-x border-border-main flex flex-col relative shadow-sm">
        {/* Subtle dashed helper lines for premium look */}
        <div className="absolute left-1/4 top-0 bottom-0 border-l border-dashed border-border-main/15 pointer-events-none hidden md:block"></div>
        <div className="absolute right-1/4 top-0 bottom-0 border-r border-dashed border-border-main/15 pointer-events-none hidden md:block"></div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
