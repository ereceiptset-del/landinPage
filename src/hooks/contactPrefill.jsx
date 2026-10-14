import { createContext, useCallback, useContext, useState } from 'react'

const ContactPrefillContext = createContext(null)

/**
 * Lets any section ("Request a demo", "Discuss this service") pre-fill the contact form
 * and scroll to it.
 */
export function ContactPrefillProvider({ children }) {
  const [prefill, setPrefill] = useState(null)

  const requestContact = useCallback(({ topic = '', message = '' } = {}) => {
    setPrefill({ topic, message, at: Date.now() })
    const target = document.getElementById('contact')
    if (target) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }
  }, [])

  return (
    <ContactPrefillContext.Provider value={{ prefill, requestContact }}>{children}</ContactPrefillContext.Provider>
  )
}

export function useContactPrefill() {
  return useContext(ContactPrefillContext)
}
