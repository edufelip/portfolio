import { load } from 'cheerio'
import { XMLParser } from 'fast-xml-parser'

export type MediumArticle = {
  id: string
  title: string
  link: string
  pubDate: string
  description: string
  image?: string
}

const MEDIUM_FEED_URL = 'https://medium.com/feed/@eduardofelipi'
const ARTICLE_LIMIT = 6
const CACHE_TTL_MS = 3 * 24 * 60 * 60 * 1000

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' })
let cached: { expiresAt: number; items: MediumArticle[] } | null = null

const normalizeText = (html = '') => {
  const text = load(html).text().replace(/\s+/g, ' ').trim()
  if (text.length <= 220) {
    return text
  }
  return `${text.slice(0, 220).trim()}…`
}

const resolveImageFromContent = (html = '') => {
  const $ = load(html)
  const img = $('img').first()
  const src = img.attr('src')
  if (!src) {
    return undefined
  }
  return src
}

const buildArticle = (item: Record<string, unknown>): MediumArticle | null => {
  const title = (item['title'] as string) ?? ''
  const link = (item['link'] as string) ?? ''
  const guid = (item['guid'] as string) ?? link
  const pubDate = (item['pubDate'] as string) ?? ''
  const content = (item['content:encoded'] as string) ?? ''
  if (!title || !link || !pubDate) {
    return null
  }

  return {
    id: guid,
    title,
    link,
    pubDate,
    description: normalizeText(content),
    image: resolveImageFromContent(content),
  }
}

export const fetchMediumArticles = async (): Promise<MediumArticle[]> => {
  if (cached && cached.expiresAt > Date.now()) {
    return cached.items
  }

  try {
    const response = await fetch(MEDIUM_FEED_URL)
    if (!response.ok) {
      console.warn('Unable to fetch Medium feed', response.status)
      return []
    }

    const xml = await response.text()
    const parsed = parser.parse(xml)
    const items = parsed?.rss?.channel?.item
    if (!items) {
      return []
    }

    const normalizedItems = (Array.isArray(items) ? items : [items])
      .map(buildArticle)
      .filter((article): article is MediumArticle => article !== null)
      .slice(0, ARTICLE_LIMIT)

    cached = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      items: normalizedItems,
    }

    return normalizedItems
  } catch (error) {
    console.error('Failed to parse Medium feed', error)
    return []
  }
}
