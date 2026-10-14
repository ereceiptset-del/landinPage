import { useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import useFocusTrap from '../../hooks/useFocusTrap.js'

/**
 * Accessible modal dialog: role="dialog", aria-modal, labelled by its title,
 * focus trapped, Esc / backdrop / close button close it, focus returns to the trigger.
 */
export default function Dialog({ open, onClose, title, eyebrow, size = 'md', children, footer }) {
  return createPortal(
    <AnimatePresence>
      {open && (
        <DialogPanel onClose={onClose} title={title} eyebrow={eyebrow} size={size} footer={footer}>
          {children}
        </DialogPanel>
      )}
    </AnimatePresence>,
    document.body,
  )
}

function DialogPanel({ onClose, title, eyebrow, size, footer, children }) {
  const ref = useRef(null)
  const titleId = useId()
  const reduce = useReducedMotion()
  useFocusTrap(ref, true, onClose)

  const widths = { md: 'max-w-xl', lg: 'max-w-3xl', xl: 'max-w-5xl' }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
      <motion.div
        className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative flex max-h-[92dvh] w-full ${widths[size]} flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl outline-none sm:rounded-3xl`}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div>
            {eyebrow && <div className="mb-2">{eyebrow}</div>}
            <h2 id={titleId} className="text-xl font-bold sm:text-2xl">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 inline-flex size-11 shrink-0 items-center justify-center rounded-full text-body transition hover:bg-surface hover:text-ink"
            aria-label="Close dialog"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">{children}</div>
        {footer && <div className="border-t border-line bg-surface/60 px-6 py-4 sm:px-8">{footer}</div>}
      </motion.div>
    </div>
  )
}
