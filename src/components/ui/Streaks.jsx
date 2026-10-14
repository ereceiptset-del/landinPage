// Thin vertical light streaks used on the dark bands (deterministic, so no layout shift between renders).
const STREAKS = [
  { left: 4, top: 30, h: 70, o: 0.35 },
  { left: 9, top: 55, h: 45, o: 0.55 },
  { left: 16, top: 0, h: 60, o: 0.25 },
  { left: 23, top: 40, h: 60, o: 0.45 },
  { left: 31, top: 10, h: 35, o: 0.3 },
  { left: 38, top: 0, h: 100, o: 0.18 },
  { left: 44, top: 60, h: 40, o: 0.4 },
  { left: 52, top: 5, h: 55, o: 0.5 },
  { left: 58, top: 45, h: 55, o: 0.3 },
  { left: 63, top: 0, h: 30, o: 0.6 },
  { left: 69, top: 25, h: 75, o: 0.25 },
  { left: 76, top: 0, h: 100, o: 0.15 },
  { left: 82, top: 50, h: 50, o: 0.5 },
  { left: 89, top: 10, h: 45, o: 0.35 },
  { left: 95, top: 35, h: 65, o: 0.45 },
]

export default function Streaks({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {STREAKS.map((s, i) => (
        <span
          key={i}
          className="absolute w-px"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            height: `${s.h}%`,
            opacity: s.o,
            background: 'linear-gradient(to bottom, transparent, #1fbf62 45%, #1fbf62 70%, transparent)',
          }}
        />
      ))}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}
