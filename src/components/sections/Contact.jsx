import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { AlertCircle, ArrowRight, CalendarDays, CheckCircle2, ChevronDown, Info, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { contact, services } from '../../content/site.js'
import { solutions, hasDirectContact, telHref } from '../../lib/content.js'
import { useContactPrefill } from '../../hooks/contactPrefill.jsx'
import Container from '../ui/Container.jsx'
import Accent from '../ui/Accent.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const empty = { name: '', email: '', company: '', service: '', message: '', website: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address, like name@company.com.'
  if (!v.service) e.service = 'Please choose what you need help with.'
  if (v.message.trim().length < 20) e.message = 'Please tell us a little more — at least 20 characters.'
  return e
}

export default function Contact() {
  const configured = Boolean(contact.formEndpoint)
  // Without an endpoint, a configured email still gives a real path: the form opens the visitor's email app.
  const mailFallback = !configured && Boolean(contact.email)
  const canSubmit = configured || mailFallback
  const { prefill } = useContactPrefill()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [extraTopic, setExtraTopic] = useState('')
  const inFlight = useRef(false)
  const nameRef = useRef(null)
  const formId = useId()

  const options = useMemo(() => {
    const list = [...services.items.map((s) => s.title), ...solutions.map((p) => p.name), 'Something else']
    if (extraTopic && !list.includes(extraTopic)) list.unshift(extraTopic)
    return list
  }, [extraTopic])

  // "Request a demo" / "Discuss this service" pre-fill the form.
  useEffect(() => {
    if (!prefill) return
    if (prefill.topic) setExtraTopic(prefill.topic)
    setValues((v) => ({
      ...v,
      service: prefill.topic || v.service,
      message: prefill.message && !v.message.trim() ? prefill.message : v.message,
    }))
    setStatus((s) => (s === 'success' ? 'idle' : s))
    const t = window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 650)
    return () => window.clearTimeout(t)
  }, [prefill])

  const update = (field) => (e) => {
    const value = e.target.value
    setValues((v) => {
      const next = { ...v, [field]: value }
      if (errors[field]) setErrors(validate(next))
      return next
    })
  }

  const onBlur = (field) => () => {
    const fieldErrors = validate(values)
    if (values[field] !== '' || errors[field]) setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit || inFlight.current) return
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = ['name', 'email', 'service', 'message'].find((f) => found[f])
      document.getElementById(`${formId}-${first}`)?.focus()
      return
    }
    if (mailFallback) {
      const subject = `Project enquiry: ${values.service}`
      const details = [
        `Name: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        values.company.trim() ? `Company: ${values.company.trim()}` : null,
      ].filter(Boolean)
      const body = [values.message.trim(), '', ...details].join(String.fromCharCode(10))
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }
    if (values.website) {
      // Honeypot filled → silently drop (bots).
      setStatus('success')
      return
    }
    inFlight.current = true
    setStatus('submitting')
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          service: values.service,
          message: values.message.trim(),
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setValues(empty)
      setErrors({})
    } catch {
      setStatus('error')
    } finally {
      inFlight.current = false
    }
  }

  const field = (name) => ({
    id: `${formId}-${name}`,
    name,
    value: values[name],
    onChange: update(name),
    onBlur: onBlur(name),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${formId}-${name}-error` : undefined,
    disabled: status === 'submitting',
  })

  const inputCls = (name) =>
    `mt-2 block w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-white/30 transition outline-none focus:bg-white/[0.07] focus:ring-2 disabled:opacity-60 ${
      errors[name] ? 'border-rose-400/70 focus:ring-rose-400/40' : 'border-white/12 focus:border-brand focus:ring-brand/40'
    }`

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-dark bg-coal py-16 text-white/65 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal className="lg:pt-6">
          <h2 id="contact-title" className="text-[2.2rem] leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-[3.25rem]">
            <Accent text={contact.title} />
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed sm:text-[17px]">{contact.text}</p>

          {(hasDirectContact || contact.location) && (
            <ul className="mt-10 space-y-4 text-[15px]">
              {contact.email && (
                <ContactLine icon={Mail} href={`mailto:${contact.email}`}>
                  {contact.email}
                </ContactLine>
              )}
              {contact.phone && (
                <ContactLine icon={Phone} href={telHref(contact.phone)}>
                  {contact.phone}
                </ContactLine>
              )}
              {contact.location && <ContactLine icon={MapPin}>{contact.location}</ContactLine>}
            </ul>
          )}

          {contact.bookingUrl && (
            <Button href={contact.bookingUrl} variant="ghostDark" iconLeft={CalendarDays} className="mt-10">
              Book a call
            </Button>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-white/10 bg-[#0d121d] p-6 shadow-[0_30px_80px_-40px_rgb(47_107_255/0.45)] sm:p-9">
            <h3 className="text-xl font-bold text-white">Tell us what you're working on.</h3>

            {!configured && !mailFallback && (
              <div role="note" className="mt-5 flex gap-3 rounded-xl border border-amber-300/25 bg-amber-300/[0.07] p-4 text-sm text-amber-100/90">
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Online submissions aren't configured yet.</p>
                  <p className="mt-1 text-amber-100/70">
                    {hasDirectContact ? (
                      <>
                        Please reach us directly
                        {contact.email && (
                          <>
                            {' '}at{' '}
                            <a className="font-semibold underline" href={`mailto:${contact.email}`}>
                              {contact.email}
                            </a>
                          </>
                        )}
                        {contact.phone && (
                          <>
                            {contact.email ? ' or ' : ' on '}
                            <a className="font-semibold underline" href={telHref(contact.phone)}>
                              {contact.phone}
                            </a>
                          </>
                        )}
                        .
                      </>
                    ) : (
                      'This form cannot send messages yet. Direct contact details will be added here soon.'
                    )}
                  </p>
                </div>
              </div>
            )}

            <form noValidate onSubmit={onSubmit} className="mt-6 space-y-5" aria-describedby={`${formId}-note`}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" required id={`${formId}-name`} error={errors.name}>
                  <input ref={nameRef} type="text" autoComplete="name" required className={inputCls('name')} {...field('name')} />
                </Field>
                <Field label="Email" required id={`${formId}-email`} error={errors.email}>
                  <input type="email" autoComplete="email" inputMode="email" required className={inputCls('email')} {...field('email')} />
                </Field>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Company" hint="optional" id={`${formId}-company`}>
                  <input type="text" autoComplete="organization" className={inputCls('company')} {...field('company')} />
                </Field>
                <Field label="What do you need?" required id={`${formId}-service`} error={errors.service}>
                  <div className="relative">
                    <select required className={`${inputCls('service')} appearance-none pr-10`} {...field('service')}>
                      <option value="" disabled className="bg-[#0d121d]">
                        Choose one…
                      </option>
                      {options.map((o) => (
                        <option key={o} value={o} className="bg-[#0d121d]">
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/2 right-3.5 mt-1 size-4 -translate-y-1/2 text-white/50"
                    />
                  </div>
                </Field>
              </div>
              <Field label="Project details" required id={`${formId}-message`} error={errors.message}>
                <textarea
                  rows={5}
                  required
                  placeholder="What are you building, and where can we help?"
                  className={`${inputCls('message')} resize-y`}
                  {...field('message')}
                />
              </Field>

              {/* Honeypot — hidden from people, tempting for bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Website
                  <input type="text" tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={update('website')} />
                </label>
              </div>

              <p id={`${formId}-note`} className="text-xs leading-relaxed text-white/45">
                {contact.dataNote}
              </p>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!canSubmit || status === 'submitting'}
                icon={canSubmit && status !== 'submitting' ? ArrowRight : undefined}
                iconLeft={status === 'submitting' ? Spinner : undefined}
              >
                {!canSubmit
                  ? 'Online submissions not available yet'
                  : mailFallback
                    ? 'Continue in your email app'
                    : status === 'submitting'
                      ? 'Sending…'
                      : 'Send message'}
              </Button>
              {mailFallback && (
                <p className="-mt-2 text-center text-xs text-white/45">
                  Opens your email app with this message addressed to {contact.email}.
                </p>
              )}

              <div aria-live="polite" role="status" className="min-h-0">
                {status === 'mailto' && (
                  <p className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.05] p-4 text-sm text-white/80">
                    <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                      Your email app should open with the message ready — press send there. If nothing opened, email us at{' '}
                      <a className="font-semibold underline" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>
                      .
                    </span>
                  </p>
                )}
                {status === 'success' && (
                  <p className="flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.08] p-4 text-sm text-emerald-100">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    Thanks — your message was sent. We'll reply to the email address you provided.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-400/[0.08] p-4 text-sm text-rose-100">
                    <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                      Sorry — your message couldn't be sent. Please try again
                      {contact.email ? (
                        <>
                          {' '}or email{' '}
                          <a className="font-semibold underline" href={`mailto:${contact.email}`}>
                            {contact.email}
                          </a>
                        </>
                      ) : null}
                      .
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function Spinner(props) {
  return <Loader2 {...props} className={`${props.className} animate-spin`} />
}

function Field({ label, id, required, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-white/85">
        {label}
        {required && <span className="ml-0.5 text-[#8fb0ff]" aria-hidden="true">*</span>}
        {hint && <span className="ml-1.5 text-xs font-normal text-white/40">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[13px] text-rose-300">
          <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

function ContactLine({ icon: Icon, href, children }) {
  const inner = (
    <>
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
        <Icon className="size-4 text-[#8fb0ff]" aria-hidden="true" />
      </span>
      <span>{children}</span>
    </>
  )
  return (
    <li>
      {href ? (
        <a href={href} className="inline-flex items-center gap-4 text-white/80 hover:text-white">
          {inner}
        </a>
      ) : (
        <span className="inline-flex items-center gap-4 text-white/80">{inner}</span>
      )}
    </li>
  )
}
