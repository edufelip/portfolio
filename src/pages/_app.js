import React, { useEffect } from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AnimatePresence } from "framer-motion"
import mainReducer from '~/reducers/mainReducer'
import logScreenView from '~/utils/analyticsUtils'

const store = createStore(mainReducer)

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobileMenu")
    const mobileMenuLinks = mobileMenu.querySelector("ul").querySelectorAll("li")
    const hambMenuBtn = document.querySelector(".hambMenuBtn")
    const closeMenuBtn = document.querySelector(".closeMenuBtn")
    function closeMenu(){
      mobileMenu.style.left = "-100vw"
      document.body.classList.remove("stop-scrolling")
    }
    function openMenu(){
      mobileMenu.style.left = "0"
      document.body.classList.add("stop-scrolling")
    }
    if(hambMenuBtn) {
      hambMenuBtn.addEventListener("click", openMenu)
    }
    closeMenuBtn.addEventListener("click", closeMenu)
    mobileMenuLinks.forEach(anchor => {
      anchor.addEventListener("click", closeMenu)
    })

  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', logScreenView);
    logScreenView(window.location.pathname);
    
    return () => {
      router.events.off('routeChangeComplete', logScreenView);
    };
  }, [])
  
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Provider>
  )
}

export default MyApp