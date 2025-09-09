import { getAnalytics, logEvent } from "firebase/analytics"

const getAnalyticsSafe = (): ReturnType<typeof getAnalytics> | null => {
  try {
    if (typeof window === 'undefined') return null
    return getAnalytics()
  } catch (e) {
    return null
  }
}

const Events = {
  logScreenView: (screenName: string) => {
    const analytics = getAnalyticsSafe()
    if (!analytics) return
    ;(logEvent as any)(analytics, 'screen_view', {
      firebase_screen: screenName,
    })
  },
  logSelectContent: (contentType: string, itemId: string) => {
    const analytics = getAnalyticsSafe()
    if (!analytics) return
    ;(logEvent as any)(analytics, 'select_content', {
      content_type: contentType,
      item_id: itemId,
    })
  },
}

export { Events }
