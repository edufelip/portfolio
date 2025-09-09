import { render } from '@testing-library/react'
import React from 'react'

import { AnalyticsProvider, useAnalytics } from '~/lib/analytics/provider'

jest.mock('~/lib/firebase', () => ({
  isConfigValid: () => false,
}))

function TestComponent() {
  const analytics = useAnalytics()
  React.useEffect(() => {
    analytics.logScreenView('/test')
    analytics.logSelectContent('cta_btn', 'try_it')
    analytics.logEvent('select_content', { content_type: 'cta_btn', item_id: 'try_it' })
  }, [analytics])
  return <div data-testid="ok" />
}

describe('AnalyticsProvider', () => {
  it('provides a working Analytics client (Noop fallback)', () => {
    const { getByTestId } = render(
      <AnalyticsProvider>
        <TestComponent />
      </AnalyticsProvider>
    )
    expect(getByTestId('ok')).toBeInTheDocument()
  })
})
