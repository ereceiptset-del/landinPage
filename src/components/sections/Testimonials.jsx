import { Quote } from 'lucide-react'
import { testimonials } from '../../content/site.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Card from '../ui/Card.jsx'
import { Stagger, StaggerItem } from '../ui/Reveal.jsx'

/** Hidden entirely until at least one approved testimonial is added to site.js. */
export default function Testimonials() {
  if (!testimonials.items.length) return null

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading id="testimonials-title" title={testimonials.title} />
        <Stagger as="ul" className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((t) => (
            <StaggerItem as="li" key={t.name + t.quote.slice(0, 20)}>
              <Card as="figure" className="flex h-full flex-col p-7">
                <Quote className="size-7 text-brand-200" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <p className="font-bold text-ink">{t.name}</p>
                  {(t.role || t.company) && (
                    <p className="mt-0.5 text-sm">{[t.role, t.company].filter(Boolean).join(', ')}</p>
                  )}
                </figcaption>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
