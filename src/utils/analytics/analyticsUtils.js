import { Events as GA4Events } from "./ga4Utils"

const dispatchers = [GA4Events]

const EventDispatcher = {
  logScreenView: (screen_name) => {
    dispatchers.forEach((dispatcher) => {
      dispatcher.logScreenView(screen_name)
    })
  },
  logSelectContent: (content_selected) => {
    dispatchers.forEach((dispatcher) => {
      dispatcher.logSelectContent(content_selected)
    })
  }
}

export default EventDispatcher