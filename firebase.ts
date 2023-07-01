// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0aTXO2x7k8p4FuZS09vSXUhFUBW6SvT8",
  authDomain: "ecostore-229fc.firebaseapp.com",
  projectId: "ecostore-229fc",
  storageBucket: "ecostore-229fc.appspot.com",
  messagingSenderId: "496681342705",
  appId: "1:496681342705:web:56303a40363aa42bde3b50"
};

// Initialize Firebase



// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
const firestore = getFirestore(app)
const auth = getAuth(app)

// Expose the instances we'll need
export { app, firestore, auth }