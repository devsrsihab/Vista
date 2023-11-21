// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH-4DhSkN6J5wARa1egp10pizeZTcyvyI",
  authDomain: "react-custom-register.firebaseapp.com",
  projectId: "react-custom-register",
  storageBucket: "react-custom-register.appspot.com",
  messagingSenderId: "950242191251",
  appId: "1:950242191251:web:368187558d76ce4daf6a66",
  measurementId: "G-XJSTYQSW9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth