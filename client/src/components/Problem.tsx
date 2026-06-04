import { useTheme } from '../context/ThemeContext'

const problems = [
  {
    title: 'Delayed Recognition',
    body: 'Critical deterioration often goes unnoticed until it becomes an emergency, reducing the window for effective intervention.',
  },
  {
    title: 'Disconnected Care',
    body: "Patients' health status isn't continuously monitored outside clinical settings, leading to fragmented care and missed warning signs.",
  },
  {
    title: 'Communication Gaps',
    body: "Family members and primary responders are often the last to know when a patient's health declines unexpectedly.",
  },
]

export default function Problem() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section
      id="problem"
      className={`py-24 px-6 transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-white'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className={`font-cormorant font-semibold text-center leading-tight mb-6 transition-colors duration-300 ${
            dark ? 'text-gray-100' : 'text-gray-900'
          }`}
          style={{ fontSize: 'clamp(42px, 6vw, 50px)' }}
        >
          The Problem We Are Solving
        </h2>

        {/* Subtext */}
        <p className={`font-montserrat text-[17px] leading-relaxed text-center max-w-2xl mx-auto mb-16 transition-colors duration-300 ${
          dark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Our platform addresses delays in recognising deterioration of patients' health status and
          promptly notifies family members and primary responders to ensure the patient gets timely
          medical attention.
        </p>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {problems.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <h3
                className={`font-cormorant font-semibold transition-colors duration-300 ${
                  dark ? 'text-gray-100' : 'text-gray-900'
                }`}
                style={{ fontSize: 'clamp(22px, 2vw, 24px)' }}
              >
                {item.title}
              </h3>
              <p className={`font-montserrat text-[16px] leading-relaxed font-normal transition-colors duration-300 ${
                dark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
