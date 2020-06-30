import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AnimatePresence } from "framer-motion"
import rootReducer from '~/reducers/rootReducer'

const store = createStore(rootReducer)

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Provider>
  )
}

export default MyApp