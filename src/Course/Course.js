import React from "react";

const Course = (props) => {
  const { image, subject, title, details } = props.course;
  return (
    <div className="col-lg-4 col-md-4 col-12 g-3">
      <div class="card">
        <img
          class="card-img-top"
          src={image}
          style={{
            minHeight: "10%",
            maxHeight: 200,
          }}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{subject}</h5>
          <p class="card-text">{title}</p>
          <p class="card-text">{details}</p>
        </div>
        {/* <div class="card-footer">
          <small class="text-muted"></small>
        </div> */}
      </div>
    </div>
  );
};

export default Course;
