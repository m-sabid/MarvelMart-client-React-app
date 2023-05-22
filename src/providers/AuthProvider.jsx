import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Auth
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loginRedirectPath, setLoginRedirectPath] = useState(null);

  // Create User with Firebase
  const createUser = async (email, password, displayName, photoUrl) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName,
        photoURL: photoUrl,
      });
      setLoading(false);
      setUser(userCredential.user);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Login with Firebase
  const login = async (email, password, navigate) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        setUser(userCredential.user);
        if (loginRedirectPath) {
          navigate(loginRedirectPath);
          setLoginRedirectPath(null);
        } else {
          navigate("/desired-route"); // Replace "/desired-route" with your desired location
        }
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  // Login with Google
  const loginWithGoogle = async () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        setLoading(false);
        setUser(userCredential.user);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  // User Signed in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Logout
  const logout = async () => {
    setLoading(true);
    return await signOut(auth)
      .then(() => {
        setLoading(false);
        setUser(null);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const authInfo = {
    user,
    createUser,
    login,
    loginWithGoogle,
    logout,
    loading,
    loginRedirectPath,
    setLoginRedirectPath,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
