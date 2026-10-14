const base =
  'inline-flex min-h-11 items-center justify-center gap-2 font-semibold transition-all duration-200 select-none disabled:cursor-not-allowed disabled:opacity-55'

const variants = {
  primary:
    'bg-brand text-white shadow-[0_8px_24px_-8px_rgb(0_133_58/0.6)] hover:bg-brand-600 hover:-translate-y-0.5 active:translate-y-0 disabled:hover:translate-y-0 disabled:hover:bg-brand',
  outline:
    'border-[1.5px] border-brand bg-white text-brand-600 hover:bg-brand-50 hover:-translate-y-0.5 active:translate-y-0',
  soft: 'border-[1.5px] border-brand/70 bg-brand-50 text-brand-600 hover:bg-brand-100',
  ghostDark: 'border-[1.5px] border-white/25 text-white hover:border-white/60 hover:bg-white/5',
  link: 'min-h-0 rounded-none px-0 py-0 text-brand-600 hover:text-brand-700',
}

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-2.5 text-[15px]',
  lg: 'px-7 py-3.5 text-base',
}

/** Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconLeft: IconLeft,
  children,
  ...props
}) {
  // A rounded-* class in `className` replaces the default pill shape.
  const radius = /(^|\s)rounded-/.test(className) ? '' : 'rounded-full'
  const cls = `${base} ${radius} ${variants[variant]} ${variant === 'link' ? '' : sizes[size]} ${className}`
  const content = (
    <>
      {IconLeft && <IconLeft aria-hidden="true" className="size-4 shrink-0" />}
      {children}
      {Icon && <Icon aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  )
  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={`group ${cls}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={`group ${cls}`} {...props}>
      {content}
    </button>
  )
}
