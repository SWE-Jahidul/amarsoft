import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useServices from "../hooks/useServices";
import Course from "../Course/Course";




const HomeCourse = () => {

  const [courses] = useServices();
  let history = useHistory();



  
  function handelClick() {
    history.push("./courses");
  }


  
  return (
    <div>
      <h1 className="text-center service pt-4"> LATEST COURSES </h1>

      <div className="container" data-aos="fade-left">
        <div className="row mb-3">
          {courses.slice(0, 4).map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
