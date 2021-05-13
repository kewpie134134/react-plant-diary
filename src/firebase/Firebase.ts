import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp({
  // config
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

// firestore を使用するための初期設定
export const db = firebase.firestore();
// storage for firebase を使用するための初期設定
export const storage = firebase.storage();

export default firebase;
