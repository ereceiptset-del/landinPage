const tones = {
  brand: 'bg-brand-50 text-brand-600 ring-brand-100',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-200',
  slate: 'bg-slate-100 text-slate-600 ring-slate-200',
  draft: 'bg-rose-50 text-rose-700 ring-rose-200',
  dark: 'bg-white/5 text-white/80 ring-white/15',
}

export default function Badge({ tone = 'brand', dot = false, className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[0.08em] uppercase ring-1 ${tones[tone]} ${className}`}
    >
      {dot && <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}

export function statusTone(status = '') {
  const s = status.toLowerCase()
  if (s.startsWith('completed') || s === 'live') return 'green'
  if (s.startsWith('beta')) return 'amber'
  return 'brand'
}
