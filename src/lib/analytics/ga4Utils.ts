import { getAnalytics, logEvent } from 'firebase/analytics'

const getAnalyticsSafe = (): ReturnType<typeof getAnalytics> | null => {
  try {
    if (typeof window === 'undefined') {
      return null
    }
    return getAnalytics()
  } catch {
    return null
  }
}

type LogEventFn = (a: unknown, n: string, p?: Record<string, unknown>) => void

const Events = {
  logScreenView: (screenName: string) => {
    const analytics = getAnalyticsSafe()
    if (!analytics) {
      return
    }
    ;(logEvent as unknown as LogEventFn)(analytics, 'screen_view', {
      firebase_screen: screenName,
    })
  },
  logSelectContent: (contentType: string, itemId: string) => {
    const analytics = getAnalyticsSafe()
    if (!analytics) {
      return
    }
    ;(logEvent as unknown as LogEventFn)(analytics, 'select_content', {
      content_type: contentType,
      item_id: itemId,
    })
  },
}

export { Events }
export const log = (name: string, params?: Record<string, unknown>) => {
  const analytics = getAnalyticsSafe()
  if (!analytics) {
    return
  }
  type LogEventFn = (a: unknown, n: string, p?: Record<string, unknown>) => void
  ;(logEvent as unknown as LogEventFn)(analytics, name, params)
}
