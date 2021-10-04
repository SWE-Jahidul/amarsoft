import React from "react";

import img1 from "../images/freelance-young-asian-businesswoman-casual-wear-using-laptop-working-living-room-home_7861-3022.jpg";

import img2 from "../images/top-view-person-writing-laptop-with-copy-space_23-2148708035.jpg";

import img3 from "../images/1_dLaDL-lSN0iprzmOpmM7zQ.png";

import './Header.css'
const Header = () => {
  return (
    <div>
      <h1>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img1}
                className="d-block w-100"
                style={{
                  minHeight: "10%",
                  maxHeight: 400,
                }}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 > ENJOY&IMPROVE YOUR SKILLS </h1>

                <p className="text-dark fs-5">
                  Slider Revolution is the highly acclaimed slide-based
                  displaying solution, thousands of businesses, theme developers
                  and everyday people use and love!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                style={{
                  minHeight: "10%",
                  maxHeight: 400,
                }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>ENJOY&SHARE YOUR SKILLS</h1>
                <p className="text-dark fs-5">
                  Slider Revolution is the highly acclaimed slide-based
                  displaying solution, thousands of businesses, theme developers
                  and everyday people use and love!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                style={{
                  minHeight: "10%",
                  maxHeight: 400,
                }}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1> Learn Hot React</h1>
                <p className="text-dark fs-5">
                  A JavaScript library for building user interfaces
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </h1>
    </div>
  );
};

export default Header;
