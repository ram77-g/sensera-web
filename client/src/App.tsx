import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Status from './components/Status'
import Team from './components/Team'

function AppInner() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Status />
      <Team />
    </div>
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
