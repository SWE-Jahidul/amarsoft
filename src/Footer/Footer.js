import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <section className="container ">
        <div className="row pt-5">
          <div className="col-lg-3"  style={{
               textAlign: "left",
            }}>
            <h5 > BROWSE </h5>
            <hr
              className="w-25 "
              style={{
                height: 4,
                color: "#A12C2F",
               
              }}
            />
            <p className="">
              Educa is a well crafted WordPress theme suitable for educational,
              events and courses websites. It comes packed with all the features
              needed to present your website with style.
            </p>
          </div>
          <div className="col-lg-3 " style={{
               textAlign: "left",
            }}>
            <h5> NEXT COURSES </h5>
            <hr
              className="w-25"
              style={{
                height: 4,
                color: "#A12C2F",
              }}
            />

            <p> Flutter </p>
            <p> Dart </p>
            <p> SQL </p>
            <p> Oracle </p>
          </div>
          <div className="col-lg-3 "  style={{
               textAlign: "left",
            }}>
            <h5> ABPUT AMARSOFT </h5>
            <hr
              className="w-25 "
              style={{
                height: 4,
                color: "white",
              }}
            />

            <p> Prices </p>
            <p> Apply </p>
            <p> Tearms & Condition </p>
            <p> Register</p>
          </div>
          <div className="col-lg-3 "  style={{
               textAlign: "left",
            }}>
            <h5> WORK WITH US </h5>
            <hr
              className="w-25 " 
              style={{
                height: 4,
                color: "white",
              }}
            />

            <p> Our Team </p>
            <p> Instactor </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="pt-3 pb-0">
            <div className="d-flex justify-content-center">
              <div>
                <span className="d-flex text-dark py-3 ms-auto ">
                  <div className="social-icons-f">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-twitter"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-linkedin-in"></i>
                      </span>
                    </a>
                  </div>
                  <div className="social-icons-f ms-3 ">
                    <a href="" target="_blank">
                      <span className="icon-users rounded-circle  p-3">
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </div>
                </span>
              </div>
            </div>
            <p className="text-center text-white ">
              Copyright © 2020 AmarSoft All Rights Reserved by AmarSchool .
            </p>
          </div>
        </div>
      </section>

      {/* <div className="social-icons-f ms-3 fixed-bottom1">
            <a href="#" className="cd-top text-replace js-cd-top">
                <span className="icon-users rounded-circle  p-3"><i className="fa fa-chevron-up"></i> </span>
            </a>
        </div> */}
    </footer>
  );
};

export default Footer;
