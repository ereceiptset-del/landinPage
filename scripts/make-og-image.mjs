// Generates public/og-image.png (1200x630) for social sharing. Run: node scripts/make-og-image.mjs
import sharp from 'sharp'
const grid = Array.from({length: 18}, (_, i) => `<line x1="${i*70}" y1="0" x2="${i*70}" y2="630" stroke="#00913A" stroke-opacity="0.07"/>`).join('') +
  Array.from({length: 10}, (_, i) => `<line x1="0" y1="${i*70}" x2="1200" y2="${i*70}" stroke="#00913A" stroke-opacity="0.07"/>`).join('')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#fff"/>${grid}
<line x1="0" y1="140" x2="1200" y2="140" stroke="#00913A" stroke-opacity="0.25"/>
<line x1="980" y1="0" x2="980" y2="630" stroke="#00913A" stroke-opacity="0.2"/>
<g transform="translate(90,90)">
<text x="84" y="44" font-family="Segoe UI, Arial, sans-serif" font-size="36" font-weight="800" fill="#0F1F18">E-receipt</text>
</g>
<text x="90" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="84" font-weight="800" fill="#00913A" letter-spacing="-2">Smart Software.</text>
<text x="90" y="430" font-family="Segoe UI, Arial, sans-serif" font-size="84" font-weight="800" fill="#0F1F18" letter-spacing="-2">Simpler Business.</text>
<text x="92" y="520" font-family="Segoe UI, Arial, sans-serif" font-size="28" fill="#56635C">Software &amp; digital solutions in Ethiopia</text>
</svg>`
const logo = await sharp('public/logo.png').resize(64, 64).png().toBuffer()
await sharp(Buffer.from(svg)).composite([{ input: logo, left: 90, top: 90 }]).png().toFile('public/og-image.png')
console.log('ok')
