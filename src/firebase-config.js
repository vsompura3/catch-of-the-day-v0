import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCLOHX7klrCBN7i_d3LNu9LjIOhI01ukUg',
  authDomain: 'catch-of-the-day-63475.firebaseapp.com',
  projectId: 'catch-of-the-day-63475',
  storageBucket: 'catch-of-the-day-63475.appspot.com',
  messagingSenderId: '260889033073',
  appId: '1:260889033073:web:b167ded7aca9068e919ed0',
  measurementId: 'G-T0ET74G9W6',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { firebaseApp, db, auth };
