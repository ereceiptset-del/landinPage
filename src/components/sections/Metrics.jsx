import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { metrics } from '../../content/site.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Streaks from '../ui/Streaks.jsx'
import { Stagger, StaggerItem } from '../ui/Reveal.jsx'

/**
 * Dark "by the numbers" band. Uses approved numbers from site.js only;
 * with none supplied it renders a qualitative capability band instead.
 */
export default function Metrics() {
  const hasNumbers = metrics.items.length > 0
  const items = hasNumbers ? metrics.items : metrics.capabilities

  return (
    <section id="metrics" aria-labelledby="metrics-title" className="on-dark relative isolate overflow-hidden bg-night py-16 sm:py-20">
      <Streaks />
      <Container className="relative">
        <SectionHeading
          id="metrics-title"
          dark
          title={hasNumbers ? metrics.title : metrics.capabilitiesTitle}
          text={hasNumbers ? metrics.text : metrics.capabilitiesText}
        />
        <Stagger as="ul" className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-y-10 lg:grid-cols-4">
          {items.map((m, i) => (
            <StaggerItem
              as="li"
              key={m.label || m.title}
              className={`px-4 text-center sm:px-6 ${i % 2 === 1 ? 'border-l border-white/10' : ''} ${
                i > 0 ? 'lg:border-l lg:border-white/10' : ''
              }`}
            >
              {hasNumbers ? (
                <>
                  <p className="text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">
                    <CountUp value={m.value} />
                    {m.suffix}
                  </p>
                  <p className="mx-auto mt-3 max-w-[16ch] text-xs leading-snug text-white/60 sm:text-sm">{m.label}</p>
                </>
              ) : (
                <>
                  <p className="text-2xl font-extrabold tracking-[-0.03em] text-white sm:text-[1.9rem]">{m.title}</p>
                  <p className="mx-auto mt-3 max-w-[20ch] text-xs leading-snug text-white/60 sm:text-sm">{m.text}</p>
                </>
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} aria-label={String(value)}>
      {display.toLocaleString()}
    </span>
  )
}
