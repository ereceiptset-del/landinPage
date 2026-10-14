import { useEffect, useRef } from 'react'
import { technologies } from '../../content/site.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import Container from '../ui/Container.jsx'
import Accent from '../ui/Accent.jsx'
import Reveal from '../ui/Reveal.jsx'
import TechIcon from '../ui/TechIcon.jsx'

const categories = technologies.categories.filter((c) => c.items.length > 0)
const plain = (t) => t.replace(/\*\*/g, '')

export default function Technologies() {
  const ids = categories.map((c) => c.id)
  const active = useActiveSection(ids, { rootMargin: '-30% 0px -60% 0px' }) || ids[0]
  const chipsRef = useRef(null)

  // Keep the active chip visible in the horizontal mobile chip bar.
  useEffect(() => {
    const bar = chipsRef.current
    const chip = bar?.querySelector(`[data-chip="${active}"]`)
    if (!bar || !chip || bar.scrollWidth <= bar.clientWidth) return
    bar.scrollTo({ left: chip.offsetLeft - 20, behavior: 'smooth' })
  }, [active])

  return (
    <section id="technologies" aria-labelledby="tech-title" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
          {/* Sticky intro + category list */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 id="tech-title" className="text-[1.875rem] leading-[1.15] font-extrabold sm:text-4xl lg:text-[2.6rem]">
                <Accent text={technologies.title} />
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed">{technologies.text}</p>
            </Reveal>

            <nav aria-label="Technology categories" className="mt-10 hidden lg:block">
              <ul className="border-l border-line">
                {categories.map((c) => {
                  const isActive = active === c.id
                  return (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        aria-current={isActive ? 'true' : undefined}
                        className={`-ml-px flex min-h-10 items-center border-l-2 pl-4 text-sm transition-colors ${
                          isActive ? 'border-brand font-semibold text-brand-600' : 'border-transparent text-body hover:text-ink'
                        }`}
                      >
                        {plain(c.title)}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Mobile: horizontal chips */}
          <nav aria-label="Technology categories" className="sticky top-[72px] z-20 -mx-5 -mt-4 bg-white/95 py-3 backdrop-blur sm:-mx-6 lg:hidden">
            <ul ref={chipsRef} className="no-scrollbar flex gap-2 overflow-x-auto px-5 sm:px-6">
              {categories.map((c) => {
                const isActive = active === c.id
                return (
                  <li key={c.id} className="shrink-0">
                    <a
                      href={`#${c.id}`}
                      data-chip={c.id}
                      aria-current={isActive ? 'true' : undefined}
                      className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                        isActive ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink/80'
                      }`}
                    >
                      {plain(c.title)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Category cards */}
          <div className="space-y-6">
            {categories.map((c) => (
              <Reveal
                as="article"
                key={c.id}
                id={c.id}
                data-anchor
                aria-labelledby={`${c.id}-title`}
                className="scroll-mt-40 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8 lg:scroll-mt-28"
              >
                <h3 id={`${c.id}-title`} className="text-2xl font-extrabold">
                  <Accent text={c.title} />
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-ink">{c.subtitle}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed">{c.text}</p>
                <ul className="mt-7 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
                  {c.items.map((t) => (
                    <li key={t.name} className="group">
                      <TechIcon name={t.name} slug={t.slug} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
