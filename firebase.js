import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIXrsr2Z6kNZlfCRi3Rt_1AoMYfLzkqtc",
  authDomain: "react-11-notes-app.firebaseapp.com",
  projectId: "react-11-notes-app",
  storageBucket: "react-11-notes-app.appspot.com",
  messagingSenderId: "979922085666",
  appId: "1:979922085666:web:0f73b3d877c0554f25677b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
