import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeauthentication from "../Firebase/firebase.initialize";
initilizeauthentication();

const auth = getAuth();
const useFirebase = () => {
  const [users, setUsers] = useState({});

  // Singin useing Google

  const signinUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        console.log(result.user);
        const logedInuser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUsers(logedInuser);
      })
      .catch((error) => {});
  };

  // Singin useing Facebook

  const FacebookSignin = () => {
    const facebookprovider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookprovider)
      .then((result) => {
        const { displayName, email, photoURL, uid } = result.user;
        console.log(result.user);

        const logeduser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };

        setUsers(logeduser);
      })

      .catch((error) => {});
  };


  
  // showing data all tabs
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
    });
    return () => unsubscribe;
  }, []);
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    users,
    signinUsingGoogle,
    FacebookSignin,
    logOut,
  };
};

export default useFirebase;
