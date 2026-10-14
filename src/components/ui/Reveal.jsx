import { motion, useReducedMotion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

/** Fades and slides content up once when it enters the viewport. */
export default function Reveal({ as = 'div', delay = 0, y = 24, className = '', children, ...props }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  if (reduce) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.6, ease, delay }}
      {...props}
    >
      {children}
    </Tag>
  )
}

/** Parent + child pair for staggered card grids (70ms between children). */
export function Stagger({ as = 'div', className = '', children, ...props }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ as = 'div', className = '', children, ...props }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
