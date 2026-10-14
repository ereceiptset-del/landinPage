import Accent from './Accent.jsx'
import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
  dark = false,
  id,
  as: Tag = 'h2',
  className = '',
  size = 'lg',
}) {
  const center = align === 'center'
  const titleSize =
    size === 'xl'
      ? 'text-[2rem] leading-[1.1] sm:text-5xl lg:text-[3.25rem]'
      : 'text-[1.875rem] leading-[1.15] sm:text-4xl lg:text-[2.75rem]'
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${dark ? 'text-white/55' : ''}`}>{eyebrow}</p>}
      <Tag id={id} className={`font-extrabold ${titleSize} ${dark ? 'text-white' : 'text-ink'}`}>
        <Accent text={title} accentClass={dark ? 'text-brand-400' : 'text-brand'} />
      </Tag>
      {text && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-[17px] ${center ? 'mx-auto max-w-2xl' : 'max-w-xl'} ${
            dark ? 'text-white/65' : 'text-body'
          }`}
        >
          {text}
        </p>
      )}
    </Reveal>
  )
}
