import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <footer
      id="contact"
      className={`relative overflow-hidden transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-white'}`}
    >
      {/* Top border */}
      <div className={`w-full h-px ${dark ? 'bg-gray-800' : 'bg-gray-100'}`} />

      {/* Links grid */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-10 grid grid-cols-2 md:grid-cols-2 gap-12">

        {/* Company */}
        <div className="flex flex-col gap-5">
          <h4 className={`font-montserrat text-[13px] font-medium tracking-[0.3em] uppercase transition-colors duration-300 ${
            dark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Mission', href: '#hero' },
              { label: 'Our Solution', href: '#solution' },
              { label: 'Status', href: '#status' },
              { label: 'Team', href: '#team' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-cormorant text-[17px] transition-colors duration-200 ${
                    dark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-5">
          <h4 className={`font-montserrat text-[13px] font-medium tracking-[0.3em] uppercase transition-colors duration-300 ${
            dark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Connect
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-cormorant text-[17px] transition-colors duration-200 ${
                  dark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/senseraa"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-cormorant text-[17px] transition-colors duration-200 ${
                  dark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-cormorant text-[17px] transition-colors duration-200 ${
                  dark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="mailto:sensera@gmail.com"
                className={`font-cormorant text-[17px] transition-colors duration-200 ${
                  dark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                sensera@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Giant watermark SENSERA */}
      <div className="w-full text-center select-none pointer-events-none mt-4 pb-0 overflow-hidden">
        <p
          className={`font-cormorant font-light leading-none tracking-[0.08em] transition-colors duration-300 ${
            dark ? 'text-gray-800' : 'text-gray-300'
          }`}
          style={{ fontSize: 'clamp(72px, 18vw, 220px)' }}
        >
          SENSERA
        </p>
      </div>

      {/* Bottom bar */}
      <div className={`w-full h-px ${dark ? 'bg-gray-800' : 'bg-gray-200'}`} />
      <div className="w-full px-8 py-5 flex items-center justify-between">
        <p className={`font-montserrat text-[11px] tracking-wide transition-colors duration-300 ${
          dark ? 'text-gray-500' : 'text-gray-400'
        }`}>
          © 2026 Sensera. All rights reserved.
        </p>
        <p className={`font-montserrat text-[11px] transition-colors duration-300 ${
          dark ? 'text-gray-500' : 'text-gray-400'
        }`}>
          Care before it's too late.
        </p>
      </div>

    </footer>
  )
}
