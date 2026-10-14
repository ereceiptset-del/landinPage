import { ImageOff } from 'lucide-react'

/**
 * Screenshot entries in site.js are objects: { src, width, height, bg? }.
 * `bg` is a CSS background that continues the page below a wide screenshot inside a 16:10 screen.
 */

/** Neutral frame content shown until real screenshots are supplied. */
export function ScreenshotPending({ label = 'Screenshot pending', compact = false }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(135deg,#f3f5fa_0_10px,#eef1f7_10px_20px)] text-center text-muted">
      <ImageOff className={compact ? 'size-4' : 'size-6'} aria-hidden="true" strokeWidth={1.5} />
      <span className={`${compact ? 'text-[9px]' : 'text-xs'} font-semibold tracking-[0.14em] uppercase`}>{label}</span>
    </div>
  )
}

function Img({ image, alt, eager, className }) {
  return (
    <img
      src={image.src}
      alt={alt}
      width={image.width}
      height={image.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}

/** Laptop mockup (screen + hinge + base), 16:10 screen. Wide screenshots sit at the top of the screen. */
export function LaptopFrame({ image, alt = '', className = '', eager = false }) {
  return (
    <div className={`mx-auto w-full ${className}`}>
      <div className="rounded-t-[14px] border border-[#1b2233] bg-[#0e1422] p-[3.2%] pb-[2.4%] shadow-[0_24px_50px_-20px_rgb(11_20_55/0.45)]">
        <div className="aspect-[16/10] overflow-hidden rounded-[4px]" style={{ background: image?.bg || '#fff' }}>
          {image ? (
            <Img image={image} alt={alt} eager={eager} className="h-full w-full object-contain object-top" />
          ) : (
            <ScreenshotPending />
          )}
        </div>
      </div>
      <div className="relative mx-[-6%] h-3 rounded-b-[14px] bg-gradient-to-b from-[#d8dce5] to-[#aab1bf] shadow-[0_12px_20px_-10px_rgb(11_20_55/0.5)]">
        <span className="absolute top-0 left-1/2 h-1.5 w-[14%] -translate-x-1/2 rounded-b-md bg-[#9aa1b0]" />
      </div>
    </div>
  )
}

/** Phone mockup, ~9:19.5 screen. `className` positions/sizes it; the inner box owns `relative`. */
export function PhoneFrame({ image, alt = '', className = '', eager = false }) {
  return (
    <div className={className}>
      <div className="relative rounded-[22%/10%] border border-[#1b2233] bg-[#0e1422] p-[6%] shadow-[0_24px_50px_-20px_rgb(11_20_55/0.5)]">
        <span aria-hidden="true" className="absolute top-[3%] left-1/2 z-10 h-[2%] w-[30%] -translate-x-1/2 rounded-full bg-[#0e1422]" />
        <div className="aspect-[9/19.5] overflow-hidden rounded-[16%/7.5%] bg-white">
          {image ? (
            <Img image={image} alt={alt} eager={eager} className="h-full w-full object-cover object-top" />
          ) : (
            <ScreenshotPending compact label="Pending" />
          )}
        </div>
      </div>
    </div>
  )
}

/** Browser window mockup. With a screenshot it takes the image's own aspect ratio, so nothing is cropped. */
export function BrowserFrame({ image, alt = '', url = '', className = '', eager = false }) {
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
      {image ? (
        <Img image={image} alt={alt} eager={eager} className="block h-auto w-full" />
      ) : (
        <div className="aspect-[16/10]">
          <ScreenshotPending />
        </div>
      )}
    </div>
  )
}

/** Large app-icon tile, used for mobile apps until in-app screenshots are supplied. */
export function AppIconVisual({ image, alt = '', label }) {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 translate-y-4 scale-90 rounded-[28%] bg-ink/25 blur-2xl" />
        <Img image={image} alt={alt} className="relative size-36 rounded-[24%] shadow-[0_20px_40px_-16px_rgb(11_20_55/0.45)] sm:size-44" />
      </div>
      {label && <span className="text-[11px] font-bold tracking-[0.16em] text-muted uppercase">{label}</span>}
    </div>
  )
}
