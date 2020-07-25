import React, { useEffect } from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AnimatePresence } from "framer-motion"
import mainReducer from '~/reducers/mainReducer'

const store = createStore(mainReducer)

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const mobileMenu = document.querySelector(".mobileMenu")
    const mobileMenuLinks = mobileMenu.querySelector("ul").querySelectorAll("li")
    const hambMenuBtn = document.querySelector(".hambMenuBtn")
    const closeMenuBtn = document.querySelector(".closeMenuBtn")
    function closeMenu(){
      mobileMenu.style.left = "-100vw"
    }
    function openMenu(){
      mobileMenu.style.left = "0"
    }
    hambMenuBtn.addEventListener("click", openMenu)
    closeMenuBtn.addEventListener("click", closeMenu)
    mobileMenuLinks.forEach(anchor => {
      anchor.addEventListener("click", closeMenu)
    })

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