import { ArrowRight, ExternalLink } from 'lucide-react'
import { solutionsSection } from '../../content/site.js'
import { solutions } from '../../lib/content.js'
import { useContactPrefill } from '../../hooks/contactPrefill.jsx'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Badge, { statusTone } from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { BrowserFrame, PhoneFrame } from '../ui/DeviceFrame.jsx'

export default function Solutions() {
  const { requestContact } = useContactPrefill()
  if (!solutions.length) return null

  return (
    <section id="solutions" aria-labelledby="solutions-title" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="solutions-title"
          eyebrow={solutionsSection.eyebrow}
          title={solutionsSection.title}
          text={solutionsSection.text}
        />

        <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
          {solutions.map((p, i) => {
            const flip = i % 2 === 1
            const desktop = p.images.desktop[0]
            const mobile = p.images.mobile[0]
            return (
              <article
                key={p.id}
                id={`solution-${p.id}`}
                data-anchor
                aria-labelledby={`solution-${p.id}-title`}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={`relative pb-8 sm:pb-10 ${flip ? 'lg:order-2' : ''}`} y={32}>
                  <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-50 to-white sm:-inset-6" />
                  <BrowserFrame src={desktop} alt={desktop ? `${p.name} — desktop screen` : ''} url={p.url} className="w-[92%]" />
                  {(mobile || p.draft) && (
                    <PhoneFrame
                      src={mobile}
                      alt={mobile ? `${p.name} — mobile screen` : ''}
                      className="absolute right-0 bottom-0 w-[24%] min-w-[92px]"
                    />
                  )}
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="flex flex-wrap items-center gap-2">
                    {p.draft && <Badge tone="draft">Draft · awaiting details</Badge>}
                    <Badge tone={statusTone(p.status)} dot>
                      {p.status}
                    </Badge>
                    {p.category && <Badge tone="slate">{p.category}</Badge>}
                  </div>
                  <h3 id={`solution-${p.id}-title`} className="mt-5 text-3xl font-extrabold sm:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed sm:text-[17px]">{p.summary}</p>

                  {p.features.length > 0 && (
                    <ol className="relative mt-8 space-y-4 border-l border-line pl-6">
                      {p.features.map((f, n) => (
                        <li key={f} className="relative">
                          <span aria-hidden="true" className="absolute top-1.5 -left-[29px] size-2.5 rounded-full border-2 border-white bg-brand ring-1 ring-brand-200" />
                          <span className="block text-[10px] font-bold tracking-[0.18em] text-brand/70 uppercase">
                            {String(n + 1).padStart(2, '0')}
                          </span>
                          <span className="font-semibold text-ink">{f}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {p.stack.length > 0 && (
                    <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technology">
                      {p.stack.map((t) => (
                        <li key={t} className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink/80">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button
                      icon={ArrowRight}
                      onClick={() => requestContact({ topic: p.name, message: `I'd like to request a demo of ${p.name}.` })}
                    >
                      Request a demo
                    </Button>
                    {p.url && (
                      <Button href={p.url} variant="outline" icon={ExternalLink}>
                        Visit {p.name}
                      </Button>
                    )}
                  </div>
                </Reveal>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
