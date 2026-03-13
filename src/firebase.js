// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDkMFdEAMz28s1E4OjaGJuAW6MnyOT4mqU",
  authDomain: "raviranjan-25.firebaseapp.com",
  projectId: "raviranjan-25",
  storageBucket: "raviranjan-25.firebasestorage.app",
  messagingSenderId: "472581201850",
  appId: "1:472581201850:web:d97fb01f28e86d235d4783"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
