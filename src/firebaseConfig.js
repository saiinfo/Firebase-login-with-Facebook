// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD72c9FNiUTAWEmejwSOnwWDOjrEquZKYw",
  authDomain: "facebook-auth-815cd.firebaseapp.com",
  projectId: "facebook-auth-815cd",
  storageBucket: "facebook-auth-815cd.appspot.com",
  messagingSenderId: "942298506708",
  appId: "1:942298506708:web:462789410a9c6b046ea241",
  measurementId: "G-0ZVK3L2FNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new FacebookAuthProvider();

export {auth, provider}



