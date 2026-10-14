/**
 * E-receipt — all site content lives here. Components only read from this file.
 *
 * Rules for editing:
 *  - Leave a value empty ('' / [] / null) when the fact is not confirmed. The UI hides empty slots.
 *  - Headings use **double asterisks** to mark the blue accent phrase: '**Frequently asked** questions'.
 *  - Icons are Lucide icon names registered in src/components/ui/icons.js.
 *  - Projects live in ./projects.js; draft placeholders in ./drafts.js (shown only in `npm run dev`).
 */

export const company = {
  name: 'E-receipt',
  // Registered legal name (Addis Ababa City Administration Trade Bureau business licence).
  legalName: 'E Receipt Software Technology PLC',
  // Short line used in the footer and meta description.
  description:
    'Software and digital solutions for businesses in Ethiopia — web and mobile apps, digital receipts, e-invoicing and the integrations that connect them.',
  country: 'Ethiopia',
  // Logo: set to an imported asset path (e.g. '/logo.svg' in /public) to replace the text wordmark.
  logo: null,
  foundedYear: null,
}

export const seo = {
  title: 'E-receipt — Software & Digital Solutions in Ethiopia',
  description:
    'E-receipt builds web apps, mobile apps, digital receipt and e-invoicing systems, and payment integrations for businesses in Ethiopia.',
  // Production domain, e.g. 'https://ereceipt.et'. Enables canonical URL, og:url and JSON-LD url.
  domain: '',
  // Path in /public for the Open Graph image (1200×630).
  ogImage: '/og-image.png',
}

export const nav = [
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'projects', label: 'Projects' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'industries', label: 'Industries' },
  { id: 'process', label: 'Process' },
]

export const primaryCta = { label: 'Discuss Your Project', href: '#contact' }

export const hero = {
  eyebrow: 'Software & Digital Solutions',
  title: '**Smart Software.** Simpler Business.',
  text: 'We design and build web apps, mobile apps and integrations for businesses in Ethiopia — from digital receipts and e-invoicing to payments and automation.',
  primary: { label: 'Discuss Your Project', href: '#contact' },
  secondary: { label: 'Explore Our Work', href: '#projects' },
}

// Real client logos only, with permission: { name, src, href? }. Empty → capability marquee.
export const clientLogos = []

export const capabilityStrip = {
  heading: 'What we build',
  items: ['Web Apps', 'Mobile Apps', 'Payments Integration', 'E-Invoicing', 'Digital Receipts', 'Cloud', 'Automation', 'APIs'],
}

export const services = {
  eyebrow: 'Services',
  title: 'How we **work with you**',
  text: 'Most projects fall into one of these six shapes. Pick the one closest to what you need, or talk to us if you are not sure — many engagements end up being a blend.',
  items: [
    {
      id: 'custom-software',
      icon: 'Code2',
      title: 'Custom Software',
      text: 'Software shaped around how your business actually runs. We turn your workflows into {secure, maintainable systems}.',
      details: {
        intro: 'When off-the-shelf tools do not fit, we design and build software around your processes instead of the other way round.',
        points: [
          'Requirements workshops to map your current workflow',
          'Role-based internal tools, dashboards and back-office systems',
          'Clean, documented code your team can maintain',
          'Phased delivery so you can use early versions sooner',
        ],
      },
    },
    {
      id: 'web-apps',
      icon: 'MonitorSmartphone',
      title: 'Web Applications',
      text: 'Fast, responsive {web applications} and portals that work on every screen size your customers use.',
      details: {
        intro: 'Customer portals, dashboards and marketing sites built with modern, well-supported tooling.',
        points: [
          'Responsive layouts that work from small phones to desktops',
          'Accessible, keyboard-friendly interfaces',
          'Admin panels for managing your own content and data',
          'Performance budgets so pages stay quick on slower connections',
        ],
      },
    },
    {
      id: 'mobile-apps',
      icon: 'Smartphone',
      title: 'Mobile Apps',
      text: 'Cross-platform {mobile apps} for Android and iOS from a single codebase, built for real-world networks.',
      details: {
        intro: 'One Flutter codebase for Android and iOS keeps cost and maintenance down without giving up a native feel.',
        points: [
          'Android and iOS from one codebase',
          'Designs that handle slow or intermittent connectivity',
          'Push notifications, payments and device features',
          'Store submission support',
        ],
      },
    },
    {
      id: 'receipts-einvoicing',
      icon: 'ReceiptText',
      title: 'Digital Receipts & E-Invoicing',
      text: 'Replace paper with {digital receipts and e-invoices} that are easier to issue, verify and keep on record.',
      details: {
        intro: 'Digital receipt and invoicing systems, including integration with national e-invoicing platforms where your business needs it.',
        points: [
          'Issue, send and store receipts digitally',
          'Integration with e-invoicing systems such as MoR EIMS',
          'Receipt verification flows for customers and staff',
          'Exports and reports for your accounting team',
        ],
      },
    },
    {
      id: 'api-payments',
      icon: 'Plug',
      title: 'API & Payment Integration',
      text: 'Connect your product to the services around it — including local {payment providers such as Telebirr}.',
      details: {
        intro: 'We connect your systems to payment providers, government platforms and third-party services through reliable, well-tested APIs.',
        points: [
          'Payment integrations, including Telebirr',
          'REST APIs for your own web and mobile clients',
          'Webhooks and background jobs for reliable processing',
          'Logging so failed calls are visible and recoverable',
        ],
      },
    },
    {
      id: 'cloud-automation',
      icon: 'CloudCog',
      title: 'Cloud & Automation',
      text: 'Move manual work into {automated, cloud-hosted workflows} with deployments your team can trust.',
      details: {
        intro: 'Cloud hosting, serverless functions and CI/CD pipelines that keep releases routine instead of risky.',
        points: [
          'Hosting on Firebase and Google Cloud',
          'Serverless functions for scheduled and event-driven tasks',
          'Automated build and deploy pipelines with GitHub Actions',
          'Automation of repetitive back-office steps',
        ],
      },
    },
  ],
}

