import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  // config
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// firestore を使用するための初期設定
export const db = firebase.firestore();
// storage for firebase を使用するための初期設定
export const storage = firebase.storage();

export default firebase;
