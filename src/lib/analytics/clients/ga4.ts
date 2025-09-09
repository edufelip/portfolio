import { Events, log } from '../ga4Utils'
import type { Analytics, AnalyticsEventName, ContentType } from '../types'

export class GA4Analytics implements Analytics {
  logScreenView(screenPath: string): void {
    Events.logScreenView(screenPath)
  }
  logSelectContent(contentType: ContentType, itemId: string): void {
    Events.logSelectContent(contentType, itemId)
  }
  logEvent(name: AnalyticsEventName, params?: Record<string, unknown>): void {
    log(name, params)
  }
}
