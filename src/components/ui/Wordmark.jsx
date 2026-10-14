import { company } from '../../content/site.js'

/** Logo mark (company.logo, served from /public) + text wordmark. */
export default function Wordmark({ dark = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={company.logo}
        alt=""
        width="36"
        height="36"
        className={`size-9 shrink-0 rounded-[10px] ${dark ? '' : 'ring-1 ring-line'}`}
      />
      <span className="flex flex-col leading-none">
        <span className={`text-[19px] font-extrabold tracking-[-0.03em] ${dark ? 'text-white' : 'text-ink'}`}>
          {company.name}
        </span>
        <span className={`mt-1 text-[8.5px] font-semibold tracking-[0.28em] uppercase ${dark ? 'text-white/50' : 'text-muted'}`}>
          Software Technology
        </span>
      </span>
    </span>
  )
}
