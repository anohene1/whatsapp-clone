import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbxrmqfQP0DZ_79qXJSFtxovMcXP1l_g",
  authDomain: "whatsapp-3a555.firebaseapp.com",
  projectId: "whatsapp-3a555",
  storageBucket: "whatsapp-3a555.appspot.com",
  messagingSenderId: "67490070480",
  appId: "1:67490070480:web:04a6bae3bde1c6958043d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
