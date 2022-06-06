// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
//Config object for initializing
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "findyourwayin.firebaseapp.com",
  projectId: "findyourwayin",
  storageBucket: "findyourwayin.appspot.com",
  messagingSenderId: "385731420835",
  appId: "1:385731420835:web:3f7c96489554d32ef01516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// referance to the database
const db = getFirestore(app);

// referance to the authentication object
const auth = getAuth(app);

export { auth, db };
