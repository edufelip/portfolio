import { getApps, initializeApp } from 'firebase/app'
import 'firebase/analytics'

type FirebaseConfig = {
  apiKey?: string
  authDomain?: string
  projectId?: string
  storageBucket?: string
  messagingSenderId?: string
  appId?: string
  measurementId?: string
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env['FIREBASE_API_KEY'],
  authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['FIREBASE_PROJECT_ID'],
  storageBucket: process.env['FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['FIREBASE_APP_ID'],
  measurementId: process.env['FIREBASE_MEASUREMENT_ID'],
}

const isConfigValid = () => {
  const required: (keyof FirebaseConfig)[] = [
    'apiKey',
    'authDomain',
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId',
  ]
  return required.every((k) => Boolean(firebaseConfig[k]))
}

const initFirebaseAnalytics = () => {
  if (!isConfigValid()) {
    return false
  }
  if (!getApps().length) {
    initializeApp(firebaseConfig)
  }
  return true
}

export { isConfigValid }
export default initFirebaseAnalytics
