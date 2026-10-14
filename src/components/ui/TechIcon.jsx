import {
  siReact,
  siVite,
  siTailwindcss,
  siJavascript,
  siNodedotjs,
  siExpress,
  siGooglecloud,
  siFlutter,
  siFirebase,
  siGithubactions,
} from 'simple-icons'

// Registry of brand marks by Simple Icons slug. Only imported icons end up in the bundle.
// To add one: import `si<Slug>` above and add it here, then use the slug in site.js.
const icons = {
  react: siReact,
  vite: siVite,
  tailwindcss: siTailwindcss,
  javascript: siJavascript,
  nodedotjs: siNodedotjs,
  express: siExpress,
  googlecloud: siGooglecloud,
  flutter: siFlutter,
  firebase: siFirebase,
  githubactions: siGithubactions,
}

// Near-black brand colours (e.g. Express) are swapped for the ink colour so they read on the tile.
function tint(hex) {
  const n = parseInt(hex, 16)
  const lum = 0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)
  return lum < 40 ? '#0B1437' : `#${hex}`
}

/** Small rounded tile with the technology's mark, or a monogram fallback, plus its name. */
export default function TechIcon({ name, slug }) {
  const icon = slug ? icons[slug] : null
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-line bg-surface transition-colors group-hover:border-brand-100">
        {icon ? (
          <svg viewBox="0 0 24 24" className="size-[22px]" fill={tint(icon.hex)} aria-hidden="true">
            <path d={icon.path} />
          </svg>
        ) : (
          <span aria-hidden="true" className="text-[13px] font-extrabold tracking-tight text-brand">
            {initials}
          </span>
        )}
      </span>
      <span className="text-[10.5px] leading-tight font-bold tracking-[0.06em] text-ink/75 uppercase">{name}</span>
    </div>
  )
}
