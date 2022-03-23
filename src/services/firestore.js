import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getTests = async () => {
  const notesSnapshot = await getDocs(collection(db, "tests"));
  const notesList = notesSnapshot.docs.map((doc) => doc.data());
  return notesList;
};