// Projects (Solutions + Projects carousel) live in ./projects.js because they import screenshots.

export const solutionsSection = {
  eyebrow: 'In development',
  title: '**Products** we are building',
  text: 'What our team is working on right now. Ask us about any of them.',
}

export const projectsSection = {
  eyebrow: 'Projects',
  title: 'Selected **work**',
  text: 'Products we have shipped — what each one does and the features behind it.',
}

/**
 * Metrics: real, approved numbers only — { value: 12, suffix: '+', label: '...' }.
 * While empty, the band shows `capabilities` instead (no numbers).
 */
export const metrics = {
  title: 'E-receipt **by the numbers**',
  text: '',
  items: [],
  capabilitiesTitle: 'What you get **with E-receipt**',
  capabilitiesText: 'One team from first conversation to production.',
  capabilities: [
    { title: 'End-to-end', text: 'Discovery, design, build and launch' },
    { title: 'Web & mobile', text: 'React on the web, Flutter on phones' },
    { title: 'Integration-ready', text: 'Payments, e-invoicing and APIs' },
    { title: 'Built for Ethiopia', text: 'Local networks, payments and rules' },
  ],
}

/**
 * Technologies — list only what the team actually uses.
 * `slug` is a Simple Icons slug (https://simpleicons.org); leave it empty to show a monogram tile.
 * Categories with no items are hidden.
 */
