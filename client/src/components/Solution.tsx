import { useTheme } from '../context/ThemeContext'

const features = [
  {
    title: 'Continuous Monitoring',
    body: 'Integrating wearable device data with EMR/EHR through secure APIs for 24/7 health tracking.',
  },
  {
    title: 'AI Health Insights',
    body: 'Machine learning models analyze trends in patient data to provide personalized, actionable insights.',
  },
  {
    title: 'Anomaly Detection',
    body: 'Proactive identification of early warning signs indicating potential health deterioration.',
  },
  {
    title: 'Escalation Alerts',
    body: 'Automated, timely notifications to family and primary responders when intervention is needed.',
  },
]

export default function Solution() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section
      id="solution"
      className={`py-24 px-6 transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16">

          {/* ── Left column: text ── */}
          <div className="flex-1 flex flex-col">

            {/* Big heading */}
            <h2
              className={`font-cormorant font-semibold leading-tight mb-5 transition-colors duration-300 ${
                dark ? 'text-gray-100' : 'text-gray-900'
              }`}
              style={{ fontSize: 'clamp(42px, 6vw, 57px)' }}
            >
              Proactive Intelligence.
            </h2>

            {/* Sub-heading */}
            <p className={`font-montserrat text-[20px] font-normal mb-4 transition-colors duration-300 ${
              dark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Empowering proactive care through technology.
            </p>

            {/* Body paragraph */}
            <p className={`font-montserrat text-[18px] leading-relaxed font-light mb-10 transition-colors duration-300 ${
              dark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Using AI/ML models, the platform analyzes trends in the patient's health data,
              provides personalized health insights, and recommends when a patient should seek
              medical consultation or further evaluation.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-8">
              {features.map((f) => (
                <div key={f.title}>
                  <h3 className={`font-montserrat font-semibold text-[18px] mb-2 transition-colors duration-300 ${
                    dark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {f.title}
                  </h3>
                  <p className={`font-montserrat text-[18px] leading-relaxed font-light transition-colors duration-300 ${
                    dark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: stethoscope image ── */}
          <div className="flex-1 flex items-center justify-center md:justify-end">
            <img
              src="/stethoscope.png"
              alt="Gold and steel stethoscope"
              className="w-full max-w-sm md:max-w-md object-contain drop-shadow-xl relative top-50"
              style={{ transform: 'rotate(-5deg)' }}
            />
          </div>

        </div>

        {/* ── Founder story ── */}
        <div className={`flex flex-col md:flex-row md:items-center gap-12 md:gap-16 mt-28 pt-20 border-t transition-colors duration-300 ${
          dark ? 'border-gray-800' : 'border-gray-100'
        }`}>

          {/* Left: italic quote blocks + attribution */}
          <div className="flex-1 flex flex-col gap-8">
            <p
              className={`font-cormorant italic leading-snug transition-colors duration-300 ${
                dark ? 'text-gray-200' : 'text-gray-900'
              }`}
              style={{ fontSize: 'clamp(26px, 3.2vw, 33px)' }}
            >
              I started this with a simple thought — what if care reached people before it was too late?
            </p>
            <p
              className={`font-cormorant italic leading-snug transition-colors duration-300 ${
                dark ? 'text-gray-200' : 'text-gray-900'
              }`}
              style={{ fontSize: 'clamp(26px, 3.2vw, 33px)' }}
            >
              My grandfather suffered a stroke and didn't receive medical attention in time.
            </p>
            <p
              className={`font-cormorant italic leading-snug transition-colors duration-300 ${
                dark ? 'text-gray-200' : 'text-gray-900'
              }`}
              style={{ fontSize: 'clamp(26px, 3.2vw, 33px)' }}
            >
              That experience stayed with me. It made me realise how often critical moments are missed —
              not because treatment doesn't exist, but because it doesn't reach in time.
            </p>

            {/* Attribution */}
            <p className={`font-montserrat text-[25px] tracking-wide mt-2 ml-50 transition-colors duration-300 ${
              dark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              — Aditya Sahoo, Founder
            </p>
          </div>

          {/* Right: anatomical heart illustration */}
          <div className="flex-1 flex items-center justify-center md:justify-end">
            <img
              src="/heart.png"
              alt="Anatomical heart illustration"
              className="w-full max-w-xs md:max-w-sm object-contain relative right-10"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
