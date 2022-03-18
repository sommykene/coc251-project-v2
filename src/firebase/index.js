import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import firebaseConfig from "../config/firebaseconfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getTests = async () => {
  const notesSnapshot = await getDocs(collection(db, "tests"));
  const notesList = notesSnapshot.docs.map((doc) => doc.data());
  return notesList;
};
