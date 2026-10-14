import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Check } from 'lucide-react'
import { projectsSection } from '../../content/site.js'
import { caseStudies } from '../../lib/content.js'
import { useContactPrefill } from '../../hooks/contactPrefill.jsx'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Badge, { statusTone } from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import Dialog from '../ui/Dialog.jsx'
import Reveal from '../ui/Reveal.jsx'
import { LaptopFrame, PhoneFrame, ScreenshotPending } from '../ui/DeviceFrame.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Portfolio() {
  const [[index, direction], setState] = useState([0, 0])
  const [detailId, setDetailId] = useState(null)
  const reduce = useReducedMotion()
  const count = caseStudies.length

  const go = useCallback(
    (next, dir) => setState(([cur]) => [((next(cur) % count) + count) % count, dir]),
    [count],
  )
  const prev = () => go((i) => i - 1, -1)
  const next = () => go((i) => i + 1, 1)

  if (!count) return null

  const current = caseStudies[index]
  const left = count > 2 ? caseStudies[(index - 1 + count) % count] : null
  const right = count > 1 ? caseStudies[(index + 1) % count] : null
  const detail = caseStudies.find((p) => p.id === detailId)

  const onKeyDown = (e) => {
    if (e.target.closest('[role="dialog"]')) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  return (
    <section id="projects" aria-labelledby="projects-title" className="overflow-hidden border-t-2 border-ink bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading id="projects-title" eyebrow={projectsSection.eyebrow} title={projectsSection.title} text={projectsSection.text} />

        <Reveal
          className="relative mx-auto mt-12 max-w-[1000px] sm:mt-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          onKeyDown={onKeyDown}
        >
          {/* Blurred neighbours (desktop only, decorative — the arrows and dots are the accessible controls) */}
          {left && <Neighbour project={left} side="left" onClick={prev} />}
          {right && <Neighbour project={right} side="right" onClick={next} />}

          <div className="relative z-10 mx-auto lg:w-[86%]">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.article
                key={current.id}
                custom={direction}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}: ${current.name}`}
                variants={{
                  enter: (d) => (reduce ? { opacity: 0 } : { opacity: 0, x: d >= 0 ? 80 : -80 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d) => (reduce ? { opacity: 0 } : { opacity: 0, x: d >= 0 ? -80 : 80 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease }}
                drag={reduce || count < 2 ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60 || info.velocity.x < -400) next()
                  else if (info.offset.x > 60 || info.velocity.x > 400) prev()
                }}
                className="grid grid-cols-1 cursor-grab touch-pan-y overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_80px_-30px_rgb(11_20_55/0.25)] active:cursor-grabbing md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
              >
                <div className="flex flex-col p-7 sm:p-9">
                  <div className="flex flex-wrap gap-2">
                    {current.draft && <Badge tone="draft">Draft</Badge>}
                    {current.category && <Badge>{current.category}</Badge>}
                    <Badge tone={statusTone(current.status)} dot>
                      {current.status}
                    </Badge>
                  </div>
                  <h3 className="mt-5 text-[1.75rem] font-extrabold sm:text-[2rem]">{current.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed">{current.summary}</p>
                  {current.stack.length > 0 && (
                    <div className="mt-6 border-l-[3px] border-brand-100 pl-4">
                      <p className="text-[10px] font-bold tracking-[0.16em] text-muted uppercase">Core technology</p>
                      <p className="mt-1 text-sm font-semibold text-ink">{current.stack.join(', ')}</p>
                    </div>
                  )}
                  <div className="mt-auto pt-8">
                    <button
                      type="button"
                      onClick={() => setDetailId(current.id)}
                      aria-haspopup="dialog"
                      className="group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-600"
                    >
                      View details<span className="sr-only"> for {current.name}</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="relative flex items-center justify-center bg-gradient-to-br from-surface to-brand-50/60 px-6 pt-8 pb-10 sm:px-10">
                  <div className="relative w-full max-w-[400px] pb-4">
                    <LaptopFrame
                      src={current.images.desktop[0]}
                      alt={current.images.desktop[0] ? `${current.name} — desktop screen` : ''}
                    />
                    {current.images.mobile[0] && (
                      <PhoneFrame
                        src={current.images.mobile[0]}
                        alt={`${current.name} — mobile screen`}
                        className="absolute -right-2 bottom-0 w-[24%] sm:-right-5"
                      />
                    )}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {`Project ${index + 1} of ${count}: ${current.name}`}
          </p>

          {count > 1 && (
            <div className="mt-10 flex items-center justify-between gap-4 lg:px-[7%]">
              <div className="flex flex-wrap items-center">
                {caseStudies.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setState([i, i > index ? 1 : -1])}
                    aria-label={`Show project ${i + 1}: ${p.name}`}
                    aria-current={i === index ? 'true' : undefined}
                    className="group inline-flex h-11 min-w-6 items-center justify-center px-1"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? 'w-6 bg-brand' : 'w-1.5 bg-slate-300 group-hover:bg-slate-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous project"
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-white text-ink transition hover:border-ink/30"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next project"
                  className="inline-flex size-11 items-center justify-center rounded-lg bg-ink text-white transition hover:bg-brand"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </Container>

      <ProjectDialog project={detail} onClose={() => setDetailId(null)} />
    </section>
  )
}

function Neighbour({ project, side, onClick }) {
  return (
    <div
      aria-hidden="true"
      onClick={onClick}
      className={`absolute top-1/2 hidden h-[82%] w-[44%] -translate-y-1/2 cursor-pointer overflow-hidden rounded-3xl border border-line bg-white opacity-60 blur-[2px] grayscale-[0.4] transition hover:opacity-80 lg:block ${
        side === 'left' ? 'left-0' : 'right-0'
      }`}
    >
      <div className={`flex h-full ${side === 'left' ? '' : 'flex-row-reverse'}`}>
        <div className="w-1/2 p-7">
          <span className="inline-block rounded-full bg-brand-50 px-2 py-1 text-[9px] font-bold tracking-wider text-brand uppercase">
            {project.category}
          </span>
          <p className="mt-4 text-xl font-extrabold text-ink">{project.name}</p>
          <p className="mt-2 line-clamp-4 text-xs leading-relaxed">{project.summary}</p>
        </div>
        <div className="w-1/2 bg-slate-200/70" />
      </div>
      <div className="absolute inset-0 bg-slate-300/30" />
    </div>
  )
}

function ProjectDialog({ project, onClose }) {
  const { requestContact } = useContactPrefill()
  const p = project
  const shots = p ? [...p.images.desktop.map((src) => ({ src, kind: 'desktop' })), ...p.images.mobile.map((src) => ({ src, kind: 'mobile' }))] : []
  const empty = p && !p.problem && !p.built && !p.features.length && !p.stack.length

  return (
    <Dialog
      open={Boolean(p)}
      onClose={onClose}
      size="lg"
      title={p?.name}
      eyebrow={
        p && (
          <div className="flex flex-wrap gap-2">
            {p.draft && <Badge tone="draft">Draft</Badge>}
            {p.category && <Badge>{p.category}</Badge>}
            <Badge tone={statusTone(p.status)} dot>
              {p.status}
            </Badge>
          </div>
        )
      }
      footer={
        p && (
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            {p.url && (
              <Button href={p.url} variant="outline" icon={ExternalLink}>
                Visit live project
              </Button>
            )}
            <Button
              icon={ArrowRight}
              onClick={() => {
                const topic = p.name
                onClose()
                requestContact({ topic: 'Something similar to ' + topic })
              }}
            >
              Discuss a similar project
            </Button>
          </div>
        )
      }
    >
      {p && (
        <div className="space-y-8">
          <p className="text-[15px] leading-relaxed text-ink">{p.summary}</p>

          {empty && (
            <p className="rounded-xl border border-dashed border-line bg-surface p-4 text-sm">
              The full case study for this project — challenge, approach, features and stack — will appear here once
              the details are confirmed.
            </p>
          )}

          {(p.problem || p.built) && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {p.problem && <DetailBlock title="The challenge">{p.problem}</DetailBlock>}
              {p.built && <DetailBlock title="Our approach">{p.built}</DetailBlock>}
            </div>
          )}

          {p.features.length > 0 && (
            <div>
              <h3 className="text-sm font-bold tracking-[0.12em] text-muted uppercase">Key features</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] text-ink">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {p.stack.length > 0 && (
            <div>
              <h3 className="text-sm font-bold tracking-[0.12em] text-muted uppercase">Technology</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink/80">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-sm font-bold tracking-[0.12em] text-muted uppercase">Screenshots</h3>
            {shots.length ? (
              <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {shots.map((s, i) => (
                  <li
                    key={s.src}
                    className={`overflow-hidden rounded-xl border border-line bg-surface ${s.kind === 'desktop' ? 'col-span-2' : ''}`}
                  >
                    <a href={s.src} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={s.src}
                        alt={`${p.name} — ${s.kind} screen ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top"
                      />
                      <span className="sr-only"> (opens full size in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-4 aspect-[16/7] overflow-hidden rounded-xl border border-line">
                <ScreenshotPending />
              </div>
            )}
          </div>
        </div>
      )}
    </Dialog>
  )
}

function DetailBlock({ title, children }) {
  return (
    <div className="rounded-xl border border-line p-5">
      <h3 className="text-sm font-bold tracking-[0.12em] text-muted uppercase">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed">{children}</p>
    </div>
  )
}
