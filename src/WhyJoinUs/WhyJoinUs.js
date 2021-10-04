import React from "react";

import './WhyJoinUs.css';
const WhyJoinUs = (props) => {
  const { Title, Details } = props.whylearing;
  return (
    <div className="col-lg-6 col-md-6 col-12 g-3">

    <div className="">
      <div className="card-body text-white">
        <h5 className="card-title"> {Title}</h5>
        <p className="card-text"> {Details}</p>
      </div>
    </div>
    </div>
  );
};

export default WhyJoinUs;
