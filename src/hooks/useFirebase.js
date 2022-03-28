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
  const googleProvider = new GoogleAuthProvider();
  const [users, setUsers] = useState({});
const [isloading ,setIsloading ] = useState(true);
  // Singin useing Google

  const singInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)

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

      .finally(() => setIsloading(false));
  };
  
  // showing data all tabs
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, []);
  const logOut = () => {
   setIsloading(true)
    signOut(auth).then(() => {})

    .finally(() => setIsloading(false));

  };

  return {
    users,
    singInWithGoogle,
    FacebookSignin,
    isloading,
    logOut,

  };
};

export default useFirebase;
