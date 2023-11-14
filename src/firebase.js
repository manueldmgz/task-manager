import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBJWZ9g1w2XBIuvo4AxS5kE8_--wqqF9AQ",
    authDomain: "task-manager-d4b9f.firebaseapp.com",
    projectId: "task-manager-d4b9f",
    storageBucket: "task-manager-d4b9f.appspot.com",
    messagingSenderId: "290336344254",
    appId: "1:290336344254:web:6ae8da597140463f4736ef"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
