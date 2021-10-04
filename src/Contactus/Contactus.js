import React from "react";

import './Contact.css'
const Contactus = () => {
  return (
    <div className="container pb-5">
    <h1 className="fw-bold fs-1 text-center icon-color py-3">CONTACT US
    </h1>

    <hr className="w-25 m-auto text-color " />
    <div className="container overflow-hidden">
      <div className="row mt-2 gy-5">
        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
          <div className="py-5 contactme-card text-dark text-center  animate__animated animate__fadeInLeft">
            <div className="icon-color">
              <i className="fas fa-location-arrow fa-2x"></i>
            </div>
            <div className="fw-bold p-3 text-justify">
              Dhaka-1229,Bangladesh
            </div>
          </div>
        </div>
        <div className="col-4 col-md-4 col-lg-4 col-sm-12 col-12">
          <div className="py-5 contactme-card text-dark text-center animate__animated animate__fadeInUp">
            <div className="icon-color">
              <i className="fas fa-phone-alt fa-2x"></i>
            </div>
            <div className="fw-bold p-3 text-justify ">
              01794895700 </div>
          </div>
        </div>
        <div className="col-4 col-md-4 col-lg-4 col-sm-12 col-12">
          <div className="py-5 contactme-card text-dark text-center animate__animated animate__fadeInRight ">
            <div className="icon-color">
              <i className="fas fa-envelope fa-2x"></i>
            </div>
            <div className="fw-bold py-3 text-justify">
              programmerjahid162@gmail.com </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contactus;
