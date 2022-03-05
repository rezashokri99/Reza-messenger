import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyC7_TUSRLiRDgLwSRRPR3EoK8J7xjo9_PE",
  authDomain: "rezamessenger-eeadd.firebaseapp.com",
  projectId: "rezamessenger-eeadd",
  storageBucket: "rezamessenger-eeadd.appspot.com",
  messagingSenderId: "864290357011",
  appId: "1:864290357011:web:2b8df586605c8f1d8b64e6"
}).auth();
 