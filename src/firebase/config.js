// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9taPTAxXNRh8dcDYeZ_sQ11Dsr4ekEHc",
  authDomain: "react-admin-301eb.firebaseapp.com",
  projectId: "react-admin-301eb",
  storageBucket: "react-admin-301eb.appspot.com",
  messagingSenderId: "786831353745",
  appId: "1:786831353745:web:34a99704790ca8f23f9c30",
  measurementId: "G-WWXPGMKFED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
