import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Our Solution', href: '#solution' },
  { label: 'Status', href: '#status' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${scrolled
          ? dark
            ? 'bg-[#0f0f0f]/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : dark
            ? 'bg-[#0f0f0f]/70 backdrop-blur-sm py-4'
            : 'bg-white/70 backdrop-blur-sm py-4'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-cormorant font-normal tracking-[0.25em] text-[20px] transition-colors ${
            dark ? 'text-gray-100 hover:text-gray-400' : 'text-gray-900 hover:text-gray-600'
          }`}
        >
          SENSERA
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-13">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-montserrat text-[15px] font-normal transition-colors tracking-wide ${
                dark ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: theme toggle + contact */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle button */}
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`
              w-9 h-9 flex items-center justify-center rounded-full
              border transition-all duration-200
              ${dark
                ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-gray-100'
                : 'border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-900'
              }
            `}
          >
            {dark ? (
              /* Sun icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className={`
              inline-flex items-center
              font-montserrat text-[12px] font-medium tracking-[0.15em] uppercase
              px-5 py-2.5 transition-colors duration-200
              ${dark
                ? 'bg-white text-gray-900 hover:bg-gray-200'
                : 'bg-gray-900 text-white hover:bg-gray-700'
              }
            `}
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Open menu"
        >
          <span className={`w-5 h-px block ${dark ? 'bg-gray-100' : 'bg-gray-900'}`} />
          <span className={`w-5 h-px block ${dark ? 'bg-gray-100' : 'bg-gray-900'}`} />
          <span className={`w-5 h-px block ${dark ? 'bg-gray-100' : 'bg-gray-900'}`} />
        </button>
      </div>
    </nav>
  )
}
