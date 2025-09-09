import { Events as GA4Events } from "./ga4Utils"

const dispatchers = [GA4Events]

type Dispatcher = {
  logScreenView: (screenName: string) => void
  logSelectContent: (contentType: string, itemId: string) => void
}

const EventDispatcher = {
  logScreenView: (screenName: string) => {
    dispatchers.forEach((dispatcher) => {
      dispatcher.logScreenView(screenName)
    })
  },
  logSelectContent: (contentType: string, itemId: string) => {
    dispatchers.forEach((dispatcher) => {
      dispatcher.logSelectContent(contentType, itemId)
    })
  }
}

export default EventDispatcher
