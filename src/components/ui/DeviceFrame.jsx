import { ImageOff } from 'lucide-react'

/** Neutral frame content shown until real screenshots are supplied. */
export function ScreenshotPending({ label = 'Screenshot pending', compact = false }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(135deg,#f3f5fa_0_10px,#eef1f7_10px_20px)] text-center text-muted">
      <ImageOff className={compact ? 'size-4' : 'size-6'} aria-hidden="true" strokeWidth={1.5} />
      <span className={`${compact ? 'text-[9px]' : 'text-xs'} font-semibold tracking-[0.14em] uppercase`}>{label}</span>
    </div>
  )
}

function Screen({ src, alt, width, height, eager }) {
  if (!src) return width < 400 ? <ScreenshotPending compact label="Pending" /> : <ScreenshotPending />
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className="h-full w-full object-cover object-top"
    />
  )
}

/** Laptop mockup (screen + hinge + base), 16:10 screen. */
export function LaptopFrame({ src, alt = '', className = '', eager = false }) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <div className="rounded-t-[14px] border border-[#1b2233] bg-[#0e1422] p-[3.2%] pb-[2.4%] shadow-[0_24px_50px_-20px_rgb(11_20_55/0.45)]">
        <div className="aspect-[16/10] overflow-hidden rounded-[4px] bg-white">
          <Screen src={src} alt={alt} width={1440} height={900} eager={eager} />
        </div>
      </div>
      <div className="relative mx-[-6%] h-3 rounded-b-[14px] bg-gradient-to-b from-[#d8dce5] to-[#aab1bf] shadow-[0_12px_20px_-10px_rgb(11_20_55/0.5)]">
        <span className="absolute top-0 left-1/2 h-1.5 w-[14%] -translate-x-1/2 rounded-b-md bg-[#9aa1b0]" />
      </div>
    </div>
  )
}

/** Phone mockup, ~9:19.5 screen. */
export function PhoneFrame({ src, alt = '', className = '', eager = false }) {
  // `className` positions/sizes the phone (e.g. "absolute right-0 w-1/4"); the inner box owns `relative`.
  return (
    <div className={className}>
      <div className="relative rounded-[22%/10%] border border-[#1b2233] bg-[#0e1422] p-[6%] shadow-[0_24px_50px_-20px_rgb(11_20_55/0.5)]">
        <span aria-hidden="true" className="absolute top-[3%] left-1/2 z-10 h-[2%] w-[30%] -translate-x-1/2 rounded-full bg-[#0e1422]" />
        <div className="aspect-[9/19.5] overflow-hidden rounded-[16%/7.5%] bg-white">
          <Screen src={src} alt={alt} width={390} height={844} eager={eager} />
        </div>
      </div>
    </div>
  )
}

/** Browser window mockup with traffic-light dots and an address pill. */
export function BrowserFrame({ src, alt = '', url = '', className = '', eager = false }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-lift ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff6159]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#28c941]" />
        </span>
        <span className="truncate rounded-md bg-white px-3 py-1 text-[11px] text-muted ring-1 ring-line">
          {url ? url.replace(/^https?:\/\//, '') : ' '}
        </span>
      </div>
      <div className="aspect-[16/10]">
        <Screen src={src} alt={alt} width={1440} height={900} eager={eager} />
      </div>
    </div>
  )
}
