import { useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { Pause, Play } from 'lucide-react'
import { clientLogos, capabilityStrip } from '../../content/site.js'
import Container from '../ui/Container.jsx'

/**
 * Marquee under the hero. Shows real client logos when supplied, otherwise capability labels.
 * Pauses on hover/focus and with the toggle; static when reduced motion is preferred.
 */
export default function LogoStrip() {
  const reduce = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const hasLogos = clientLogos.length > 0
  const heading = hasLogos ? 'Companies we build for' : capabilityStrip.heading
  const items = hasLogos ? clientLogos : capabilityStrip.items

  const renderItem = (item, i, hidden) =>
    hasLogos ? (
      <li key={`${item.name}-${i}`} aria-hidden={hidden || undefined} className="flex shrink-0 items-center px-8 sm:px-12">
        <img src={item.src} alt={hidden ? '' : item.name} className="h-9 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" loading="lazy" height="36" />
      </li>
    ) : (
      <li key={`${item}-${i}`} aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-6 px-3 sm:gap-10 sm:px-5">
        <span className="text-xl font-extrabold tracking-[-0.03em] whitespace-nowrap text-ink/80 sm:text-[1.7rem]">{item}</span>
        <span aria-hidden="true" className="size-1.5 rounded-full bg-brand/60" />
      </li>
    )

  return (
    <section aria-labelledby="strip-heading" className="relative border-y border-line bg-white py-10 sm:py-12">
      <Container className="mb-7 flex items-center justify-center gap-3">
        <h2 id="strip-heading" className="eyebrow text-center text-[11px] tracking-[0.25em]">
          {heading}
        </h2>
        {!reduce && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="inline-flex size-11 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-ink"
            aria-label={paused ? 'Play scrolling list' : 'Pause scrolling list'}
          >
            {paused ? <Play className="size-3.5" aria-hidden="true" /> : <Pause className="size-3.5" aria-hidden="true" />}
          </button>
        )}
      </Container>

      {reduce ? (
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-y-4">{items.map((it, i) => renderItem(it, i, false))}</ul>
        </Container>
      ) : (
        <div
          className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <ul
            className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationPlayState: paused ? 'paused' : undefined }}
          >
            {items.map((it, i) => renderItem(it, i, false))}
            {items.map((it, i) => renderItem(it, i + items.length, true))}
          </ul>
        </div>
      )}
    </section>
  )
}
