import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import initilizeauthentication from "../Firebase/firebase.initialize";
import "./SignIn.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const Signin = () => {
  initilizeauthentication();

  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const hanldleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const logedInuser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(logedInuser);
      })

      .catch((error) => {});
  };
  return (
    <div className="d-flex justify-content-center ">
      <div className="sign-in shadow-lg my-5  px-5">
        <h3 className="text-center pt-5"> LOGIN TO AMARSCHOOL</h3>
        <hr className="w-75 ms-auto me-auto" />
        <div className="d-flex justify-content-around">
          <button type="button" class="fb my-2 ">
            Facebook
          </button>
          <button
            type="button"
            class="gmail  my-2 "
            onClick={hanldleGoogleSignIn}
          >
            Gmail
          </button>
        </div>

        <hr className="w-75 ms-auto me-auto" />

        <form>
          <div className="form-group pb-2">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control my-3"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="button" class="btn my-2 mt-3">
            LOG IN{" "}
          </button>

          <Link to="/register">
            <button type="button" class="reg my-2">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
