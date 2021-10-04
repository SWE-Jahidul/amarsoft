import React from "react";
import Courses from "../Courses/Courses";
import './Services.css'

const Services = () => {
  
  return (
    <div>
      <h1 className="text-center service"> LATEST COURSES </h1>
      <hr className="w-25 m-auto text-color " />

      <Courses></Courses>
    </div>
  );
};

export default Services;
