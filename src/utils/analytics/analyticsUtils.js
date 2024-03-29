import { Events as GA4Events } from "./ga4Utils"

const dispatchers = [GA4Events]

const EventDispatcher = {
  logScreenView: (screenName) => {
    dispatchers.forEach((dispatcher) => {
      dispatcher.logScreenView(screenName)
    })
  },
  logSelectContent: (contentType, itemId) => {
    dispatchers.forEach((dispatcher) => {
      dispatcher.logSelectContent(contentType, itemId)
    })
  }
}

export default EventDispatcher