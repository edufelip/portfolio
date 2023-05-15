import { getAnalytics, logEvent } from "firebase/analytics"

const Events = {
  logScreenView: (screenName) => {
    logEvent(getAnalytics(), 'screen_view', {
      firebase_screen: screenName
    })
  },
  logSelectContent: (contentType, itemId) => {
    logEvent(getAnalytics(), 'select_content', {
      content_type: contentType,
      item_id: itemId
    })
  }
}

export { Events }