import type { Analytics, AnalyticsEventName, ContentType } from '../types'

export class NoopAnalytics implements Analytics {
  logScreenView(): void {}
  logSelectContent(_contentType: ContentType, _itemId: string): void {}
  logEvent(_name: AnalyticsEventName, _params?: Record<string, unknown>): void {}
}
