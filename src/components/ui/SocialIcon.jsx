import { siFacebook, siX, siInstagram, siYoutube, siTelegram, siTiktok } from 'simple-icons'

const paths = {
  facebook: siFacebook.path,
  x: siX.path,
  instagram: siInstagram.path,
  youtube: siYoutube.path,
  telegram: siTelegram.path,
  tiktok: siTiktok.path,
}

export default function SocialIcon({ icon, className = 'size-4' }) {
  if (icon === 'linkedin') {
    // Simple Icons no longer ships LinkedIn; a neutral "in" mark is used instead.
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M7 10h2.4v7H7zM8.2 6.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM11 10h2.3v1c.4-.7 1.2-1.2 2.4-1.2 2 0 2.8 1.2 2.8 3.3V17h-2.4v-3.4c0-1-.3-1.7-1.2-1.7-.9 0-1.5.6-1.5 1.7V17H11z" fill="#05070c" />
      </svg>
    )
  }
  const d = paths[icon]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d={d} />
    </svg>
  )
}
