import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Plus } from 'lucide-react'

/** One-open-at-a-time accordion matching the reference FAQ rows. */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)
  const baseId = useId()
  const reduce = useReducedMotion()

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i
        const buttonId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div
            key={item.q}
            className={`rounded-xl border bg-white transition-colors duration-200 ${
              isOpen ? 'border-brand/60 shadow-[0_6px_24px_-12px_rgb(47_107_255/0.35)]' : 'border-line hover:border-brand-200'
            }`}
          >
            <h3 className="m-0 text-base">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left sm:px-6"
              >
                <span
                  className={`text-[15px] font-semibold tracking-normal transition-colors sm:text-base ${
                    isOpen ? 'text-brand-600' : 'text-ink'
                  }`}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen ? 'rotate-45 border-brand bg-brand text-white' : 'border-slate-300 text-slate-500'
                  }`}
                >
                  <Plus className="size-4" strokeWidth={2} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-body sm:px-6">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
