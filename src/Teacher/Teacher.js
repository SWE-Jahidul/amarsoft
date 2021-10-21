import React from "react";


import img from "../images/francis_angelyn_logo2020.jpg"


const Teacher = () => {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
