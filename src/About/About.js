import React, { useEffect, useState } from "react";

import "./About.css";
import img from "../images/about-img.svg";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
const About = () => {
  const [whylearings, setLearning] = useState([]);

  useEffect(() => {
    fetch("./whyjoinus.json")
      .then((res) => res.json())
      .then((data) => {
        setLearning(data)
        // console.log("Fetch Data", data)
      } );

       
  }, []);

  return (
    <div>
  
      <div className="aboutus">
      <h1 className="text-center about-us pt-5"> WHY JOIN LEARN</h1>
      <hr className="w-25 m-auto text-color " />
        <div className="container">
          <div className="row pb-5">
            {whylearings.map((whylearing) => (
              <WhyJoinUs
                key={whylearing.id}
                whylearing={whylearing}
              ></WhyJoinUs>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
