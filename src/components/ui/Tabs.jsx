import { useRef } from 'react'

/**
 * Accessible tab list (WAI-ARIA tabs pattern, automatic activation).
 * Arrow keys / Home / End move between tabs; the parent renders the panel with
 * role="tabpanel", id={panelId(tab)} and aria-labelledby={tabId(tab)}.
 */
export default function Tabs({ tabs, value, onChange, label, idBase, className = '' }) {
  const refs = useRef([])

  const onKeyDown = (e, i) => {
    const last = tabs.length - 1
    const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key]
    if (next === undefined) return
    e.preventDefault()
    onChange(tabs[next].id)
    refs.current[next]?.focus()
  }

  return (
    <div role="tablist" aria-label={label} className={`no-scrollbar flex gap-2 overflow-x-auto ${className}`}>
      {tabs.map((t, i) => {
        const selected = t.id === value
        return (
          <button
            key={t.id}
            ref={(el) => (refs.current[i] = el)}
            id={`${idBase}-tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls={`${idBase}-panel-${t.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-semibold whitespace-nowrap transition-colors ${
              selected
                ? 'border-ink bg-ink text-white'
                : 'border-line bg-white text-ink/75 hover:border-ink/25 hover:text-ink'
            }`}
          >
            {t.label}
            {t.count != null && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none font-bold ${
                  selected ? 'bg-white/15 text-white' : 'bg-surface text-muted'
                }`}
              >
                {t.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
