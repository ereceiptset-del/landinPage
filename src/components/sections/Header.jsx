import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { company, primaryCta } from '../../content/site.js'
import { visibleNav } from '../../lib/content.js'
import useActiveSection from '../../hooks/useActiveSection.js'
import useFocusTrap from '../../hooks/useFocusTrap.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Wordmark from '../ui/Wordmark.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Non-nav sections are tracked too, so the highlight clears instead of sticking to the previous item.
  const active = useActiveSection([...visibleNav.map((n) => n.id), 'metrics', 'why-us', 'faq', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        scrolled ? 'border-line shadow-[0_4px_20px_-8px_rgb(11_20_55/0.12)]' : 'border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="shrink-0 rounded-lg py-1" aria-label={`${company.name} — back to top`}>
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {visibleNav.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`group relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                      isActive ? 'text-brand-600' : 'text-ink/80 hover:text-ink'
                    }`}
                  >
                    {item.label}
                    <Dots active={isActive} />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button href={primaryCta.href} variant="soft" size="sm" className="whitespace-nowrap">
              {primaryCta.label}
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink transition hover:bg-surface xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <MobileDrawer open={open} onClose={() => setOpen(false)} active={active} />
    </header>
  )
}

/** The 2×2 dot glyph next to each nav label in the reference. */
function Dots({ active }) {
  return (
    <span aria-hidden="true" className="grid grid-cols-2 gap-[2px]">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`size-[3px] rounded-full transition-colors ${
            active ? 'bg-brand' : 'bg-slate-300 group-hover:bg-slate-400'
          }`}
        />
      ))}
    </span>
  )
}

function MobileDrawer({ open, onClose, active }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  useFocusTrap(ref, open, onClose)

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <motion.div
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={ref}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col bg-white shadow-2xl"
            initial={reduce ? { opacity: 0 } : { x: '100%' }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: '100%' }}
            transition={{ type: 'tween', duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
              <Wordmark />
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-surface"
                aria-label="Close menu"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {visibleNav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={onClose}
                      aria-current={active === item.id ? 'location' : undefined}
                      className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-[17px] font-semibold ${
                        active === item.id ? 'bg-brand-50 text-brand-600' : 'text-ink hover:bg-surface'
                      }`}
                    >
                      {item.label}
                      <ArrowRight className="size-4 opacity-40" aria-hidden="true" />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#faq"
                    onClick={onClose}
                    className="flex min-h-12 items-center justify-between rounded-xl px-4 text-[17px] font-semibold text-ink hover:bg-surface"
                  >
                    FAQ
                    <ArrowRight className="size-4 opacity-40" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="border-t border-line p-5">
              <Button href={primaryCta.href} onClick={onClose} className="w-full" size="lg" icon={ArrowRight}>
                {primaryCta.label}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
