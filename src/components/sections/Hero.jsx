import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { hero } from '../../content/site.js'
import { sectionVisible } from '../../lib/content.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Accent from '../ui/Accent.jsx'

// Brighter blue grid lines layered over the faint grid (positions in % of the hero box).
const H_LINES = [22, 58, 86]
const V_LINES = [7, 31, 62, 88]

export default function Hero() {
  const reduce = useReducedMotion()
  // "Explore Our Work" must never point at a hidden section (projects are hidden until confirmed).
  const workHref =
    hero.secondary.href === '#projects' && !sectionVisible.projects
      ? sectionVisible.solutions
        ? '#solutions'
        : '#services'
      : hero.secondary.href
  const item = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-white">
      <div aria-hidden="true" className="bg-grid grid-fade absolute inset-0 -z-10" />
      <div aria-hidden="true" className="grid-fade absolute inset-0 -z-10">
        {H_LINES.map((top) => (
          <span key={`h${top}`} className="absolute inset-x-0 h-px bg-brand/25" style={{ top: `${top}%` }} />
        ))}
        {V_LINES.map((left) => (
          <span key={`v${left}`} className="absolute inset-y-0 w-px bg-brand/20" style={{ left: `${left}%` }} />
        ))}
      </div>

      <Container className="flex flex-col items-center pt-20 pb-24 text-center sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
        <motion.p {...item(0)} className="eyebrow mb-7 text-[11px] sm:text-[13px]">
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          id="hero-title"
          {...item(1)}
          className="max-w-5xl text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]"
        >
          <Accent text={hero.title} />
        </motion.h1>
        <motion.p {...item(2)} className="mt-7 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          {hero.text}
        </motion.p>
        <motion.div {...item(3)} className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button href={hero.primary.href} size="lg" icon={ArrowRight} className="w-full sm:w-auto">
            {hero.primary.label}
          </Button>
          <Button href={workHref} variant="outline" size="lg" className="w-full sm:w-auto">
            {hero.secondary.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
