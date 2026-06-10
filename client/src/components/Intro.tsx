import { useEffect, useState } from 'react'

const LETTERS = 'SENSERA'.split('')

export default function Intro({ onDone }: { onDone: () => void }) {
  // phase: 'letters' → each letter fades in staggered
  //        'hold'    → all visible, brief pause
  //        'out'     → whole overlay fades out
  const [phase, setPhase] = useState<'letters' | 'hold' | 'out'>('letters')

  useEffect(() => {
    // letters stagger: last letter starts at 600ms, each 80ms wide → ~680ms total
    // hold for 600ms after last letter is fully visible
    const holdTimer = setTimeout(() => setPhase('hold'), 1400)
    return () => clearTimeout(holdTimer)
  }, [])

  useEffect(() => {
    if (phase === 'hold') {
      const outTimer = setTimeout(() => setPhase('out'), 700)
      return () => clearTimeout(outTimer)
    }
    if (phase === 'out') {
      // fade-out transition is 700ms, call onDone after it completes
      const doneTimer = setTimeout(onDone, 750)
      return () => clearTimeout(doneTimer)
    }
  }, [phase, onDone])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      style={{
        opacity: phase === 'out' ? 0 : 1,
        transition: phase === 'out' ? 'opacity 700ms ease-in-out' : 'none',
        pointerEvents: phase === 'out' ? 'none' : 'all',
      }}
    >
      <div className="flex items-center gap-[0.12em]">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="font-cormorant font-light text-gray-900 tracking-[0.12em]"
            style={{
              fontSize: 'clamp(48px, 10vw, 120px)',
              opacity: phase === 'letters' ? 0 : 1,
              transform: phase === 'letters' ? 'translateY(12px)' : 'translateY(0)',
              transition: `opacity 500ms ease, transform 500ms ease`,
              transitionDelay: phase === 'letters' ? `${i * 80}ms` : '0ms',
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
