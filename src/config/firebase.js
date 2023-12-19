// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIhpc3CJFtbFpBFs5chJv5Cc46bA9vm8s",
  authDomain: "contact-app-e65b7.firebaseapp.com",
  projectId: "contact-app-e65b7",
  storageBucket: "contact-app-e65b7.appspot.com",
  messagingSenderId: "617680767642",
  appId: "1:617680767642:web:cfbae539de84fb1b406d23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);