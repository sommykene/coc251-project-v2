import { auth } from "@services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import { GetUserFromFirestore } from "../services/auth";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        GetUserFromFirestore(user.uid).then((doc) => {
          setCurrentUser({ ...user, ...doc.data() });
          setLoading(false);
        });
      } else {
        setCurrentUser(user);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value = { currentUser };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
