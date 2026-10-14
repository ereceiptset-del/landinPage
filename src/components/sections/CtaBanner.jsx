import { ArrowRight } from 'lucide-react'
import { ctaBanner } from '../../content/site.js'
import Container from '../ui/Container.jsx'
import Accent from '../ui/Accent.jsx'
import Button from '../ui/Button.jsx'
import Streaks from '../ui/Streaks.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="on-dark relative isolate overflow-hidden bg-night py-20 sm:py-24">
      <Streaks />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="cta-title" className="text-[1.875rem] leading-[1.15] font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
            <Accent text={ctaBanner.title} accentClass="text-brand-400" />
          </h2>
          {ctaBanner.text && <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-[17px]">{ctaBanner.text}</p>}
          <Button href={ctaBanner.cta.href} size="lg" icon={ArrowRight} className="mt-9">
            {ctaBanner.cta.label}
          </Button>
          {ctaBanner.note && (
            <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-white/40 uppercase">{ctaBanner.note}</p>
          )}
        </Reveal>
      </Container>
    </section>
  )
}
