import React from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProblemSection from './components/ProblemSection.jsx'
import AgentPipeline from './components/AgentPipeline.jsx'
import DualPersona from './components/DualPersona.jsx'
import Architecture from './components/Architecture.jsx'
import FaqSection from './components/FaqSection.jsx'
import DemoLauncher from './components/DemoLauncher.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ProblemSection />
          <AgentPipeline />
          <DualPersona />
          <Architecture />
          <FaqSection />
          <DemoLauncher />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
