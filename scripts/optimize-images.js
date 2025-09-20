#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const fg = require('fast-glob')
const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const { optimize } = require('svgo')

const ROOT = path.resolve(__dirname, '..')
const PUBLIC_DIR = path.join(ROOT, 'public')
const RASTER_GLOB = ['**/*.{png,jpg,jpeg}', '!**/*.min.*']
const SVG_GLOB = ['**/*.svg']
const MIN_REDUCTION_RATIO = 0.95

const bytesToKb = (bytes) => Math.round((bytes / 1024) * 100) / 100

async function optimizeRaster(filePath) {
  const original = await fs.readFile(filePath)
  const image = sharp(original)
  const metadata = await image.metadata()

  let optimizedBuffer
  if (metadata.format === 'png') {
    optimizedBuffer = await image
      .png({ compressionLevel: 9, palette: true, quality: 80 })
      .toBuffer()
  } else {
    optimizedBuffer = await image.jpeg({ quality: 80, mozjpeg: true }).toBuffer()
  }

  if (optimizedBuffer.length < original.length * MIN_REDUCTION_RATIO) {
    await fs.writeFile(filePath, optimizedBuffer)
    return original.length - optimizedBuffer.length
  }

  return 0
}

async function optimizeSvg(filePath) {
  const original = await fs.readFile(filePath, 'utf8')
  const result = optimize(original, {
    multipass: true,
    plugins: ['preset-default', 'removeDimensions'],
  })
  const optimizedBuffer = Buffer.from(result.data)
  if (optimizedBuffer.length < Buffer.byteLength(original) * MIN_REDUCTION_RATIO) {
    await fs.writeFile(filePath, optimizedBuffer)
    return Buffer.byteLength(original) - optimizedBuffer.length
  }
  return 0
}

async function run() {
  const rasterFiles = await fg(RASTER_GLOB, { cwd: PUBLIC_DIR, absolute: true })
  const svgFiles = await fg(SVG_GLOB, { cwd: PUBLIC_DIR, absolute: true })

  let totalSaved = 0
  let optimizedCount = 0

  for (const file of rasterFiles) {
    try {
      const saved = await optimizeRaster(file)
      if (saved > 0) {
        totalSaved += saved
        optimizedCount += 1
        console.log(`Optimized ${path.relative(ROOT, file)} (-${bytesToKb(saved)} kB)`)
      }
    } catch (error) {
      console.warn(`Skipping ${file}: ${error.message}`)
    }
  }

  for (const file of svgFiles) {
    try {
      const saved = await optimizeSvg(file)
      if (saved > 0) {
        totalSaved += saved
        optimizedCount += 1
        console.log(`Optimized ${path.relative(ROOT, file)} (-${bytesToKb(saved)} kB)`)
      }
    } catch (error) {
      console.warn(`Skipping ${file}: ${error.message}`)
    }
  }

  if (optimizedCount === 0) {
    console.log('Images already optimized. 🎉')
  } else {
    console.log(`Optimized ${optimizedCount} file(s), saved ${bytesToKb(totalSaved)} kB total.`)
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
