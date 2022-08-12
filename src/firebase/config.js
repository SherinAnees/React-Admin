// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "react-admin-301eb.firebaseapp.com",
  projectId: "react-admin-301eb",
  storageBucket: "react-admin-301eb.appspot.com",
  messagingSenderId: "786831353745",
  appId: "1:786831353745:web:34a99704790ca8f23f9c30",
  measurementId: "G-WWXPGMKFED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
