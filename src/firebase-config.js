// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoVzmsHi_tto0wk5mdKIJcDL9BF7toCdA",
  authDomain: "samvaad-e6084.firebaseapp.com",
  projectId: "samvaad-e6084",
  storageBucket: "samvaad-e6084.firebasestorage.app",
  messagingSenderId: "707919147471",
  appId: "1:707919147471:web:8b3469ed155aa8950ae2ba",
  measurementId: "G-LL4NFV4V36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)