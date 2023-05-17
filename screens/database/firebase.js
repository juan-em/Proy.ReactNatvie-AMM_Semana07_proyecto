import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi0D79Zi4IlxFEX-uDfY4pOMx0yjFkEqA",
  authDomain: "proyecto07-b6191.firebaseapp.com",
  projectId: "proyecto07-b6191",
  storageBucket: "proyecto07-b6191.appspot.com",
  messagingSenderId: "335347287094",
  appId: "1:335347287094:web:19d1b471c9b073b1338497"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const database = getFirestore()