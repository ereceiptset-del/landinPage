import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { company, seo, contact } from './src/content/site.js'

// Builds <head> tags from site.js so SEO data lives in one place.
// Only verified facts are emitted: url/canonical need seo.domain, contact points need real values.
function seoHead() {
  return {
    name: 'ereceipt-seo-head',
    transformIndexHtml() {
      const domain = seo.domain.replace(/\/$/, '')
      const ogImage = domain ? `${domain}${seo.ogImage}` : seo.ogImage
      const tags = [
        { tag: 'title', children: seo.title, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'description', content: seo.description } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: company.name } },
        { tag: 'meta', attrs: { property: 'og:title', content: seo.title } },
        { tag: 'meta', attrs: { property: 'og:description', content: seo.description } },
        { tag: 'meta', attrs: { property: 'og:image', content: ogImage } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
      ]
      if (domain) {
        tags.push({ tag: 'link', attrs: { rel: 'canonical', href: `${domain}/` } })
        tags.push({ tag: 'meta', attrs: { property: 'og:url', content: `${domain}/` } })
      }

      const org = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.name,
        description: company.description,
        address: { '@type': 'PostalAddress', addressCountry: 'ET' },
      }
      if (domain) org.url = `${domain}/`
      if (domain && company.logo) org.logo = `${domain}${company.logo}`
      if (contact.email) org.email = contact.email
      if (contact.phone) org.telephone = contact.phone
      const sameAs = contact.socials.map((s) => s.href).filter(Boolean)
      if (sameAs.length) org.sameAs = sameAs
      // Escape "<" so JSON-LD can never close the script tag early.
      const json = JSON.stringify(org).replace(/</g, String.fromCharCode(92) + 'u003c')
      tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, children: json })

      // Vite escapes attribute values itself.
      return tags.map((t) => ({ injectTo: 'head', ...t }))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoHead()],
})
