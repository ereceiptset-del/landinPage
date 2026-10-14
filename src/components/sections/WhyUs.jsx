import { ArrowRight } from 'lucide-react'
import { whyUs } from '../../content/site.js'
import Container from '../ui/Container.jsx'
import Accent from '../ui/Accent.jsx'
import Button from '../ui/Button.jsx'
import Card, { IconTile } from '../ui/Card.jsx'
import Reveal, { Stagger, StaggerItem } from '../ui/Reveal.jsx'
import { getIcon } from '../ui/icons.js'

/** Split layout from the reference: sticky heading + CTA on the left, stacked principle cards on the right. */
export default function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="bg-surface py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-4">{whyUs.eyebrow}</p>
          <h2 id="why-title" className="text-[1.875rem] leading-[1.15] font-extrabold sm:text-4xl lg:text-[2.75rem]">
            <Accent text={whyUs.title} />
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed sm:text-[17px]">{whyUs.text}</p>
          <Button href={whyUs.cta.href} variant="outline" icon={ArrowRight} className="mt-8 rounded-lg">
            {whyUs.cta.label}
          </Button>
        </Reveal>

        <Stagger as="ul" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyUs.items.map((item) => (
            <StaggerItem as="li" key={item.title}>
              <Card radius="rounded-xl" className="h-full p-6">
                <IconTile icon={getIcon(item.icon)} size="size-10 rounded-xl" />
                <h3 className="mt-5 text-[17px] font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
