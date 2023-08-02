// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWL8EpQEKowkm-aVYTGAbIPoy4hX-fYmM",
  authDomain: "efeceta-9a526.firebaseapp.com",
  projectId: "efeceta-9a526",
  storageBucket: "efeceta-9a526.appspot.com",
  messagingSenderId: "806530851902",
  appId: "1:806530851902:web:ae48dbf9f4b1d2f9a79d6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);