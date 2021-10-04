import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a class="navbar-brand fw-bold" href="#">
          <img
            src={logo}
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt=""
          />
          LEARN
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contactus" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <span className='text-white '>HotLine : +088 0154752241</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
