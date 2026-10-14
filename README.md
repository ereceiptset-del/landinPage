# E-receipt — marketing site

One-page marketing site for **E-receipt**, built with React + Vite (JavaScript), Tailwind CSS v4, Motion and Lucide icons.
There's no backend: all content comes from one file, `src/content/site.js`.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run images     # convert screenshots in src/assets/projects/originals/ to WebP
```

Node 18+ is required (tested on Node 22).

## Editing content

Everything visible on the page lives in **`src/content/site.js`**, except projects, which live in **`src/content/projects.js`** because they import screenshots. Components only read from these files.

- **Two-tone headings:** wrap the blue phrase in `**double asterisks**`, e.g. `'**Frequently asked** questions'`.
- **Service cards:** wrap the inline blue link phrase in `{curly braces}`.
- **Icons:** use Lucide icon names that are registered in `src/components/ui/icons.js`. To use a new icon, add it to that file first.
- **Technology logos:** use a [Simple Icons](https://simpleicons.org) slug that is registered in `src/components/ui/techIconRegistry.js`. For brands Simple Icons does not ship, use `mono` and `color` to show a monogram tile. Each category in `technologies.categories` becomes a tab.
- **Empty means hidden.** If you leave a value empty (`''` or `[]`), the matching UI isn't shown. This applies to testimonials, client logos, metrics, contact details, socials, legal links, the booking button, the domain, and the canonical and JSON-LD URL.

## Adding a project (Solutions or Projects)

1. Put the original screenshots in `src/assets/projects/originals/`, e.g. `ereceipt-desktop.png` and `ereceipt-mobile.png`.
2. Run `npm run images`. This writes compressed `.webp` files to `src/assets/projects/`.
3. Import the files at the top of `src/content/projects.js`:
   ```js
   import ereceiptDesktop from '../assets/projects/ereceipt-desktop.webp'
   import ereceiptMobile from '../assets/projects/ereceipt-mobile.webp'
   ```
4. Add or update the project entry:
   ```js
   {
     id: 'ereceipt',
     showAs: 'solution',           // 'solution' = own product row, 'project' = case-study carousel
     name: 'eReceipt',
     status: 'In progress',        // 'Completed' → "Request a demo"; anything else → "Ask about …"
     category: 'Digital Receipts',
     summary: 'One-line description.',
     problem: 'The challenge (2–3 sentences).',   // optional, shown in "View details"
     built: 'What was built (2–3 sentences).',    // optional
     features: ['Feature one', 'Feature two'],
     stack: ['React', 'Firebase'],               // empty → card shows "Highlights" instead
     url: 'https://…',                           // optional live link
     linkLabel: 'View on Google Play',           // optional button text for the link
     icon: { src: appIcon, width: 240, height: 240, alt: '…' },  // optional, for mobile-only apps
     images: {
       desktop: [{ src: ereceiptDesktop, width: 1366, height: 604, bg: '#ffffff', alt: '…' }],
       mobile:  [{ src: ereceiptMobile, width: 390, height: 844, alt: '…' }],
     },
   }
   ```
   `bg` is the colour shown below a wide screenshot inside the 16:10 laptop mockup. Match it to the bottom of the page in the screenshot.

Placeholder projects that don't have details yet (EIMS integration, Hotel BOS) live in `src/content/drafts.js`. They show with a pink "Draft" badge in `npm run dev` and are stripped from `npm run build`. If a section has no real projects, it and its nav link are hidden, and "Explore Our Work" points to the next available section.

## Contact form and booking

In `site.js` → `contact`:

- `formEndpoint`: any URL that accepts a JSON `POST` with `{ name, email, company, service, message }` and returns a 2xx status, for example a Formspree form URL (`https://formspree.io/f/xxxx`). While it's empty and `email` is set, the form opens the visitor's email app with the message pre-filled. If both are empty, the submit button is disabled with a notice. In neither case does it pretend a message was sent.
- `bookingUrl`: a Calendly or Cal.com link. When it's set, a "Book a call" button appears in the Contact section.
- `email`, `phone`, `location`, `socials`: these show in Contact and the Footer, and in the form's fallback message, only when they're filled in.

## SEO

`vite.config.js` reads `seo`, `company` and `contact` from `site.js` and injects the following into `<head>`: title, description, Open Graph and Twitter tags, and Organization JSON-LD.

- Set `seo.domain` (e.g. `https://example.com`) to enable the canonical URL, `og:url` and an absolute `og:image`.
- To regenerate `public/og-image.png`, run `node scripts/make-og-image.mjs`.

## Project structure

```
src/
  content/site.js          all copy and data
  lib/content.js           derived data (drafts filter, which sections are visible)
  components/ui/           Button, Card, Badge, Accordion, Dialog, Container, SectionHeading,
                           Reveal (motion), DeviceFrame (laptop/phone/browser mockups), …
  components/sections/     Header, Hero, LogoStrip, Services, Solutions, Portfolio, Metrics,
                           Technologies, WhyUs, Industries, Process, CtaBanner, Testimonials,
                           Faq, Contact, Footer
  hooks/                   useActiveSection (scroll-spy), useFocusTrap, contactPrefill
  assets/projects/         project screenshots (WebP)
scripts/                   optimize-images.mjs, make-og-image.mjs
```

## Still missing (to be supplied)

| Item | Where it goes | Current behaviour |
|---|---|---|
| Tech stacks, case-study text (challenge/approach), mobile and Adika in-app screenshots | `src/content/projects.js` | Stack hidden (card shows "Highlights"); Adika shows its app icon |
| Details for EIMS integration, Hotel BOS | `src/content/drafts.js` → `projects.js` | Dev-only drafts |
| Brand colour | `--color-brand*` in `src/index.css` | Reference blue `#2F6BFF` |
| Social links | `contact.socials` | Hidden (email, phone and address are set) |
| Form endpoint | `contact.formEndpoint` | Form validates, then opens the visitor's email app addressed to `contact.email` (it never claims the message was sent) |
| Booking link | `contact.bookingUrl` | No booking button |
| Approved metrics | `metrics.items` | Qualitative capability band instead of numbers |
| Testimonials and client logos | `testimonials.items`, `clientLogos` | Section hidden; capability marquee shown |
| Production domain | `seo.domain` | No canonical or `og:url` |
| Policies (code ownership, support, data) | `policies` | FAQ uses neutral, non-committal answers |
| Tech list and integrations confirmation | `technologies` | Draft list from the brief (Telebirr, MoR EIMS, Ethio Telecom included) |
| Legal pages | `legalLinks` | Not linked |
