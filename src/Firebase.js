import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcNnElgpsdGTfbVzHf_7b-m4r3ktQVTWs",
  authDomain: "linkedin-clone-b8ed1.firebaseapp.com",
  projectId: "linkedin-clone-b8ed1",
  storageBucket: "linkedin-clone-b8ed1.appspot.com",
  messagingSenderId: "487562143197",
  appId: "1:487562143197:web:5aa0892d883cbc65a7c234",
};

// this line code connect everythings
const firebaseApp = firebase.initializeApp(firebaseConfig);

// gets the firestore database
const db = firebaseApp.firestore();

// use for firebase Authentication

const auth = firebase.auth();

export { db, auth };
