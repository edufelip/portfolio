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
const RSS2JSON_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eduardofelipi'
const MEDIUM_FETCH_OPTIONS: RequestInit = {
  // Medium blocks default-undici clients with a Cloudflare challenge; spoofing a
  // standard browser UA keeps the RSS endpoint accessible for our server fetch.
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    Accept: 'application/rss+xml, application/xml;q=0.9, */*;q=0.8',
  },
}
const ARTICLE_LIMIT = 3
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000

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

const buildArticleFromRss2Json = (item: Record<string, unknown>): MediumArticle | null => {
  const title = (item['title'] as string) ?? ''
  const link = (item['link'] as string) ?? ''
  const guid = (item['guid'] as string) ?? link
  const pubDate = (item['pubDate'] as string) ?? ''
  const description = (item['content'] as string) ?? (item['description'] as string) ?? ''

  if (!title || !link || !pubDate) {
    return null
  }

  // rss2json exposes a `thumbnail` field and sometimes an `enclosure.link`
  const thumbnail = (item['thumbnail'] as string) ?? (item['enclosure'] as any)?.link

  return {
    id: guid,
    title,
    link,
    pubDate,
    description: normalizeText(description),
    image: thumbnail || resolveImageFromContent(description),
  }
}

const fetchMediumFeed = async () => {
  const response = await fetch(MEDIUM_FEED_URL, MEDIUM_FETCH_OPTIONS)
  if (!response.ok) {
    throw new Error(`Medium feed responded ${response.status}`)
  }
  const xml = await response.text()
  if (!xml.includes('<rss')) {
    throw new Error('Medium feed did not return RSS XML')
  }
  return xml
}

const fetchViaRss2Json = async (): Promise<MediumArticle[]> => {
  const response = await fetch(RSS2JSON_URL)
  if (!response.ok) {
    throw new Error(`rss2json responded ${response.status}`)
  }
  const json = (await response.json()) as Record<string, unknown>
  const items = (json['items'] as Record<string, unknown>[]) ?? []

  return items
    .map(buildArticleFromRss2Json)
    .filter((article): article is MediumArticle => article !== null)
    .slice(0, ARTICLE_LIMIT)
}

export const fetchMediumArticles = async (): Promise<MediumArticle[]> => {
  if (cached && cached.expiresAt > Date.now()) {
    return cached.items
  }

  try {
    const xml = await fetchMediumFeed()
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
    console.warn('Failed to parse Medium feed, falling back to rss2json', error)
    try {
      const fallbackItems = await fetchViaRss2Json()
      cached = {
        expiresAt: Date.now() + CACHE_TTL_MS,
        items: fallbackItems,
      }
      return fallbackItems
    } catch (fallbackError) {
      console.error('Both Medium feed and fallback failed', fallbackError)
      return []
    }
  }
}
