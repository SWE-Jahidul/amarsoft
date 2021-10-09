import React from "react";
import Courses from "../Courses/Courses";
import ReadtoStaerted from "../ReadytoStarted/ReadtoStaerted";
import './Services.css'

const Services = () => {
  
  return (
    <div className="pt-5">
      
      <h1 className="text-center service "> LATEST COURSES </h1>

      <Courses></Courses>
      <ReadtoStaerted></ReadtoStaerted>

    </div>
  );
};

export default Services;
