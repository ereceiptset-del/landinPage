export default function Card({ as: Tag = 'div', className = '', radius = 'rounded-2xl', hover = true, children, ...props }) {
  return (
    <Tag
      className={`${radius} border border-line bg-white shadow-card ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lift' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

/** Small rounded tinted square holding an icon, as on the reference cards. */
export function IconTile({ icon: Icon, className = '', tone = 'light', size = 'size-11 rounded-xl' }) {
  const tones = {
    light: 'bg-brand-50 text-brand ring-1 ring-brand-100',
    dark: 'bg-brand/10 text-[#8fb0ff] ring-1 ring-brand/30',
  }
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${size} ${tones[tone]} ${className}`}>
      {Icon && <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />}
    </span>
  )
}
