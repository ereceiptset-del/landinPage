/**
 * Projects power both "Our Solutions" (showAs: 'solution') and the "Projects" carousel (showAs: 'project').
 * Kept separate from site.js because it imports images (site.js is also read by vite.config.js in Node).
 *
 * Current split: in-progress products → Solutions rows; completed products → Projects carousel.
 *
 * Screenshots: put originals in src/assets/projects/originals/, run `npm run images`, then import the
 * .webp files below. Each image entry is { src, width, height, bg?, alt } — `bg` is the CSS background
 * shown below a wide screenshot inside the 16:10 laptop screen (match the page's bottom colour).
 *
 * Copy is based only on each product's live page / public store listing. Usage numbers shown on those
 * pages are intentionally not repeated here. Tech stacks stay empty until confirmed.
 */
import ereceiptDesktop from '../assets/projects/ereceipt-desktop.webp'
import aibosDesktop from '../assets/projects/aibos-desktop.webp'
import arifcardDesktop from '../assets/projects/arifcard-desktop.webp'
import estreamDesktop from '../assets/projects/estream-desktop.webp'
import kineticDesktop from '../assets/projects/kinetic-desktop.webp'
import adikaIcon from '../assets/projects/adika-icon.webp'
import safeIcon from '../assets/projects/safe-icon.webp'
import eliteDesktop from '../assets/projects/elite-award-desktop.webp'

export const projects = [
  // ---------- Solutions rows (in progress) ----------
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
    url: 'https://eims-250ab.web.app/',
    linkLabel: 'Open eReceipt',
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
    id: 'kinetic',
    showAs: 'solution',
    name: 'Kinetic',
    status: 'In progress',
    category: 'Creator Marketing',
    summary:
      'An influencer matching platform for Ethiopian businesses — post a product and get matched with TikTok and Instagram creators whose audience fits it.',
    problem: '',
    built: '',
    features: [
      'Product briefs with category, price in ETB, description and photos',
      'Automatic matching against TikTok and Instagram creators',
      'Creator profiles and campaign proposals',
      'Seller dashboard',
    ],
    stack: [],
    url: 'https://influencer-match-platfor-3c708.web.app/',
    linkLabel: 'Visit Kinetic',
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
    id: 'arifcard',
    showAs: 'solution',
    name: 'Arifcard',
    status: 'In progress',
    category: 'Fintech · Virtual Cards',
    summary:
      'Virtual USD cards funded in Ethiopian Birr — for paying online subscriptions, advertising, cloud tools and shopping platforms.',
    problem: '',
    built: '',
    features: [
      'Virtual USD card issuance and top-up',
      'Birr wallet funded via Telebirr, CBE or mobile banking',
      'In-platform money transfers',
      'Biometric login and transaction logs',
    ],
    stack: [],
    url: 'https://addiscard-1a9bc.web.app/',
    linkLabel: 'Visit Arifcard',
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

  {
    id: 'elite-award',
    showAs: 'solution',
    name: 'ELITE Creators Award',
    status: 'In progress',
    category: 'Media · Voting',
    summary:
      'The official voting arena for the ELITE Sport Content Creators Award (TikTok Award), where fans sign up and vote for their favourite creators.',
    problem: '',
    built: '',
    features: [
      'Sign-up and login with an Ethiopian (+251) phone number',
      'One-tap login with Telegram',
      'Official voting arena for award categories',
      'Amharic and English interface',
    ],
    stack: [],
    url: 'https://tiktokaward-1212.web.app/',
    linkLabel: 'Visit the voting site',
    images: {
      desktop: [
        {
          src: eliteDesktop,
          width: 800,
          height: 357,
          bg: '#0f2621',
          alt: 'ELITE Sport Content Creators Award login page with phone and Telegram sign-in',
        },
      ],
      mobile: [],
    },
  },

  // ---------- Projects carousel (completed) ----------
  {
    id: 'etstream',
    showAs: 'project',
    name: 'ETSTREAM',
    status: 'Completed',
    category: 'Media & Entertainment',
    summary:
      'A streaming platform for movies, shows, sports and live events — with Amharic-dubbed series and Amharic-language descriptions.',
    problem: '',
    built: '',
    features: [
      'Featured, trending and upcoming content',
      'Sports and upcoming events',
      'Member accounts, profiles and search',
      'Amharic-dubbed series and Amharic descriptions',
    ],
    stack: [],
    url: 'https://etstream.app/',
    linkLabel: 'Visit ETSTREAM',
    images: {
      desktop: [
        {
          src: estreamDesktop,
          width: 1366,
          height: 548,
          bg: '#090806',
          alt: 'ETSTREAM home page with a featured show and Amharic description',
        },
      ],
      mobile: [],
    },
  },
  {
    id: 'aibos',
    showAs: 'project',
    name: 'AIBOS',
    status: 'Completed',
    category: 'Business Operating System',
    summary:
      'A business operating system that brings operations, customers, finance, compliance and digital marketing into one platform, with editions for specific industries.',
    problem: '',
    built: '',
    features: [
      'Editions for insurance, SACCOs, café & retail, construction and general business',
      'CRM, payments, finance and KYC on one shared data model',
      'Publishing and scheduling to Facebook, Instagram, TikTok and Telegram',
      'Role-based teams and branches, plus an AI workspace',
    ],
    stack: [],
    url: 'https://aibos-ereceipt.web.app/',
    linkLabel: 'Visit AIBOS',
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
    id: 'adika',
    showAs: 'project',
    name: 'Adika',
    status: 'Completed',
    category: 'Transport · Mobile Apps',
    summary:
      'Taxi and ride-hailing apps for Addis Ababa — a passenger app for booking and tracking rides, and a companion driver app — published on Google Play.',
    problem: '',
    built: '',
    features: [
      'Instant booking with upfront fares',
      'Real-time ride tracking and multiple vehicle types',
      'Pre-scheduled rides',
      'English and Amharic interface',
    ],
    stack: [],
    url: 'https://play.google.com/store/apps/details?id=com.adika.passenger&hl=en',
    linkLabel: 'View on Google Play',
    icon: { src: adikaIcon, width: 240, height: 240, alt: 'Adika app icon' },
    images: { desktop: [], mobile: [] },
  },
  {
    id: 'safe',
    showAs: 'project',
    name: 'Safe Passenger',
    status: 'Completed',
    category: 'Transport · Mobile Apps',
    summary:
      'Ride-hailing app for Safe Transport in Ethiopia — passengers book rides in a few taps and earn rewards for trips and referrals.',
    problem: '',
    built: '',
    features: [
      'Ride booking in a few taps',
      'Referral codes with rewards for both riders',
      'Cash back on trips',
      'Also bookable through the Telebirr Super App',
    ],
    stack: [],
    url: 'https://play.google.com/store/apps/details?id=com.safetransportset.safe&hl=en',
    linkLabel: 'View on Google Play',
    icon: { src: safeIcon, width: 240, height: 240, alt: 'Safe Passenger app icon' },
    images: { desktop: [], mobile: [] },
  },
]
