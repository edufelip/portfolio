import React, { createContext, useContext, useMemo } from 'react'

import { isConfigValid } from '~/lib/firebase'

import { GA4Analytics } from './clients/ga4'
import { NoopAnalytics } from './clients/noop'
import type { Analytics } from './types'

const AnalyticsContext = createContext<Analytics>(new NoopAnalytics())

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const client = useMemo<Analytics>(() => {
    const provider = process.env['NEXT_PUBLIC_ANALYTICS_PROVIDER'] || 'ga4'
    if (provider === 'ga4' && isConfigValid()) {
      return new GA4Analytics()
    }
    return new NoopAnalytics()
  }, [])

  return <AnalyticsContext.Provider value={client}>{children}</AnalyticsContext.Provider>
}

export function useAnalytics(): Analytics {
  return useContext(AnalyticsContext)
}
