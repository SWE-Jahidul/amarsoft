import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";

import "./Navbar.css";
import useAuth from "../hooks/useAuth";

import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const { users, logOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <img
            src={logo}
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt=""
          />
          AMAR <span className="schol-name-color"> SCHOOL </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon ">
            <i class="fa fa-navicon" aria-hidden="true"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse fw-bold"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <HashLink to="/" className="nav-link menu-link">
                Home
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="/about" className="nav-link menu-link">
                About
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="/services" className="nav-link menu-link">
                Services
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="/contact" className="nav-link menu-link">
                Contact Us
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/blogs" className="nav-link menu-link">
                Blogs
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-row-reverse align-items-center">
          <div className="ms-3">
            {users.email || users.uid ? (
              <img
                src={users?.photoURL}
                alt={users.name}
                width="35"
                height="35"
                style ={{
                  borderRadius: '50px',

                }}
              />
            ) : (
              <div></div>    
            )}

          </div>

          <div>
            {users.uid || users.email ? (
              <HashLink to="" className="signin" onClick={logOut}>
                Log Out
              </HashLink>
            ) : (
              <HashLink to="/singin" className=" signin ">
                Sign In
              </HashLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
