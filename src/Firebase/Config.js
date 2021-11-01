import app from "firebase/app";
import firebase from "firebase";
//explica todo esto profundo en clase firebase min 1:39

const firebaseConfig = {
    apiKey: "AIzaSyAI7SYyTY_AxBneE9ry4JV5McIhnKUHsWs",
    authDomain: "proyectonative-86f77.firebaseapp.com",
    projectId: "proyectonative-86f77",
    storageBucket: "proyectonative-86f77.appspot.com",
    messagingSenderId: "942723085374",
    appId: "1:942723085374:web:ce13a74fbc905b0036cd6f"
  };
  
  // Initialize Firebase
   app.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();