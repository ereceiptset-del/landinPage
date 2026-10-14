import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { technologies } from '../../content/site.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Tabs from '../ui/Tabs.jsx'
import Reveal from '../ui/Reveal.jsx'
import TechIcon, { useTechIcons } from '../ui/TechIcon.jsx'

const categories = technologies.categories.filter((c) => c.items.length > 0)
const ID = 'tech'

/** Reference "Tools & technologies we use": category tabs over a grid of logo cards. */
export default function Technologies() {
  const [active, setActive] = useState(categories[0]?.id)
  const icons = useTechIcons()
  const reduce = useReducedMotion()
  const current = categories.find((c) => c.id === active) || categories[0]
  if (!current) return null

  return (
    <section id="technologies" aria-labelledby="tech-title" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="tech-title"
          eyebrow={technologies.eyebrow}
          title={technologies.title}
          text={technologies.text}
          align="left"
        />

        <Reveal className="mt-10">
          <Tabs
            tabs={categories.map((c) => ({ id: c.id, label: c.label, count: c.items.length }))}
            value={current.id}
            onChange={setActive}
            label="Technology categories"
            idBase={ID}
            className="-mx-5 px-5 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          />
        </Reveal>

        <div
          id={`${ID}-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`${ID}-tab-${current.id}`}
          tabIndex={0}
          className="mt-8 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          {/* Keyed by category: switching tabs swaps the grid instantly and replays the entrance stagger. */}
          <motion.ul
              key={current.id}
              initial={reduce ? { opacity: 0 } : 'hidden'}
              animate={reduce ? { opacity: 1 } : 'show'}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
              className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {current.items.map((t) => (
                <motion.li
                  key={`${current.id}-${t.name}`}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="group flex h-full flex-col items-center rounded-2xl border border-line bg-white px-4 py-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lift sm:px-6 sm:py-8"
                >
                  <span className="flex size-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <TechIcon slug={t.slug} mono={t.mono} color={t.color} icons={icons} className="size-10 sm:size-11" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold tracking-normal text-ink">{t.name}</h3>
                  {t.text && (
                    <p className="mt-2 line-clamp-4 text-[12.5px] leading-relaxed text-body sm:line-clamp-none">{t.text}</p>
                  )}
                </motion.li>
              ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  )
}
