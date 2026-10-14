import { useEffect, useState } from 'react'

/**
 * Returns the id of the element (from `ids`) currently crossing the reading line,
 * a horizontal band at ~35–45% of the viewport height.
 */
export default function useActiveSection(ids, { rootMargin = '-35% 0px -55% 0px' } = {}) {
  const [active, setActive] = useState(null)
  const key = ids.join('|')

  useEffect(() => {
    // Document order, so callers can pass ids in any order.
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
    if (!elements.length || !('IntersectionObserver' in window)) return
    const visible = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting))
        // If two sections overlap the band, the lower one (the one being scrolled into) wins.
        const current = elements.findLast((el) => visible.get(el.id))?.id
        if (current) setActive(current)
        // Clear the highlight above the first tracked section (e.g. in the hero).
        else if (elements[0].getBoundingClientRect().top > window.innerHeight * 0.45) setActive(null)
      },
      { rootMargin },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, rootMargin])

  return active
}
