import { getApps, initializeApp } from "firebase/app";
import 'firebase/analytics';
import Secrets from "secrets";

const firebaseConfig = {
  apiKey: Secrets.firebaseApiKey,
  authDomain: Secrets.firebaseAuthDomain,
  projectId: Secrets.firebaseProjectId,
  storageBucket: Secrets.firebaseStorageBucket,
  messagingSenderId: Secrets.firebaseMessagingSenderId,
  appId: Secrets.firebaseAppId,
  measurementId: Secrets.firebaseMeasurementId
};

const initFirebaseAnalytics = () => {
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }
}

export default initFirebaseAnalytics