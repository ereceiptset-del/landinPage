import { useState } from 'react'
import { industries } from '../../content/site.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { IconTile } from '../ui/Card.jsx'
import { Stagger, StaggerItem } from '../ui/Reveal.jsx'
import { getIcon } from '../ui/icons.js'

/**
 * Reference industry pattern: a row of icon + uppercase label tiles, then detail cards with bullet lists.
 * Tiles jump to (and briefly highlight) their detail card.
 */
export default function Industries() {
  const [flash, setFlash] = useState(null)

  const jump = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(`industry-${id}`)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
    el.focus({ preventScroll: true })
    setFlash(id)
    window.setTimeout(() => setFlash(null), 1400)
  }

  return (
    <section id="industries" aria-labelledby="industries-title" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading id="industries-title" eyebrow={industries.eyebrow} title={industries.title} text={industries.text} />

        <nav aria-label="Industries" className="mt-12 border-y border-line py-8">
          <ul className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {industries.items.map((ind) => {
              const Icon = getIcon(ind.icon)
              return (
                <li key={ind.id}>
                  <a
                    href={`#industry-${ind.id}`}
                    onClick={(e) => jump(e, ind.id)}
                    className="group flex min-h-11 flex-col items-center gap-3 rounded-xl px-2 py-1 text-center"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand ring-1 ring-brand-100 transition group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-[18px]" aria-hidden="true" strokeWidth={1.75} />
                    </span>
                    <span className="text-[10.5px] leading-snug font-bold tracking-[0.1em] text-body uppercase group-hover:text-ink">
                      {ind.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <Stagger as="ul" className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {industries.items.map((ind) => (
            <StaggerItem as="li" key={ind.id}>
              <article
                id={`industry-${ind.id}`}
                tabIndex={-1}
                aria-labelledby={`industry-${ind.id}-title`}
                className={`h-full rounded-xl border bg-white p-7 transition-all duration-500 sm:p-8 ${
                  flash === ind.id ? 'border-brand shadow-[0_0_0_4px_rgb(0_133_58/0.12)]' : 'border-line'
                }`}
              >
                <IconTile icon={getIcon(ind.icon)} size="size-10 rounded-lg" />
                <h3 id={`industry-${ind.id}-title`} className="mt-5 text-lg font-bold">
                  {ind.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{ind.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {ind.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm text-ink/85">
                      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-brand" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