export const technologies = {
  title: '**Technologies** we use for custom solutions',
  text: 'Proven tools chosen for reliability, speed of delivery and long-term maintainability.',
  categories: [
    {
      id: 'tech-frontend',
      title: '**Frontend** Development',
      subtitle: 'Interfaces that are fast and easy to use',
      text: 'Responsive, accessible web interfaces built with a modern component-based toolchain.',
      items: [
        { name: 'React', slug: 'react' },
        { name: 'Vite', slug: 'vite' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
        { name: 'JavaScript', slug: 'javascript' },
      ],
    },
    {
      id: 'tech-backend',
      title: '**Backend** Development',
      subtitle: 'APIs and business logic you can rely on',
      text: 'Server-side services, APIs and event-driven functions that handle your data and business rules.',
      items: [
        { name: 'Node.js', slug: 'nodedotjs' },
        { name: 'Express', slug: 'express' },
        { name: 'Cloud Functions', slug: 'googlecloud' },
      ],
    },
    {
      id: 'tech-mobile',
      title: '**Mobile** Development',
      subtitle: 'One codebase, Android and iOS',
      text: 'Cross-platform mobile apps that share code without giving up a native feel.',
      items: [{ name: 'Flutter', slug: 'flutter' }],
    },
    {
      id: 'tech-databases',
      title: '**Database** Engineering',
      subtitle: 'Data that stays consistent and available',
      text: 'Realtime and document databases modelled around how your app reads and writes data.',
      items: [{ name: 'Firestore', slug: 'firebase' }],
    },
    {
      id: 'tech-cloud',
      title: '**Cloud** Services',
      subtitle: 'Managed infrastructure that scales with you',
      text: 'Managed hosting, authentication and storage, so the team spends time on your product instead of servers.',
      items: [
        { name: 'Firebase', slug: 'firebase' },
        { name: 'Google Cloud', slug: 'googlecloud' },
      ],
    },
    {
      id: 'tech-devops',
      title: '**DevOps** Services',
      subtitle: 'Releases that are routine, not risky',
      text: 'Automated checks, builds and deployments on every change.',
      items: [{ name: 'GitHub Actions', slug: 'githubactions' }],
    },
    {
      id: 'tech-integrations',
      title: '**Integrations**',
      subtitle: 'Connected to the local ecosystem',
      text: 'Payment, telecom and tax-platform integrations for products that operate in Ethiopia.',
      items: [
        { name: 'Telebirr', slug: '' },
        { name: 'MoR EIMS', slug: '' },
        { name: 'Ethio Telecom', slug: '' },
      ],
    },
    {
      id: 'tech-ai',
      title: '**AI** & Automation',
      subtitle: 'Less manual work',
      text: 'Automation of repetitive steps and, where it genuinely helps, AI-assisted features.',
      items: [],
    },
  ],
}

export const whyUs = {
  eyebrow: 'Why E-receipt',
  title: '**Software partners** who know the local market',
  text: 'How we approach every project, whatever its size.',
  cta: { label: 'Talk to our team', href: '#contact' },
  items: [
    {
      icon: 'MapPin',
      title: 'Local market understanding',
      text: 'We build for how business works in Ethiopia — local payments, tax requirements and real network conditions.',
    },
    {
      icon: 'Braces',
      title: 'Maintainable code',
      text: 'Readable, documented code and sensible architecture, so your product is easy to extend later.',
    },
    {
      icon: 'MessagesSquare',
      title: 'Clear communication',
      text: 'Plain-language updates, visible progress and decisions written down, so you always know where things stand.',
    },
    {
      icon: 'Plug',
      title: 'Integration experience',
      text: 'Payments, e-invoicing platforms and third-party APIs are part of our day-to-day work.',
    },
    {
      icon: 'Repeat',
      title: 'Iterative delivery',
      text: 'Working software early and often, so you can give feedback on real screens rather than documents.',
    },
    {
      icon: 'LifeBuoy',
      title: 'Post-launch support',
      text: 'Launch is a milestone, not the finish line. We plan for fixes, updates and improvements after go-live.',
    },
  ],
}

export const industries = {
  eyebrow: 'Industries',
  title: 'Software for the **sectors we serve**',
  text: 'Typical use cases we design for in each sector.',
  items: [
    {
      id: 'retail',
      icon: 'Store',
      label: 'Retail & Commerce',
      text: 'Tools that make selling, receipting and stock tracking simpler for shops and merchants.',
      points: ['Digital receipts at checkout', 'Point-of-sale and inventory tools', 'Online ordering', 'Sales reporting'],
    },
    {
      id: 'finance',
      icon: 'Landmark',
      label: 'Financial Services',
      text: 'Secure flows for payments, verification and customer self-service.',
      points: ['Mobile payment integration', 'Customer onboarding flows', 'Transaction verification', 'Audit-friendly records'],
    },
    {
      id: 'transport',
      icon: 'Truck',
      label: 'Transport & Logistics',
      text: 'Booking, dispatch and tracking for people and goods on the move.',
      points: ['Ride and trip booking apps', 'Driver and fleet management', 'Real-time location updates', 'In-app payments'],
    },
    {
      id: 'hospitality',
      icon: 'BedDouble',
      label: 'Hospitality',
      text: 'Back-office and guest-facing software for hotels and restaurants.',
      points: ['Reservations and front desk', 'Billing and receipts', 'Housekeeping and staff tools', 'Management dashboards'],
    },
    {
      id: 'media',
      icon: 'Clapperboard',
      label: 'Media & Entertainment',
      text: 'Platforms for content, audiences and live engagement.',
      points: ['Streaming and content platforms', 'Voting and audience engagement', 'Creator and event tools', 'Subscription payments'],
    },
    {
      id: 'public',
      icon: 'Building2',
      label: 'Public Sector & Tax Tech',
      text: 'Systems that connect businesses with tax and public-service platforms.',
      points: ['E-invoicing integration', 'Document and receipt verification', 'Reporting and exports', 'Role-based access'],
    },
  ],
}

export const process = {
  title: 'How we **deliver**',
  text: 'A practical delivery path that reduces risk early and gets working software in front of you quickly.',
  highlightIndex: 2,
  steps: [
    { icon: 'Search', title: 'Discovery', text: 'Understand your goals, users and constraints, and agree on scope.' },
    { icon: 'PenTool', title: 'Design & Prototype', text: 'Wireframes and clickable prototypes to validate the idea before building.' },
    {
      icon: 'RefreshCw',
      title: 'Build & Integrate',
      subtitle: 'Iterative sprints',
      text: 'Development and integrations in short cycles, with regular demos.',
      badges: ['Code', 'Integrate', 'Review'],
    },
    { icon: 'Rocket', title: 'Test & Launch', text: 'Testing, hardening and a planned release to production.' },
    { icon: 'LifeBuoy', title: 'Support', text: 'Monitoring, fixes and improvements after go-live.' },
  ],
  legend: ['Continuous feedback', 'Regular demos', 'Production-ready releases'],
}

export const ctaBanner = {
  title: 'Have a project **in mind?**',
  text: 'Tell us what you are building and we will help you work out the next step.',
  cta: { label: 'Discuss Your Project', href: '#contact' },
  note: '',
}

// Only testimonials you have permission to publish: { quote, name, role, company }. Empty → section hidden.
export const testimonials = {
  title: 'What our **clients say**',
  items: [],
}

/**
 * Policies referenced by FAQ answers. While a value is empty, the FAQ uses a neutral answer
 * that makes no commitment. Fill these in once confirmed.
 */
export const policies = {
  codeOwnership: '',
  support: '',
  dataHandling: '',
}

export const faq = {
  title: '**Frequently asked** questions',
  text: 'Questions about how we work, what to expect, or how we structure projects? The answers most clients ask about, below.',
  items: [
    {
      q: 'What services do you offer?',
      a: 'We build custom software, web applications, mobile apps, digital receipt and e-invoicing systems, API and payment integrations, and cloud automation. Many projects combine several of these.',
    },
    {
      q: 'How does a project start?',
      a: 'It starts with a conversation about what you want to achieve. We then run a short discovery to agree on scope and priorities before any build work begins.',
    },
    {
      q: 'How do you estimate cost and timelines?',
      a: 'Estimates are based on the agreed scope after discovery. We break the work into phases so you can see what each stage includes, and we flag trade-offs early if priorities change.',
    },
    {
      q: 'Can you integrate with our existing systems?',
      a: 'Usually, yes. We regularly work with third-party APIs, payment providers and e-invoicing platforms. We review your current systems during discovery to confirm what is possible.',
    },
    {
      q: 'Should we build a web app or a mobile app?',
      a: 'It depends on your users and how they will use the product. Web apps are quicker to reach everyone through a browser; mobile apps suit frequent use, device features and offline needs. We help you decide during discovery.',
    },
    {
      q: 'Do you provide support after launch?',
      policy: 'support',
      a: 'Post-launch support is discussed and agreed as part of each project, so you know what is covered before go-live.',
    },
    {
      q: 'Who owns the code?',
      policy: 'codeOwnership',
      a: 'Code ownership and licensing are set out in the project agreement before work starts.',
    },
    {
      q: 'How do you handle our data?',
      policy: 'dataHandling',
      a: 'We only access the data needed to build and run your product, and we agree on how it is handled as part of the project. Confidentiality terms can be included in your agreement.',
    },
  ],
}

/**
 * Contact & integrations.
 *  - formEndpoint: URL that accepts a JSON POST (e.g. a Formspree form URL). Empty → the form explains
 *    that online submissions are not configured and shows the fallback contact details.
 *  - bookingUrl: Calendly / Cal.com link. Empty → no booking button.
 *  - socials: { label, href, icon } where icon is 'facebook' | 'linkedin' | 'x' | 'instagram' | 'youtube' | 'telegram' | 'tiktok'.
 */
export const contact = {
  title: 'Want to talk to **our team?**',
  text: 'Tell us what you are working on — a new product, an integration, or an existing system that needs work.',
  email: 'ereceiptset@gmail.com',
  // From the business licence.
  phone: '+251 98 369 6354',
  location: 'Office 505, Woreda 03, Bole, Addis Ababa, Ethiopia',
  socials: [],
  formEndpoint: '',
  bookingUrl: '',
  dataNote: 'We use the details you share only to reply to your enquiry.',
}

// Legal pages: add { label, href } only when the pages exist.
export const legalLinks = []
