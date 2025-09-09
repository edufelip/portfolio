import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AnimatePresence } from "framer-motion"
import mainReducer from '~/reducers/mainReducer'
import initFirebaseAnalytics from '~/firebase'
import EventDispatcher from '~/utils/analytics/analyticsUtils'

const store = createStore(mainReducer)

function MyApp({ Component, pageProps, router }: AppProps & { router: any }) {
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobileMenu") as HTMLElement | null
    const ul = mobileMenu?.querySelector("ul")
    const mobileMenuLinks = ul ? ul.querySelectorAll("li") : null
    const hambMenuBtn = document.querySelector(".hambMenuBtn")
    const closeMenuBtn = document.querySelector(".closeMenuBtn")
    function closeMenu(){
      if (mobileMenu) {
        mobileMenu.style.left = "-100vw"
        document.body.classList.remove("stop-scrolling")
      }
    }
    function openMenu(){
      if (mobileMenu) {
        mobileMenu.style.left = "0"
        document.body.classList.add("stop-scrolling")
      }
    }
    hambMenuBtn?.addEventListener("click", openMenu)
    closeMenuBtn?.addEventListener("click", closeMenu)
    mobileMenuLinks?.forEach((anchor) => anchor.addEventListener("click", closeMenu))

  }, [])

  useEffect(() => {
    const initialized = initFirebaseAnalytics()

    const handleRouteChange = (url: string) => {
      EventDispatcher.logScreenView(url)
    }

    if (initialized) {
      router.events.on('routeChangeComplete', handleRouteChange)
      EventDispatcher.logScreenView(window.location.pathname)
    }

    return () => {
      if (initialized) {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [])
  
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Provider>
  )
}

export default MyApp
