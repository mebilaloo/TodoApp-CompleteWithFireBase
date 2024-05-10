// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUX-Vd7nSgBF8nT42fEgVPPCmy-3jHMC8",
  authDomain: "todo-list-68bc8.firebaseapp.com",
  databaseURL: "https://todo-list-68bc8-default-rtdb.firebaseio.com",
  projectId: "todo-list-68bc8",
  storageBucket: "todo-list-68bc8.appspot.com",
  messagingSenderId: "870088022610",
  appId: "1:870088022610:web:a9361b8909d663608a1d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const auth=getAuth(); 