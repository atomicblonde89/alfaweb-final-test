// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU7FtrS1wBs_o0qr9BwlQlwv3nFVVRnmk",
  authDomain: "alfaweb-test-final.firebaseapp.com",
  projectId: "alfaweb-test-final",
  storageBucket: "alfaweb-test-final.appspot.com",
  messagingSenderId: "810660546226",
  appId: "1:810660546226:web:0d149bcdbebd868c56ebab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();