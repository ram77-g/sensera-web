import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-start pt-16 overflow-hidden transition-colors duration-300 ${
        dark ? 'bg-[#0f0f0f]' : 'bg-white'
      }`}
    >
      {/* Giant SENSERA background title */}
      <div className="w-full text-center select-none pointer-events-none mt-4">
        <h1
          className={`font-cormorant font-light leading-none tracking-[0.12em] transition-colors duration-300 ${
            dark ? 'text-gray-100' : 'text-gray-900'
          }`}
          style={{ fontSize: 'clamp(72px, 16vw, 180px)' }}
        >
          SENSERA
        </h1>
      </div>

      {/* Tagline */}
      <p
        className="font-montserrat font-normal tracking-[0.4em] text-[20px] uppercase mt-2 z-10"
        style={{ color: '#3a9e8f' }}
      >
        Predict.&nbsp;&nbsp;Prevent.&nbsp;&nbsp;Protect.
      </p>

      {/* Heart / pulse SVG illustration */}
      <div className="relative z-0 mt-[-10px] mb-[-60px]">
        <HeartPulseIllustration />
      </div>

      {/* Main heading */}
      <div className="relative z-10 text-center px-6 mt-0">
        <h2
          className={`font-cormorant font-semibold leading-tight transition-colors duration-300 ${
            dark ? 'text-gray-100' : 'text-gray-900'
          }`}
          style={{ fontSize: 'clamp(42px, 6vw, 60px)' }}
        >
          Care before it's too late.
        </h2>
      </div>

      {/* Body paragraph */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mt-6">
        <p className={`font-montserrat text-[20px] leading-relaxed font-light transition-colors duration-300 ${
          dark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Our platform addresses delays in recognising deterioration of patients' health status,
          and promptly notifies family members and primary responders to ensure the patient receives
          timely medical attention. Our system continuously monitors health parameters by integrating
          wearable device data with electronic medical records through secure APIs. Using a
          custom-built AI model, the platform analyses trends in the patient's health data, delivers
          personalised health insights, and recommends when a patient should seek medical
          consultation — enabling care that is proactive, not reactive.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className={`font-montserrat text-[10px] tracking-[0.2em] ${dark ? 'text-gray-400' : 'text-gray-600'}`}>SCROLL</span>
        <div className={`w-px h-8 animate-pulse ${dark ? 'bg-gray-500' : 'bg-gray-400'}`} />
      </div>
    </section>
  )
}

function HeartPulseIllustration() {
  return (
    <svg
      width="240"
      height="200"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-20"
      aria-hidden="true"
    >
      <path
        d="M120 170 C60 130 20 100 20 65 C20 40 40 20 65 20 C85 20 105 35 120 55 C135 35 155 20 175 20 C200 20 220 40 220 65 C220 100 180 130 120 170Z"
        stroke="#3a9e8f"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M120 155 C70 118 35 95 35 68 C35 48 50 33 70 33 C88 33 106 45 120 62 C134 45 152 33 170 33 C190 33 205 48 205 68 C205 95 170 118 120 155Z"
        stroke="#3a9e8f"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <circle cx="120" cy="90" r="18" fill="#3a9e8f" opacity="0.08" />
      <circle cx="120" cy="90" r="8" fill="#3a9e8f" opacity="0.12" />
    </svg>
  )
}
