// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVH8wTJIO2KbwVEAYsy4AYc-Z_qdmU7W8",
  authDomain: "musante-react-app.firebaseapp.com",
  projectId: "musante-react-app",
  storageBucket: "musante-react-app.appspot.com",
  messagingSenderId: "103821297127",
  appId: "1:103821297127:web:850a0380f92e7b80816942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);