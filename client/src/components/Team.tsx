import { useTheme } from '../context/ThemeContext'

const members = [
  {
    name: 'ADITYA SAHOO',
    role: 'FOUNDER',
    bio: "I'm a third-year MBBS student at KMC, working at the intersection of medicine and innovation. Beyond academics, I'm involved in early-stage startups focused on solving real-world healthcare challenges. I approach problems with a practical mindset and aim to build solutions that make a lasting impact.",
    image: '/sahoo.png',
    imagePosition: 'left',
  },
  {
    name: 'ADITYA BR',
    role: 'CO-FOUNDER',
    bio: "I'm Aditya Bharath, a pre-final year B.Tech (Hons.) Computer Science and Engineering student specializing in AI/ML. I'm passionate about building intelligent systems and turning ideas into real-world, impactful solutions. I enjoy working at the intersection of problem-solving and technology, with a focus on creating efficient, user-centric applications.",
    image: '/br.png',
    imagePosition: 'right',
  },
  {
    name: 'AKSHAT G',
    role: 'FOUNDING ML ENGINEER',
    bio: "I'm Akshat G., a third-year CS & AI undergrad at Manipal Institute of Technology Bengaluru. I explore ML, deep learning, and computer vision out of genuine curiosity — turning what I learn into beginner-friendly articles and tutorials, and gradually getting involved in research to keep that learning more structured.",
    image: '/akshat.png',
    imagePosition: 'left',
  },
  {
    name: 'PRANAVI PRASAD',
    role: 'FOUNDING CLINICAL RESEARCHER',
    bio: "I'm Pranavi, a third-year MBBS student at Shri Atal Bihari Vajpayee Medical College and Research Institute, Bangalore. I've always been passionate about helping people and making a meaningful difference, and I'm constantly looking for ways to contribute to a better and more compassionate world.",
    image: '/pranavi.png',
    imagePosition: 'right',
  },
  {
    name: 'ABINAV',
    role: 'FOUNDING SOFTWARE ENGINEER',
    bio: "I'm Abinav, a BTech student at IIIT Kancheepuram. I work in cryptography — particularly ZK proofs and Web3 — and have a thing for hardware, building and breaking stuff to understand how it works. Scalable and distributed systems are my core interests, and I'm always down for a conversation about large system architectures.",
    image: '/abinav.png',
    imagePosition: 'left',
  },
  {
    name: 'SUHAIL',
    role: 'FOUNDING CLINICAL RESEARCHER',
    bio: '',
    image: '/suhail.png',
    imagePosition: 'right',
  },
  {
    name: 'LITHIN SK',
    role: 'FOUNDING HARDWARE ENGINEER',
    bio: '',
    image: '/lithin.png',
    imagePosition: 'left',
  },
  {
    name: 'PAMMI NANDA',
    role: 'FOUNDING HARDWARE ENGINEER',
    bio: '',
    image: '/pammi.png',
    imagePosition: 'right',
  },
]

const advisors = [
  {
    name: 'DR. ASHOK SHENOY',
    role: 'FACULTY MENTOR',
    bio: 'Professor of Pharmacology at Kasturba Medical College, Mangalore. Experienced clinician and educator with a demonstrated history in Clinical Research, Pharmacology, Clinical Trials, and Bioethics.',
    image: '/shenoy.png',
    imagePosition: 'left',
  },
  {
    name: 'DR. BHARATH MS',
    role: 'FACULTY MENTOR',
    bio: 'Associate Professor, Department of General Medicine, Bowring and Lady Curzon Hospital',
    image: '/bharat.png',
    imagePosition: 'right',
  },
]

