import { getAnalytics, logEvent } from "firebase/analytics"

const logScreenView = (screenName) => {
  logEvent(getAnalytics(), 'screen_view', {
    firebase_screen: screenName
  })
}

export default logScreenView