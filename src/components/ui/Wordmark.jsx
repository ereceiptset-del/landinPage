import { company } from '../../content/site.js'

/** Text wordmark (used until a logo file is supplied via company.logo). */
export default function Wordmark({ dark = false, className = '' }) {
  if (company.logo) {
    return <img src={company.logo} alt={company.name} className={`h-8 w-auto ${className}`} width="140" height="32" />
  }
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 64 64" className="size-8 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#2F6BFF" />
        <path d="M20 14h24a2 2 0 0 1 2 2v34l-5-3-4 3-5-3-5 3-4-3-5 3V16a2 2 0 0 1 2-2Z" fill="#fff" />
        <path d="M26 25h12M26 32h12M26 39h7" stroke="#2F6BFF" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[19px] font-extrabold tracking-[-0.03em] ${dark ? 'text-white' : 'text-ink'}`}>
          {company.name}
        </span>
        <span className={`mt-1 text-[8.5px] font-semibold tracking-[0.28em] uppercase ${dark ? 'text-white/50' : 'text-muted'}`}>
          Software Solutions
        </span>
      </span>
    </span>
  )
}
