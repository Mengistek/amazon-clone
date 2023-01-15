// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import 'firebase/compat/firestore'
// import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCpOEp90Jp0QIvAQe25qKj6H0T4ri2IZPQ",
//   authDomain: "clone-waka.firebaseapp.com",
//   projectId: "clone-waka",
//   storageBucket: "clone-waka.appspot.com",
//   messagingSenderId: "17342146134",
//   appId: "1:17342146134:web:343349aa8c0e7b57357df7",
//   measurementId: "G-MJ6DPEWN5X",
// };

//new one
const firebaseConfig = {
  apiKey: "AIzaSyAEU3T3NNwt0pZ8BAHkBmZPXuQDGOtJTo4",
  authDomain: "clone-men.firebaseapp.com",
  projectId: "clone-men",
  storageBucket: "clone-men.appspot.com",
  messagingSenderId: "501963222354",
  appId: "1:501963222354:web:1d892b30d3b22d3716de8b",
  measurementId: "G-7618GBK682",
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

// const firebaseapp = firebase.initializeApp(firebaseConfig);
// const db = firebaseapp.firestore();
// const auth= firebase.auth();

export {db, auth };























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAEU3T3NNwt0pZ8BAHkBmZPXuQDGOtJTo4",
//   authDomain: "clone-men.firebaseapp.com",
//   projectId: "clone-men",
//   storageBucket: "clone-men.appspot.com",
//   messagingSenderId: "501963222354",
//   appId: "1:501963222354:web:1d892b30d3b22d3716de8b",
//   measurementId: "G-7618GBK682"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);