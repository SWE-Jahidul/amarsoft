import React, { useEffect } from "react";

import "./ContactHeader.css";

import img from "../../images/9f41e2d14093da80356873e2b8745950.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
const ContactHeader = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <img
        src={img}
        style={{
          minHeight: "10%",
          maxHeight: 250,
        }}
        className="d-block w-100"
        alt="..."
      />

      <div className="centered text-center text-white">
        <h1 className="fw-bold display-4 fw-bold">Contact US </h1>
        <h5>Get in touch with us</h5>
      </div>

      <div className="container px-4 my-5">
        <div className="row gx-5 gy-5">
          <div className="col" data-aos="fade-right" data-aos-delay="270">
            <div className="p-3 border-none bg-light">
              <div className="text-header bg-gray ">
                <span
                  className="span6"
                  style={{
                    textAlign: "left",
                  }}
                ></span>
                <span className="ms-5 fw-bold p-2"> LOCATION MAP </span>
              </div>
              <div
                className="text-body p-4 "
                style={{
                  color: "red",
                }}
              >
                Map Intreagrate Commig soon{" "}
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-left" data-aos-delay="270">
            <div className="p-3 border-none bg-light">
              <span
                className="span6"
                style={{
                  textAlign: "left",
                }}
              ></span>
              <span className="ms-5 fw-bold p-2">CONTACT US </span>

              <div className="text-body p-4">
                <form>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name "
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email "
                      />
                    </div>
                  </div>
                  <div className="col mt-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    class="btn btn-primary float-left"
                    style={{
                      borderRadius: 0,
                      width: 180,
                      marginTop: 10,
                      alignItems: "left",
                    }}
                  >
                    {" "}
                    Submit Message{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 ">
          <div class="container px-4">
            <div class="row gx-5 gy-3 ">
              <div class="col" data-aos="fade-right" data-aos-delay="290">
                <div
                  class="p-4 border-none bg-light address1"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <p> ADDRESS INFO </p>

                  <p> Dhaka-1229,Bangladesh </p>
                </div>
              </div>
              <div
                class="col"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-delay="320"
              >
                <div
                  class="p-4 border-none bg-light address1"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <p> EMAIL INFO</p>

                  <p> educa@university.com</p>
                </div>{" "}
              </div>
              <div class="col" data-aos="fade-left" data-aos-delay="350">
                <div
                  class="p-4 border-none bg-light address1"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <p> PHONE NUMBER</p>
                  <p> +880 0123456789 </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
