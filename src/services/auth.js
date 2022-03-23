import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const CreateUser = async (userForm) => {
  const { email, password, firstname, username } = userForm;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      AddUserToFirestore(user, email, firstname, username);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const AddUserToFirestore = async (user, email, firstname, username) => {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    firstname: firstname,
    username: username,
    email: email,
    xpPoints: 0,
  });
};

export const GetUserFromFirestore = async (uid) => {
  return await getDoc(doc(db, "users", uid));
};

export const SignIn = async (userForm) => {
  const { email, password } = userForm;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = async () => {
  signOut(auth)
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error);
    });
};
