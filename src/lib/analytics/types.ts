export type AnalyticsEventName = 'screen_view' | 'select_content'

export type ContentType =
  | 'header_btn'
  | 'header_btn_mobile'
  | 'cta_btn'
  | 'project_btn'
  | 'bottom_nav_btn'

export interface Analytics {
  logScreenView: (screenPath: string) => void
  logSelectContent: (contentType: ContentType, itemId: string) => void
  logEvent: (name: AnalyticsEventName, params?: Record<string, unknown>) => void
}
