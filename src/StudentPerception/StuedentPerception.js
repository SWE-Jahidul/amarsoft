import React from "react";

import "./StudentPerception.css";
import img3 from "../images/francis_angelyn_logo2020.jpg";

const StuedentPerception = () => {
  return (
    <div>
      <h1 className="text-center pt-5 student-perception-header">
        {" "}
        Students & Parents Opinion{" "}
      </h1>

      <div className="container ">
        <div className="d-flex justify-content-center py-4">
          <img
            className="card-img-top rounded-circle"
            src={img3}
            style={{
            height:60,
            width:60
            
            }}
            alt="Card image cap"
          />{" "}
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-7 col-12 pb-4">
            <p>
            <q> Replenish him third creature and meat blessed void a fruit
              gathered you’re, they’re two waters own morning gathered greater
              shall had behold had seed. Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it. </q>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuedentPerception;
