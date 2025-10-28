import { ensureFirebaseApp, isConfigValid } from '~/lib/firebase'

type FirebaseAnalytics = import('firebase/analytics').Analytics
type LogEventFn = (
  analytics: FirebaseAnalytics,
  eventName: string,
  eventParams?: Record<string, unknown>
) => void

type AnalyticsClient = {
  analytics: FirebaseAnalytics
  logEvent: LogEventFn
}

let analyticsClientPromise: Promise<AnalyticsClient | null> | null = null

const loadAnalyticsClient = async (): Promise<AnalyticsClient | null> => {
  if (typeof window === 'undefined') {
    return null
  }
  if (!isConfigValid()) {
    return null
  }
  if (!analyticsClientPromise) {
    analyticsClientPromise = ensureFirebaseApp()
      .then(async (app) => {
        if (!app) {
          return null
        }
        const analyticsModule = await import('firebase/analytics')
        return {
          analytics: analyticsModule.getAnalytics(app),
          logEvent: analyticsModule.logEvent as unknown as LogEventFn,
        }
      })
      .catch((error) => {
        console.error('Failed to load Firebase analytics', error)
        return null
      })
  }
  return analyticsClientPromise
}

const withAnalytics = (fn: (client: AnalyticsClient) => void) => {
  void loadAnalyticsClient().then((client) => {
    if (!client) {
      return
    }
    fn(client)
  })
}

const Events = {
  logScreenView: (screenName: string) => {
    withAnalytics(({ analytics, logEvent }) => {
      logEvent(analytics, 'screen_view', {
        firebase_screen: screenName,
      })
    })
  },
  logSelectContent: (contentType: string, itemId: string) => {
    withAnalytics(({ analytics, logEvent }) => {
      logEvent(analytics, 'select_content', {
        content_type: contentType,
        item_id: itemId,
      })
    })
  },
}

export { Events }
export const log = (name: string, params?: Record<string, unknown>) => {
  withAnalytics(({ analytics, logEvent }) => {
    logEvent(analytics, name, params)
  })
}
