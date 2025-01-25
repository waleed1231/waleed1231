
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSzfXNYs3cYRd3SUNEhMAfPCX4izKZaso",
  authDomain: "careconnect-2142d.firebaseapp.com",
  projectId: "careconnect-2142d",
  storageBucket: "careconnect-2142d.appspot.com", // Corrected the storage bucket URL
  messagingSenderId: "793237874245",
  appId: "1:793237874245:web:695b628c0853e88a84252c",
  measurementId: "G-NC4GCRQYP4" // Optional for React Native
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };