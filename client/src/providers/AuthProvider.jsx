import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const authInfo = {
    user,
    setUser,
    loading,
    signUp,
    logIn,
    logOut,
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("Listening to this user: ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;