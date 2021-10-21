import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import abtimage from "../images/about2-education.jpg";
import "./AboutusHeader.css";
const AboutusHeader = () => {

  useEffect(() =>{
    AOS.init({duration:2000});
  
  },[]);
  
  return (
    
    <div className="bg-white">
      <div className="container" data-aos="fade-up">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <img src={abtimage} class="img-fluid p-5" alt="Responsive image" />
          </div>

          <div className="col-lg-6 " >
            <div className="text-start">
              <h2>About Amrschool</h2>
              <h1 className="fw-bold my-3">
                Welcome to Our{" "}
                <span
                  style={{
                    color: "#A12C2F",
                    padding: 10,
                  }}
                >
                  {" "}
                  Online Learning Center
                </span>
                . We’re the most experienced online learning provider
              </h1>
              <div className="my-3">
                <li>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level
                </li>

                <li>
                  Disruptive innovation via workplace diversity and empowerment.
                </li>
              </div>
              <p>
                Disruptive innovation via workplace diversity and empowerment.
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test holistic world view of disruptive
                innovation.
              </p>

              <button type="button" class="readmore my-2">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusHeader;
