import React, { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }
  }

  return (
    <div className="w-full flex flex-col bg-bg-card">

      {/* Section Divider Block with Label: Contact */}
      <div id="contact" className="w-full border-b border-border-main flex justify-center bg-bg-main">
        <div className="border-x border-b border-border-main px-8 py-3 font-bold text-[10px] tracking-widest uppercase text-text-heading bg-bg-card translate-y-[1px]">
          Contact
        </div>
      </div>

      {/* Contact Form Details */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-border-main">
        {/* Left Column: Contact details */}
        <div className="p-8 md:p-14 text-left flex flex-col justify-between border-b md:border-b-0 md:border-r border-border-main bg-zinc-50/50 dark:bg-zinc-950/20">
          <div>
            <h3 className="text-3xl font-display font-extrabold text-text-heading mb-4">
              Let's create something bold together.
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-text-main font-medium max-w-sm mb-10">
              Have a project in mind, want to collaborate, or just talk design and development? Drop me a message.
            </p>
          </div>
          
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-bg-main rounded-none border border-border-main">
                <Mail className="w-4.5 h-4.5 text-text-heading" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold text-text-main/50 tracking-wider">Email</p>
                <a href="mailto:adityasarse362@gmail.com" className="text-sm font-bold text-text-heading hover:text-text-main transition-colors">
                  adityasarse362@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-bg-main rounded-none border border-border-main">
                <MapPin className="w-4.5 h-4.5 text-text-heading" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-bold text-text-main/50 tracking-wider">Location</p>
                <p className="text-sm font-bold text-text-heading">
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="p-8 md:p-14 text-left bg-bg-card">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto md:mx-0">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-widest text-text-heading">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-border-main bg-bg-main/30 px-4 py-3 rounded-none text-sm text-text-heading placeholder-text-main/40 focus:outline-none focus:border-text-heading transition-colors font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-text-heading">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Email Here"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-border-main bg-bg-main/30 px-4 py-3 rounded-none text-sm text-text-heading placeholder-text-main/40 focus:outline-none focus:border-text-heading transition-colors font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-widest text-text-heading">
                Message
              </label>
              <textarea
                id="message"
                required
                rows="5"
                placeholder="What’s in you mind?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-border-main bg-bg-main/30 px-4 py-3 rounded-none text-sm text-text-heading placeholder-text-main/40 focus:outline-none focus:border-text-heading transition-colors resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              className="bg-text-heading text-bg-card py-4 rounded-none font-bold text-[10px] tracking-widest uppercase hover:bg-text-heading/90 active:scale-[0.98] transition-all cursor-pointer"
            >
              {submitted ? 'MESSAGE SENT!' : 'SEND'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer link list grids */}
      <footer className="w-full grid grid-cols-1 md:grid-cols-4 p-8 md:p-14 gap-8 md:gap-4 text-left bg-bg-main/30">
        {/* Brand Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-5.5 h-5.5 text-text-heading" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2v20M2 12h20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3 3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l3 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-lg tracking-tight text-text-heading">Aditya Sarse</span>
          </div>
          <p className="text-xs md:text-sm text-text-main leading-relaxed max-w-sm font-medium">
            Myfolio is a easy minimal Framer template for developers and designers.
          </p>
        </div>

        {/* Info Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-text-heading">Info</h4>
          <div className="flex flex-col gap-2 text-xs font-semibold text-text-main">
            <a href="#portfolio" className="hover:text-text-heading transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-text-heading transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-text-heading transition-colors">Contact</a>
          </div>
        </div>

        {/* Resources Column */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-text-heading">Resources</h4>
          <div className="flex flex-col gap-2 text-xs font-semibold text-text-main">
            <a href="#" className="hover:text-text-heading transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-heading transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-text-heading transition-colors">404</a>
          </div>
        </div>
      </footer>

      {/* Copyright Signature */}
      <div className="w-full border-t border-border-main py-6 text-center text-[9px] font-bold text-text-main/50 uppercase tracking-widest bg-bg-main/50">
        ©2026 Aditya Sarse. Crafted By Aditya Sarse
      </div>
    </div>
  )
}
