import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'
import { company, services, contact, legalLinks } from '../../content/site.js'
import { solutions, visibleNav, telHref } from '../../lib/content.js'
import Container from '../ui/Container.jsx'
import Wordmark from '../ui/Wordmark.jsx'
import { lazy, Suspense } from 'react'

// Lazy, so the icon library stays out of the main bundle (and loads only when socials exist).
const SocialIcon = lazy(() => import('../ui/SocialIcon.jsx'))

export default function Footer() {
  const year = new Date().getFullYear()
  const hasContact = contact.email || contact.phone || contact.location
  const companyLinks = [...visibleNav, { id: 'faq', label: 'FAQ' }, { id: 'contact', label: 'Contact' }]

  const columns = [
    { title: 'Company', links: companyLinks.map((n) => ({ label: n.label, href: `#${n.id}` })) },
    { title: 'Services', links: services.items.map((s) => ({ label: s.title, href: '#services' })) },
    solutions.length > 0 && {
      title: 'Solutions',
      links: solutions.map((p) => ({ label: p.name, href: `#solution-${p.id}` })),
    },
  ].filter(Boolean)

  const backToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.querySelector('header a')?.focus({ preventScroll: true })
  }

  return (
    <footer className="on-dark bg-coal text-white/60" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="border-t border-white/10 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          <div className="max-w-xs">
            <Wordmark dark />
            <p className="mt-5 text-sm leading-relaxed">{company.description}</p>
            {contact.socials.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {contact.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white"
                    >
                      <Suspense fallback={<span className="size-4" />}>
                        <SocialIcon icon={s.icon} />
                      </Suspense>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-bold tracking-normal text-white">{col.title}</h3>
              <ul className="mt-4 lg:space-y-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="inline-flex min-h-11 items-center text-sm transition hover:text-white lg:min-h-9">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {hasContact && (
            <div>
              <h3 className="text-sm font-bold tracking-normal text-white">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {contact.email && (
                  <li>
                    <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 hover:text-white">
                      <FooterIcon icon={Mail} />
                      {contact.email}
                    </a>
                  </li>
                )}
                {contact.phone && (
                  <li>
                    <a href={telHref(contact.phone)} className="inline-flex items-center gap-3 hover:text-white">
                      <FooterIcon icon={Phone} />
                      {contact.phone}
                    </a>
                  </li>
                )}
                {contact.location && (
                  <li className="flex items-start gap-3">
                    <FooterIcon icon={MapPin} />
                    <span className="pt-1.5">{contact.location}</span>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center">
          <p>
            © {year} {company.legalName || company.name}. All rights reserved.
          </p>
          {legalLinks.length > 0 && (
            <ul className="flex flex-wrap gap-5 uppercase tracking-[0.12em]">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={backToTop}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </Container>
    </footer>
  )
}

function FooterIcon({ icon: Icon }) {
  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
      <Icon className="size-3.5 text-brand-200" aria-hidden="true" />
    </span>
  )
}
