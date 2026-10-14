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
  // Logo mark (file in /public). Favicons: /favicon.png and /apple-touch-icon.png.
  logo: '/logo.png',
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
 * Technologies — shown as tabs (one per category) with a card grid, like the reference.
 * Each item: { name, slug, text } where `slug` is a Simple Icons slug registered in
 * src/components/ui/techIconRegistry.js. Brands without a Simple Icons mark use
 * { mono: 'AWS', color: '#FF9900' } to render a monogram tile instead.
 * Keep this list to technologies the team actually works with. Empty categories are hidden.
 */
export const technologies = {
  eyebrow: 'Technologies',
  title: '**Tools & technologies** we use',
  text: 'Proven technologies chosen for performance, reliability and developer experience.',
  categories: [
    {
      id: 'frontend',
      label: 'Frontend',
      items: [
        { name: 'React', slug: 'react', text: 'Component-based library for building fast, interactive user interfaces.' },
        { name: 'Next.js', slug: 'nextdotjs', text: 'React framework with server rendering, static generation and routing built in.' },
        { name: 'Angular', slug: 'angular', text: 'Full-featured TypeScript framework for large, structured web applications.' },
        { name: 'Vue.js', slug: 'vuedotjs', text: 'Approachable, progressive framework that scales from widgets to full apps.' },
        { name: 'Svelte', slug: 'svelte', text: 'Compiler-based UI framework that ships very little JavaScript to the browser.' },
        { name: 'TypeScript', slug: 'typescript', text: 'Typed JavaScript that catches errors early and keeps large codebases maintainable.' },
        { name: 'JavaScript', slug: 'javascript', text: 'The language of the web, running in every browser and on the server.' },
        { name: 'HTML5', slug: 'html5', text: 'Semantic, accessible markup with native media and modern browser APIs.' },
        { name: 'Tailwind CSS', slug: 'tailwindcss', text: 'Utility-first CSS for building consistent, custom designs quickly.' },
        { name: 'Bootstrap', slug: 'bootstrap', text: 'Responsive CSS framework with a ready-made library of components.' },
        { name: 'Material UI', slug: 'mui', text: 'React components that implement Google’s Material Design system.' },
        { name: 'Redux', slug: 'redux', text: 'Predictable state container for complex front-end application state.' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      items: [
        { name: 'Node.js', slug: 'nodedotjs', text: 'Event-driven JavaScript runtime for scalable network services and APIs.' },
        { name: 'NestJS', slug: 'nestjs', text: 'Structured, TypeScript-first Node.js framework for maintainable server apps.' },
        { name: 'Python', slug: 'python', text: 'Readable, versatile language for web backends, automation, data and AI.' },
        { name: 'Django', slug: 'django', text: 'Batteries-included Python web framework for building secure apps fast.' },
        { name: 'Spring Boot', slug: 'springboot', text: 'Java framework for production-ready services and microservices.' },
        { name: '.NET', slug: 'dotnet', text: 'Cross-platform Microsoft platform for web APIs, services and cloud apps.' },
        { name: 'Go', slug: 'go', text: 'Compiled, statically typed language with first-class concurrency support.' },
        { name: 'Ruby on Rails', slug: 'rubyonrails', text: 'Convention-over-configuration framework for rapid web development.' },
        { name: 'PHP', slug: 'php', text: 'Widely used server-side scripting language built for the web.' },
        { name: 'Laravel', slug: 'laravel', text: 'Elegant PHP framework with routing, auth, queues and an expressive ORM.' },
        { name: 'Rust', slug: 'rust', text: 'Systems language that combines memory safety with high performance.' },
        { name: 'Express', slug: 'express', text: 'Minimal, flexible Node.js framework for web servers and APIs.' },
      ],
    },
    {
      id: 'mobile',
      label: 'Mobile',
      items: [
        { name: 'Flutter', slug: 'flutter', text: 'Google’s UI toolkit for native Android and iOS apps from one codebase.' },
        { name: 'React Native', slug: 'react', text: 'Native Android and iOS apps built with React and JavaScript.' },
        { name: 'Kotlin', slug: 'kotlin', text: 'Modern, concise language recommended for Android development.' },
        { name: 'Swift', slug: 'swift', text: 'Apple’s fast, safe language for iOS and other Apple platforms.' },
        { name: 'Java', slug: 'openjdk', text: 'Mature language behind many Android apps and enterprise backends.' },
        { name: 'Ionic', slug: 'ionic', text: 'Toolkit for building mobile apps with familiar web technologies.' },
        { name: 'Objective-C', mono: 'Obj-C', color: '#438EFF', text: 'Apple’s original language, still key for maintaining older iOS code.' },
        { name: 'Fastlane', slug: 'fastlane', text: 'Automates building, signing and releasing iOS and Android apps.' },
        { name: 'Firebase', slug: 'firebase', text: 'Auth, realtime data, push messaging and crash reporting for mobile apps.' },
        { name: 'Android SDK', slug: 'android', text: 'Google’s official tools and APIs for building Android apps.' },
        { name: 'iOS SDK', slug: 'apple', text: 'Apple’s frameworks and tools for building iPhone and iPad apps.' },
        { name: 'Xamarin', mono: 'X', color: '#3498DB', text: 'Microsoft’s .NET toolkit for building cross-platform mobile apps.' },
      ],
    },
    {
      id: 'databases',
      label: 'Databases',
      items: [
        { name: 'PostgreSQL', slug: 'postgresql', text: 'Powerful open-source relational database with rich SQL and extensions.' },
        { name: 'MySQL', slug: 'mysql', text: 'Popular open-source relational database for web applications.' },
        { name: 'MariaDB', slug: 'mariadb', text: 'Community-developed relational database, compatible with MySQL.' },
        { name: 'SQLite', slug: 'sqlite', text: 'Lightweight, serverless SQL database embedded in apps and devices.' },
        { name: 'MongoDB', slug: 'mongodb', text: 'Document database with flexible schemas and horizontal scaling.' },
        { name: 'Redis', slug: 'redis', text: 'In-memory data store for caching, queues and real-time features.' },
        { name: 'Elasticsearch', slug: 'elasticsearch', text: 'Distributed engine for full-text search and analytics at scale.' },
        { name: 'Firestore', slug: 'firebase', text: 'Realtime NoSQL document database from Firebase with offline sync.' },
        { name: 'DynamoDB', mono: 'DDB', color: '#4053D6', text: 'Fully managed NoSQL database on AWS with consistent low latency.' },
        { name: 'Oracle', mono: 'ORCL', color: '#F80000', text: 'Enterprise relational database for mission-critical workloads.' },
        { name: 'Cassandra', slug: 'apachecassandra', text: 'Distributed NoSQL database designed for high write throughput.' },
        { name: 'InfluxDB', slug: 'influxdb', text: 'Time-series database for metrics, events and sensor data.' },
        { name: 'CouchDB', slug: 'apachecouchdb', text: 'JSON document database with an HTTP API and multi-node sync.' },
      ],
    },
    {
      id: 'cloud',
      label: 'Cloud & DevOps',
      items: [
        { name: 'AWS', mono: 'AWS', color: '#FF9900', text: 'Broad cloud platform for compute, storage, databases, networking and AI.' },
        { name: 'Azure', mono: 'Az', color: '#0078D4', text: 'Microsoft’s cloud for hosting apps, data and enterprise workloads.' },
        { name: 'Google Cloud', slug: 'googlecloud', text: 'Google’s cloud platform, including Cloud Functions and Cloud Run.' },
        { name: 'DigitalOcean', slug: 'digitalocean', text: 'Developer-friendly cloud with simple servers, databases and Kubernetes.' },
        { name: 'Vercel', slug: 'vercel', text: 'Frontend cloud with instant deployments for React and Next.js apps.' },
        { name: 'Netlify', slug: 'netlify', text: 'Platform for building, deploying and hosting modern web projects.' },
        { name: 'Firebase', slug: 'firebase', text: 'Hosting, authentication, databases and serverless functions in one platform.' },
        { name: 'Cloudflare', slug: 'cloudflare', text: 'Global network for CDN, DNS, security and edge computing.' },
        { name: 'Heroku', mono: 'H', color: '#430098', text: 'Platform-as-a-service for deploying apps without managing servers.' },
        { name: 'Linode', mono: 'Li', color: '#00A95C', text: 'Cloud hosting from Akamai with predictable pricing and solid performance.' },
        { name: 'IBM Cloud', mono: 'IBM', color: '#1F70C1', text: 'Enterprise cloud with hybrid infrastructure and AI services.' },
        { name: 'OpenStack', slug: 'openstack', text: 'Open-source software for building private and public clouds.' },
        { name: 'GitHub Actions', slug: 'githubactions', text: 'CI/CD pipelines that test, build and deploy on every change.' },
      ],
    },
    {
      id: 'integrations',
      label: 'Local integrations',
      items: [
        { name: 'Telebirr', mono: 'tb', color: '#0A8FD6', text: 'Mobile money payments for customers across Ethiopia.' },
        { name: 'MoR EIMS', mono: 'EIMS', color: '#0E7A55', text: 'Ethiopia’s electronic invoice management system for fiscal receipts.' },
        { name: 'Ethio Telecom', mono: 'ET', color: '#8DC63F', text: 'Telecom integrations such as SMS for reaching customers.' },
      ],
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
  phone: '+251 99 035 1570',
  location: 'Office 505, Woreda 03, Bole, Addis Ababa, Ethiopia',
  socials: [],
  formEndpoint: '',
  bookingUrl: '',
  dataNote: 'We use the details you share only to reply to your enquiry.',
}

// Legal pages: add { label, href } only when the pages exist.
export const legalLinks = []
