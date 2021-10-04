import React from "react";

import "./WhyJoinUs.css";
const WhyJoinUs = (props) => {
  const { Title, Details, images } = props.whylearing;
  // console.log("Data Recived: ", props.whylearing);
  return (
    <div className="col-lg-6 col-md-6 col-12 g-3">
      {/* <i class="fas fa-chalkboard-teacher"></i> */}
      <div className="row">
        <div className="card-body ">
          <div className="text-center icon-color">
            <i className={images}></i>
          </div>

          <h5 className="card-title text-white"> {Title}</h5>
          <p className="card-text text-white"> {Details}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
