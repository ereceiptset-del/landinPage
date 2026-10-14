import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '../../content/site.js'
import { useContactPrefill } from '../../hooks/contactPrefill.jsx'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Card, { IconTile } from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import Dialog from '../ui/Dialog.jsx'
import { InlineLink } from '../ui/Accent.jsx'
import { Stagger, StaggerItem } from '../ui/Reveal.jsx'
import { getIcon } from '../ui/icons.js'

export default function Services() {
  const [openId, setOpenId] = useState(null)
  const { requestContact } = useContactPrefill()
  const current = services.items.find((s) => s.id === openId)

  return (
    <section id="services" aria-labelledby="services-title" className="bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading id="services-title" eyebrow={services.eyebrow} title={services.title} text={services.text} align="left" />

        <Stagger as="ul" className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s) => (
            <StaggerItem as="li" key={s.id} className="h-full">
              <Card className="flex h-full flex-col p-7">
                <IconTile icon={getIcon(s.icon)} />
                <h3 className="mt-7 text-lg font-bold">{s.title}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed">
                  <InlineLink text={s.text} href={`#services`} onClick={() => setOpenId(s.id)} />
                </p>
                <button
                  type="button"
                  onClick={() => setOpenId(s.id)}
                  className="group mt-6 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-brand-600"
                  aria-haspopup="dialog"
                >
                  Learn more<span className="sr-only"> about {s.title}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>

      <Dialog
        open={Boolean(current)}
        onClose={() => setOpenId(null)}
        title={current?.title}
        footer={
          current && (
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button variant="outline" onClick={() => setOpenId(null)}>
                Close
              </Button>
              <Button
                icon={ArrowRight}
                onClick={() => {
                  const topic = current.title
                  setOpenId(null)
                  requestContact({ topic })
                }}
              >
                Discuss this service
              </Button>
            </div>
          )
        }
      >
        {current && (
          <>
            <div className="flex items-start gap-4">
              <IconTile icon={getIcon(current.icon)} />
              <p className="text-[15px] leading-relaxed">{current.details.intro}</p>
            </div>
            <h3 className="mt-7 text-sm font-bold tracking-[0.12em] text-muted uppercase">What this can include</h3>
            <ul className="mt-4 space-y-3">
              {current.details.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] text-ink">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                    <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </>
        )}
      </Dialog>
    </section>
  )
}
