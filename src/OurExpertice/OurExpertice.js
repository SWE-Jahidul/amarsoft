import React from "react";

import "./OurExpertice.css";

const OurExpertice = (props) => {
  const { Title, discripton, icon } = props.ourexpertice;
  return (
 <div className="col-lg-4 col-md-4 col-12 g-5">
      <div className="our-expertice-card">
        <div className="card-body ">
          <div className="text-center icon-color p-3">
            <i className={icon}></i>
          </div>
          <div className="pb-2 text-center">
            <h3 className="card-title">{Title}</h3>
            <p className="card-text expertice-card-details fs-6">
              {discripton}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OurExpertice;
