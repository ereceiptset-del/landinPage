import { useEffect, useState } from 'react'

// The registry (~50 brand marks) is a separate chunk so it never delays the first paint.
let registry = null
let loading = null
function loadRegistry() {
  if (!loading) loading = import('./techIconRegistry.js').then((m) => (registry = m.icons))
  return loading
}

export function useTechIcons() {
  const [icons, setIcons] = useState(registry)
  useEffect(() => {
    if (registry) return
    let alive = true
    loadRegistry().then((r) => alive && setIcons(r))
    return () => {
      alive = false
    }
  }, [])
  return icons
}

// Near-black brand colours (e.g. Express, Vercel) are swapped for the ink colour so they read on white.
function tint(hex) {
  const n = parseInt(hex, 16)
  const lum = 0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)
  return lum < 40 ? '#0F1F18' : `#${hex}`
}

/**
 * Technology mark: a Simple Icons logo (by `slug`), or a coloured monogram tile (`mono` + `color`)
 * for brands Simple Icons doesn't ship. While the registry loads, a neutral placeholder holds the space.
 */
export default function TechIcon({ slug, mono, color, icons, className = 'size-10' }) {
  if (mono) {
    const long = mono.length > 2
    return (
      <span
        aria-hidden="true"
        className={`inline-flex items-center justify-center rounded-xl font-extrabold tracking-tight text-white shadow-sm ${className} ${
          long ? 'text-[11px]' : 'text-base'
        }`}
        style={{ background: color || '#00853A' }}
      >
        {mono}
      </span>
    )
  }
  const icon = slug && icons ? icons[slug] : null
  if (!icon) return <span aria-hidden="true" className={`inline-block rounded-xl bg-surface ${className}`} />
  return (
    <svg viewBox="0 0 24 24" className={className} fill={tint(icon.hex)} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}
