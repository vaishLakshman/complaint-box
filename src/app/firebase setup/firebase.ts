import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI8whxkAaJTRgIssiYeCiydxaGPziPlBM",
  authDomain: "baazha-complaint-form.firebaseapp.com",
  projectId: "baazha-complaint-form",
  storageBucket: "baazha-complaint-form.firebasestorage.app",
  messagingSenderId: "654676018354",
  appId: "1:654676018354:web:2106fd742e2cd2e8abb5ab",
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
