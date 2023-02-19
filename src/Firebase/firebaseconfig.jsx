// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2jYXN7vdLVJY511coQQLjf8xeAoPY1pw",
  authDomain: "rescura-web.firebaseapp.com",
  projectId: "rescura-web",
  storageBucket: "rescura-web.appspot.com",
  messagingSenderId: "163446252211",
  appId: "1:163446252211:web:78d55f3beca09aaf0f06c6",
  measurementId: "G-N2DNXY56Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const firebase = getFirestore(app)
export const auth = getAuth(app);
export const  db = getFirestore(app);
export const storage = getStorage(app);

 
