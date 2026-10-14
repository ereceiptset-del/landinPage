/**
 * Renders a two-tone heading string: '**Blue part** navy part'.
 * `accentClass` lets dark sections keep the same blue.
 */
export default function Accent({ text, accentClass = 'text-brand' }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
  return parts.map((part, i) =>
    part.startsWith('**') ? (
      <span key={i} className={accentClass}>
        {part.slice(2, -2)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

/**
 * Renders body copy where `{phrase}` becomes an inline blue link (used in service cards).
 */
export function InlineLink({ text, onClick, href }) {
  const parts = String(text).split(/(\{[^}]+\})/g).filter(Boolean)
  return parts.map((part, i) => {
    if (!part.startsWith('{')) return <span key={i}>{part}</span>
    const label = part.slice(1, -1)
    const cls = 'font-semibold text-brand-600 underline-offset-4 hover:underline'
    // An <a> (not <button>) so the phrase wraps naturally inside the sentence like the reference.
    return onClick ? (
      <a
        key={i}
        href={href || '#'}
        aria-haspopup="dialog"
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}
        className={cls}
      >
        {label}
      </a>
    ) : (
      <a key={i} href={href} className={cls}>
        {label}
      </a>
    )
  })
}
