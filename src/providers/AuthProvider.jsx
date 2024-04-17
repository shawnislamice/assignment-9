import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);
// Providers
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
// Providers
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  //   Password Authentication
  const createUser = (email, password,name,photo) => {
    setLoading(true);
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Password Authentication
  // Sign In User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Sign In User
  // Log out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Log out user
  // Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // Observer
  //   Social Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const twitterLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };
  //   Social Login
  // Update Profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
      
    });
  };
  // Update Profile
  // Load Data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // Load Data

  const values = {
    createUser,
    signInUser,
    logOut,
    user,
    googleLogin,
    gitHubLogin,
    twitterLogin,
    updateUserProfile,
    data,
    loading,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
