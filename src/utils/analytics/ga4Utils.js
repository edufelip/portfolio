import { getAnalytics, logEvent } from "firebase/analytics"

const getAnalyticsSafe = () => {
  try {
    if (typeof window === 'undefined') return null
    return getAnalytics()
  } catch (e) {
    return null
  }
}

const Events = {
  logScreenView: (screenName) => {
    const analytics = getAnalyticsSafe()
    if (!analytics) return
    logEvent(analytics, 'screen_view', {
      firebase_screen: screenName,
    })
  },
  logSelectContent: (contentType, itemId) => {
    const analytics = getAnalyticsSafe()
    if (!analytics) return
    logEvent(analytics, 'select_content', {
      content_type: contentType,
      item_id: itemId,
    })
  },
}

export { Events }
