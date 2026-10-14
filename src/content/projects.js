/**
 * Projects power both "Our Solutions" (showAs: 'solution') and the "Projects" carousel (showAs: 'project').
 * Kept separate from site.js because it imports images (site.js is also read by vite.config.js in Node).
 *
 * Screenshots: put originals in src/assets/projects/originals/, run `npm run images`, then import the
 * .webp files below. Each image entry is { src, width, height, bg? } — `bg` is the CSS background shown
 * below a wide screenshot inside the 16:10 laptop screen (match the page's bottom colour).
 *
 * Only facts visible in the supplied screenshots / public store listing are used. Tech stacks, live URLs
 * and client names are left empty until confirmed.
 */
import ereceiptDesktop from '../assets/projects/ereceipt-desktop.webp'
import aibosDesktop from '../assets/projects/aibos-desktop.webp'
import arifcardDesktop from '../assets/projects/arifcard-desktop.webp'
import estreamDesktop from '../assets/projects/estream-desktop.webp'
import kineticDesktop from '../assets/projects/kinetic-desktop.webp'
import adikaIcon from '../assets/projects/adika-icon.webp'

export const projects = [
  // ---------- Our Solutions (own products, in progress) ----------
  {
    id: 'ereceipt',
    showAs: 'solution',
    name: 'eReceipt',
    status: 'In progress',
    category: 'Digital Receipts',
    summary:
      'Manage e-receipts and invoices in one place — register, verify and track fiscal documents from any device, even offline.',
    problem: '',
    built: '',
    features: [
      'Register, verify and track fiscal documents',
      'Works on any device, including offline',
      'QR-coded receipts with verification status',
      'Amharic and English interface',
    ],
    stack: [],
    url: '',
    images: {
      desktop: [
        {
          src: ereceiptDesktop,
          width: 1366,
          height: 604,
          bg: 'linear-gradient(to right, #12855f 50%, #f4f6f5 50%)',
          alt: 'eReceipt sign-in screen with a verified receipt preview',
        },
      ],
      mobile: [],
    },
  },
  {
    id: 'aibos',
    showAs: 'solution',
    name: 'AIBOS',
    status: 'In progress',
    category: 'Business Operating System',
    summary:
      'One platform to run operations, customers, finance, compliance and digital marketing — with purpose-built editions for different kinds of business.',
    problem: '',
    built: '',
    features: [
      'Operations, customers and finance in one system',
      'Compliance and digital marketing tools',
      'Editions for insurance, SACCOs, cafés and construction',
      'A general business edition',
    ],
    stack: [],
    url: '',
    images: {
      desktop: [
        {
          src: aibosDesktop,
          width: 1345,
          height: 602,
          bg: '#0a0a0a',
          alt: 'AIBOS landing page: “Run your entire business from one platform.”',
        },
      ],
      mobile: [],
    },
  },
  {
    id: 'arifcard',
    showAs: 'solution',
    name: 'Arifcard',
    status: 'In progress',
    category: 'Fintech · Virtual Cards',
    summary:
      'Virtual card infrastructure for paying international online platforms — shopping sites, subscriptions and advertising.',
    problem: '',
    built: '',
    features: [
      'Virtual cards for international online payments',
      'Customer dashboard',
      'Multi-language interface',
      'Light and dark mode',
    ],
    stack: [],
    url: '',
    images: {
      desktop: [
        {
          src: arifcardDesktop,
          width: 1353,
          height: 600,
          bg: '#f1effb',
          alt: 'Arifcard landing page: “Unveiling the Virtual Card Experience”',
        },
      ],
      mobile: [],
    },
  },

  // ---------- Projects carousel (completed) ----------
  {
    id: 'estream',
    showAs: 'project',
    name: 'eStream',
    status: 'Completed',
    category: 'Media & Entertainment',
    summary:
      'A streaming platform bringing movies, shows, sports, events and theatre together, with Amharic-language content.',
    problem: '',
    built: '',
    features: [
      'Movies, shows, sports, events and theatre sections',
      'Featured-content hero carousel',
      'Member accounts and sign-in',
      'Amharic-language titles and descriptions',
    ],
    stack: [],
    url: '',
    images: {
      desktop: [
        {
          src: estreamDesktop,
          width: 1366,
          height: 548,
          bg: '#090806',
          alt: 'eStream home page with a featured show and Amharic description',
        },
      ],
      mobile: [],
    },
  },
  {
    id: 'kinetic',
    showAs: 'project',
    name: 'Kinetic',
    status: 'Completed',
    category: 'Marketing · Creator Economy',
    summary:
      'An influencer matching platform for Ethiopian businesses — post a product brief and get matched with TikTok and Instagram creators.',
    problem: '',
    built: '',
    features: [
      'Business registration and product briefs',
      'Automatic creator matching',
      'Quick creator search',
      'Influencer directory',
    ],
    stack: [],
    url: '',
    images: {
      desktop: [
        {
          src: kineticDesktop,
          width: 1366,
          height: 600,
          bg: '#f9f9f9',
          alt: 'Kinetic home page: “Post Your Product. Get Matched with the Best Influencers.”',
        },
      ],
      mobile: [],
    },
  },
  {
    id: 'adika-driver',
    showAs: 'project',
    name: 'Adika Driver',
    status: 'Completed',
    category: 'Transport · Mobile App',
    summary: 'The Android driver app for the Adika ride-hailing service in Addis Ababa, published on Google Play.',
    problem: '',
    built: '',
    features: [
      'Real-time ride requests from nearby passengers',
      'Built-in maps and navigation',
      'Ride reservations',
      'Fare and tip breakdowns',
    ],
    stack: [],
    url: 'https://play.google.com/store/apps/details?id=com.adika.driver',
    linkLabel: 'View on Google Play',
    icon: { src: adikaIcon, width: 240, height: 240, alt: 'Adika app icon' },
    images: { desktop: [], mobile: [] },
  },
]
