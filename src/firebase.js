import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBRy2ajVLNbJS7NFvdw7AC6BqBaDyKzmXU",
  authDomain: "chat-app-2b829.firebaseapp.com",
  projectId: "chat-app-2b829",
  storageBucket: "chat-app-2b829.appspot.com",
  messagingSenderId: "373587220835",
  appId: "1:373587220835:web:920699f6421be8542f1b56",
  databaseURL: "https://reza-messenger.vercel.app/",
}).auth();
 