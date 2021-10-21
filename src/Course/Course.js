import React from "react";
import { Link } from "react-router-dom";

import "./Course.css";
const Course = (props) => {
  var bgColors = {
    Green: "#A12C2F;",
  };
  const { id, price, image, subject, title, details, totalstudent } =
    props.course;
  return (
    <div className="col-lg-3 col-md-3 col-12 g-3 ">
      <div class="card course-card border-0  shadoaa" 
      style={{ 
        borderRadius:'10px '

      }}
      >
        <img
          className="card-img-top"
          src={image}
          style={{
            minHeight: "30%",
            maxHeight: 200,
            borderRadius:'10px 10px 0px 0px'
          }}
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="card-title">{subject}</h5>
            </div>

            <div>
              <span className="course-price"> {price}</span>
            </div>
          </div>

          <p className="card-text">{details}</p>
        </div>
        <div class="card-footer">
          <div className="d-flex justify-content-around d-flex align-items-center">
            <div className="">{totalstudent} Student</div>

            <Link to={`/booking/${id}`}>
              <button
                type="button"
                class="my-2 px-3"
                style={{
                  backgroundColor: "#A12C2F",
                  fontWeight: 500,
                  border: 0,
                  padding: "7px",
                  color: "white",
                  borderRadius: "50px 50px",
                }}
              >
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
