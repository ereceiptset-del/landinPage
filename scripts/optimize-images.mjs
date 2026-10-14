// Converts project screenshots to compressed WebP.
//
//   1. Drop original PNG/JPG files into  src/assets/projects/originals/
//   2. Run  npm run images
//   3. Optimised files appear in        src/assets/projects/   (same name, .webp)
//
// Wide images (desktop) are capped at 1600px wide; tall images (mobile) at 900px tall.
import { readdir, mkdir } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const SRC = 'src/assets/projects/originals'
const OUT = 'src/assets/projects'

await mkdir(SRC, { recursive: true })
const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f))

if (!files.length) {
  console.log(`No images found in ${SRC}. Add screenshots there and run again.`)
  process.exit(0)
}

for (const file of files) {
  const input = join(SRC, file)
  const { width = 0, height = 0 } = await sharp(input).metadata()
  const portrait = height > width
  const output = join(OUT, `${parse(file).name}.webp`)
  const info = await sharp(input)
    .resize(portrait ? { height: 900, withoutEnlargement: true } : { width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output)
  console.log(`${file} → ${output} (${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB)`)
}
