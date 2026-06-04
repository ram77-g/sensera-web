import { useTheme } from '../context/ThemeContext'

export default function Status() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section
      id="status"
      className={`pt-60 pb-48 px-6 transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`font-cormorant font-light text-center leading-none tracking-[0.25em] uppercase transition-colors duration-300 ${
            dark ? 'text-gray-100' : 'text-gray-900'
          }`}
          style={{ fontSize: 'clamp(36px, 9vw, 70px)' }}
        >
          Development Timeline
        </h2>
      </div>
    </section>
  )
}
