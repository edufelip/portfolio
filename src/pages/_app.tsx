import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'

import { AnalyticsProvider, useAnalytics } from '~/lib/analytics/provider'
import { GlobalStyle } from '~/styles/global'

function RouteTracker() {
  const analytics = useAnalytics()
  const router = useRouter()
  React.useEffect(() => {
    analytics.logScreenView(window.location.pathname)
    const handler = (url: string) => analytics.logScreenView(url)
    router.events.on('routeChangeComplete', handler)
    return () => {
      router.events.off('routeChangeComplete', handler)
    }
  }, [analytics, router.events])
  return null
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnalyticsProvider>
      <GlobalStyle />
      <RouteTracker />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AnalyticsProvider>
  )
}

export default MyApp
