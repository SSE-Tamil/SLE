// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACJpxv58IlPsVComL7wrJE5oWn4Z-pNiM",
    authDomain: "sle-landingpage.firebaseapp.com",
    projectId: "sle-landingpage",
    storageBucket: "sle-landingpage.firebasestorage.app",
    messagingSenderId: "349672277674",
    appId: "1:349672277674:web:8069b0d88dd873d00f72d3",
    measurementId: "G-0Q0EXQSQ0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
