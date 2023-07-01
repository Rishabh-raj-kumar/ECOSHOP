import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Navbar from "../components/Navbar"

const firebaseConfig = {
  apiKey: "AIzaSyA0aTXO2x7k8p4FuZS09vSXUhFUBW6SvT8",
  authDomain: "ecostore-229fc.firebaseapp.com",
  projectId: "ecostore-229fc",
  storageBucket: "ecostore-229fc.appspot.com",
  messagingSenderId: "496681342705",
  appId: "1:496681342705:web:56303a40363aa42bde3b50"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Sign in and sign out functions
const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
           <Navbar user={user} signIn={signIn} signOut={signOut} />
    <Component {...pageProps} user={user} signIn={signIn} signOut={signOut} />
    </>
  );
}

export default MyApp;
