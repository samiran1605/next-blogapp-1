// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "blog01-4f141.firebaseapp.com",
  projectId: "blog01-4f141",
  storageBucket: "blog01-4f141.appspot.com",
  messagingSenderId: "103387106533",
  appId: "1:103387106533:web:f920b315569dcac5d8180c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
