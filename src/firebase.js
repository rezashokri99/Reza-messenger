import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBB9_OVjJaULwrvXDGwEihALx24HLbyOUI",
  authDomain: "rezash-76b39.firebaseapp.com",
  projectId: "rezash-76b39",
  storageBucket: "rezash-76b39.appspot.com",
  messagingSenderId: "114678631161",
  appId: "1:114678631161:web:3f2ff797ef283e7f83f028"
}).auth();
 