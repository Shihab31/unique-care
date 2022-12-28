// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOHnZykiEzfl1ougLo4yFuP7C7k2H-eNU",
  authDomain: "unique-care-37abb.firebaseapp.com",
  projectId: "unique-care-37abb",
  storageBucket: "unique-care-37abb.appspot.com",
  messagingSenderId: "424762372892",
  appId: "1:424762372892:web:2a184b2c9ffd33fe2bc0d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
