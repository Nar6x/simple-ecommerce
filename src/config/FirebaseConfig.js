import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCLZHUWM26BsGdU8trUAOp_YkTBg9YX9Lc",
  authDomain: "furniturewebartest.firebaseapp.com",
  projectId: "furniturewebartest",
  storageBucket: "furniturewebartest.appspot.com",
  messagingSenderId: "699766880049",
  appId: "1:699766880049:web:6e7df99c1acfd753df2210",
  measurementId: "G-QDMR072SGY",
};

// Initialize Firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get Firestore instance
const firestore = firebase.firestore();

export default firestore;
