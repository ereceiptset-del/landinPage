import { projects, nav, contact, testimonials } from '../content/site.js'
import * as drafts from '../content/drafts.js'

// Draft placeholders show while developing (so layouts can be reviewed). In a build this condition is
// statically false, so drafts.js is tree-shaken out and draft names never ship.
const draftProjects = import.meta.env.DEV ? drafts.draftProjects : []

const visible = [...projects.filter((p) => !p.draft), ...draftProjects]

export const solutions = visible.filter((p) => p.showAs === 'solution')
export const caseStudies = visible.filter((p) => p.showAs === 'project')

// Which optional sections have content to show.
export const sectionVisible = {
  solutions: solutions.length > 0,
  projects: caseStudies.length > 0,
  testimonials: testimonials.items.length > 0,
}

export const visibleNav = nav.filter((item) => sectionVisible[item.id] !== false)

export const hasDirectContact = Boolean(contact.email || contact.phone)

export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`
