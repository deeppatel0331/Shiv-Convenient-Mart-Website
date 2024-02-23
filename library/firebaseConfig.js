// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEO_cTdisbNaC2aMzedD2rVrMM1rRkAo",
  authDomain: "shiv-convenient-mart-website.firebaseapp.com",
  projectId: "shiv-convenient-mart-website",
  storageBucket: "shiv-convenient-mart-website.appspot.com",
  messagingSenderId: "557960750407",
  appId: "1:557960750407:web:8eac3b85b923aa66a25862",
  measurementId: "G-8HW2EGYZ2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(app).addScope('email');
export default app;

