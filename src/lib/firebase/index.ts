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

type FirebaseApp = import('firebase/app').FirebaseApp
let firebaseAppPromise: Promise<FirebaseApp | null> | null = null

const ensureFirebaseApp = async (): Promise<FirebaseApp | null> => {
  if (typeof window === 'undefined') {
    return null
  }
  if (!isConfigValid()) {
    return null
  }
  if (!firebaseAppPromise) {
    firebaseAppPromise = import('firebase/app')
      .then(({ getApps, initializeApp }) => {
        const apps = getApps()
        if (apps.length) {
          return apps[0]
        }
        return initializeApp(firebaseConfig)
      })
      .catch((error) => {
        console.error('Failed to initialize Firebase app', error)
        return null
      })
  }
  return firebaseAppPromise
}

export { ensureFirebaseApp, isConfigValid }
