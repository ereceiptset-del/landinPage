import { Fragment } from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { process } from '../../content/site.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import { getIcon } from '../ui/icons.js'

const legendColors = ['bg-brand', 'bg-cyan-400', 'bg-emerald-400']

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="on-dark relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_50%_55%,#0f3322_0%,#08140f_55%,#030806_100%)] py-16 sm:py-24"
    >
      <Container>
        <SectionHeading id="process-title" dark title={process.title} text={process.text} />

        <ol className="mt-14 flex flex-col items-stretch gap-3 lg:mt-16 lg:flex-row lg:items-center lg:gap-2">
          {process.steps.map((step, i) => {
            const highlight = i === process.highlightIndex
            return (
              <Fragment key={step.title}>
                {i > 0 && (
                  <li aria-hidden="true" className="flex justify-center text-white/25 lg:shrink-0">
                    <ArrowRight className="hidden size-4 lg:block" />
                    <ArrowDown className="size-4 lg:hidden" />
                  </li>
                )}
                <Reveal as="li" delay={i * 0.07} className={`relative ${highlight ? 'lg:flex-[1.35]' : 'lg:flex-1'}`}>
                  {highlight ? <HighlightCard step={step} n={i + 1} /> : <StepCard step={step} n={i + 1} />}
                </Reveal>
              </Fragment>
            )
          })}
        </ol>

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {process.legend.map((l, i) => (
            <li key={l} className="flex items-center gap-2.5 text-xs font-semibold text-white/60">
              <span aria-hidden="true" className={`size-1.5 rounded-full ${legendColors[i % legendColors.length]}`} />
              {l}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function NumberBadge({ n }) {
  return (
    <span className="absolute -top-2.5 -right-2.5 inline-flex size-7 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white shadow-[0_0_0_4px_#08140f]">
      {String(n).padStart(2, '0')}
    </span>
  )
}

function StepCard({ step, n }) {
  const Icon = getIcon(step.icon)
  return (
    <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm lg:min-h-[264px]">
      <NumberBadge n={n} />
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-[#6fd99a] ring-1 ring-brand/30">
        <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 text-[15px] font-extrabold tracking-[0.02em] text-white uppercase">
        <span className="sr-only">Step {n}: </span>
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/55">{step.text}</p>
    </div>
  )
}

function HighlightCard({ step, n }) {
  const Icon = getIcon(step.icon)
  return (
    <div className="relative flex h-full flex-col items-center rounded-3xl border border-brand/50 bg-gradient-to-b from-[#0f4229] to-[#0a2619] p-7 text-center shadow-glow lg:min-h-[320px] lg:justify-center">
      <NumberBadge n={n} />
      <span className="inline-flex size-16 items-center justify-center rounded-full border border-dashed border-brand/60 bg-brand/10 text-[#6fd99a]">
        <Icon className="size-7 motion-safe:animate-[spin_12s_linear_infinite]" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 text-lg font-extrabold tracking-[0.04em] text-white uppercase">
        <span className="sr-only">Step {n}: </span>
        {step.title}
      </h3>
      {step.subtitle && <p className="mt-1.5 text-xs font-bold tracking-[0.14em] text-[#5fd08d] uppercase">{step.subtitle}</p>}
      <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-white/65">{step.text}</p>
      {step.badges?.length > 0 && (
        <ul className="mt-5 flex gap-2">
          {step.badges.map((b) => (
            <li key={b} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-bold tracking-[0.1em] text-white/70 uppercase">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
