// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPm1w8WivnToFB92zOXf8yBYbIKBVnRTo",
  authDomain: "notes-app-39546.firebaseapp.com",
  projectId: "notes-app-39546",
  storageBucket: "notes-app-39546.appspot.com",
  messagingSenderId: "566260624212",
  appId: "1:566260624212:web:a62a39616c4ab5c4f376c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")