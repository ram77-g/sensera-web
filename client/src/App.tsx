import { useState } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Status from './components/Status'
import Team from './components/Team'
import Footer from './components/Footer'
import Intro from './components/Intro'

function AppInner() {
  const { theme } = useTheme()
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <div
        className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0f0f0f]' : 'bg-white'}`}
        style={{
          opacity: introDone ? 1 : 0,
          transition: 'opacity 600ms ease',
        }}
      >
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <Status />
        <Team />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}

export default App