export default function Team() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <section
      id="team"
      className={`transition-colors duration-300 ${dark ? 'bg-[#0f0f0f]' : 'bg-white'}`}
    >
      {/* Header */}
      <div className="py-24 px-6 text-center">
        <h2
          className={`font-cormorant font-semibold leading-none tracking-[0.1em] uppercase mb-6 transition-colors duration-300 ${
            dark ? 'text-gray-100' : 'text-gray-900'
          }`}
          style={{ fontSize: 'clamp(42px, 8vw, 96px)' }}
        >
          Meet the Team
        </h2>
        <p className={`font-cormorant italic text-[22px] transition-colors duration-300 ${
          dark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          A diverse group of experts committed to transforming healthcare.
        </p>
      </div>

      {/* Stacking cards */}
      <div className="relative">
        {members.map((member, i) => (
          <div
            key={member.name}
            className="sticky top-16"
            style={{ zIndex: 10 + i }}
          >
            <div
              className={`
                mx-auto max-w-5xl px-6 py-16 md:py-20
                flex flex-col md:flex-row items-center gap-12 md:gap-16
                rounded-2xl shadow-lg mb-8
                transition-colors duration-300
                ${member.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}
                ${dark ? 'bg-[#161616] border border-[#2a2a2a]' : 'bg-white border border-gray-100'}
              `}
              style={{
                boxShadow: dark
                  ? '0 8px 40px rgba(0,0,0,0.6)'
                  : '0 8px 40px rgba(0,0,0,0.08)',
              }}
            >
              {/* Photo */}
              <div className="flex-shrink-0 w-64 md:w-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-xl"
                  style={{
                    objectPosition: 'top center',
                  }}
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col gap-4">
                <h3
                  className={`font-cormorant font-semibold tracking-[0.12em] transition-colors duration-300 ${
                    dark ? 'text-gray-100' : 'text-gray-900'
                  }`}
                  style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
                >
                  {member.name}
                </h3>
                <p className={`font-montserrat text-[12px] tracking-[0.25em] transition-colors duration-300 ${
                  dark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {member.role}
                </p>
                <p className={`font-cormorant text-[19px] leading-relaxed transition-colors duration-300 ${
                  dark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom spacer */}
        <div className="h-8" />
      </div>

      {/* ── Advisors & Mentors header ── */}
      <div className="pt-36 pb-24 px-6 text-center" style={{ marginTop: '40vh' }}>
        <h2
          className={`font-cormorant font-semibold leading-none tracking-[0.08em] uppercase mb-5 transition-colors duration-300 ${
            dark ? 'text-gray-100' : 'text-gray-900'
          }`}
          style={{ fontSize: 'clamp(36px, 7vw, 80px)' }}
        >
          Advisors &amp; Mentors
        </h2>
        <p className={`font-cormorant italic text-[20px] transition-colors duration-300 ${
          dark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Guiding our vision with decades of clinical and domain expertise.
        </p>
      </div>

      {/* ── Advisor stacking cards ── */}
      <div className="relative">
        {advisors.map((advisor, i) => (
          <div
            key={advisor.name}
            className="sticky top-16"
            style={{ zIndex: 10 + i }}
          >
            <div
              className={`
                mx-auto max-w-5xl px-6 py-16 md:py-20
                flex flex-col md:flex-row items-center gap-12 md:gap-16
                rounded-2xl shadow-lg mb-8
                transition-colors duration-300
                ${advisor.imagePosition === 'right' ? 'md:flex-row-reverse' : ''}
                ${dark ? 'bg-[#161616] border border-[#2a2a2a]' : 'bg-white border border-gray-100'}
              `}
              style={{
                boxShadow: dark
                  ? '0 8px 40px rgba(0,0,0,0.6)'
                  : '0 8px 40px rgba(0,0,0,0.08)',
              }}
            >
              {/* Photo or initial placeholder */}
              <div className="flex-shrink-0 w-64 md:w-72">
                {advisor.image ? (
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-80 object-cover rounded-xl"
                    style={{ objectPosition: 'top center' }}
                  />
                ) : (
                  <div className={`w-full h-80 rounded-xl flex items-center justify-center ${
                    dark ? 'bg-[#2a2a2a]' : 'bg-blue-50'
                  }`}>
                    <span className={`font-cormorant text-[80px] font-light ${
                      dark ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {advisor.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col gap-4">
                <h3
                  className={`font-cormorant font-semibold tracking-[0.12em] transition-colors duration-300 ${
                    dark ? 'text-gray-100' : 'text-gray-900'
                  }`}
                  style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
                >
                  {advisor.name}
                </h3>
                <p className={`font-montserrat text-[12px] tracking-[0.25em] transition-colors duration-300 ${
                  dark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {advisor.role}
                </p>
                {advisor.bio && (
                  <p className={`font-cormorant text-[19px] leading-relaxed transition-colors duration-300 ${
                    dark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {advisor.bio}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="h-8" />
      </div>

    </section>
  )
}
