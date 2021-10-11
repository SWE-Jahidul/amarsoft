import React from "react";

import "./Course.css";
const Course = (props) => {
  const { price, image, subject, title, details, totalstudent } = props.course;
  return (
    <div className="col-lg-3 col-md-3 col-12 g-3">
      <div class="card course-card shadow-lg rounded-3 hovereffect">
        <img
          className="card-img-top"
          src={image}
          style={{
            minHeight: "30%",
            maxHeight: 200,
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
            <button type="button" class="gmail  my-2">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
