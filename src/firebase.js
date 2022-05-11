// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyxdQYAxkLv1IgBEvNzXnw5xnySkzuq-U",
  authDomain: "ecommerce-73d8c.firebaseapp.com",
  projectId: "ecommerce-73d8c",
  storageBucket: "ecommerce-73d8c.appspot.com",
  messagingSenderId: "138242185192",
  appId: "1:138242185192:web:8c394370f384297a84f65d",
  measurementId: "G-83PCPX1WYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db}