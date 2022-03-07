import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-gMUnQKKTjvTb9ajDLCSwOyys8JHJQU0',
  authDomain: 'react-journal-fh.firebaseapp.com',
  projectId: 'react-journal-fh',
  storageBucket: 'react-journal-fh.appspot.com',
  messagingSenderId: '343059391957',
  appId: '1:343059391957:web:0256b8521b968903cf895c',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
